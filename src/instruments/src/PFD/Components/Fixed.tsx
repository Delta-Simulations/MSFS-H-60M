import React from "react";
import "../style.scss";
import { getDisplayIndex } from "../../Hooks/defaults";
import { useSimVar } from "../../Hooks/simVars";

export const Fixed = () => {
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
		</g>
	);
};
