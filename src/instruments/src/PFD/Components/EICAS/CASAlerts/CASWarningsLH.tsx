import React, { } from 'react';
import { useSimVar } from '../../../../Hooks/simVars';
import "../../../style.scss";

// Reusable Caution type
type CautionType = {
  text: string;
  simVar: boolean;
};

// Component
export const CASWarningsLH: React.FC = () => {
  const [Starter_1] = useSimVar('A:GENERAL ENG STARTER ACTIVE:1', 'bool');
  const [Oil_temp_1] = useSimVar("A:ENG OIL TEMPERATURE:1", "Celsius");
  const [Oil_press_1] = useSimVar("A:ENG OIL PRESSURE:1", "psi");
  const [HYD_Leak_Test] = useSimVar("L:H60_SYS_HYD_Leak_Test_Active", "bool");


  // Caution definitions (this can grow easily)
  const advisoryList: CautionType[] = [
    {
      text: 'ENG 1 OIL HOT',
      simVar: Oil_temp_1 > 150,
    },
    {
      text: 'ENG 1 OIL PRESS',
      simVar: Oil_press_1 < 10,
    },
    {
      text: 'ENG 1 STARTER ON',
      simVar: Starter_1,
    },
    {
      text: 'ICE DETECTED',
      simVar: false,
    },
    {
      text: 'PRI SERVO 1 FAIL',
      simVar: false,
    },
    {
      text: 'T/R SERVO 1 FAIL',
      simVar: HYD_Leak_Test,
    },
    {
      text: 'TAIL XMSN OIL HOT',
      simVar: false,
    },
    {
      text: 'BACKUP RSVR LOW',
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
  let yPos = 355.5;

  activeAdvisory.forEach((caution, index) => {
    if (caution.simVar) {
      elements.push(
      <g>
        <rect x="38.5" y={yPos-22.5} width="290.5" height="26" fill="yellow" />
        <text
          key={`warning-${index}`}
          x={40}
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