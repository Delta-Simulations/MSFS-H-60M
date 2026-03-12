import React, { useEffect, useRef } from 'react';
import { useMapData } from '../../../Common/MapDataProvider';
import { useSimVar } from '../../../Hooks/simVars';
import { JMVFShapes } from './JMVFShapes';

export const JMVFBase = () => {
  const [loadDtc] = useSimVar("L:H60_DTC_LOAD", "enum");
  const { addMarker, clearMarkers } = useMapData();
  const prevLoadDtc = useRef(loadDtc);

  const loadWaypointsFromCSV = async () => {
    try {
      const response = await fetch("/User/waypoints.csv");
      const text = await response.text();
      const rows = text.split("\n").slice(1); // skip header

      rows.forEach(row => {
        if (!row.trim()) return; // skip empty lines

        const [nameRaw, latRaw, lngRaw, typeRaw] = row.split(",");
        if (!nameRaw || !latRaw || !lngRaw) return; // skip invalid rows

        const name = nameRaw.trim();
        const lat = parseFloat(latRaw.trim());
        const lng = parseFloat(lngRaw.trim());
        const type = typeRaw ? typeRaw.trim() : undefined;

        if (isNaN(lat) || isNaN(lng)) return; // skip invalid coords

        addMarker(lat, lng, name, type);
      });

      console.log("Waypoints loaded successfully from CSV");
    } catch (err) {
      console.error("Failed to load CSV:", err);
    }
  };

  useEffect(() => {
    // Only run when loadDtc increases
    if (loadDtc > prevLoadDtc.current) {
      console.log(`DTC increased from ${prevLoadDtc.current} → ${loadDtc}`);
      clearMarkers();
      loadWaypointsFromCSV();
    }
    prevLoadDtc.current = loadDtc;
  }, [loadDtc]);

  return (

    <g >
      <JMVFShapes />
				<text
					x="1008"
					y="541"
					fontSize={19.5}
					className="readouts"
					textAnchor="end"
				>
					LOAD DTC
				</text>


    </g>
  );
};