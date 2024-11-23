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

interface IMapComponentState {
	lat: number;
	lng: number;
	heading: number;
	zoom: number;
	timestamp: number;
	atcPos: any;
}

interface IMapComponentProps {
	lat: number;
	lng: number;
	heading: number;
	zoom: number;
    map_mode: number;
}


const MapComponent = (props: IMapComponentProps) => {
	const { lat, lng, heading, zoom } = props;
	// let mapRef = useRef();


	// https://stackoverflow.com/questions/65322670/change-center-position-of-react-leaflet-map
	const PosHandler = ({ lat, lng, rot, zoom }) => {
		const map = useMap();
		useEffect(() => {
			map.setView([lat, lng], zoom, { animate: false });
		}, [lat, lng, zoom]);

		useEffect(() => {
			map.setBearing(rot);
		}, [rot]);

		return null;
	};

	const providers = {
		esriSatellite:
			"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
		openTopoMap: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
		CyclOSM:
			"https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
		bg: "http://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/web/default/WEBMERCATOR/{z}/{y}/{x}.png",
		openaip:
			"https://api.tiles.openaip.net/api/data/openaip/{z}/{x}/{y}.png?apiKey=0396e876c80eaf82d1103890d3fb0d32",
	};

	return (
		<div style={{ height: "100%", width: "100%" }}>
			<MapContainer
				// whenCreated={(mapInstance) => {
				// 	mapRef.current = mapInstance;
				// }}
				id="mapContainer"
				center={[0, 0]}
				rotate={true}
				zoom={5}
				zoomAnimation={false}
				fadeAnimation={false}
				markerZoomAnimation={false}
				bearing={0}
			>
                <TileLayer url={providers["CyclOSM"]} />
				<TileLayer url={providers["openaip"]} />
				<PosHandler lat={lat} lng={lng} rot={heading} zoom={zoom} />
			</MapContainer>
		</div>
	);
};

export default MapComponent;
