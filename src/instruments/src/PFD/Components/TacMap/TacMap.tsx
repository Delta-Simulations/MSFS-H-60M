import React from 'react';
import "../../style.scss";
import { useSimVar } from '../../../Hooks/simVars';
import MapComponent from "./map_component/MapComponent";


export const TacMap = ({ theme, mapSettings }) => {
  // SimVar hooks to fetch required data
  const [latitude] = useSimVar('GPS POSITION LAT', 'degree', 500);
  const [longitude] = useSimVar('GPS POSITION LON', 'degree', 500);
  const [heading] = useSimVar("PLANE HEADING DEGREES TRUE", "degrees");

  return (
    <g>
      {/* Pass props correctly to MapComponent */}
      <MapComponent
        lat={latitude}
        lng={longitude}
        heading={heading}
        zoom={5}
        theme={theme} // Pass theme prop
        mapSettings={mapSettings} // Pass mapSettings prop
      />
      <rect x={34.7} y={182} width="30" height="2" stroke="none" className='barmax' />
    </g>
  );
};