import React from "react";
import "../style.scss";
import { getDisplayIndex } from "../../Hooks/defaults";
import { useSimVar } from "../../Hooks/simVars";

export const Fixed = () => {
	return (
		<g>
			{/* FIXED BEZELS */}
			<text
				x={27}
				y={758}
				fontSize={21}
				fill="#00EE00"
				className="readouts"
				textAnchor="start"
			>
				PFD
			</text>

			<text
				x={129}
				y={758}
				fontSize={21}
				fill="#00EE00"
				className="readouts"
				textAnchor="start"
			>
				ND
			</text>

			<text
				x={206}
				y={758}
				fontSize={21}
				fill="#00EE00"
				className="readouts"
				textAnchor="start"
			>
				EICAS
			</text>

			<text
				x={862}
				y={758}
				fontSize={21}
				fill="#00EE00"
				className="readouts"
				textAnchor="start"
			>
				TAC
			</text>

			<text
				x={950}
				y={758}
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
