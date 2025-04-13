import React, { } from 'react';

import { EICASAdvisory } from './EICASAdvisory';


import { useSimVar } from '../../../Hooks/simVars';
import { EICASBaseShapes } from './EICASBaseShapes';
import { EICASTapes } from './EICASTapes';
import "../../style.scss";
import { EICASFuel } from './EICASFuel';

export const EICAS = () => {
    return (
        <g>

            <EICASTapes />
            <EICASBaseShapes/>
            <EICASAdvisory/>
            <EICASFuel />

        </g>
    )

};