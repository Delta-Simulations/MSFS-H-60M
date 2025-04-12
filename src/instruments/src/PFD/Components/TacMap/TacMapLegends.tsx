import React from "react";
import "../../style.scss";
import { useSimVar } from "../../../Hooks/simVars";
import MapComponent from "./map_component/MapComponent";


export const TacMapLegends = ({ rotation }) => {
	const [Map_North_Compass] = useSimVar('L:H60_TAC_MAP_NORTH_ARROW', 'bool');


	return (
		<g>
			<g visibility={ Map_North_Compass ? "visible" : "hidden"}>
				<g transform={`rotate(${-rotation},212, 642)`}>
					<g transform={`translate(210,572)`}>
						<path d="M1 1V131H3.5V28.2901H10.5L1 1Z" fill="white" stroke="black" />
					</g>
				</g>
				<circle
					cx="212"
					cy="642"
					r="14.5"
					fill="black"
				/>
			<text
				x="211.5"
				y="649.5"
				fontSize={23}
				className="readouts"
				textAnchor="middle"
			>
				N
			</text>

			</g>
		</g>
	);
};