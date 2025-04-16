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
        const [AFCS_REF_MODE] = useSimVar('L:H60_AFCS_REF_SELECT_MODE', 'enum');
        let ref_mode_names = ["BARO", "HI", "LO", "TIME"];
        let ref_mode_widths = [105, 78, 79, 105];

        const [Baro_Setting] = useSimVar('A:KOHLSMAN SETTING HG', 'inHg');
        let Baro_Formatted = Baro_Setting.toFixed(2);
        return(

                    
    
                    <g>
    
                        {/* STATIC PARTS */}                      

                        <g visibility={isFD ? 'visible' : 'hidden'}>
                            <text x={660} y={30} fontSize={27} fill='#C3FF59' className='readouts' textAnchor="middle">FD1</text>
                        </g>

                        <rect x={293} y={741} width={ref_mode_widths[AFCS_REF_MODE]} height={21} stroke="white" strokeWidth={2.5} fill='none'/>

                        <text
				x={295}
				y={759}
				fontSize={21}
				fill="#00EE00"
				className="readouts"
				textAnchor="start"
			>
				REF-{ref_mode_names[AFCS_REF_MODE]}
			</text>

            

                    <text x={882} y={359} fontSize={20} textAnchor="end" fill="green" className='text-radAltLow'>{Baro_Formatted} IN</text>

                    </g>
        )
        
    };