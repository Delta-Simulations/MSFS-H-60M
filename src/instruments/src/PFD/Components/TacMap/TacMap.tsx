import React, { useState } from "react";
import "../../style.scss";
import { useSimVar } from "../../../Hooks/simVars";
import MapComponent from "./map_component/MapComponent";
import { TacMapScales } from "./TacMapScales";
import { TacMapSideBar } from "./TacMapSideBar";
import { TacMapLegends } from "./TacMapLegends";

export const TacMap = ({ }) => {
	// SimVar hooks to fetch required data
	const [latitude] = useSimVar("A:GPS POSITION LAT", "degree");
	const [longitude] = useSimVar("A:GPS POSITION LON", "degree");
	let [ac_heading] = useSimVar("A:PLANE HEADING DEGREES GYRO", "degrees");
	const [zoom] = useSimVar("L:H60_TAC_MAP_SCALE", "number");
	ac_heading = Math.round(ac_heading*100)/100
	let heading_adjusted = 0
	let zoom_limited = Math.min(Math.max(zoom, 5), 17);

	const [Disp_mode] = useSimVar('L:H60_TAC_MAP_MODE', 'enum');
	const [Map_Declutter] = useSimVar('L:H60_TAC_MAP_DCLT', 'enum');
	const [Map_Orientation] = useSimVar('L:H60_TAC_MAP_ORIENT', 'bool');
	const [Map_Center] = useSimVar('L:H60_TAC_MAP_CTR', 'bool');

	if (Map_Orientation == 1) {
		heading_adjusted = 0
	} else {
		heading_adjusted = ac_heading
	}


	return (
		<>

{
	Disp_mode < 5 && (
			<div
				style={{
					width: "1280px", // generous buffer
					height: "1524px", // generous buffer
					position: "absolute",
					top: Map_Center ? "-398px" : "-278px",   // (1024 - 768) / 2
					left: "-128px",  // (1280 - 1024) / 2
					transform: `rotate(${-heading_adjusted}deg)`,
					transformOrigin: "center center",
				}}
			>
				<MapComponent
					key={Disp_mode}
					lat={latitude}
					lng={longitude}
					heading={heading_adjusted}
					zoom={zoom_limited}
					map_mode={Disp_mode}
					map_symbology={Map_Declutter}
				/>
			</div>

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
					<g visibility={Disp_mode > 4 ? "visible" : "hidden"}>
						<rect x={0} y={0} width={1024} height={768} fill="blue"  />
						<rect
							x={355}
							y={618}
							width={321}
							height={23}
							fill="#00000"
							stroke="white"
							strokeWidth={1.5}
						/>
						<text
							x="515"
							y="635"
							fontSize={19.5}
							className="readouts"
							textAnchor="middle"
						>
							SELECTED MAP MODE NOT AVAIL
						</text>
					</g>




					{/* <image xlinkHref="/Images/Tacmap.png" x={0} y={0} opacity={0.4} /> */}
					
					<rect x={25} y={741} width={40} height={22.5} fill="#00000" />



					<g transform={`translate(0, ${Map_Center ? 0 : 120}) rotate(${Map_Orientation ? ac_heading : 0}, 512, 384)` }> 
						<line x1="50%" y1="49.1%" x2="50%" y2="53.5%" stroke="black" stroke-width="4" />
						<line x1="48.7%" y1="50%" x2="51.3%" y2="50%" stroke="black" stroke-width="4" />
						<line x1="49.4%" y1="53%" x2="50.6%" y2="53%" stroke="black" stroke-width="4" />

						<line x1="50%" y1="49.1%" x2="50%" y2="53.5%" stroke="white" stroke-width="2" />
						<line x1="48.7%" y1="50%" x2="51.3%" y2="50%" stroke="white" stroke-width="2" />
						<line x1="49.4%" y1="53%" x2="50.6%" y2="53%" stroke="white" stroke-width="2" />
					</g>
					
					<TacMapScales/>
					<TacMapLegends rotation={ac_heading} />

					<TacMapSideBar />
					<image xlinkHref="/Images/MPD_AVIONICS11.png" x={0} y={0} opacity={0} />
				</g>
			</svg>
		</>
	);
};
