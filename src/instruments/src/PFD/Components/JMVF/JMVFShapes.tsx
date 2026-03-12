import React, { useEffect, useRef } from 'react';
import { useMapData } from '../../../Common/MapDataProvider';
import { useSimVar } from '../../../Hooks/simVars';

export const JMVFShapes = () => {
 
  return (

    <g >
        <g transform="translate(36,8)">
<rect x="1.5" y="1.5" width="678" height="49" rx="1.5" stroke="#00EE00" stroke-width="3" stroke-linejoin="round"/>
<rect x="168.5" y="55.5" width="452" height="411" rx="1.5" stroke="#00FFFF" stroke-width="3" stroke-linejoin="round"/>
<line x1="167" y1="165.5" x2="622" y2="165.5" stroke="#00FFFF" stroke-width="3"/>
<line x1="167" y1="241.5" x2="622" y2="241.5" stroke="#00FFFF" stroke-width="3"/>
<line x1="167" y1="422.5" x2="622" y2="422.5" stroke="#00FFFF" stroke-width="3"/>
<line x1="167" y1="351.5" x2="622" y2="351.5" stroke="#00FFFF" stroke-width="3"/>
</g>

    </g>
  );
};