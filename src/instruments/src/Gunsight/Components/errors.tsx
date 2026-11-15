import React from 'react';
import { useSimVar } from '../../Hooks/simVars';

export const Errors = (props) => {

    return(
        <g>
            <g>
                <text x={76} y={160+props.height} fontSize={52} fill="yellow" textAnchor="left">
                    {props.error}
                </text>
            </g>
        </g>
    )
};
