/*
 *   Copyright (c) 2021 Synaptic Simulations and its contributors
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import { useEffect, useState } from 'react';
import { Airport, HeightSearchRange, Location, Runway, VhfNavaidType, ZoneSearchRange } from 'msfs-navdata';
import {
    useNearbyAirports,
    useNearbyAirways,
    useNearbyControlledAirspaces,
    useNearbyNavaids,
    useNearbyNDBs,
    useNearbySpecialAirspaces,
    useNearbyWaypoints,
} from '@instruments/MFW/Pages/Map/nearbyHooks';
import { Geometry, Path, PathIcon } from '@instruments/MFW/Pages/Map/react-msfs/CanvasMap/types';
import { useNavDatabase } from '@instruments/Hooks/flightplan';
import { Colours } from '@instruments/Components/Colours';
import { ControlledAirspace, RestrictiveAirspace } from 'msfs-navdata/dist/shared';
import { computeDestinationPoint } from '@shared/MathUtils';

export function pathsFromAirspaceData(airspace: ControlledAirspace | RestrictiveAirspace) {
    const paths: Path[] = [];
    const pathStartingPoints = airspace.boundaryPaths.map((path) => {
        if (path.arc && path.arc.bearing) {
            return computeDestinationPoint(path.arc.origin, path.arc.distance, path.arc.bearing);
        }
        return path.location;
    });
    for (let i = 0; i < pathStartingPoints.length; i++) {
        if (airspace.boundaryPaths[i].pathType === 3 || airspace.boundaryPaths[i].pathType === 4) {
            paths.push({
                start: pathStartingPoints[i] ?? { lat: 0, lon: 0 },
                center: airspace.boundaryPaths[i].arc?.origin ?? { lat: 0, lon: 0 },
                end: pathStartingPoints[(i + 1) % pathStartingPoints.length] ?? { lat: 0, lon: 0 },
                clockwise: airspace.boundaryPaths[i].pathType === 4,
            });
        } else {
            paths.push({
                start: pathStartingPoints[i] ?? { lat: 0, lon: 0 },
                end: pathStartingPoints[(i + 1) % pathStartingPoints.length] ?? { lat: 0, lon: 0 },
            });
        }
    }
    return paths;
}

export function useAirwayGeo(location: Location, range: number, active = true, searchRange: HeightSearchRange) {
    const [airwayGeo, setAirwayGeo] = useState<Geometry[]>([]);
    const airways = useNearbyAirways(location, range, active, searchRange);

    useEffect(() => {
        const geo = airways.map((airway) => {
            const paths: Path[] = [];
            airway.fixes.forEach((fix, i) => {
                if (i === 0) return;
                paths.push({
                    start: airway.fixes[i - 1].location,
                    end: fix.location,
                });
            });
            return {
                paths,
                width: 2,
                color: 'white',
            };
        });
        setAirwayGeo(geo);
    }, [airways]);

    return airwayGeo;
}

export function useControlledAirspaceGeo(location: Location, range: number, active = true) {
    const [airspaceGeo, setAirspaceGeo] = useState<Geometry[]>([]);
    const airspaces = useNearbyControlledAirspaces(location, range, active);

    useEffect(() => {
        const geo = airspaces.map((airspace) => ({
            paths: pathsFromAirspaceData(airspace),
            width: 2,
            color: '#0F5FBE',
        }));
        setAirspaceGeo(geo);
    }, [airspaces]);

    return airspaceGeo;
}

export function useSpecialAirspaceGeo(location: Location, range: number, active = true) {
    const [airspaceGeo, setAirspaceGeo] = useState<Geometry[]>([]);
    const airspaces = useNearbySpecialAirspaces(location, range, active);

    useEffect(() => {
        const geo = airspaces.map((airspace) => ({
            paths: pathsFromAirspaceData(airspace),
            strokeDashArray: airspace.type === 4 ? [] : [7, 10],
            width: 2,
            color: airspace.type === 4 ? Colours.Lime : Colours.Magenta,
        }));
        setAirspaceGeo(geo);
    }, [airspaces]);

    return airspaceGeo;
}

// TODO: Turn into components with variable size
const rect = 'M -9,-8 l 18,0 l 0,16 l -18,0 z';
const hex = 'M -4.5,-8 l 9,0 l 4.5,8 l -4.5,8 l -9,0 l -4.5,-8 z';
const tac = 'M -4.5,-8 l 9,0 l 4,-2.5 l 4.5,8 l -4,2.5 l -4.5,8 l 0,4.5 l -9,0 l 0,-4.5 l -4.5,-8 l -4,-2.5 l 4.5,-8 l 4,2.5 z';
const smallCircle = 'M 0,-6 a 6,6 0 1 1 0,12 a 6,6 0 1 1 0,-12';
const largeCircle = 'M 0,-10 a 10,10 0 1 1 0,20 a 10,10 0 1 1 0,-20';

export function useNavaidIcons(location: Location, range: number, active = true, rotation: number, searchRange: HeightSearchRange) {
    const [navaidIcons, setNavaidIcons] = useState<PathIcon[]>([]);
    const navaids = useNearbyNavaids(location, range, active, searchRange);

    const getNavaidPath = (navaidClass: VhfNavaidType) => {
        switch (navaidClass) {
        case VhfNavaidType.Vor:
            return hex;
        case VhfNavaidType.VorDme:
            return hex + rect;
        case VhfNavaidType.IlsDme:
        case VhfNavaidType.Dme:
            return rect;
        case VhfNavaidType.IlsTacan:
        case VhfNavaidType.Tacan:
            return tac;
        case VhfNavaidType.Vortac:
            return tac + hex;
        default:
            return '';
        }
    };

    useEffect(() => setNavaidIcons(
        navaids
            .filter((navaid) => navaid.type !== VhfNavaidType.IlsDme && navaid.type !== VhfNavaidType.IlsTacan)
            .map((navaid) => ({
                ...navaid.vorLocation,
                path: new Path2D(getNavaidPath(navaid.type)),
                stroke: '#00BFE6',
                strokeWidth: 2,
                labels: [{
                    text: navaid.ident,
                    fontFamily: 'A22X Mono',
                    fontSize: 16,
                    fill: '#00BFE6',
                }],
            } as PathIcon)),
    ), [navaids]);

    return navaidIcons;
}

export function useWptIcons(location: Location, range: number, active = true, zoneSearch: ZoneSearchRange) {
    const [wptIcons, setWptIcons] = useState<PathIcon[]>([]);
    const wpts = useNearbyWaypoints(location, range, active, zoneSearch);

    useEffect(() => setWptIcons(
        wpts
            .map((wpt) => ({
                ...wpt.location,
                path: new Path2D('M 0,-10 l 10,20 l -20,0 z'),
                stroke: '#00BFE6',
                strokeWidth: 2,
                labels: [{
                    text: wpt.ident,
                    fontFamily: 'A22X Mono',
                    fontSize: 16,
                    fill: '#00BFE6',
                }],
            } as PathIcon)),
    ), [wpts]);

    return wptIcons;
}

export function useAirportIcons(location: Location, range: number, active = true) {
    const [airportIcons, setAirportIcons] = useState<PathIcon[]>([]);
    const airports = useNearbyAirports(location, range, active);

    useEffect(() => setAirportIcons(
        airports
            .map((airport: Airport) => ({
                ...airport.location,
                path: new Path2D(largeCircle),
                stroke: '#00BFE6',
                strokeWidth: 2,
                labels: [{
                    text: airport.ident,
                    fontFamily: 'A22X Mono',
                    fontSize: 16,
                    fill: '#00BFE6',
                }],
            } as PathIcon)),
    ), [airports]);

    return airportIcons;
}

export function useNearestAirportIcons(location: Location, range: number, active = true) {
    const [airportIcons, setAirportIcons] = useState<PathIcon[]>([]);
    const airports = useNearbyAirports(location, range, active);
    const database = useNavDatabase();

    // TODO: More accurate minimum runway length based on elevation and gross weight (see ODM page 6-10)
    const filterAirports = ((airport: Airport) => database.getRunways(airport.ident).then((runways: Runway[]) => runways.some((runway) => runway.length >= 1701)));

    useEffect(() => setAirportIcons(
        airports
            .filter(filterAirports)
            .slice(0, 5)
            .map((airport: Airport) => ({
                ...airport.location,
                path: new Path2D('M 0,-10 a 10,10 0 1 1 0,20 a 10,10 0 1 1 0,-20'),
                stroke: '#E029EB',
                strokeWidth: 2,
                labels: [{
                    text: airport.ident,
                    fontFamily: 'A22X Mono',
                    fontSize: 16,
                    fill: Colours.Magenta,
                }],
            } as PathIcon)),
    ), [airports]);

    return airportIcons;
}

export function useNdbIcons(location: Location, range: number, active = true) {
    const [ndbIcons, setNdbIcons] = useState<PathIcon[]>([]);
    const ndbs = useNearbyNDBs(location, range, active);

    useEffect(() => setNdbIcons(
        ndbs
            .map((ndb) => ({
                ...ndb.location,
                path: new Path2D(largeCircle + smallCircle),
                stroke: '#00BFE6',
                strokeWidth: 2,
                labels: [{
                    text: ndb.ident,
                    fontFamily: 'A22X Mono',
                    fontSize: 16,
                    fill: '#00BFE6',
                }],
            } as PathIcon)),
    ), [ndbs]);

    return ndbIcons;
}
