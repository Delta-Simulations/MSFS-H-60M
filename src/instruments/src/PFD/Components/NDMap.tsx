import React, {} from 'react';

import "../style.scss";
// import { EICASAdvisory } from './EICASAdvisory';

import { useSimVar } from '../../Hooks/simVars';

export const NDMap = () => {

        const [NP_1] = useSimVar('A:PROP MAX RPM PERCENT:1','percent');

        return(
                    <g>



                    </g>
        )
        
    };