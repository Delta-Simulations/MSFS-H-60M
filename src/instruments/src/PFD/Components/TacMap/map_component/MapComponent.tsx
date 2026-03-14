import React, { useEffect, useMemo } from "react";
import { MapContainer, Marker, TileLayer, useMap, Polyline, Pane } from "react-leaflet";
import L from "leaflet";
import "./MapComponent.scss";
import "../../../style.scss";

interface IWaypoint {
  lat: number;
  lng: number;
  name?: string;
  type?: string;
  heading?: number;
}

interface IFlightPlan {
  lat: number;
  lng: number;
  name?: string;
  id?: number;
  type?: string;
  heading?: number;
}

interface IMapComponentProps {
  lat: number;
  lng: number;
  heading: number;
  zoom: number;
  map_mode: number;
  map_symbology: boolean;
  map_brightness: number; 
  markers?: IWaypoint[];
  flightPlan?: IFlightPlan[];
}

// --- ICON CACHE ---
const iconsCache: { [key: string]: L.DivIcon } = {};

const MapComponent = (props: IMapComponentProps) => {

  const { lat, lng, heading, zoom, map_mode, map_brightness, markers = [], flightPlan = [] } = props;

  const PosHandler = ({ lat, lng, zoom }) => {
    const map = useMap();

    useEffect(() => {
      map.setView([lat, lng], zoom, { animate: false });
    }, [lat, lng, zoom]);

    return null;
  };

  const getWaypointInformation = (type?: string) => {

    let iconUrl = "/Images/MFD/Base_WP.svg";
    let textColor = "white";

    switch (type) {
      case "FMS_WP": iconUrl = "/Images/MFD/FMS_Waypoint.svg"; textColor = "magenta"; break;
      case "Other_WP": iconUrl = "/Images/MFD/Base_WP.svg"; break;
      case "FMS_VOR": iconUrl = "/Images/MFD/VOR.svg"; break;
      case "FMS_VORTAC": iconUrl = "/Images/MFD/VORTAC.svg"; break;
      case "FMS_TACAN": iconUrl = "/Images/MFD/TACAN.svg"; break;
      case "FMS_NDB": iconUrl = "/Images/MFD/NDB.svg"; break;
      case "FMS_AIRPORT": iconUrl = "/Images/MFD/AIRPORT.svg"; break;
      case "FMS_INTERSECTION": iconUrl = "/Images/MFD/INTERSECTION.svg"; break;

      case "user_point": iconUrl = "/Images/MFD/INTERSECTION.svg"; break;
      case "RendezVous_Point": iconUrl = "/Images/MFD/10012500001811000000.svg"; break;
      case "Downed_Pilot": iconUrl = "/Images/MFD/10012500001803000000.svg"; break;

      case "Civ_Vehicle":
        iconUrl = "/Images/MFD/10041500001604030000.svg";
        textColor = "rgb(255,161,255)";
        break;

      case "Friendly_Helipad":
        iconUrl = "/Images/MFD/10032000001213050000.svg";
        textColor = "blue";
        break;

      case "Friendly_Medical_Center":
        iconUrl = "/Images/MFD/10034000001313000000.svg";
        textColor = "blue";
        break;

      case "Hostile_Missile_Launcher":
        iconUrl = "/Images/MFD/10061500001110000000.svg";
        textColor = "red";
        break;

      case "Hostile_Radar_Site":
        iconUrl = "/Images/MFD/10061000001504000000.svg";
        textColor = "red";
        break;
    }

    return { iconUrl, textColor };
  };

  const getWaypointDivIcon = (
    type?: string,
    heading = 0,
    label?: string,
    textColor = "white"
  ) => {

    const { iconUrl } = getWaypointInformation(type);

    return L.divIcon({
      html: `
        <div style="position: relative; width: 40px; height: 40px;">
          <img src="${iconUrl}" style="width: 40px; height: 40px; display:block;" />
          <div style="
            position: absolute;
            top: 30px;
            left: 30px;
            color: ${textColor};
            font-weight: bold;
            font-size: 14px;
            pointer-events: none;
            white-space: nowrap;
            text-shadow: 1px 1px 2px black;
          ">
            ${label || ""}
          </div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      className: "custom-div-icon",
    });
  };

  const flightPlanRoute = flightPlan.map(wp => [wp.lat, wp.lng] as [number, number]);

  const providers = {
    esriSatellite:
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    openTopoMap:
      "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    CyclOSM:
      "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
    vfr_faa:
      "https://tiles.arcgis.com/tiles/ssFJjBXIUyZDrSYZ/arcgis/rest/services/VFR_Sectional/MapServer/tile/{z}/{y}/{x}",
  };

  let providerUrl = "";

  if (map_mode === 1) providerUrl = providers.vfr_faa;
  else if (map_mode === 2) providerUrl = providers.openTopoMap;
  else if (map_mode === 3) providerUrl = providers.esriSatellite;
  else if (map_mode === 4) providerUrl = providers.CyclOSM;

  const allMarkers = useMemo(() => {
  return [...markers, ...flightPlan];
}, [markers, flightPlan]);

  return (

<MapContainer
  id="mapContainer"
  center={[lat, lng]}
  zoom={zoom}
  zoomAnimation={false}
  fadeAnimation={false}
  markerZoomAnimation={false}
  preferCanvas={true}
>

  {/* Dimmed tile pane */}
  <Pane name="dimmedTiles">
    <TileLayer
  key={map_mode}
  url={providerUrl}
  opacity={1-map_brightness}
/>
  </Pane>

  {/* Flight Plan */}
  {flightPlanRoute.length > 1 && (
    <Polyline
      positions={flightPlanRoute}
      pathOptions={{ color: "magenta", weight: 2 }}
    />
  )}

  {/* Markers */}
  {allMarkers.map((wp, idx) => {

    const { textColor } = getWaypointInformation(wp.type);
    const headingToUse = wp.heading ?? heading;

const cacheKey = `${wp.lat}-${wp.lng}-${wp.type}-${wp.name}`;

const icon = useMemo(() => {
  if (!iconsCache[cacheKey]) {
    iconsCache[cacheKey] = getWaypointDivIcon(
      wp.type,
      headingToUse,
      wp.name,
      textColor
    );
  }
  return iconsCache[cacheKey];
}, [cacheKey]);

    return (
      <Marker
        key={`marker-${cacheKey}`}
        position={[wp.lat, wp.lng]}
        icon={icon}
      />
    );
  })}

  <PosHandler lat={lat} lng={lng} zoom={zoom} />

</MapContainer>

  );
};

export default MapComponent;