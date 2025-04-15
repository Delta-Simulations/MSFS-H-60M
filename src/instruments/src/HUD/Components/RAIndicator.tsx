import React, {} from 'react';
import "../style.scss";

import { useSimVar } from '../../Hooks/simVars';

export const RAIndicator = () => {

    let [RA_ALT] = useSimVar('A:PLANE ALT ABOVE GROUND MINUS CG', 'feet')
    RA_ALT= Math.floor(RA_ALT*10) / 10
    
    if (RA_ALT > 250) {
        RA_ALT = 250
    } else {
        RA_ALT = RA_ALT
    }

    let [vs_raw] = useSimVar('VERTICAL SPEED', 'feet per minute');
    vs_raw= Math.floor(vs_raw*10) / -10 + 1

    if ( vs_raw>=2000) {
        vs_raw = 2000

    } else if(vs_raw<=-2000){
        vs_raw = -2000

    }else{
        vs_raw = vs_raw
    }


        return(

                    <g>
             
                        <g transform={`translate(1260 600)`}>
                            <path d="M5 354H95M15 321H85M15 288H85M15 255H85M15 218H85M15 185H85M15 5L85 5.00001" stroke="#05FF00" stroke-width="10" stroke-linecap="square" stroke-linejoin="bevel"/>
                        </g>
                        <g transform={`translate(1370 -94)`}>
                            <g transform="rotate(180,-67.5,867)" >
                                    <rect x={-90} y={690} width="35" height={RA_ALT*1.48} stroke="none"  fill="#05FF00" />
                            </g>
                        </g>


                        <line x1={1260} x2={1345} y1={265}  y2={265} className='linehollow' stroke-width="10"/>
                        <line x1={1260} x2={1345} y1={265+170}  y2={265+170} className='linehollow' stroke-width="10"/>
                        {/* Arrow RA */}

                        <g transform={`translate(1200 ${401+vs_raw/11.7})`}>
                            <path d="M7 7L65 34.5L7 61.5" stroke="#05FF00" fill="none" stroke-width="10" stroke-linecap="square"/>
                        </g>

                    </g>
        )
        
    };