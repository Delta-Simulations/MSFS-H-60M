import React, {Component} from 'react';
import {MapContainer, Marker, Polygon, TileLayer, Tooltip, useMap} from "react-leaflet";
// import VectorTileLayer from 'react-leaflet-vector-tile-layer';
import './MapComponent.scss';
import L, { Map as LMap } from "leaflet";
import {ThemeOptions, Typography} from "@mui/material";
/*import vectorTileLayer from 'leaflet-vector-tile-layer';
const url = 'https://api.tiles.openaip.net/api/data/openaip/{z}/{x}/{y}.pbf';

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

const layer = vectorTileLayer(url, options);*/


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

class MapComponent extends Component<IMapComponentProps, IMapComponentState> {
    constructor(props: IMapComponentProps) {
        super(props);

        this.state = {
            lat: this.props.lat,
            lng: this.props.lng,
            heading: this.props.heading,
            zoom: this.props.zoom,
            timestamp: 0,
            atcPos: null
        };
        this.getCurrentWeather = this.getCurrentWeather.bind(this);
        this.getAtcPositions = this.getAtcPositions.bind(this);
    }


    componentDidMount() {
        this.getCurrentWeather().then((timestamps) => { this.setState({timestamp: timestamps[timestamps.length - 1]}); });
        this.getAtcPositions();
    }

    getCurrentWeather(): Promise<Array<any>> {
        return fetch(

            'https://api.rainviewer.com/public/maps.json'
        )
            .then(function (response) {
                if (!response.ok) {
                    throw new Error();
                }
                return response.json();

            })
            .then(function (timestamps) {
                return timestamps.sort();
            });
    }

    getAtcPositions() {
        return fetch("https://cdn.orbxsystems.com/volanta/v1-network-controller.json")
            .then(function (response) {
                if (!response.ok) {
                    throw new Error();
                }

                return response.json();
            }).then(value => {
                const filtered = value["data"].filter((arr: { [x: string]: string | any[]; }) => {
                    return arr["polygon"].length > 0;
                });

                let atcPositions = new Map<String, Array<any>>();
                filtered.forEach((item: any) => {
                    atcPositions.set(item['session']['callsign'], item['polygon'][0]["polygon"]);
                })
                this.setState({atcPos: atcPositions});
            });
    }

    changeMapView({coords}) {
        const map = useMap();
        map.setView(coords, map.getZoom());

        return null;
    }

    providers = {
        lightCarto: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
        lightCartoNoLabels: "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
        lightCartoLabels: "https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png",
        voyagerCarto: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        voyagerCartoNoLabels: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png",
        voyagerCartoLabels: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png",
        darkCarto: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
        darkCartoNoLabels: "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
        darkCartoLabels: "https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png",
        esriSatellite: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        esriShadedRelief: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",
        cityLights: "https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default//GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg",
        stamenToner: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png",
        stamenTonerHybrid: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.png",
        stamenTonerLabels: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.png",
        stamenWatercolor: "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",
        stamenTerrainBackground: "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.png",
        openAIP: "https://{s}.tile.maps.openaip.net/geowebcache/service/tms/1.0.0/openaip_basemap@EPSG%3A900913@png/{z}/{x}/{y}.png",
        openTopoMap: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    }

    tileTextList = [
        "lightCarto", "voyagerCarto", "darkCarto"
    ]

    render() {
        return (
            <div id={"mapContainer"}>
                {/*<Typography
                    variant="body1">
                    Live Map
                </Typography>*/}

                <MapContainer id="mapContainer" className={"dashboard"} center={[0, 0]} zoom={2} scrollWheelZoom={true} >
                    <TileLayer
                        attribution='© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                        url={this.providers[this.tileTextList.includes(this.props.mapSettings.tiles) && this.props.mapSettings.openAIP ? this.props.mapSettings.tiles + "NoLabels" : this.props.mapSettings.tiles]}
                    />
                    {/* rain showers layer */}
                    {
                        this.state.timestamp !== 0 && this.state.timestamp !== undefined && this.props.mapSettings.weather ?
                            <TileLayer
                                url={"https://tilecache.rainviewer.com/v2/radar/" + this.state.timestamp + "/256/{z}/{x}/{y}/2/1_1.png"}
                                opacity={0.5}
                            /> : null
                    }
                    {
                        this.props.mapSettings.openAIP ?
                            <>
                                {/*<VectorTileLayer
                                    styleUrl={this.providers["openAIP"]}
                                />*/}
                                <TileLayer
                                    url={this.providers["openAIP"]}
                                    minZoom={4}
                                    maxZoom={12}
                                    tms={true}

                                    subdomains={'12'}
                                />
                            </>
                            : null
                    }

                    {/* vatsim online ATC layer  */}
                    { this.state.atcPos != null && this.props.mapSettings.vatsim
                        ? Array.from(this.state.atcPos, ([key, value]) => [key, value]).map((pos: any[]) => (
                            // @ts-ignore
                            <Polygon key={pos[0].toString()} pathOptions={{ color: this.props.theme !== undefined ? this.props.theme.palette.primary.main : "#3498db" }} positions={pos[1]}>
                                <Tooltip sticky>{pos[0]}</Tooltip>
                            </Polygon>
                        )) : <></>
                    }
                    {
                        this.props.mapSettings.tiles === "esriSatellite" || this.props.mapSettings.tiles == "cityLights" && this.props.mapSettings.openAIP != true ?
                            <TileLayer
                                url={this.providers["voyagerCartoLabels"]}
                                opacity={1}
                            /> : null
                    }
                    {
                        this.props.mapSettings.tiles == "stamenTerrainBackground" || this.props.mapSettings.tiles == "openTopoMap" && this.props.mapSettings.openAIP != true ?
                            <TileLayer
                                url={this.providers["stamenTonerHybrid"]}
                                opacity={1}
                            /> : null
                    }

                    {/*<Marker*/}
                    {/*    position={[this.state.lat, this.state.lng]}*/}
                    {/*    icon={L.divIcon({*/}
                    {/*        iconSize: [50, 50],*/}
                    {/*        iconAnchor: [25, 25],*/}
                    {/*        html: `<img src="<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#6f2dbd'><path d='M0 0h24v24H0z' fill='none'/><path d='M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'/></svg>" width="50" style="transform-origin: center; transform: rotate(${this.state.heading}deg);" />`,*/}
                    {/*    })}*/}
                    {/*/>*/}
                    {/*<this.changeMapView coords={[this.state.lat, this.state.lng]}/>*/}
                </MapContainer>
            </div>
        );
    }
}

export default MapComponent;