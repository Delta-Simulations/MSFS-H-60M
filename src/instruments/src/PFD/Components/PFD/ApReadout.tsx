import React, {useEffect, useRef, useState} from 'react';
import "../../style.scss";


import { useSimVar } from '../../../Hooks/simVars';


export const ApReadout = () => {
        const [AP_ALT] = useSimVar('A:Autopilot altitude lock var', 'feet');
        const [AP_SPD] = useSimVar('A:Autopilot airspeed hold var','knots');
        const [AP_HDG] = useSimVar('A:Autopilot heading lock dir', 'degrees');
        const [isFD] = useSimVar('AUTOPILOT FLIGHT DIRECTOR ACTIVE', 'Bool');
        const [AP_VS] = useSimVar('A:Autopilot vertical hold var', 'ft/min');
        const [isAT] = useSimVar('AUTOPILOT THROTTLE ARM', 'Bool');
        
        const [AP_LNAV] = useSimVar('L:LNAV_ACTIVE', 'bool');
        const [Baro_Setting] = useSimVar('A:KOHLSMAN SETTING HG', 'inHg');
        let Baro_Formatted = Baro_Setting.toFixed(2);
        return(

                    
    
                    <g>
    
                        {/* STATIC PARTS */}
    
                       


                        <g visibility={isFD ? 'visible' : 'hidden'}>
                            <text x={660} y={30} fontSize={27} fill='#C3FF59' className='readouts' textAnchor="middle">FD1</text>
                        </g>



                    <text x={882} y={359} fontSize={20} textAnchor="end" fill="green" className='text-radAltLow'>{Baro_Formatted} IN</text>

                    </g>
        )
        
    };