import React from 'react';
import { useSimVar } from '../../../Hooks/simVars';

// Reusable Caution type
type CautionType = {
  text: string;
  level: 'Advisory' | 'Warning';
  simVar: boolean;
};

// Component
export const EICASAdvisory: React.FC = () => {
  // SimVars
  const [APU_ON] = useSimVar('A:APU PCT RPM', 'percent');
  const [APU_GEN_ON] = useSimVar('A:APU GENERATOR ACTIVE', 'bool');
  const [hydraulicLow] = useSimVar('L:HYDRAULIC_LOW', 'Enum');
  const [page_number_advis] = useSimVar('H:Page_Advis', 'Enum');

  // Caution definitions (this can grow easily)
  const advisoryList: CautionType[] = [
    {
      text: 'APU ON',
      level: 'Advisory',
      simVar: APU_ON > 99,
    },
    {
      text: 'APU GEN ON',
      level: 'Advisory',
      simVar: APU_GEN_ON == 1,
    },
    {
      text: 'ENG 1 ANTI-ICE ON',
      level: 'Advisory',
      simVar: hydraulicLow == 1,
    },
    {
      text: 'XXXXXXXXXXXXXXXXXX',
      level: 'Advisory',
      simVar: 1 == 1,
    },
    {
      text: 'XXXXXXXXXXXXXXXXXX',
      level: 'Advisory',
      simVar: 1 == 1,
    },
    {
      text: 'XXXXXXXXXXXXXXXXXX',
      level: 'Advisory',
      simVar: 1 == 1,
    },
    {
      text: 'XXXXXXXXXXXXXXXXXX',
      level: 'Advisory',
      simVar: 1 == 1,
    },
    {
      text: 'GUST LOCK ENGAGED',
      level: 'Advisory',
      simVar: 1 == 1,
    },

  ];
  // Limit to 6 active cautions
  const totalPages = Math.ceil(advisoryList.filter(c => c.simVar).length / 6);

// Wrap around the page number if it exceeds bounds
const currentPage = page_number_advis % totalPages;

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
          fontSize="27"
          className="readouts"
        >
          {caution.text}
        </text>
      );
      yPos += 29; // move down for next caution
    }
  });

  return (
    <g>
			<defs>
				<clipPath id="top-half">
        <rect x="37" y="701" width="296" height="100"/>
				</clipPath>
			</defs>
      <rect x="37" y="527" width="296" height="176" fill="none" stroke='white' strokeWidth={2.5} />

      


      <g clipPath="url(#top-half)">
        {elements}
      </g>
    </g>
  )
};
