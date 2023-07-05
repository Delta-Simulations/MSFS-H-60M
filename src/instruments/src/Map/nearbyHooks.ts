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
import { Airport, Airway, HeightSearchRange, Location, NdbNavaid, VhfNavaid, Waypoint, ZoneSearchRange } from 'msfs-navdata';
import { useNavDatabase } from '@instruments/Hooks/flightplan';
import { ControlledAirspace, RestrictiveAirspace } from 'msfs-navdata/dist/shared';

function containsAll(array1: any[], array2: any[]) {
    return array1.every((a) => array2.some((b) => b.ident === a.ident));
}

function containsAllAirways(array1: any[], array2: any[]) {
    return array1.every((a) => array2.some((b) => b.name === a.name));
}

function useTimeout(callback: () => void, delay: number, dependencies: any[]) {
    const [currentTimeout, setCurrentTimeout] = useState<any>();

    useEffect(() => {
        clearTimeout(currentTimeout);
        const timeout = setTimeout(callback, delay);
        setCurrentTimeout(timeout);
        return () => clearTimeout(timeout);
    }, dependencies);
}

export function useNearbyAirports(location: Location, range: number, active = true): Airport[] {
    const [nearbyAirports, setNearbyAirports] = useState<Airport[]>([]);
    const database = useNavDatabase();

    useTimeout(() => {
        if (active) {
            database.getNearbyAirports(location, range).then((airports: Airport[]) => {
                if (!containsAll(airports, nearbyAirports)) setNearbyAirports(airports);
            });
        }
    }, 20, [location, range, active]);

    return nearbyAirports;
}

export function useNearbyNavaids(location: Location, range: number, active = true, searchRange: HeightSearchRange): VhfNavaid[] {
    const [nearbyNavaids, setNearbyNavaids] = useState<VhfNavaid[]>([]);
    const database = useNavDatabase();

    useTimeout(() => {
        if (active) {
            database.getNearbyNavaids(location, range, searchRange).then((navaids: VhfNavaid[]) => {
                if (!containsAll(navaids, nearbyNavaids)) setNearbyNavaids(navaids);
            });
        }
    }, 20, [location, range, active, searchRange]);

    return nearbyNavaids;
}

export function useNearbyNDBs(location: Location, range: number, active = true): NdbNavaid[] {
    const [nearbyNDBs, setNearbyNDBs] = useState<NdbNavaid[]>([]);
    const database = useNavDatabase();

    useTimeout(() => {
        if (active) {
            database.getNearbyNDBs(location, range).then((ndbs: NdbNavaid[]) => {
                if (!containsAll(ndbs, nearbyNDBs)) setNearbyNDBs(ndbs);
            });
        }
    }, 20, [location, range, active]);

    return nearbyNDBs;
}

export function useNearbyWaypoints(location: Location, range: number, active = true, searchRange: ZoneSearchRange): Waypoint[] {
    const [nearbyWaypoints, setNearbyWaypoints] = useState<Waypoint[]>([]);
    const database = useNavDatabase();

    useTimeout(() => {
        if (active) {
            database.getWaypointsInRange(location, range, searchRange).then((wpts: Waypoint[]) => {
                if (!containsAll(wpts, nearbyWaypoints)) setNearbyWaypoints(wpts);
            });
        }
    }, 20, [location, range, active]);

    return nearbyWaypoints;
}

export function useNearbyAirways(location: Location, range: number, active = true, searchRange: HeightSearchRange): Airway[] {
    const [nearbyAirways, setNearbyAirways] = useState<Airway[]>([]);
    const database = useNavDatabase();

    useTimeout(() => {
        if (active) {
            database.getNearbyAirways(location, range, searchRange).then((airways: Airway[]) => {
                if (!containsAll(airways, nearbyAirways)) setNearbyAirways(airways);
            });
        }
    }, 20, [location, range, active, searchRange]);

    return nearbyAirways;
}

export function useNearbyControlledAirspaces(location: Location, range: number, active = true): ControlledAirspace[] {
    const [nearbyAirspaces, setNearbyAirspaces] = useState<ControlledAirspace[]>([]);
    const database = useNavDatabase();

    useTimeout(() => {
        if (active) {
            database.getControlledAirspacesInRange(location, range).then((airspaces: ControlledAirspace[]) => {
                if (!containsAllAirways(airspaces, nearbyAirspaces)) setNearbyAirspaces(airspaces);
            });
        }
    }, 20, [location, range, active]);

    return nearbyAirspaces;
}

export function useNearbySpecialAirspaces(location: Location, range: number, active = true): RestrictiveAirspace[] {
    const [nearbyAirspaces, setNearbyAirspaces] = useState<RestrictiveAirspace[]>([]);
    const database = useNavDatabase();

    useTimeout(() => {
        if (active) {
            database.getRestrictiveAirspacesInRange(location, range).then((airspaces: RestrictiveAirspace[]) => {
                if (!containsAllAirways(airspaces, nearbyAirspaces)) setNearbyAirspaces(airspaces);
            });
        }
    }, 20, [location, range, active]);

    return nearbyAirspaces;
}
