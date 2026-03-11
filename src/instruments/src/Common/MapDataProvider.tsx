import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

interface IWaypoint {
  lat: number;
  lng: number;
  name?: string;
  type?: string;
}

interface IFlightPlan {
  lat: number;
  lng: number;
  name?: string;
  id?: number;
  type?: string;
}

interface MapDataContextType {
  flightPlan: IFlightPlan[];
  markers: IWaypoint[];

  refreshFlightPlan: () => Promise<void>;

  addMarker: (lat: number, lng: number, name?: string, type?: string) => void;
  updateMarker: (index: number, data: Partial<IWaypoint>) => void;
  removeMarker: (index: number) => void;
}

const MapDataContext = createContext<MapDataContextType | null>(null);

export const MapDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [flightPlan, setFlightPlan] = useState<IFlightPlan[]>([]);
  const [markers, setMarkers] = useState<IWaypoint[]>([]);

  const refreshFlightPlan = useCallback(async () => {

    const total = SimVar.GetSimVarValue(
      "C:fs9gps:FlightPlanWaypointsNumber",
      "number"
    );

    const newWaypoints: IFlightPlan[] = [];

    for (let i = 0; i < total; i++) {
      await SimVar.SetSimVarValue("C:fs9gps:FlightPlanWaypointIndex", "number", i);
      await new Promise(res => setTimeout(res, 10));

      const lat = SimVar.GetSimVarValue("C:fs9gps:FlightPlanWaypointLatitude", "degree");
      const lng = SimVar.GetSimVarValue("C:fs9gps:FlightPlanWaypointLongitude", "degree");
      const ident = SimVar.GetSimVarValue("C:fs9gps:FlightPlanWaypointIdent", "string");

      newWaypoints.push({
        lat,
        lng,
        name: ident,
        type: "FMS_WP"
      });
    }

    setFlightPlan(newWaypoints);
  }, []);

  const addMarker = (lat: number, lng: number, name?: string, type?: string) => {
    setMarkers(prev => [...prev, { lat, lng, name, type }]);
  };

  const updateMarker = (index: number, data: Partial<IWaypoint>) => {
    setMarkers(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], ...data };
      return copy;
    });
  };

  const removeMarker = (index: number) => {
    setMarkers(prev => prev.filter((_, i) => i !== index));
  };

  // --- Log updates whenever flightPlan or markers change ---
  useEffect(() => {
    console.log("Markers updated:", markers);
  }, [markers]);

  useEffect(() => {
    console.log("Flight Plan updated:", flightPlan);
  }, [flightPlan]);

  return (
    <MapDataContext.Provider
      value={{
        flightPlan,
        markers,
        refreshFlightPlan,
        addMarker,
        updateMarker,
        removeMarker
      }}
    >
      {children}
    </MapDataContext.Provider>
  );
};

export const useMapData = () => {
  const ctx = useContext(MapDataContext);
  if (!ctx) throw new Error("useMapData must be inside MapDataProvider");
  return ctx;
};