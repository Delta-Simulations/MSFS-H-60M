import { Location } from 'msfs-navdata';
import { getDistance, getGreatCircleBearing } from '@shared/MathUtils';
import { GeoArc, Path } from '../CanvasMap/types';

/**
 * Converts a bearing to a cartesian angle in radians
 * @param bearing
 */
export function bearingToRad(bearing: number): number {
    return ((450 - bearing) % 360) * (Math.PI / 180);
}

/**
 * Converts from degrees to radians
 * @param degrees
 */
export function degToRad(degrees: number): number {
    return (degrees * Math.PI) / 180;
}

/**
 * Given canvas context, returns pixel distance between two coordinates on the canvas
 * @param loc1
 * @param loc2
 * @param range
 * @param canvasWidth
 */
export function distanceInPx(loc1: Location, loc2: Location, range: number, canvasWidth: number): number {
    const pxPerNm = (canvasWidth / 2) / range;
    return getDistance(loc1, loc2) * pxPerNm;
}

/**
 * Given canvas context, converts a LatLon coordinate to the corresponding pixel location on the canvas
 * @param latLon
 * @param mapCenter
 * @param range
 * @param canvasWidth
 */
export function latLonToPx(latLon: Location, mapCenter: Location, range: number, canvasWidth: number): [number, number] {
    const distanceToStart = distanceInPx(mapCenter, latLon, range, canvasWidth);
    const angleToStart = bearingToRad(getGreatCircleBearing(mapCenter, latLon)) || 0;

    const x = canvasWidth / 2 + distanceToStart * Math.cos(angleToStart);
    const y = canvasWidth / 2 + distanceToStart * -Math.sin(angleToStart);

    return [x, y];
}

export function isGeoArc(object: Path): object is GeoArc {
    return Object.prototype.hasOwnProperty.call(object, 'center')
        && Object.prototype.hasOwnProperty.call(object, 'clockwise');
}
