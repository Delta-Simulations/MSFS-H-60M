import React from "react";
import "../../style.scss";
import { useSimVar } from "../../../Hooks/simVars";
import MapComponent from "./map_component/MapComponent";

  
export const TacMapScales = () => {

	const [TacMap_Scale] = useSimVar('L:H60_TAC_MAP_SCALE', 'enum');
	const [TacMap_Scale_Mode] = useSimVar('L:H60_TAC_MAP_SCALE_MODE', 'enum');
	const [Map_Center] = useSimVar('L:H60_TAC_MAP_CTR', 'bool');
	const [Map_Show_Legend] = useSimVar('L:H60_TAC_MAP_LEGEND_VIS', 'bool');
	let innerring = 0;
	let outerring = 0;

	switch (TacMap_Scale) {
		case 4:
		  innerring = 900;
		  outerring = 1800;
		  break;
		case 5:
		  innerring = 500;
		  outerring = 1000;
		  break;
		case 6:
		  innerring = 250;
		  outerring = 500;
		  break;
		case 7:
		  innerring = 150;
		  outerring = 300;
		  break;
		case 8:
		  innerring = 75;
		  outerring = 150;
		  break;
		case 9:
		  innerring = 35;
		  outerring = 70;
		  break;
		case 10:
		  innerring = 15;
		  outerring = 30;
		  break;
		case 11:
		  innerring = 7.5;
		  outerring = 15;
		  break;
		case 12:
		  innerring = 4;
		  outerring = 8;
		  break;
		case 13:
		  innerring = 2.5;
		  outerring = 5;
		  break;
		case 14:
		  innerring = 1;
		  outerring = 2;
		  break;
		case 15:
		  innerring = 0.5;
		  outerring = 1;
		  break;
		case 16:
		  innerring = 0.25;  
		  outerring = 0.5;
		  break;
		case 17:
		  innerring = 0.15;  
		  outerring = 0.25;
		  break;
		default:
			innerring = 5;
			outerring = 10;
			break;
	  }	

	return (
		<g>
			<defs>
				<clipPath id="top-half">
					<rect x="0" y="0" width="100%" height="50%" fill="none" />
				</clipPath>
			</defs>
			<g visibility={Map_Show_Legend ? "hidden" : "visible"}>
			<rect
				x={10}
				y={385}
				width={55 + 7.5 * outerring.toString().length}
				height={23}
				fill="#00000"
			/> 
			<text
				x="12"
				y="404"
				fontSize={19.5}
				className="readouts"
				textAnchor="start"
			>
				{outerring} NM
			</text>
			</g>
			<g transform={`translate(0, ${Map_Center ? 0 : 120})` }> 
				{TacMap_Scale_Mode >= 1 && (
					<><g clipPath={Map_Center == 0 ? "url(#top-half)" : "none"}>
						<circle
							cx="50%"
							cy="50%"
							r="375"
							fill="none"
							stroke="#323232"
							strokeWidth="6" />
						<circle
							cx="50%"
							cy="50%"
							r="375"
							fill="none"
							stroke="cyan"
							strokeWidth="3" />
						<circle
							cx="50%"
							cy="50%"
							r="182"
							fill="none"
							stroke="#323232"
							strokeWidth="6" />
						<circle
							cx="50%"
							cy="50%"
							r="182"
							fill="none"
							stroke="cyan"
							strokeWidth="3" />
					</g><rect
							x={690 - 4 * innerring.toString().length}
							y="49.3%"
							width={18 + 7 * innerring.toString().length}
							height="27"
							fill="#00000" />
						<rect
							x={879 - 5 * innerring.toString().length}
							y="49.3%"
							width={18 + 9.5 * innerring.toString().length}
							height="27"
							fill="#00000" />

						<text
							x="887"
							y="400"
							fontSize={19}
							fill="#00EE00"
							className="readouts"
							textAnchor="middle"
						>
							{outerring}
						</text><text
							x="697"
							y="400"
							fontSize={19}
							fill="#00EE00"
							className="readouts"
							textAnchor="middle"
						>
							{innerring}
						</text></>
				)}
			</g>


		</g>
	);
};