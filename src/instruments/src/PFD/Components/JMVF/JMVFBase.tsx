import React, { useEffect, useRef } from 'react';
import { useMapData } from '../../../Common/MapDataProvider';
import { useSimVar } from '../../../Hooks/simVars';

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
        const [name, lat, lng, type] = row.split(",");
        addMarker(parseFloat(lat), parseFloat(lng), name, type);
      });
      console.log("Waypoints loaded from CSV");
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

  return null;
};