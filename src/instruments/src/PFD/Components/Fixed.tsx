import React, { useState, useEffect } from "react";
import "../style.scss";
import { getDisplayIndex } from "../../Hooks/defaults";
import { useSimVar } from "../../Hooks/simVars";

export const Fixed = () => {
	let DisplayID = getDisplayIndex();

	
	const [DISP_TYPE] = useSimVar(`L:H60_MFD_${DisplayID}_MODE`, "enum");
	const [PFD_NavMap_Mode] = useSimVar(`L:H60_MFD_NavMap_Mode`, "enum");
	const [debug_mode_active] = useSimVar(`L:H60_MFD_Debug_Mode`, "bool");	
	let pfd_map_mode_names = ["FULL", "HOVER", "ARC"];
	let nd_mode_names = ["FULL", "PLAN"];
	let pfd_map_mode_name = pfd_map_mode_names[DISP_TYPE];
	let nd_mode_name = nd_mode_names[0];

	const [showOverlay, setShowOverlay] = useState(true);
	useEffect(() => {
		// Random delay between 2500ms and 6000ms
		const delay = Math.floor(Math.random() * (7000 - 3000 + 1)) + 2500;
	  
		const timer = setTimeout(() => {
		  setShowOverlay(false);
		}, delay);
	  
		return () => clearTimeout(timer); // Clear the actual timeout
	  }, []);




	

	return (
		<g>
			
			{/* FIXED BEZELS */}
			<text
				x={26}
				y={759}
				fontSize={21}
				className="readouts"
				textAnchor="start"
			>
				PFD
			</text>

			<text
				x={121.5}
				y={759}
				fontSize={21}
				className="readouts"
				textAnchor="start"
			>
				ND
			</text>

			<text
				x={195}
				y={759}
				fontSize={21}
				className="readouts"
				textAnchor="start"
			>
				EICAS
			</text>

			<text
				x={857}
				y={759}
				fontSize={21}
				className="readouts"
				textAnchor="start"
			>
				TAC
			</text>

			<text
				x={942}
				y={759}
				fontSize={21}

				className="readouts"
				textAnchor="start"
			>
				JMVF
			</text>

			<text
				visibility={DISP_TYPE == 0 ? "visible" : "hidden"}
				x={812}
				y={759}
				fontSize={21}

				className="readouts"
				textAnchor="end"
			>
				{pfd_map_mode_name}
			</text>
			<text
				visibility={DISP_TYPE == 1 ? "visible" : "hidden"}
				x={812}
				y={759}
				fontSize={21}
					
				className="readouts"
				textAnchor="end"
			>
				{nd_mode_name}
			</text>


			{/* Blue Overlay */}
			{showOverlay && ! debug_mode_active && (
				<rect
					x="0"
					y="0"
					width="100%"
					height="100%"
					fill="#998e3f"
					opacity={1}
					
				/>
			)}

		</g>
	);
};
