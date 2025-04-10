import React from "react";
import "../../style.scss";
import { useSimVar } from "../../../Hooks/simVars";
import MapComponent from "./map_component/MapComponent";
import { TacMapScales } from "./TacMapScales";

export const TacMap = ({ }) => {
	// SimVar hooks to fetch required data
	const [latitude] = useSimVar("GPS POSITION LAT", "degree");
	const [longitude] = useSimVar("GPS POSITION LON", "degree");
	const [ac_heading] = useSimVar("PLANE HEADING DEGREES GYRO", "degrees");
	const [zoom] = useSimVar("L:H60_TAC_MAP_SCALE", "number");

	let zoom_limited = Math.min(Math.max(zoom, 2), 17);

	const [Disp_mode] = useSimVar('L:H60_TAC_MAP_MODE', 'enum');
	const [Map_Declutter] = useSimVar('L:H60_TAC_MAP_DCLT', 'enum');
	const [Map_Orientation] = useSimVar('L:H60_TAC_MAP_ORIENT', 'bool');

	return (
		<>
			{/* Pass props correctly to MapComponent */}

			{
				Disp_mode < 3 && (
					<MapComponent
						lat={latitude}
						lng={longitude}
						heading={ac_heading}
						zoom={zoom_limited}
						map_mode={Disp_mode}
						map_symbology={Map_Declutter}
					/>
				)
			}
			<svg
				width="100%"
				height="100%"
				style={{
					position: "absolute",
					top: "0",
					left: "0",
					zIndex: "10000",
				}}
			>
				<g>
					<rect x={0} y={0} width={1024} height={768} fill="blue" visibility={Disp_mode > 2 ? "visible" : "hidden"} />
					<image xlinkHref="/Images/Tacmap.png" x={0} y={0} opacity={0} />

					<rect x={23} y={735} width={50} height={40} fill="#00000" />
					<rect
						x={124}
						y={735}
						width={39}
						height={40}
						fill="#00000"

					/>
					<rect
						x={200}
						y={735}
						width={80}
						height={40}
						fill="#00000"
					/>
					<rect
						x={856}
						y={735}
						width={53}
						height={40}
						fill="#00000"
					/>
					<rect
						x={946}
						y={735}
						width={65}
						height={40}
						fill="#00000"
					/>
					<line x1="50%" y1="49.1%" x2="50%" y2="53.5%" stroke="black" stroke-width="4" />
					<line x1="48.7%" y1="50%" x2="51.3%" y2="50%" stroke="black" stroke-width="4" />
					<line x1="49.4%" y1="53%" x2="50.6%" y2="53%" stroke="black" stroke-width="4" />

					<line x1="50%" y1="49.1%" x2="50%" y2="53.5%" stroke="white" stroke-width="2" />
					<line x1="48.7%" y1="50%" x2="51.3%" y2="50%" stroke="white" stroke-width="2" />
					<line x1="49.4%" y1="53%" x2="50.6%" y2="53%" stroke="white" stroke-width="2" />

					<TacMapScales />
				</g>
			</svg>
		</>
	);
};
