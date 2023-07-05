import React, {} from 'react';

import "../style.scss";
// import { EICASAdvisory } from './EICASAdvisory';

import { useSimVar } from '../../Hooks/simVars';
import { NDMap } from './NDMap';

export const NDMain = () => {

        const [NP_1] = useSimVar('A:PROP MAX RPM PERCENT:1','percent');

        return(
                    <g>
                        <NDMap />


                    </g>
        )
        
    };