import React from 'react';
import { useSimVar } from '../../../Hooks/simVars';

export const HorizonLine = (props) => {

    const [roll] = useSimVar('PLANE BANK DEGREES', 'Degrees');
    const [pitch] = useSimVar('PLANE PITCH DEGREES', 'Degrees');
    
    return(
        <g>
            <g transform={`translate(0 ${props.height}) `}>
                <rect x={537} y={0} width={85} height={2} fill='white'/>

                <text x={520} y={8} fontSize={23} fill="white" textAnchor="middle">{props.label}</text>
                <text x={636} y={8} fontSize={23} fill="white" textAnchor="middle">{props.label}</text>
            </g>
        </g>
    )
};
