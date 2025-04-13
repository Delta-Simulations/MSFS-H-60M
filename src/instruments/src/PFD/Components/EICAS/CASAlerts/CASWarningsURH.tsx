import React, { } from 'react';
import { useSimVar } from '../../../../Hooks/simVars';
import "../../../style.scss";

// Reusable Caution type
type CautionType = {
  text: string;
  simVar: boolean;
};

// Component
export const CASWarningsURH: React.FC = () => {

  const [Alternator_Connected_2] = useSimVar("A:GENERAL ENG MASTER ALTERNATOR:2", "bool");
  let [Alternator_Load_2] = useSimVar("A:ELECTRICAL GENALT BUS VOLTAGE:2", "volts");
  Alternator_Load_2 = Math.round(Alternator_Load_2 * 10) / 10;


  // Caution definitions (this can grow easily)
  const advisoryList: CautionType[] = [

    {
      text: 'GEN 2 FAIL',
      simVar: !Alternator_Connected_2 || Alternator_Load_2 < 14,
    },
    {
      text: 'HYD PUMP 2 FAIL',
      simVar: false,
    },


  ];
// Limit to 6 active cautions

// Slice out the correct group for the current page
const activeAdvisory = advisoryList
  .filter(c => c.simVar)
  .slice(0, 6);

  // Build the SVG elements array
  const elements: JSX.Element[] = [];

  // Track vertical spacing
  let yPos = 32.5;

  activeAdvisory.forEach((caution, index) => {
    if (caution.simVar) {
      elements.push(
      <g>
        <rect x="714.5" y={yPos-22.5} width="290.5" height="26" fill="yellow" />
        <text
          key={`warning-${index}`}
          x={715}
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