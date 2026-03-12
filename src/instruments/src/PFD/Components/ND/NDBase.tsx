import React, { useEffect } from 'react';
import "../../style.scss";
import { useSimVar } from '../../../Hooks/simVars';
import { RadarAltCircle } from '../PFD/RadarAltCircle';
import { NDFullDisplay } from './NDFullDisplay';
import { NDStatic } from './NDStatic';
import MapComponent from '../TacMap/map_component/MapComponent';
import { useMapData } from '../../../Common/MapDataProvider';

export const NDBase = () => {
  const { markers, addMarker, updateMarker, removeMarker, flightPlan, refreshFlightPlan } = useMapData();
  const [latitude] = useSimVar("A:GPS POSITION LAT", "degree");
  const [longitude] = useSimVar("A:GPS POSITION LON", "degree");
  const [heading] = useSimVar("A:PLANE HEADING DEGREES GYRO", "degrees");
  const [Map_Center] = useSimVar("L:H60_TAC_MAP_CTR", "bool");
  const [Map_Orientation] = useSimVar("L:H60_TAC_MAP_ORIENT", "bool");
  let [ac_heading] = useSimVar("A:PLANE HEADING DEGREES GYRO", "degrees");

  ac_heading = Math.round(ac_heading * 100) / 100;
  let heading_adjusted = Map_Orientation === 1 ? 0 : ac_heading;

  return (
    <>
      {/* MAP BACKGROUND */}
      <div
        style={{
          position: "absolute",
          width: "604px",
          height: "604px",
          top: "82px",
          left: "107px",
          background: "black",
          overflow: "hidden",
          zIndex: 1,
          transform: `rotate(${-heading_adjusted}deg)`,
          transformOrigin: "center center",
          clipPath: "circle(302px at center)"
        }}
      >
        <MapComponent
          lat={latitude}
          lng={longitude}
          heading={heading}
          zoom={14}
          map_mode={0}
          map_symbology={false}
          markers={markers}
          flightPlan={flightPlan}
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