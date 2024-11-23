import React, { Component } from "react";
import {
	MapContainer,
	Marker,
	Polygon,
	TileLayer,
	Tooltip,
	useMap,
} from "react-leaflet";
import "./MapComponent.scss";
import { ThemeOptions, Typography } from "@mui/material";

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
	theme: ThemeOptions;
	mapSettings: string;
}

const MapComponent = (props: IMapComponentProps) => {
	const { lat, lng, heading, zoom, theme, mapSettings } = props;

	// const changeMapView = ({ coords }) => {
	// 	const map = useMap();
	// 	map.setView(coords, map.getZoom());

	// 	return null;
	// };

	const providers = {
		esriSatellite:
			"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
		openTopoMap: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
	};

	return (
		<div id={"mapContainer"}>
			<MapContainer
				id="mapContainer"
				className={"dashboard"}
				center={[0, 0]}
				zoom={2}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
					url={providers["openTopoMap"]}
				/>
			</MapContainer>
		</div>
	);
};

export default MapComponent;
