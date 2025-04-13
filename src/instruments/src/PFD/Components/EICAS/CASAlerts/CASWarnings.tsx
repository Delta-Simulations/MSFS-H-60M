import React, { useState, useEffect } from 'react';
import { useSimVar } from '../../../../Hooks/simVars';
import "../../../style.scss";
import { CASWarningsRH } from './CASWarningsRH';
import { CASWarningsLH } from './CASWarningsLH';
import { CASWarningsULH } from './CASWarningsULH';
import { CASWarningsURH } from './CASWarningsURH';
import { CASWarningsLower } from './CASWarningsLower';

// Reusable Caution type
type CautionType = {
  text: string;
  simVar: boolean;
};

// Component
export const CASWarnings: React.FC = () => {
  // SimVars
  const [page_number_warning] = useSimVar('L:H60_EICAS_Page_Warning', 'Enum');
  const [RotorBrake] = useSimVar('L:RotorBrakeActive', 'bool');
  const [Batt_stby] = useSimVar('L:H60_Switch_BATT_STBY', 'bool');
  const [SAS] = useSimVar('L:H60_SAS', 'bool');
  const [FPS] = useSimVar('L:H60_FPS', 'bool');
  const [Stab_Man_Mode] = useSimVar('L:H60_Stab_Man_Mode', 'bool');
  const [Stab_Unlocked] = useSimVar('L:H60_Stab_Unlocked', 'bool');

  // Caution definitions (this can grow easily)
  const advisoryList: CautionType[] = [
    { text: 'AFCS FAIL', simVar: false },
    { text: 'BOOST SERVO OFF', simVar: false },
    { text: 'CHECK EICAS', simVar: false },
    { text: 'FPS FAIL', simVar: FPS },
    { text: 'ROTOR BRAKE', simVar: RotorBrake },
    { text: 'GUST LOCK ENGAGED', simVar: false },
    { text: 'SAS OFF', simVar: SAS },
    { text: 'STAB MANUAL MODE', simVar: Stab_Man_Mode },
    { text: 'STAB UNLOCKED', simVar: Stab_Unlocked },
    { text: 'STBY INST NOT ARMD', simVar: !Batt_stby},
    { text: 'TRIM FAIL', simVar: false },
  ];

  // Limit to 6 active cautions
  const totalPages = Math.ceil(advisoryList.filter(c => c.simVar).length / 6);

  // Wrap around the page number if it exceeds bounds
  const currentPage = page_number_warning % totalPages;

  // Slice out the correct group for the current page
  const activeAdvisory = advisoryList
    .filter(c => c.simVar)
    .slice(currentPage * 6, (currentPage + 1) * 6);
    
  // State to store overflow warnings
  const [overflowWarnings, setOverflowWarnings] = useState<CautionType[]>([]);

  // Handle overflow warnings from child component
  const handleOverflowWarnings = (overflowWarnings: CautionType[]) => {
    setOverflowWarnings(overflowWarnings);
  };

  // Build the SVG elements array for active cautions
  const elements: JSX.Element[] = [];

  // Track vertical spacing
  let yPos = 551.5;

  activeAdvisory.forEach((caution, index) => {
    if (caution.simVar) {
      elements.push(
        <g key={`warning-${index}`}>
          <rect x="694.5" y={yPos - 22.5} width="290.5" height="26" fill="yellow" />
          <text
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

  // Build the SVG elements array for overflow cautions
  overflowWarnings.forEach((caution, index) => {
    if (caution.simVar) {
      elements.push(
        <g key={`overflow-warning-${index}`}>
          <rect x="694.5" y={yPos - 22.5} width="290.5" height="26" fill="yellow" />
          <text
            x={695}
            y={yPos}
            fontSize='27'
            className='CAS-readouts-unacknowledged'
          >
            {caution.text}
          </text>
        </g>
      );
      yPos += 29; // move down for next overflow caution
    }
  });

  return (
    <g>
      <rect x="692" y="527" width="296" height="176" fill="none" stroke='yellow' strokeWidth={1.5} />
      <g>
      
        <g transform="translate(999, 535) scale(0.15, 0.15 )">
          <path d="M55.9378 3.50001C58.6321 -1.16666 65.3679 -1.16667 68.0622 3.5L122.622 98C125.316 102.667 121.948 108.5 116.56 108.5H7.44042C2.05182 108.5 -1.31608 102.667 1.37823 98L55.9378 3.50001Z" fill="white" />
        </g>
        <g transform="translate(999, 659) scale(0.15, -0.15 )">
          <path d="M55.9378 3.50001C58.6321 -1.16666 65.3679 -1.16667 68.0622 3.5L122.622 98C125.316 102.667 121.948 108.5 116.56 108.5H7.44042C2.05182 108.5 -1.31608 102.667 1.37823 98L55.9378 3.50001Z" fill="white" />
        </g>
        <text x={1002} y={574} fontSize={23} fill='#00EE00' className='readouts'  textAnchor="start">P</text>
          <text x={1002} y={594} fontSize={23} fill='#00EE00' className='readouts'  textAnchor="start">A</text>
          <text x={1002} y={614} fontSize={23} fill='#00EE00' className='readouts'  textAnchor="start">G</text>
          <text x={1002} y={634} fontSize={23} fill='#00EE00' className='readouts'  textAnchor="start">E</text>
          <rect  x="997" y="554" width="22" height="86" fill="none" stroke='white' strokeWidth={1.5} />

        <g visibility={totalPages ? "visible" : "hidden"}>
          <g transform="translate(939, 719) scale(0.4, -0.15 )">
            <path d="M55.9378 3.50001C58.6321 -1.16666 65.3679 -1.16667 68.0622 3.5L122.622 98C125.316 102.667 121.948 108.5 116.56 108.5H7.44042C2.05182 108.5 -1.31608 102.667 1.37823 98L55.9378 3.50001Z" fill="yellow" />
          </g>
          <g transform="translate(939, 511) scale(0.4, 0.15 )">
            <path d="M55.9378 3.50001C58.6321 -1.16666 65.3679 -1.16667 68.0622 3.5L122.622 98C125.316 102.667 121.948 108.5 116.56 108.5H7.44042C2.05182 108.5 -1.31608 102.667 1.37823 98L55.9378 3.50001Z" fill="yellow" />
          </g>

          <text x={774} y={726} fontSize={23} fill='#00EE00' className='CAS-readouts-acknowledged' textAnchor="start">PAGE {currentPage + 1} OF {totalPages}</text>
        </g>

        {elements}
        <CASWarningsRH/>
        <CASWarningsLH/>
        <CASWarningsULH/>
        <CASWarningsURH/>
        <CASWarningsLower/>
      </g>
    </g>
  );
};
