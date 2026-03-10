import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap, Polyline, Tooltip } from "react-leaflet";
import L from "leaflet";
import "./MapComponent.scss";
import { MilSymbol } from 'react-leaflet-milsymbol';

interface IWaypoint {
  lat: number;
  lng: number;
  name?: string;
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
  flightPlan?: IWaypoint[];     // independent flight plan
}

const MapComponent = (props: IMapComponentProps) => {
  const { lat, lng, zoom, map_mode, markers = [], flightPlan = [] } = props;

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
    iconUrl: "/Images/WP_Icon.png",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

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



      {/* Markers */}
      {markers.map((wp, idx) => (
  <Marker key={idx} position={[wp.lat, wp.lng]} icon={waypointIcon}>
    {/* Permanently show the name above the marker */}
    <Tooltip direction="top" offset={[0, -16]} permanent>
      {wp.name}
    </Tooltip>
  </Marker>
  
      ))}



	{/* Flight plan polyline */}
      {flightPlanRoute.length > 1 && (
        <Polyline positions={flightPlanRoute} pathOptions={{ color: "magenta", weight: 2 }} />
      )}

      <PosHandler lat={lat} lng={lng} zoom={zoom} />
    </MapContainer>
  );
};

export default MapComponent;