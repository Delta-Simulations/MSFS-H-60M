/*
 *   Copyright (c) 2021 Synaptic Simulations and its contributors

 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.

 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.

 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import React, { memo, useCallback, useEffect, useState } from 'react';
import { HeightSearchRange, ZoneSearchRange } from 'msfs-navdata';
import { useSimVar, Units } from '@instruments/Hooks/simVars';
import { PathVectorType } from '@fmgc/common';
import { Guidable } from '@fmgc/common/Guidable';
import { Leg } from '@fmgc/common/legs/Leg';
import { XFLeg } from '@fmgc/common/legs/XFLeg';
import { PathCaptureTransition } from '@fmgc/common/transitions/PathCaptureTransition';
import { Colours } from '@instruments/Components/Colours';
import { useCurrentOrTemporaryFlightPlan } from '@instruments/Hooks/flightplan';
import { useMFWDisplay } from '@instruments/Hooks/redux/mfwState';
import {
    formatSpeedAltitudeData,
    getSpeedAltDataFromLeg,
} from '@instruments/MFW/Pages/FMS/Components/Input/SpeedAltitudeInputs';
import {
    MapSymbols,
    useMapCenter,
    usePlanMode,
    useRange,
    useShowMap,
    useSymbols,
} from '@instruments/Hooks/map';
import {
    useAirportIcons,
    useAirwayGeo,
    useControlledAirspaceGeo,
    useNavaidIcons,
    useNdbIcons,
    useNearestAirportIcons,
    useSpecialAirspaceGeo,
    useWptIcons,
} from '@instruments/MFW/Pages/Map/geoIconHooks';
import AirplaneIcon from '@instruments/assets/ND_AIRPLANE.svg';
import { CanvasMap, GeometryLayer, IconLayer, useImageLoader } from '../react-msfs';
import { Geometry, ImageIcon, Path, PathIcon } from '../react-msfs/CanvasMap/types';

type NavDisplayProps = {
    x: number,
    y: number,
    fullscreen?: boolean,
}

// TODO: Turn into components with variable size
const wpt = 'M 0,-12 l 3,9 l 9,3 l -9,3 l -3,9 l -3,-9 l -9,-3 l 9,-3 z';
const circle = 'M 0,-12 a 12,12 0 1 1 0,24 a 12,12 0 1 1 0,-24 z';

const NavDisplay: React.FC<NavDisplayProps> = ({ x, y, fullscreen }) => {
    const display = useMFWDisplay();

    const [mapCenter, setMapCenter] = useMapCenter();
    const [symbols] = useSymbols();
    const [showMap] = useShowMap();
    const [planMode] = usePlanMode();
    const [range] = useRange();

    const [latitude] = useSimVar('PLANE LATITUDE', Units.Degrees, 3);
    const [longitude] = useSimVar('PLANE LONGITUDE', Units.Degrees, 3);
    const [headingTrue] = useSimVar('PLANE HEADING DEGREES TRUE', Units.Degrees, 2);

    const scaledRange = range * 2.225;

    const airplaneImage = useImageLoader(AirplaneIcon);

    const loAirwayGeo = useAirwayGeo(mapCenter, scaledRange, symbols[MapSymbols.LowAirways], HeightSearchRange.Low);
    const hiAirwayGeo = useAirwayGeo(mapCenter, scaledRange, symbols[MapSymbols.HighAirways], HeightSearchRange.High);
    const ctrldAirspaceGeo = useControlledAirspaceGeo(mapCenter, scaledRange, symbols[MapSymbols.ControlledAirspaces]);
    const specialAirspaceGeo = useSpecialAirspaceGeo(mapCenter, scaledRange, symbols[MapSymbols.SpecialUseAirspaces]);

    const iconRotation = planMode ? 0 : headingTrue;
    const loNavaidIcons = useNavaidIcons(mapCenter, scaledRange, symbols[MapSymbols.LowNavaids], iconRotation, HeightSearchRange.Low);
    const hiNavaidIcons = useNavaidIcons(mapCenter, scaledRange, symbols[MapSymbols.HighNavaids], iconRotation, HeightSearchRange.High);
    const terminalWptIcons = useWptIcons(mapCenter, scaledRange, symbols[MapSymbols.TerminalWaypoints], ZoneSearchRange.EnRoute);
    const intersectionIcons = useWptIcons(mapCenter, scaledRange, symbols[MapSymbols.Intersections], ZoneSearchRange.Terminal);
    const airportIcons = useAirportIcons(mapCenter, scaledRange, symbols[MapSymbols.Airports]);
    const nearestAirportIcons = useNearestAirportIcons(mapCenter, scaledRange, symbols[MapSymbols.NearestAirports]);
    const ndbIcons = useNdbIcons(mapCenter, scaledRange, symbols[MapSymbols.NDBs]);

    const [routeGeo, setRouteGeo] = useState<Geometry[]>([]);
    const [routeIcons, setRouteIcons] = useState<PathIcon[]>([]);

    const [flightPlan, modFlightPlan, flightPlanVersion] = useCurrentOrTemporaryFlightPlan();

    const handleMapDrag = useCallback(
        (lat: number, lon: number) => {
            if (planMode) {
                // TODO: Truncate lat/lon at higher ranges
                setMapCenter({ lat, lon });
            }
        },
        [planMode],
    );

    useEffect(() => {
        if (!planMode) {
            // TODO: Truncate lat/lon at higher ranges
            setMapCenter({ lat: latitude, lon: longitude });
        }
    }, [planMode, latitude, longitude]);

    const getIconFromPath = (path: Leg) => {
        if (path instanceof XFLeg) {
            return wpt + (path.overfly && circle);
        }
        return 'M 0,-8 a 8,8 0 1 1 0,16 a 8,8 0 1 1 0,-16 z';
    };

    useEffect(() => {
        const geo: Path[] = [];
        flightPlan?.paths.forEach((path) => {
            if (path instanceof Guidable) {
                geo.push(...path.computedPath.value.map((p) => (p.type === PathVectorType.Arc ? ({
                    start: p.startPoint,
                    center: p.centrePoint ?? undefined as any,
                    end: p.endPoint ?? undefined as any,
                    clockwise: p.sweepAngle! > 0,
                    arrow: path instanceof PathCaptureTransition,
                }) : ({
                    start: p.startPoint,
                    end: p.endPoint ?? undefined as any,
                    arrow: path instanceof PathCaptureTransition,
                }))));
            }
        });
        setRouteGeo([{
            paths: geo,
            strokeDashArray: modFlightPlan ? [7, 10] : [],
            width: 2,
            color: '#FFFFFF',
        }]);
    }, [flightPlanVersion]);

    useEffect(() => {
        const icons: PathIcon[] = [];
        flightPlan?.paths.forEach((path) => {
            if (path instanceof Leg) {
                const labels = [{
                    text: path.terminationIdentifier,
                    fontFamily: 'A22X Mono',
                    fontSize: 16,
                    fill: '#FFFFFF',
                }];
                if (symbols[MapSymbols.EtaSpeedAltitude]) {
                    labels.push({
                        text: '--:--',
                        fontFamily: 'A22X Mono',
                        fontSize: 16,
                        fill: '#FFFFFF',
                    }, {
                        text: formatSpeedAltitudeData(getSpeedAltDataFromLeg(path)),
                        fontFamily: 'A22X Mono',
                        fontSize: 16,
                        fill: Colours.Lime,
                    });
                }
                icons.push({
                    ...path.endPoint.value,
                    path: new Path2D(getIconFromPath(path)),
                    stroke: '#FFFFFF',
                    strokeWidth: 2,
                    labels,
                } as PathIcon);
            }
        });
        setRouteIcons(icons);
    }, [flightPlanVersion, symbols[MapSymbols.EtaSpeedAltitude]]);

    // TODO: Add map center displacement instead of making the map taller
    return (
        <div
            style={{
                position: 'absolute',
                zIndex: -1,
                left: x,
                top: y,
                width: fullscreen ? 1480 : 740,
                height: 1370,
                backgroundColor: '#000000',
                overflow: 'hidden',
            }}
        >
            <CanvasMap
                mapId={`MAP-${display}`}
                bingConfigFolder="/Pages/VCockpit/Instruments/a22x/"
                centerLat={mapCenter.lat}
                centerLon={mapCenter.lon}
                setCenter={handleMapDrag}
                showMap={showMap}
                range={scaledRange}
                rotation={planMode ? 0 : -headingTrue}
            >
                <GeometryLayer geometry={ctrldAirspaceGeo} show={symbols[MapSymbols.ControlledAirspaces]} />
                <GeometryLayer geometry={specialAirspaceGeo} show={symbols[MapSymbols.SpecialUseAirspaces]} />
                <GeometryLayer geometry={loAirwayGeo} show={symbols[MapSymbols.LowAirways]} />
                <GeometryLayer geometry={hiAirwayGeo} show={symbols[MapSymbols.HighAirways]} />
                <IconLayer icons={loNavaidIcons} show={symbols[MapSymbols.LowNavaids]} />
                <IconLayer icons={hiNavaidIcons} show={symbols[MapSymbols.HighNavaids]} />
                <IconLayer icons={terminalWptIcons} show={symbols[MapSymbols.TerminalWaypoints]} />
                <IconLayer icons={intersectionIcons} show={symbols[MapSymbols.Intersections]} />
                <IconLayer icons={airportIcons} show={symbols[MapSymbols.Airports]} />
                <IconLayer icons={nearestAirportIcons} show={symbols[MapSymbols.NearestAirports]} />
                <IconLayer icons={ndbIcons} show={symbols[MapSymbols.NDBs]} />
                <GeometryLayer geometry={routeGeo} show />
                <IconLayer icons={routeIcons} show />
                <IconLayer
                    show
                    // show={planMode}
                    icons={[{
                        lat: latitude,
                        lon: longitude,
                        image: airplaneImage,
                        rotation: planMode ? headingTrue : 0,
                        width: 50,
                        height: 56,
                    } as ImageIcon]}
                />
            </CanvasMap>
        </div>
    );
};

export default memo(NavDisplay);
