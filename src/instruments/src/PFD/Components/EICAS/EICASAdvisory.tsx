import React, { } from 'react';
import { useSimVar } from '../../../Hooks/simVars';
import "../../style.scss";
import { CASAdvisory } from './CASAlerts/CASAdvisory';
import { CASWarnings } from './CASAlerts/CASWarnings';

export const EICASAdvisory: React.FC = () => {


  return (
    <g>
    <CASAdvisory/>
    <CASWarnings/>
    </g>
  )
};
