import React, { FC } from 'react';
import { render } from '../Hooks/index';
import { useSimVar } from '../Hooks/simVars';
import { Horizon } from './Components/horizon';
import { Ap_Disp } from './Components/AP_Disp';

import './style.scss';
import { VertSpeed } from './Components/VSpeed';
import { Clock } from './Components/Clock';
import { Electricity } from '../Common/circuit';

const AP = () => {
  return (
    <svg viewBox='0 0 1280 1280'>
      {/* Electricity circuit='24' */}
      <Electricity circuit='1'>
        <g>
          <clipPath id='ESIS_CLIP'>
            <rect x={110} y={757} width={446} height={424} fill='black' />
          </clipPath>

          <g clipPath='url(#ESIS_CLIP)'>
            <g transform="translate(-320,704)scale(1.24)">
              <Horizon />
            </g>
            <VertSpeed />
          </g>
        </g>
      </Electricity>

      {/* Electricity circuit='3' */}
      <Electricity circuit='3'>
        <g>
          <Ap_Disp />
          <Clock />
          <image x={-400} y={550} xlinkHref="/Images/ESIS.png" width={1400} opacity={0.7} />
          <image x={600} y={650} xlinkHref="/Images/clockH60.png" width={600} opacity={0.8} />
        </g>
      </Electricity>
    </svg>
  );
};

render(<AP />);