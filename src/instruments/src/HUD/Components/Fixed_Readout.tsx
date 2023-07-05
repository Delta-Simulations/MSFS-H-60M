import React, {} from 'react';
import "../style.scss";
import { TurnCoordinator } from './TurnCoordinator';
import { useSimVar } from '../../Hooks/simVars';

export const Fixed_Readout = () => {

    const [WP_BEARING] = useSimVar('A:GPS WP BEARING','degrees');
    const [AC_Heading] = useSimVar('A:Plane heading degrees gyro','degrees');
    const [WP_DIST] = useSimVar('A:GPS WP DISTANCE','KiloMeters');
    const [WP_TIME] = useSimVar('A:GPS WP ETE','Seconds');
    var [AC_GS] = useSimVar('A:GROUND VELOCITY', 'knots')
    var [AC_IS] = useSimVar('AIRSPEED INDICATED', 'knots');
    AC_IS =Math.floor(AC_IS)
    AC_GS = Math.floor(AC_GS)

    let WPBearing: number = Math.abs(WP_BEARING-AC_Heading);
    WPBearing = Math.floor(WPBearing)

    let WPDist: number = Math.floor(WP_DIST*10)/10;

    const [DCLT_HUD] = useSimVar('L:DCLT_HUD', 'enum');

        return(
            <svg viewBox='0 0 1360 1350'>
                    <g>

                        <text x={1240} y={1085} fontSize={52} fill='#00EE00' letter-spacing="-10" className='text' textAnchor="end">{WPBearing}</text>

                        <text x={1240} y={1155} fontSize={52} fill='#00EE00' letter-spacing="-20" className='text' textAnchor="end">{WPDist}</text>

                        <text x={205} y={165} fontSize={52} fill='#00EE00' letter-spacing="-20" className='text' textAnchor="end">{AC_GS}G</text>
                        <text x={205} y={80} fontSize={52} fill='#00EE00' letter-spacing="-20" className='text' textAnchor="end">{AC_IS}A</text>


                        


                    </g>
                </svg>
        )
        
    };