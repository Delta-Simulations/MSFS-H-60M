import React, { useEffect, useState } from 'react';
import { CanvasLayer, CanvasLayerController } from './CanvasLayer';
import { ImageIcon, PathIcon } from './types';
import { degToRad, latLonToPx } from '../utils';

type IconLayerProps = {
    icons: (PathIcon | ImageIcon)[];
    show?: boolean;

    // Inherited from CanvasMap
    centerLat?: number;
    centerLon?: number;
    rotation?: number;
    mapRange?: number;
    mapSize?: number;
}

function isPathIcon(icon: PathIcon | ImageIcon): icon is PathIcon {
    return 'path' in icon;
}

export const IconLayer: React.FC<IconLayerProps> = ({
    icons,
    show,
    centerLat = 0,
    centerLon = 0,
    rotation = 0,
    mapRange = 10,
    mapSize = 100,
}) => {
    const [controller, setController] = useState<CanvasLayerController | null>();

    const repaintIcons = () => {
        controller?.use((canvas, context) => {
            context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

            if (!show) return;

            // TODO: Option to stroke behind the entire layer
            // TODO: Handle text alignment
            icons.forEach((icon) => {
                const [x, y] = latLonToPx(
                    { lat: icon.lat, lon: icon.lon },
                    { lat: centerLat, lon: centerLon },
                    mapRange,
                    mapSize,
                );

                context.save();
                context.translate(x, y);
                context.rotate(degToRad((icon.rotation ?? 0) - rotation));
                if (!isPathIcon(icon)) {
                    context.translate(-icon.width / 2, -icon.height / 2);
                }

                if (isPathIcon(icon) && icon.path) {
                    if (icon.stroke) {
                        context.strokeStyle = icon.stroke ?? '';
                        context.lineWidth = icon.strokeWidth ?? 2;
                        context.lineJoin = 'round';
                        context.stroke(icon.path);
                    }
                    if (icon.fill) {
                        context.fillStyle = icon.fill ?? '';
                        context.fill(icon.path);
                    }
                } else if (!isPathIcon(icon) && icon.image && icon.image.complete) {
                    context.drawImage(icon.image, 0, 0, icon.width, icon.height);
                }

                if (icon.labels) {
                    context.textBaseline = 'middle';
                    context.textAlign = icon.alignX ?? 'left';
                    for (let i = 0; i < icon.labels.length; i++) {
                        const label = icon.labels[i];
                        context.fillStyle = label.fill ?? 'white';
                        context.font = `${label.fontSize}px ${label.fontFamily}`;
                        context.fillText(label.text, 18, i * (label.fontSize + 5));
                    }
                }

                context.restore();
            });
        });
    };

    useEffect(repaintIcons, [controller, icons, show, centerLat, centerLon, rotation, mapRange, mapSize]);

    return <CanvasLayer onUpdatedDrawingCanvasController={setController} canvasSize={mapSize} />;
};
