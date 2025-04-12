import React from "react";
import "../../style.scss";
import { useSimVar } from "../../../Hooks/simVars";

export const TacMapSideBar = ({ }) => {
	// SimVar hooks to fetch required data
	const [latitude] = useSimVar("GPS POSITION LAT", "degree");
	const [longitude] = useSimVar("GPS POSITION LON", "degree");
	const [ac_heading] = useSimVar("PLANE HEADING DEGREES GYRO", "degrees");
	const [zoom] = useSimVar("L:H60_TAC_MAP_SCALE", "number");
	

	const [Disp_mode] = useSimVar('L:H60_TAC_MAP_MODE', 'enum');
	const [Map_Declutter] = useSimVar('L:H60_TAC_MAP_DCLT', 'enum');
	const [Map_Orientation] = useSimVar('L:H60_TAC_MAP_ORIENT', 'bool');
	const [Map_Center] = useSimVar('L:H60_TAC_MAP_CTR', 'bool');
	const [Map_Show_Legend] = useSimVar('L:H60_TAC_MAP_LEGEND_VIS', 'bool');

	let heading_adjusted = 0
	if (Map_Orientation == 1) {
		heading_adjusted = 0
	} else {
		heading_adjusted = ac_heading
	}

	return (

		<g >
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

				{/* ABOVE IS FOR MFD PAGE OPTIONS */}
			<g visibility={Map_Show_Legend ? "hidden" : "visible"}>

				{/* LEFT HAND SIDE ==================================== */}
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
					x={10}
					y={633}
					width={65}
					height={23}
					fill="#00000"
				/>
				<text
					x="12"
					y="651"
					fontSize={19.5}
					className="readouts"
					textAnchor="start"
				>
					NORTH
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
				{/* TOP SIDE ==================================== */}
				<rect
					x={596}
					y={10}
					width={86}
					height={45}
					fill="#00000"
				/>
				<text
					x="598"
					y="26"
					fontSize={19.5}
					className="tacmap_cyantext"
					textAnchor="start"
				>
					MAP CTR
				</text>
				<text
					x="633"
					y="47"
					fontSize={19.5}
					className="readouts"
					textAnchor="middle"
				>
					{Map_Center ? 'CTR' : 'DCTR'}
				</text>

				<rect
					x={113}
					y={10}
					width={53}
					height={45}
					fill="#00000"
				/>
				<text
					x="123"
					y="26"
					fontSize={19.5}
					className="tacmap_cyantext"
					textAnchor="start"
				>
					SYM
				</text>
				<text
					x="140"
					y="47"
					fontSize={19.5}
					className="readouts"
					textAnchor="middle"
				>
					DECL
				</text>
				<rect
					x={223}
					y={10}
					width={63}
					height={45}
					fill="#00000"
				/>
				<text
					x="237"
					y="26"
					fontSize={19.5}
					className="tacmap_cyantext"
					textAnchor="start"
				>
					HAT
				</text>
				<text
					x="255"
					y="47"
					fontSize={19.5}
					className="readouts"
					textAnchor="middle"
				>
					OFF
				</text>

				<rect
					x={322}
					y={10}
					width={97}
					height={45}
					fill="#00000"
				/>
				<text
					x="353"
					y="26"
					fontSize={19.5}
					className="tacmap_cyantext"
					textAnchor="start"
				>
					TIV
				</text>
				<text
					x="371"
					y="47"
					fontSize={19.5}
					className="readouts"
					textAnchor="middle"
				>
					BARO ALT
				</text>




{/* RIGHT SIDE =================== */}

				<rect
					x={935}
					y={137}
					width={75}
					height={23}
					fill="#00000"
				/>
				<text
					x="1007"
					y="154"
					fontSize={19.5}
					className="readouts"
					textAnchor="end"
				>
					CHART{">"}
				</text>
				<rect
					x={900}
					y={236}
					width={110}
					height={23}
					fill="#00000"
				/>
				<text
					x="1007"
					y="254"
					fontSize={19.5}
					className="readouts"
					textAnchor="end"
				>
					OVERLAYS{">"}
				</text>
				<rect
					x={924}
					y={336}
					width={86}
					height={23}
					fill="#00000"
				/>
				<text
					x="1007"
					y="353"
					fontSize={19.5}
					className="readouts"
					textAnchor="end"
				>
					CONFIG{">"}
				</text>
				<rect
					x={946}
					y={433}
					width={64}
					height={23}
					fill="#00000"
				/>
				<text
					x="1007"
					y="451"
					fontSize={19.5}
					className="readouts"
					textAnchor="end"
				>
					POSN{">"}
				</text>

				<rect
					x={936}
					y={522}
					width={78}
					height={45}
					fill="#00000"
				/>
				<text
					x="1008"
					y="541"
					fontSize={19.5}
					className="tacmap_cyantext"
					textAnchor="end"
				>
					MAP
				</text>
				<text
					x="1010"
					y="563"
					fontSize={19.5}
					className="readouts"
					textAnchor="end"
				>
					{['','CHART', 'TERR', 'IMAGE', 'TERR2', 'CHART'][Disp_mode]}
				</text>




			</g>
		
			<rect
					x={936}
					y={633}
					width={75}
					height={23}
					fill="#00000"
				/>
				<text
					x="1010"
					y="651"
					fontSize={19.5}
					className="readouts"
					textAnchor="end"
				>
					LEGEND
				</text>

		</g>
	);
};
