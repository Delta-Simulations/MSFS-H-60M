import React from "react";
import "../../style.scss";
import { useSimVar } from "../../../Hooks/simVars";

export const TacMapSideBar = ({ }) => {
	// SimVar hooks to fetch required data
	const [latitude] = useSimVar("GPS POSITION LAT", "degree");
	const [longitude] = useSimVar("GPS POSITION LON", "degree");
	const [ac_heading] = useSimVar("PLANE HEADING DEGREES GYRO", "degrees");
	const [zoom] = useSimVar("L:H60_TAC_MAP_SCALE", "number");
	let heading_adjusted = 0

	const [Disp_mode] = useSimVar('L:H60_TAC_MAP_MODE', 'enum');
	const [Map_Declutter] = useSimVar('L:H60_TAC_MAP_DCLT', 'enum');
	const [Map_Orientation] = useSimVar('L:H60_TAC_MAP_ORIENT', 'bool');

	if (Map_Orientation == 1) {
		heading_adjusted = 0
	} else {
		heading_adjusted = ac_heading
	}

	return (

		<g>
			<rect
				x={121}
				y={741}
				width={26}
				height={22.5}
				fill="#00000"

			/>
			<rect
				x={195}
				y={741}
				width={63}
				height={22.5}
				fill="#00000"

			/>
			<rect
				x={856}
				y={741}
				width={39}
				height={22.5}
				fill="#00000"

			/>
			<rect
				x={941}
				y={741}
				width={53}
				height={22.5}
				fill="#00000"

			/>

			<rect
				x={10}
				y={125}
				width={76}
				height={45}
				fill="#00000"
			/>
			<text
				x="12"
				y="144"
				fontSize={19.5}
				className="tacmap_cyantext"
				textAnchor="start"
			>
				ORIENT
			</text>
			<text
				x="12"
				y="165"
				fontSize={19.5}
				className="readouts"
				textAnchor="start"
			>
				{Map_Orientation ? 'NORTH' : 'HDG'}
			</text>

			<rect
				x={10}
				y={273}
				width={85}
				height={45}
				fill="#00000"
			/>
			<text
				x="12"
				y="292"
				fontSize={19.5}
				className="tacmap_cyantext"
				textAnchor="start"
			>
				SCALE
			</text>
			<text
				x="12"
				y="314"
				fontSize={19.5}
				className="readouts"
				textAnchor="start"
			>
				1:250K
			</text>

			<rect
				x={10}
				y={385}
				width={65}
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
				{0} NM
			</text>


			<rect
				x={10}
				y={472}
				width={65}
				height={45}
				fill="#00000"
			/>

			<text
				x="12"
				y="490"
				fontSize={19.5}
				className="tacmap_cyantext"
				textAnchor="start"
			>
				ZOOM
			</text>
			<text
				x="12"
				y="512"
				fontSize={19.5}
				className="readouts"
				textAnchor="start"
			>
				{zoom}X
			</text>




			<rect
				x={17}
				y={235}
				width={25}
				height={25}
				fill="#00000"
			/>
			<rect
				x={17}
				y={335}
				width={25}
				height={25}
				fill="#00000"
			/>
			<g transform="translate(20, 239) scale(0.15)">
				<path d="M55.9378 3.50001C58.6321 -1.16666 65.3679 -1.16667 68.0622 3.5L122.622 98C125.316 102.667 121.948 108.5 116.56 108.5H7.44042C2.05182 108.5 -1.31608 102.667 1.37823 98L55.9378 3.50001Z" fill="#D9D9D9" />
			</g>

			<g transform="translate(20, 356) scale(0.15, -0.15 )">
				<path d="M55.9378 3.50001C58.6321 -1.16666 65.3679 -1.16667 68.0622 3.5L122.622 98C125.316 102.667 121.948 108.5 116.56 108.5H7.44042C2.05182 108.5 -1.31608 102.667 1.37823 98L55.9378 3.50001Z" fill="#D9D9D9" />
			</g>
			<rect
				x={17}
				y={435}
				width={25}
				height={25}
				fill="#00000"
			/>
			<rect
				x={17}
				y={535}
				width={25}
				height={25}
				fill="#00000"
			/>
			<g transform="translate(20, 439) scale(0.15)">
				<path d="M55.9378 3.50001C58.6321 -1.16666 65.3679 -1.16667 68.0622 3.5L122.622 98C125.316 102.667 121.948 108.5 116.56 108.5H7.44042C2.05182 108.5 -1.31608 102.667 1.37823 98L55.9378 3.50001Z" fill="#D9D9D9" />
			</g>

			<g transform="translate(20, 556) scale(0.15, -0.15 )">
				<path d="M55.9378 3.50001C58.6321 -1.16666 65.3679 -1.16667 68.0622 3.5L122.622 98C125.316 102.667 121.948 108.5 116.56 108.5H7.44042C2.05182 108.5 -1.31608 102.667 1.37823 98L55.9378 3.50001Z" fill="#D9D9D9" />
			</g>


		</g>

	);
};
