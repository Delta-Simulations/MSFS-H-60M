import React, { useEffect, useRef } from 'react';
import { useMapData } from '../../../Common/MapDataProvider';
import { useSimVar } from '../../../Hooks/simVars';
import { JMVFShapes } from './JMVFShapes';

export const JMVFBase = () => {
  const [loadDtc] = useSimVar("L:H60_DTC_LOAD", "enum");
  const { addMarker, clearMarkers } = useMapData();
  const prevLoadDtc = useRef(loadDtc);
  const [dtcLoaded, setdtcLoaded] = useSimVar("L:H60_DTC_LOADED", "bool");
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
      setdtcLoaded(1);
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
					LOAD DTS
				</text>

				<text
					x="462"
					y="541"
					fontSize={19.5}
					className="tacmap_cyantext"
					textAnchor="middle"
				>
					STATUS
				</text>

				<text
					x="462"
					y="575"
					fontSize={19.5}
					className="tacmap_cyantext"
					textAnchor="middle"
				>
					DTS - {dtcLoaded ? "LOADED" : "NOT LOADED"}
				</text>






    </g>
  );
};