import React, {} from 'react';
import "../style.scss";

import { useSimVar } from '../../Hooks/simVars';

export const Fixed = () => {
        const [AP_ALT] = useSimVar('A:Autopilot altitude lock var', 'feet');
        const [AP_SPD] = useSimVar('A:Autopilot airspeed hold var','knots');
        const [AP_HDG] = useSimVar('A:Autopilot heading lock dir', 'degrees');
    
        const [AP_VS] = useSimVar('A:Autopilot vertical hold var', 'ft/min');
    
        const [AP_HVR] = useSimVar('L:AP_STAB', 'bool');

        return(
                <svg viewBox='0 0 1280 1280'>
                    
    
                    <g>
    
                        {/* FIXED PARTS */}
                        <text x={-165} y={1265} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">PFD</text>
    
                        <text x={10} y={1265} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">ND</text>
    
                        <text x={140} y={1265} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">EICAS</text>


    
                        <text x={1070} y={1265} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">FULL</text>

                        <text x={1240} y={1265} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">TAC</text>

                        <text x={1390} y={1265} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">JMVF</text>
                        
 
                    </g>
                </svg>
        )
        
    };