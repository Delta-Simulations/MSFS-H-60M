/**
 *
 * Copyright (C) 2021 Pinpoint Simulations and its contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import { useSimVar } from '../../Hooks/simVars';

export const SpdMarker = (props) => {
    const [speed] = useSimVar('AIRSPEED INDICATED', 'knots');
    let speed2 = 0
    if (speed < 40) {
        speed2 = 0
    } else {
        speed2 = speed-40
    }
    return(
        <g transform={`translate(0 ${-speed2*4.5}) `}>
            <rect x={139} y={props.height} width={25} height={4} fill='#2CE832'/>
            <rect x={150} y={props.height-(-47.5)} width={12} height={4} fill='#2CE832'/>
            <text x={128} y={(props.height-(-19))} fontSize={41} fill="#2CE832" textAnchor="end">
                {props.speedIndicate}
            </text>
        </g>
    )
};