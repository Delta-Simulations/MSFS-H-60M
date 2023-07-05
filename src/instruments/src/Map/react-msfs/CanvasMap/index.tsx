import React, { useEffect, useRef, useState } from 'react';
import { BingMap } from './BingMap';
import { radToDeg } from '@instruments/utils/mathUtils';
import { computeDestinationPoint } from '@shared/MathUtils';

type CanvasMapProps = {
    bingConfigFolder: string;
    mapId: string;
    centerLat: number;
    centerLon: number;
    setCenter?: (lat: number, lon: number) => void;
    showMap?: boolean;
    range?: number;
    heading?: number;
    rotation?: number;
    children?: React.ReactNode;
};

// TODO: Add a displaced map center
export const CanvasMap: React.FC<CanvasMapProps> = ({
    bingConfigFolder,
    mapId,
    centerLat,
    centerLon,
    setCenter,
    showMap = true,
    range = 80,
    rotation = 0,
    children,
}) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);

    const [mapSize, setMapSize] = useState(100);
    const [mapRange, setMapRange] = useState(range);

    const [mouseDown, setMouseDown] = useState(false);
    const [mouseHovering, setMouseHovering] = useState(false);
    const [prevPosition, setPrevPosition] = useState<any | null>(null);

    const handleMouseDown = (e: MouseEvent) => {
        if (e.button === 0) {
            setMouseDown(true);
            setPrevPosition({ x: e.clientX, y: e.clientY });
        }
    };
    const handleMouseUp = (e: MouseEvent) => {
        if (e.button === 0) {
            setMouseDown(false);
            setPrevPosition(null);
        }
    };
    const handleMouseMove = (e: MouseEvent) => {
        if (mapContainerRef.current) {
            const rect = mapContainerRef.current.getBoundingClientRect();
            setMouseHovering(
                e.clientX >= rect.x
                && e.clientY >= rect.y
                && e.clientX <= rect.x + rect.width
                && e.clientY <= rect.y + rect.height,
            );
        }
        if (mouseDown && mouseHovering && prevPosition) {
            const dx = e.clientX - prevPosition.x;
            const dy = e.clientY - prevPosition.y;
            const distance = Math.hypot(dx, dy) / ((mapSize / 2) / mapRange);
            const bearing = radToDeg(Math.atan2(dy, dx)) - 90;

            if (distance && bearing) {
                const newPosition = computeDestinationPoint({ lat: centerLat, lon: centerLon }, distance, bearing);
                setCenter?.(newPosition.lat, newPosition.lon);
                setPrevPosition({ x: e.clientX, y: e.clientY });
            }
        }
    };

    useEffect(() => {
        if (setCenter) {
            document.addEventListener('mousedown', handleMouseDown);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('mousemove', handleMouseMove);
            return () => {
                document.removeEventListener('mousedown', handleMouseDown);
                document.removeEventListener('mouseup', handleMouseUp);
                document.removeEventListener('mousemove', handleMouseMove);
            };
        }
        return () => {};
    });

    useEffect(() => {
        if (mapContainerRef.current) {
            const scaleFactor = mapSize / mapContainerRef.current.clientHeight;
            setMapRange(range * scaleFactor);
        }
    }, [mapSize, range]);

    useEffect(() => {
        if (mapContainerRef.current) {
            const newSize = mapContainerRef.current.clientHeight * Math.sqrt(2);
            setMapSize(newSize);
        }
    }, [mapContainerRef.current]);

    return (
        <div ref={mapContainerRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div
                style={{
                    transform: `rotateZ(${rotation}deg) translateX(-50%) translateY(-50%)`,
                    transformOrigin: '0 0',
                    width: mapSize,
                    height: mapSize,
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                }}
            >
                {React.Children.map(children, (child: any) => (
                    React.cloneElement(child, { centerLat, centerLon, rotation, mapRange, mapSize })
                ))}
                {showMap && <BingMap configFolder={bingConfigFolder} mapId={mapId} centerLla={{ lat: centerLat, long: centerLon }} range={mapRange} />}
            </div>
        </div>
    );
};

export * from './BingMap';
export * from './CanvasLayer';
export * from './GeometryLayer';
export * from './IconLayer';
