import React, { } from 'react';
import { useSimVar } from '../../../../Hooks/simVars';
import "../../../style.scss";

// Reusable Caution type
type CautionType = {
  text: string;
  simVar: boolean;
};

// Component
export const CASWarningsLower: React.FC = () => {

  const [Fuel_1] = useSimVar('A:FUELSYSTEM TANK WEIGHT:1', 'pounds');
  const [Fuel_2] = useSimVar('A:FUELSYSTEM TANK WEIGHT:2', 'pounds');


  // Caution definitions (this can grow easily)
  const advisoryList: CautionType[] = [

    {
      text: 'FUEL 1 LOW',
      simVar: Fuel_1 < 172,
    },
    {
      text: 'FUEL 2 LOW',
      simVar: Fuel_2 < 172,
    },
    {
      text: 'FUEL 1 PRESS LOW',
      simVar: false,
    },
    {
      text: 'FUEL 2 PRESS LOW',
      simVar: false,
    },

  ];
// Limit to 6 active cautions

// Slice out the correct group for the current page
const activeAdvisory = advisoryList
  .filter(c => c.simVar)
  .slice(0, 2);

  // Build the SVG elements array
  const elements: JSX.Element[] = [];

  // Track vertical spacing
  let yPos = 717;

  activeAdvisory.forEach((caution, index) => {
    if (caution.simVar) {
      elements.push(
      <g>
        <rect x="367" y={yPos-22.5} width="290.5" height="26" fill="yellow" />
        <text
          key={`warning-${index}`}
          x={366}
          y={yPos}
          fontSize='27'
          className='CAS-readouts-unacknowledged'
        >
          {caution.text}
        </text>
        
      </g>
      );
      yPos += 29; // move down for next caution
    }
  });

  return (
    <g>
      <g>
        {elements}
      </g>
    </g>
  )
};