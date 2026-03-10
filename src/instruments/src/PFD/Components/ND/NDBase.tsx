import React from 'react';
import "../../style.scss";
import { useSimVar } from '../../../Hooks/simVars';
import { RadarAltCircle } from '../PFD/RadarAltCircle';
import { NDFullDisplay } from './NDFullDisplay';
import { NDStatic } from './NDStatic';
import MapComponent from '../TacMap/map_component/MapComponent';

export const NDBase = () => {

  const [latitude] = useSimVar("A:GPS POSITION LAT", "degree");
  const [longitude] = useSimVar("A:GPS POSITION LON", "degree");
  const [heading] = useSimVar("A:PLANE HEADING DEGREES GYRO", "degrees");
  const [Map_Center] = useSimVar("L:H60_TAC_MAP_CTR", "bool");

  return (
    <>

      {/* MAP BACKGROUND */}
      <div
        style={{
          position: "absolute",
          width: "1024px",
          height: "768px",
          background: "black",
          overflow: "hidden",
          zIndex: 1
        }}
      >
        <MapComponent
          lat={latitude}
          lng={longitude}
          heading={heading}
          zoom={10}
          map_mode={2}
          map_symbology={false}
          markers={[]}
          flightPlan={[]}
        />
      </div>


      {/* SVG AVIONICS LAYER */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 100
        }}
      >
        <g>

          <g transform="translate(10,-358)">
            <RadarAltCircle />
          </g>

          <NDFullDisplay />
          <NDStatic />

        </g>
      </svg>

    </>
  );
};