import React, { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap, Polyline } from "react-leaflet";
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
  markers?: IWaypoint[];
  flightPlan?: IFlightPlan[];
}

// --- CACHE ICONS OUTSIDE COMPONENT ---
const iconsCache: { [key: string]: L.DivIcon } = {};

const MapComponent = (props: IMapComponentProps) => {
  const { lat, lng, heading, zoom, map_mode, markers = [], flightPlan = [] } = props;

  const PosHandler = ({ lat, lng, zoom }) => {
    const map = useMap();
    useEffect(() => {
      map.setView([lat, lng], zoom, { animate: false });
    }, [lat, lng, zoom]);
    return null;
  };

  const getWaypointInformation = (type?: string) => {
    let iconUrl = "/Images/MFD/Other_Waypoint.svg";
    let textColor = "white";

    switch (type) {
      case "FMS_WP": iconUrl = "/Images/MFD/FMS_Waypoint.svg"; textColor = "magenta"; break;
      case "Other_WP": iconUrl = "/Images/MFD/Other_Waypoint.svg"; textColor = "magenta"; break;
      case "FMS_VOR": iconUrl = "/Images/MFD/VOR.svg"; break;
      case "FMS_VORTAC": iconUrl = "/Images/MFD/VORTAC.svg"; break;
      case "FMS_TACAN": iconUrl = "/Images/MFD/TACAN.svg"; break;
      case "FMS_NDB": iconUrl = "/Images/MFD/NDB.svg"; break;
      case "FMS_AIRPORT": iconUrl = "/Images/MFD/AIRPORT.svg"; break;
      case "FMS_INTERSECTION": iconUrl = "/Images/MFD/INTERSECTION.svg"; break;
      case "user": iconUrl = "/Images/MFD/UserMarker.svg"; textColor = "lime"; break;
      case "RendezVous_Point": iconUrl = "/Images/MFD/10012500001811000000.svg"; textColor = "lime"; break;
      case "Friendly_Medical_Center": iconUrl = "/Images/MFD/10034000001313000000.svg"; textColor = "blue"; break;
      case "Hostile_Missile_Launcher": iconUrl = "/Images/MFD/10061500001110000000.svg"; textColor = "red"; break;
      case "Hostile_Radar_Site": iconUrl = "/Images/MFD/10061000001504000000.svg"; textColor = "red"; break;
    }

    return { iconUrl, textColor };
  };

const getWaypointDivIcon = (type?: string, heading = 0, label?: string, textColor = "white") => {
  const { iconUrl } = getWaypointInformation(type);

  return L.divIcon({
    html: `
      <div style="position: relative; width: 40px; height: 40px; transform: rotate(${heading}deg);">
        <img src="${iconUrl}" style="width: 40px; height: 40px; display:block;" />
        <div style="
          position: absolute;
          top: -18px;
          left: 50%;
          transform: translateX(-50%);
          color: ${textColor};
          font-weight: bold;
          font-size: 14px;
          pointer-events: none;
          white-space: nowrap;
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
    esriSatellite: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    openTopoMap: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    CyclOSM: "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
    vfr_faa: "https://tiles.arcgis.com/tiles/ssFJjBXIUyZDrSYZ/arcgis/rest/services/VFR_Sectional/MapServer/tile/{z}/{y}/{x}",
  };

  let providerUrl = "";
  if (map_mode === 1) providerUrl = providers.vfr_faa;
  else if (map_mode === 2) providerUrl = providers.openTopoMap;
  else if (map_mode === 3) providerUrl = providers.esriSatellite;
  else if (map_mode === 4) providerUrl = providers.CyclOSM;

  const allMarkers = [...markers, ...flightPlan];

  return (
    <MapContainer
      id="mapContainer"
      center={[lat, lng]}
      zoom={zoom}
      zoomAnimation={false}
      fadeAnimation={false}
      markerZoomAnimation={false}
    >
      <TileLayer url={providerUrl} />

      {flightPlanRoute.length > 1 && (
        <Polyline positions={flightPlanRoute} pathOptions={{ color: "magenta", weight: 2 }} />
      )}

      {allMarkers.map((wp, idx) => {
        const { textColor } = getWaypointInformation(wp.type);
        const headingToUse = wp.heading ?? heading;

        const cacheKey = `${idx}-${headingToUse}-${wp.type}-${wp.name}`;
        if (!iconsCache[cacheKey]) {
          iconsCache[cacheKey] = getWaypointDivIcon(wp.type, headingToUse, wp.name, textColor);
        }

        return (
          <Marker
            key={`marker-${idx}`}
            position={[wp.lat, wp.lng]}
            icon={iconsCache[cacheKey]}
          />
        );
      })}

      <PosHandler lat={lat} lng={lng} zoom={zoom} />
    </MapContainer>
  );
};

export default MapComponent;