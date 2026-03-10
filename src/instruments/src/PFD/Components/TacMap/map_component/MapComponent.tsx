import React, { useEffect, useState } from "react";
import { MarkerProps, MapContainer, Marker, Popup, TileLayer, useMap, Polyline, Tooltip } from "react-leaflet";
import "./MapComponent.scss";
import { MilSymbol } from 'react-leaflet-milsymbol';
import L from "leaflet";
import "../../../style.scss";

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
interface IMapComponentProps {
	lat: number;
	lng: number;
	heading: number;
	zoom: number;
	map_mode: number;
	map_symbology: boolean;
	markers?: IWaypoint[];        // independent markers
	flightPlan?: IFlightPlan[];     // independent flight plan
}

interface RotatedMarkerProps extends MarkerProps {
  rotationAngle?: number;
  rotationOrigin?: string;
}
const MapComponent = (props: IMapComponentProps) => {
	const { lat, lng, zoom, heading, map_mode, markers = [], flightPlan = [] } = props;

	// Keep a ref for map centering
	const PosHandler = ({ lat, lng, zoom }) => {
		const map = useMap();
		useEffect(() => {
			map.setView([lat, lng], zoom, { animate: false });
		}, [lat, lng, zoom]);
		return null;
	};

	// Marker icon
	const waypointIcon = L.icon({
		iconUrl: "/Images/MFD/FMS_Waypoint.svg",
		iconSize: [32, 32],
		iconAnchor: [16, 16],
	});
	// Function to return icon based on waypoint type
const getWaypointInformation = (type?: string) => {
  let iconUrl = "/Images/MFD/FMS_Waypoint.svg";
  let textColor = "white";

  switch (type) {
    case "FMS_WP":
      iconUrl = "/Images/MFD/FMS_Waypoint.svg";
      textColor = "magenta";
      break;
    case "FMS_VOR":
      iconUrl = "/Images/MFD/VOR.svg";
      textColor = "white";
      break;
    case "FMS_VORTAC":
      iconUrl = "/Images/MFD/VORTAC.svg";
      textColor = "white";
      break;
    case "FMS_TACAN":
      iconUrl = "/Images/MFD/TACAN.svg";
      textColor = "white";
      break;
    case "FMS_NDB":
      iconUrl = "/Images/MFD/NDB.svg";
      textColor = "white";
      break;
    case "FMS_AIRPORT":
      iconUrl = "/Images/MFD/AIRPORT.svg";
      textColor = "white";
      break;
    case "FMS_INTERSECTION":
      iconUrl = "/Images/MFD/INTERSECTION.svg";
      textColor = "white";
      break;


    case "user":
      iconUrl = "/Images/MFD/UserMarker.svg";
      textColor = "lime";
      break;

    case "RendezVous_Point":
      iconUrl = "/Images/MFD/10012500001811000000.svg";
      textColor = "lime";
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

  return {
    icon: L.icon({
      iconUrl,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    }),
    textColor,
  };
};





	// Flight plan polyline coordinates
	const flightPlanRoute = flightPlan.map(wp => [wp.lat, wp.lng] as [number, number]);

	// Tile providers
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



{/* Flight plan polyline */}
{flightPlanRoute.length > 1 && (
  <Polyline positions={flightPlanRoute} pathOptions={{ color: "magenta", weight: 2 }} />
)}

/* Unified marker rendering for independent markers + flight plan waypoints */
{[...markers, ...flightPlan].map((wp, idx) => (
<Marker
  key={`marker-${idx}`}
  position={[wp.lat, wp.lng]}
  icon={getWaypointInformation(wp.type).icon}
  // rotation={{ angle: heading || 0, origin: 'center' }}

>
  {/* <Tooltip
    direction="top"
    offset={[0, -5]}
    permanent
    className="marker-tooltip"
  >
	<div style={{ color: getWaypointInformation(wp.type).textColor }}>{wp.name}</div>
  </Tooltip> */}
  </Marker>
))}

			<PosHandler lat={lat} lng={lng} zoom={zoom} />
		</MapContainer>
	);
};

export default MapComponent;