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

export const HorizonLine2 = (props) => {

    const [roll] = useSimVar('PLANE BANK DEGREES', 'Degrees');
    const [pitch] = useSimVar('PLANE PITCH DEGREES', 'Degrees');
    
    return(
        <g>
            <g transform={`translate(0 ${props.height}) `}>
                
                <rect x={554} y={22} width={50} height={2} className='barline'/>
                
            </g>
        </g>
    )
};
