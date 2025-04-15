import React from 'react';
import "../../style.scss";
import { useSimVar } from '../../../Hooks/simVars';

import { ApReadout } from './ApReadout';
import { HeadingBug } from './HeadingBug';
import { AltCircle } from './AltCircle';
import { Collective } from './Collective';
import { Horizon } from './horizon';
import { PowerPod } from './PowerPod';
import { SpdIndicator } from './speedIndicator';
import { FlightDirector } from './flightDirector';
import { VerticalSpeed } from './verticalSpeed';
import { RadarAltCircle } from './RadarAltCircle';

export const PFDBase = () => {
    return(
        <g>
            <Horizon />
            <SpdIndicator />
            <ApReadout />
            <PowerPod />
            <HeadingBug />
            <Collective />
            <AltCircle />
            <RadarAltCircle />

            <VerticalSpeed />
            <g transform="translate(-67,-158)">
                <FlightDirector />
            </g>
        </g>
    )
};
