import React from 'react';
import { FPV } from './FPV';

import { useSimVar } from '../../Hooks/simVars';

export const FPVCombo = () => {

    return(
        <g>
            <FPV />
            <g transform={`translate(408, 545)scale(0.3)`}>
            
            </g>

            
        </g>
    )
};
