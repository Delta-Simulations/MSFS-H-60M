import React, {} from 'react';
import "../style.scss";

import { useSimVar } from '../../Hooks/simVars';

export const Powerpod = () => {

    let [RA_ALT] = useSimVar('A:PLANE ALT ABOVE GROUND MINUS CG', 'feet')
    RA_ALT= Math.floor(RA_ALT)
    

        return(

                    <g>
             
                        <rect x={1260} y={600} width="35" height={RA_ALT*3.1} stroke="none" fill="greenyellow" stroke-width="3" />
                        <g transform={`translate(1260 600)`}>
                            <path d="M5 354H95M15 321H85M15 288H85M15 255H85M15 218H85M15 185H85M15 5L85 5.00001" stroke="#05FF00" stroke-width="10" stroke-linecap="square" stroke-linejoin="bevel"/>
                        </g>
                    </g>
        )
        
    };