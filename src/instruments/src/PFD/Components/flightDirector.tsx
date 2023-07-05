import React from 'react';
import { useSimVar } from '../../Hooks/simVars';
import "../style.scss";

export const FlightDirector = () => {
    const [FD_pitch] = useSimVar('AUTOPILOT FLIGHT DIRECTOR PITCH', 'degrees');
    const [FD_bank] = useSimVar('AUTOPILOT FLIGHT DIRECTOR BANK', 'degrees');
    const [pitch] = useSimVar("PLANE PITCH DEGREES", "degrees");
    const [bank] = useSimVar("PLANE BANK DEGREES", "degrees");
    const [isFD] = useSimVar('AUTOPILOT FLIGHT DIRECTOR ACTIVE', 'Bool');
    const [altitude] = useSimVar('INDICATED ALTITUDE', 'feet')
    const [gs] = useSimVar('GROUND VELOCITY', 'knots');
    const [vs] = useSimVar('VERTICAL SPEED', 'Feet per second');

    var altitude1 = Math.round(altitude)
    var gs1 = Math.round(gs)
    var vs1 = Math.round(vs)

    const degreesToPixels = (angle: number): number => (angle < 0 ? Math.max(angle * 8, -12 * 8) : Math.min(angle * 8, 12 * 8));
    
    return(
        <g>
            <g visibility={isFD ? 'visible' : 'hidden'} transform={`translate(${(degreesToPixels((-FD_bank + bank) / 2) || 0)*0.8} 0)`}>
                <polygon points='586,295 586,453' className='FDBar' strokeWidth={5} fill='black'/>
            </g>
            <g visibility={isFD ? 'visible' : 'hidden'} transform={`translate(0 ${(degreesToPixels(FD_pitch - pitch) || 0)*0.8})`}>
                <polygon points='507,374 665,374' className='FDBar' strokeWidth={5} fill='black'/>
            </g>


        </g>
    )
};
