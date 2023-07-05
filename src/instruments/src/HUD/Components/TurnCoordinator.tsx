import React, {} from 'react';
import "../style.scss";

import { useSimVar } from '../../Hooks/simVars';

export const TurnCoordinator = () => {
    var [Turn_Ind] = useSimVar('A:Turn coordinator ball','position');

        return(
            <svg viewBox='0 0 1360 1350'>
                    <g>

                        <g transform={`translate(${403+Turn_Ind*30}, 100)`}>
                        <circle cx="292" cy="1004" r="38" className='linehollow'fill="none"stroke-width="10" />
                        </g>


                        <g transform={`translate(403, 1062)scale(1,0.9)`}>
                        <path d="M5.5 96H582.5M250 95V5M334 95V5" stroke="#05FF00" stroke-width="10" stroke-linecap="square" stroke-linejoin="bevel"/>
                        </g>

                    </g>
                </svg>
        )
        
    };