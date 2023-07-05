import React, {useEffect, useRef, useState} from 'react';
import "../style.scss";

import { SpdMarker } from './speedMarker';
import { useSimVar } from '../../Hooks/simVars';
import { CircleComponent } from './circleComponent'

export const ApReadout = () => {
        const [AP_ALT] = useSimVar('A:Autopilot altitude lock var', 'feet');
        const [AP_SPD] = useSimVar('A:Autopilot airspeed hold var','knots');
        const [AP_HDG] = useSimVar('A:Autopilot heading lock dir', 'degrees');
        const [isFD] = useSimVar('AUTOPILOT FLIGHT DIRECTOR ACTIVE', 'Bool');
        const [AP_VS] = useSimVar('A:Autopilot vertical hold var', 'ft/min');
        const [isAT] = useSimVar('AUTOPILOT THROTTLE ARM', 'Bool');
        
        const [AP_LNAV] = useSimVar('L:LNAV_ACTIVE', 'bool');
    
        return(
                <svg viewBox='0 0 1280 1280'>
                    
    
                    <g>
    
                        {/* FIXED PARTS */}
    
                        <text x={70} y={50} fontSize={43} fill='rgba(255,255,255,0)' className='apdisp' textAnchor="middle">ALT</text>
                        <g visibility={isAT ? 'visible' : 'hidden'}>
                            <text x={270} y={50} fontSize={43} fill='#C3FF59' className='apdisp' textAnchor="middle">IAS</text>
                        </g>
                        

                        <text x={1295} y={100} fontSize={35} fill='#C3FF59' className='apreadout' textAnchor="end">ALT</text>
                        <text x={1215} y={100} fontSize={35} fill='#C3FF59' className='apreadout' textAnchor="end">{AP_ALT}</text>
                        <g visibility={isFD ? 'visible' : 'hidden'}>
                            <text x={900} y={50} fontSize={43} fill='#C3FF59' className='apdisp' textAnchor="middle">FD1</text>
                        </g>

                        <g visibility={AP_LNAV ? 'visible' : 'hidden'}>
                            <text x={1030} y={50} fontSize={43} fill='#C3FF59' className='apdisp' textAnchor="middle">LNAV</text>
                        </g>
                    </g>
                </svg>
        )
        
    };