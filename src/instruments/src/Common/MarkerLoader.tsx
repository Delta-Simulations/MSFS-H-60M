import React, { useEffect, useState } from 'react';
import "../../style.scss";
import { useSimVar } from '../Hooks/simVars';

export const JMVFBase = () => {
  const [loadDtc] = useSimVar("L:H60_DTC_LOAD", "enum");
  const [waypoints, setWaypoints] = useState([]);

  // Load CSV once
  const loadWaypointsFromCSV = async () => {
    try {
      const response = await fetch("/path/to/waypoints.csv"); // path relative to your gauge/HTML
      const text = await response.text();
      const rows = text.split("\n").slice(1); // skip header
      const parsed = rows.map(row => {
        const [name, lat, lng, type] = row.split(",");
        return { name, lat: parseFloat(lat), lng: parseFloat(lng), type };
      });
      setWaypoints(parsed);
      console.log("Waypoints loaded:", parsed);
    } catch (err) {
      console.error("Failed to load waypoints:", err);
    }
  };

  useEffect(() => {
    if (loadDtc) {
      console.log("DTC triggered → loading waypoints from CSV");
      loadWaypointsFromCSV();
    }
  }, [loadDtc]);

  return (
    <g>
      {waypoints.map((wp, i) => (
        <circle
          key={i}
          cx={wp.lng} // or convert to screen coords
          cy={wp.lat}
          r={2}
          fill="red"
        />
      ))}
    </g>
  );
};