import React, { useEffect, useState } from 'react';
import { CanvasLayer, CanvasLayerController } from './CanvasLayer';
import { Geometry } from './types';
import { degToRad, distanceInPx, isGeoArc, latLonToPx } from '../utils';

type GeometryLayerProps = {
    geometry: Geometry[];
    show?: boolean;

    // Inherited from CanvasMap
    centerLat?: number;
    centerLon?: number;
    mapRange?: number;
    mapSize?: number;
}

export const GeometryLayer: React.FC<GeometryLayerProps> = ({
    geometry,
    show,
    centerLat = 0,
    centerLon = 0,
    mapRange = 10,
    mapSize = 100,
}) => {
    const [controller, setController] = useState<CanvasLayerController | null>();

    const repaintGeometry = () => {
        controller?.use((canvas, context) => {
            context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

            if (!show) return;

            geometry.forEach((geo) => {
                if (geo.paths.length < 1) return;

                const mapCenter = { lat: centerLat, lon: centerLon };
                const newPath = new Path2D();
                const arrowPath = new Path2D();

                for (const path of geo.paths) {
                    newPath.moveTo(...latLonToPx(path.start, mapCenter, mapRange, mapSize));
                    const [startX, startY] = latLonToPx(path.start, mapCenter, mapRange, mapSize);
                    const [endX, endY] = latLonToPx(path.end, mapCenter, mapRange, mapSize);

                    if (isGeoArc(path)) {
                        const [centerX, centerY] = latLonToPx(path.center, mapCenter, mapRange, mapSize);

                        const startAngle = Math.atan2(startY - centerY, startX - centerX);
                        const endAngle = Math.atan2(endY - centerY, endX - centerX);

                        newPath.arc(
                            centerX,
                            centerY,
                            distanceInPx(path.start, path.center, mapRange, mapSize),
                            startAngle,
                            endAngle,
                            !path.clockwise,
                        );
                        if (path.arrow) {
                            const [vert1, vert2, vert3] = getArrowheadVerticies(endX, endY, endAngle + (path.clockwise ? Math.PI : 0), 16, 5, 35);
                            arrowPath.moveTo(vert1.x, vert1.y);
                            arrowPath.lineTo(vert2.x, vert2.y);
                            arrowPath.lineTo(vert3.x, vert3.y);
                            arrowPath.lineTo(vert1.x, vert1.y);
                        }
                    } else {
                        newPath.lineTo(endX, endY);
                        if (path.arrow) {
                            const angle = Math.atan2(endY - startY, endX - startX) + Math.PI / 2;
                            const [vert1, vert2, vert3] = getArrowheadVerticies(endX, endY, angle, 16, 5, 35);
                            arrowPath.moveTo(vert1.x, vert1.y);
                            arrowPath.lineTo(vert2.x, vert2.y);
                            arrowPath.lineTo(vert3.x, vert3.y);
                            arrowPath.lineTo(vert1.x, vert1.y);
                        }
                    }
                }

                context.beginPath();
                context.lineWidth = geo.width;
                context.strokeStyle = geo.color;
                context.setLineDash(geo.strokeDashArray ?? []);
                context.stroke(newPath);

                context.fillStyle = geo.color;
                context.fill(arrowPath);
            });
        });
    };

    useEffect(repaintGeometry, [controller, geometry, show, centerLat, centerLon, mapRange, mapSize]);

    return <CanvasLayer onUpdatedDrawingCanvasController={setController} canvasSize={mapSize} />;
};

function getArrowheadVerticies(x: number, y: number, angle: number, length: number, offset: number, innerAngle: number) {
    const arrowheadAngle = degToRad((180 - innerAngle) / 2);
    const vert1theta = angle + Math.PI / 2;
    const vert2theta = angle - Math.PI + arrowheadAngle;
    const vert3theta = angle - arrowheadAngle;
    const vert1 = { x: x - offset * Math.cos(vert1theta), y: y - offset * Math.sin(vert1theta) };
    const vert2 = { x: vert1.x - length * Math.cos(vert2theta), y: vert1.y - length * Math.sin(vert2theta) };
    const vert3 = { x: vert1.x - length * Math.cos(vert3theta), y: vert1.y - length * Math.sin(vert3theta) };

    return [vert1, vert2, vert3];
}
