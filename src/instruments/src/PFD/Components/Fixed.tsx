import React, { useState, useEffect } from "react";
import "../style.scss";
import { getDisplayIndex } from "../../Hooks/defaults";
import { useSimVar } from "../../Hooks/simVars";

export const Fixed = () => {
	let DisplayID = getDisplayIndex();

	const [showOverlay, setShowOverlay] = useState(true);
	const [DISP_TYPE] = useSimVar(`L:H60_MFD_${DisplayID}_MODE`, "enum");
	const [PFD_NavMap_Mode] = useSimVar(`L:H60_MFD_NavMap_Mode`, "enum");

	let navmap_mode_names = ["FULL", "HOVER", "ARC"];
	let navmap_mode_name = navmap_mode_names[PFD_NavMap_Mode];


	useEffect(() => {
		const timer = setTimeout(() => {
			setShowOverlay(false);
		}, (3000)); // 3 seconds

		return () => clearTimeout(Math.floor(Math.random() * (4100 - 2500+ 1)) + 2500); // Cleanup just in case
	}, []);

	return (
		<g>
			
			{/* FIXED BEZELS */}
			<text
				x={26}
				y={759}
				fontSize={21}
				fill="#00EE00"
				className="readouts"
				textAnchor="start"
			>
				PFD
			</text>

			<text
				x={121.5}
				y={759}
				fontSize={21}
				fill="#00EE00"
				className="readouts"
				textAnchor="start"
			>
				ND
			</text>

			<text
				x={195}
				y={759}
				fontSize={21}
				fill="#00EE00"
				className="readouts"
				textAnchor="start"
			>
				EICAS
			</text>

			<text
				x={857}
				y={759}
				fontSize={21}
				fill="#00EE00"
				className="readouts"
				textAnchor="start"
			>
				TAC
			</text>

			<text
				x={942}
				y={759}
				fontSize={21}
				fill="#00EE00"
				className="readouts"
				textAnchor="start"
			>
				JMVF
			</text>

			<text
				x={812}
				y={759}
				fontSize={21}
				fill="#00EE00"
				className="readouts"
				textAnchor="end"
			>
				{navmap_mode_name}
			</text>



			{/* Blue Overlay */}
			{showOverlay && (
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
