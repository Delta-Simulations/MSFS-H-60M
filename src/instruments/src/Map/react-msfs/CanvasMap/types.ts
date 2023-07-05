import { Location } from 'msfs-navdata';

export type GeoPath = {
    start: Location;
    end: Location;
    arrow?: boolean;
}

export type GeoArc = {
    start: Location;
    center: Location;
    end: Location;
    clockwise: boolean;
    arrow?: boolean;
}

export type Path = GeoPath | GeoArc;

export type Geometry = {
    paths: Path[];
    strokeDashArray?: number[];
    width: number;
    color: string;
};

export type IconLabel = {
    text: string;
    fontFamily: string;
    fontSize: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
}

type Icon = {
    lat: number;
    lon: number;
    rotation?: number;
    labels?: IconLabel[];
    alignX?: CanvasTextAlign;
    alignY?: string;
}

export interface PathIcon extends Icon {
    path: Path2D;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
}

export interface ImageIcon extends Icon {
    image: HTMLImageElement;
    width: number;
    height: number;
}
