import React from 'react';
import { useSimVar } from '../../../Hooks/simVars';

export const HorizonLine2 = (props) => {

    const [roll] = useSimVar('PLANE BANK DEGREES', 'Degrees');
    const [pitch] = useSimVar('PLANE PITCH DEGREES', 'Degrees');
    
    return(
        <g>
            <g transform={`translate(0 ${props.height}) `}>
                <rect x={571} y={12} width={16} height={2} fill='white'/>
                <rect x={554} y={22} width={50} height={2} fill='white'/>
                <rect x={571} y={32} width={16} height={2} fill='white'/>
            </g>
        </g>
    )
};
