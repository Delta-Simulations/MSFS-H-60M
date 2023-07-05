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
import React from 'react';
import { useSimVar, Units } from '@instruments/Hooks/simVars';
import { usePlanMode, useRange } from '@instruments/Hooks/map';
import { ContentText, LabelText } from '@instruments/Components/Text';
import { HeadingMarkers, InnerNavRing, OuterNavRing } from '@instruments/Components/NavDisplay/Rings';
import {
    AutopilotHeadingBug,
    AutopilotHeadingIndicator,
    HeadingIndicator,
    NavInfo,
    NavMessageArea,
    RangeIndicator,
    WindInfo,
} from '@instruments/Components/NavDisplay/Indicators';
import AirplaneIcon from '@instruments/assets/ND_AIRPLANE.svg';

type OverlayProps = {
    fullscreen?: boolean;
}

const Overlay: React.FC<OverlayProps> = ({ fullscreen = false }) => {
    const [planMode] = usePlanMode();
    const [range] = useRange();

    const [heading] = useSimVar('PLANE HEADING DEGREES TRUE', Units.Degrees, 2);
    const [autopilotHeading] = useSimVar('AUTOPILOT HEADING LOCK DIR', Units.Degrees);
    const [onGround] = useSimVar('SIM ON GROUND', Units.Boolean);

    const cx = fullscreen ? 740 : 370;
    const screenWidth = fullscreen ? 1480 : 740;

    return (
        <g strokeLinecap="round">
            <clipPath id="outer-ring-mask">
                <rect x={cx - 342} y={315} width={684} height={218} />
            </clipPath>
            <g visibility={planMode ? 'hidden' : 'visible'}>
                {/* TODO: Tie showTfc to a simVar */}
                <InnerNavRing cx={cx} cy={685} r={154} showTfc={!planMode} range={range} />
                <g clipPath="url(#outer-ring-mask)">
                    <g transform={`rotate(${-heading} ${cx} 685)`}>
                        <OuterNavRing cx={cx} cy={685} r={309} />
                    </g>
                    <HeadingMarkers cx={cx} cy={685} r={342} heading={heading} />
                </g>
                <AutopilotHeadingBug
                    cx={cx}
                    cy={685}
                    r={310}
                    heading={heading}
                    autopilotHeading={autopilotHeading}
                    showBug={Math.abs(autopilotHeading - heading) < 60}
                />
                <AutopilotHeadingIndicator x={cx - 187} y={321} heading={autopilotHeading} />
                <HeadingIndicator x={cx} y={369} heading={Math.round(heading)} />
                <image href={AirplaneIcon} x={cx - 25} y={685 - 28} width={50} height={56} />
            </g>
            {!planMode && !onGround && <WindInfo x={cx - 287} y={356} heading={Math.round(heading)} />}
            <g fill="none" strokeLinejoin="round" visibility={planMode ? 'visible' : 'hidden'}>
                <g stroke="#000000" strokeWidth={4}>
                    <circle cx={cx} cy={685} r={309} />
                    <path d={`M ${cx},376 l 0,-13 l -5,5 m 5,-5 l 5,5`} />
                </g>
                <g stroke="#FFFFFF" strokeWidth={2}>
                    <circle cx={cx} cy={685} r={309} />
                    <path d={`M ${cx},376 l 0,-13 l -5,5 m 5,-5 l 5,5`} />
                </g>
                <ContentText x={cx} y={361} stroke="#000000" strokeWidth={2} textAnchor="middle">N</ContentText>
            </g>
            <RangeIndicator x={cx - 304} y={533} range={range} />
            <NavMessageArea x={0} y={916} />
            <NavInfo x={screenWidth - 138} y={959} />
            {/* Other Info */}
            {/* TODO: Tie visibility to simVar */}
            <rect x={0} y={801} width={168} height={33} fill="#000000" />
            <LabelText x={10} y={826} fill="#FFFFFF">NO FLT PLAN</LabelText>
            <rect x={0} y={860} width={168} height={30} fill="#000000" />
            <ContentText x={10} y={884}>TERR</ContentText>
        </g>
    );
};

export default Overlay;
