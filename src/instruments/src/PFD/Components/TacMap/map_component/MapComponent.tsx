import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet-rotate";
import "./MapComponent.scss";

const options = {
	// A function that will be used to decide whether to include a
	// feature or not. If specified, it will be passed the vector-tile
	// feature, the layer name and the zoom level. The default is to
	// include all features.
	filter: undefined, // default undefined

	// Specify zoom range in which tiles are loaded. Tiles will be
	// rendered from the same data for Zoom levels outside the range.
	minDetailZoom: undefined, // default undefined
	maxDetailZoom: undefined, // default undefined

	// Styling options for L.Polyline or L.Polygon. If it is a
	// function, it will be passed the vector-tile feature, the layer
	// name and the zoom level as parameters.
	style: undefined, // default undefined

	// This works like the same option for `Leaflet.VectorGrid`.
	vectorTileLayerStyles: undefined, // default undefined
};


interface IMapComponentProps {
	lat: number;
	lng: number;
	heading: number;
	zoom: number;
    map_mode: number;
	map_symbology: boolean;
}


const MapComponent = (props: IMapComponentProps) => {
	const { lat, lng, heading, zoom, map_mode, map_symbology } = props;
	// let mapRef = useRef();


	// https://stackoverflow.com/questions/65322670/change-center-position-of-react-leaflet-map
	const PosHandler = ({ lat, lng, zoom }) => {
		const map = useMap();
		useEffect(() => {
			map.setView([lat, lng], (zoom+1), { animate: false });
		}, [lat, lng, zoom]);

		return null;
	};
	
	const providers = {
		esriSatellite:
			"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
		openTopoMap: 
			"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
		CyclOSM:
			"https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
		bg: 
			"http://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/web/default/WEBMERCATOR/{z}/{y}/{x}.png",
		stamen:
			"https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
		arcGis_Topo:
			"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
		osm_1:
			"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
		vfr_faa:
			"https://tiles.arcgis.com/tiles/ssFJjBXIUyZDrSYZ/arcgis/rest/services/VFR_Sectional/MapServer/tile/{z}/{y}/{x}",

	};
	// CHART, TERRAIN, SATELLITE
	let providerUrl = "";
	let providerUrl_2 = "";
	// DISPLAY MODES
	if (map_mode === 1) { 			// CHART
			providerUrl = providers.vfr_faa;
	  } else if (map_mode === 2) { // TERRAIN
			providerUrl = providers.openTopoMap;
	  } else if (map_mode === 3) { // IMAGE
			providerUrl = providers.esriSatellite;
	  } else if (map_mode === 4) { //TERRAIN 2
			providerUrl = providers.CyclOSM;
	  }



	return (
		
			<MapContainer
				// whenCreated={(mapInstance) => {
				// 	mapRef.current = mapInstance;
				// }} transform={`rotate(${Map_Orientation ? ac_heading : 0}, 512, 384)` }

				id="mapContainer"
				center={[0, 0]}
				zoom={5}
				zoomAnimation={false}
				fadeAnimation={false}
				markerZoomAnimation={false}

			>
                <TileLayer url={providerUrl} />
				{/* Removed, unable to layer <TileLayer url={providerUrl_2} /> */}

				<PosHandler lat={lat} lng={lng} zoom={zoom} />
			</MapContainer>

	);
};

export default MapComponent;