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
  const [Starter_2] = useSimVar('A:GENERAL ENG STARTER ACTIVE:2', 'bool');
  const [Oil_temp_2] = useSimVar("A:ENG OIL TEMPERATURE:2", "Celsius");
  const [Oil_press_2] = useSimVar("A:ENG OIL PRESSURE:2", "psi");
  const [Batt_1_volt] = useSimVar("A:ELECTRICAL BATTERY VOLTAGE:1", "volts");
  const [Batt_2_volt] = useSimVar("A:ELECTRICAL BATTERY VOLTAGE:2", "volts");



  // Caution definitions (this can grow easily)
  const advisoryList: CautionType[] = [
    {
      text: 'APU FAIL',
      simVar: false,
    },
    {
      text: 'APU OIL HOT',
      simVar: false,
    },
    {
      text: 'BATT LOW CHARGE',
      simVar: Batt_1_volt < 20.5 || Batt_2_volt < 20.5,
    },
    {
      text: 'CHIP IBIT FAIL',
      simVar: false,
    },
    {
      text: 'ENG 2 OIL HOT',
      simVar: Oil_temp_2 > 150,
    },
    {
      text: 'ENG 2 OIL PRESS',
      simVar: Oil_press_2 < 10,
    },
    {
      text: 'ENG 2 STARTER ON',
      simVar: Starter_2,
    },
    {
      text: 'CONV 1 FAIL',
      simVar: false,
    },
    {
      text: 'CONV 2 FAIL',
      simVar: false,
    },
    {
      text: 'PRI SERVO 2 FAIL',
      simVar: false,
    },
    {
      text: 'MAIN XMSN OIL HOT',
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
  let yPos = 355.5;

  activeAdvisory.forEach((caution, index) => {
    if (caution.simVar) {
      elements.push(
      <g>
        <rect x="694.5" y={yPos-22.5} width="290.5" height="26" fill="yellow" />
        <text
          key={`warning-${index}`}
          x={695}
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