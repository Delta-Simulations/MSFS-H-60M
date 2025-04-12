import React, { } from 'react';

import { EICASAdvisory } from './EICASAdvisory';


import { useSimVar } from '../../../Hooks/simVars';
import { EICASBaseShapes } from './EICASBaseShapes';
import { EICASTapes } from './EICASTapes';
import "../../style.scss";

export const EICAS = () => {
    return (
        <g>

            <EICASTapes />
            <EICASBaseShapes/>
            <EICASAdvisory/>

        </g>
    )

};