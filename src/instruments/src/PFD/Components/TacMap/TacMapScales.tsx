import React from "react";
import "../../style.scss";
import { useSimVar } from "../../../Hooks/simVars";
import MapComponent from "./map_component/MapComponent";

type TacMapScalesProps = {
	innerring: number;
	outerring: number;
  };
  
  export const TacMapScales: React.FC<TacMapScalesProps> = ({ innerring, outerring }) => {

	const [TacMap_Scale] = useSimVar('L:H60_TAC_MAP_SCALE', 'enum');
	const [TacMap_Scale_Mode] = useSimVar('L:H60_TAC_MAP_SCALE_MODE', 'enum');
	
	switch (TacMap_Scale) {
		case 'specificValue1':
		  variable1 = 10;
		  variable2 = 20;
		  break;
		case 'specificValue2':
		  variable1 = 30;
		  variable2 = 40;
		  break;
		default:
		  // do nothing or set default values
	  }

	return (
		<svg width="100%" height="100%">
			<defs>
				<clipPath id="top-half">
					<rect x="0" y="0" width="100%" height="50%" fill="none" />
				</clipPath>
			</defs>
			{TacMap_Scale_Mode >= 1 && (
				<><g clipPath={TacMap_Scale_Mode == 2 ? "url(#top-half)" : "none"}>
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
						x={689-3*innerring.toString().length}
						y="49.3%"
						width={18+6*innerring.toString().length}
						height="27"
						fill="#00000" />
						<rect
						x={872-3*outerring.toString().length}
						y="49.3%"
						width={18+6*innerring.toString().length}
						height="27"
						fill="#00000" />
						
						<text
							x="887"
							y="400"
							fontSize={21}
							fill="#00EE00"
							className="readouts"
							textAnchor="middle"
						>
						{outerring}
					</text><text
						x="697"
						y="400"
						fontSize={21}
						fill="#00EE00"
						className="readouts"
						textAnchor="middle"
					>
						{innerring}
					</text></>
			)}



		</svg>
	);
};