import React, { } from 'react';
import { useSimVar } from '../../../../Hooks/simVars';
import "../../../style.scss";

// Reusable Caution type
type CautionType = {
  text: string;
  simVar: boolean;
};

// Component
export const CASWarningsULH: React.FC = () => {

  const [Alternator_Connected_1] = useSimVar("A:GENERAL ENG MASTER ALTERNATOR:1", "bool");
  let [Alternator_Load_1] = useSimVar("A:ELECTRICAL GENALT BUS VOLTAGE:1", "volts");
  Alternator_Load_1 = Math.round(Alternator_Load_1 * 10) / 10;
  const [HYD_Leak_Test] = useSimVar("L:H60_SYS_HYD_Leak_Test_Active", "bool");


  // Caution definitions (this can grow easily)
  const advisoryList: CautionType[] = [

    {
      text: 'GEN 1 FAIL',
      simVar: !Alternator_Connected_1 || Alternator_Load_1 < 14,
    },
    {
      text: 'RSVR 1 LOW',
      simVar: HYD_Leak_Test,
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
        <rect x="20.5" y={yPos-22.5} width="290.5" height="26" fill="yellow" />
        <text
          key={`warning-${index}`}
          x={20}
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