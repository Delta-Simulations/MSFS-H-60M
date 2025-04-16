import React, { useState } from 'react';
import { useSimVar } from '../../../../Hooks/simVars';
import "../../../style.scss";

// Reusable Caution type
type CautionType = {
  text: string;
  simVar: boolean;
};

// Component
export const CASAdvisory: React.FC = () => {
  // SimVars
  const [APU_ON] = useSimVar('A:APU PCT RPM', 'percent');
  const [APU_GEN_ON] = useSimVar('A:APU GENERATOR ACTIVE', 'bool');
  const [hydraulicLow] = useSimVar('L:HYDRAULIC_LOW', 'Enum');
  const [page_number_advis] = useSimVar('L:H60_EICAS_Page_Advis', 'Enum');
  const [Eng1_Boost_Pump] = useSimVar('A:FUELSYSTEM PUMP SWITCH:1', 'bool');
  const [Eng2_Boost_Pump] = useSimVar('A:FUELSYSTEM PUMP SWITCH:2', 'bool');
  const [Eng1_Anti_Ice] = useSimVar('A:ENG ANTI ICE:1', 'bool');
  const [Eng2_Anti_Ice] = useSimVar('A:ENG ANTI ICE:2', 'bool');
  const [Ext_Pwr_connected] = useSimVar('A:EXTERNAL POWER CONNECTION ON', 'bool');
  const [Xpdr_Stby] = useSimVar('A:TRANSPONDER STATE', 'enum');
  const [Landing_light] = useSimVar('A:LIGHT LANDING ON', 'bool');
  const [Park_brake] = useSimVar('A:BRAKE PARKING POSITION', 'bool');
  const [SearchLight] = useSimVar('L:H60_SL_TOGGLE', 'bool');
  const [AC_Onground] = useSimVar('A:SIM ON GROUND', 'bool');

  const [CargoHookArmed] = useSimVar('L:H60_CARGO_HOOK_ARMED', 'bool');
  const [CargoHookOpen] = useSimVar('L:H60_CARGO_HOOK_OPEN', 'bool');
  const [HYD_Leak_Test] = useSimVar("L:H60_SYS_HYD_Leak_Test_Active", "bool");


  // Caution definitions (this can grow easily)
  const advisoryList: CautionType[] = [
    {
      text: 'APU ON',
      simVar: APU_ON > 99,
    },
    {
      text: 'APU GEN ON',
      simVar: APU_GEN_ON == 1,
    },
    {
      text: 'AVCS INOP',
      simVar: false,
    },
    {
      text: 'BACK UP PUMP ON',
      simVar: HYD_Leak_Test,
    },
    {
      text: 'T/R SERVO 2 ON',
      simVar: HYD_Leak_Test,
    },
    {
      text: 'BOOST PUMP 1 ON',
      simVar: Eng1_Boost_Pump == 1,

    },
    {
      text: 'BOOST PUMP 2 ON',
      simVar: Eng2_Boost_Pump == 1,

    },
    {
      text: 'CARGO HOOK ARMED',
      simVar: CargoHookArmed == 1,

    },
    {
      text: 'CARGO HOOK OPEN',
      simVar: CargoHookOpen == 1,

    },
    {
      text: 'ENG 1 ANTI-ICE ON',
      simVar: Eng1_Anti_Ice == 1,

    },
    {
      text: 'ENG 2 ANTI-ICE ON',
      simVar: Eng2_Anti_Ice == 1,

    },
    {
      text: 'EXT PWR CONNECTED',
      simVar: Ext_Pwr_connected == 1,

    },
    {
      text: 'FUEL XFER PUMP ON',
      simVar: false,

    },
    {
      text: 'IFF STDBY',
      simVar: Xpdr_Stby == 1,
    },
    {
      text: 'INLET 1 ANTI-ICE',
      simVar: false,
    },
    {
      text: 'INLET 2 ANTI-ICE',
      simVar: false,
    },
    {
      text: 'LANDING LIGHT ON',
      simVar: Landing_light == 1,
    },
    {
      text: 'PARKING BRAKE ON',
      simVar: Park_brake == 1,
    },
    {
      text: 'SEARCH LIGHT ON',
      simVar: SearchLight == 1,
    },
    {
      text: 'WOW',
      simVar: AC_Onground == 1,
    },
  ];
  // Limit to 6 active cautions
  const totalPages = Math.ceil(advisoryList.filter(c => c.simVar).length / 6);

  // Wrap around the page number if it exceeds bounds
  const currentPage = page_number_advis % totalPages;
  const [acknowledgedStates, setAcknowledgedStates] = useState<Record<string, boolean>>({});

  // Slice out the correct group for the current page
  const activeAdvisory = advisoryList
    .filter(c => c.simVar)
    .slice(currentPage * 6, (currentPage + 1) * 6);

  // Build the SVG elements array
  const elements: JSX.Element[] = [];

  // Track vertical spacing
  let yPos = 551.5;

  activeAdvisory.forEach((caution, index) => {
    if (caution.simVar) {
      elements.push(
        <text
          key={`caution-${index}`}
          x={40}
          y={yPos}
          fontSize='27'
          className='readouts'
        >
          {caution.text}
        </text>
      );
      yPos += 29; // move down for next caution
    }
  });

  return (
    <g>

      <rect x="37" y="527" width="296" height="176" fill="none" stroke='white' strokeWidth={1.5} />

      <g transform="translate(10, 535) scale(0.15, 0.15 )">
        <path d="M55.9378 3.50001C58.6321 -1.16666 65.3679 -1.16667 68.0622 3.5L122.622 98C125.316 102.667 121.948 108.5 116.56 108.5H7.44042C2.05182 108.5 -1.31608 102.667 1.37823 98L55.9378 3.50001Z" fill="white" />
      </g>
      <g transform="translate(10, 659) scale(0.15, -0.15 )">
        <path d="M55.9378 3.50001C58.6321 -1.16666 65.3679 -1.16667 68.0622 3.5L122.622 98C125.316 102.667 121.948 108.5 116.56 108.5H7.44042C2.05182 108.5 -1.31608 102.667 1.37823 98L55.9378 3.50001Z" fill="white" />
      </g>
      <rect x="8" y="554" width="22" height="86" fill="none" stroke='white' strokeWidth={1.5} />
      <text x={13} y={574} fontSize={23} fill='#00EE00' className='readouts' textAnchor="start">P</text>
      <text x={13} y={594} fontSize={23} fill='#00EE00' className='readouts' textAnchor="start">A</text>
      <text x={13} y={614} fontSize={23} fill='#00EE00' className='readouts' textAnchor="start">G</text>
      <text x={13} y={634} fontSize={23} fill='#00EE00' className='readouts' textAnchor="start">E</text>
      <g style={{ display: totalPages > 1 ? "block" : "none" }}>
        <g transform="translate(36, 719) scale(0.4, -0.15 )">
          <path d="M55.9378 3.50001C58.6321 -1.16666 65.3679 -1.16667 68.0622 3.5L122.622 98C125.316 102.667 121.948 108.5 116.56 108.5H7.44042C2.05182 108.5 -1.31608 102.667 1.37823 98L55.9378 3.50001Z" fill="white" />
        </g>
        <g transform="translate(36, 511) scale(0.4, 0.15 )">
          <path d="M55.9378 3.50001C58.6321 -1.16666 65.3679 -1.16667 68.0622 3.5L122.622 98C125.316 102.667 121.948 108.5 116.56 108.5H7.44042C2.05182 108.5 -1.31608 102.667 1.37823 98L55.9378 3.50001Z" fill="white" />
        </g>





        <text x={117} y={726} fontSize={23} fill='#00EE00' className='readouts' textAnchor="start">PAGE {currentPage + 1} OF {totalPages}</text>
      </g>
      {elements}

    </g>
  )
};
