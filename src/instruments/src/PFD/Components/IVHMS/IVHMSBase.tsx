import React, { useEffect, useRef } from 'react';
import { useSimVar } from '../../../Hooks/simVars';
import { Dev_Page } from './DEV_Page';

export const IVHMSBase = () => {
	const [dtcLoaded] = useSimVar("L:H60_DTC_LOADED", "bool");
	const [atcId] = useSimVar("A:ATC ID", "string");
	const [atcFlightNumber] = useSimVar("A:ATC FLIGHT NUMBER", "string");
	const [acname] = useSimVar("A:TITLE", "string");
	let aircraft_name =
		typeof acname === "string" && acname.trim()
			? acname.trim()
			: "UH-60M";

	const [versionlvar] = useSimVar("L:H60_VERSION_ID", "number");


	const [debug_mode_active] = useSimVar(`L:H60_MFD_Debug_Mode`, "bool");


	return (

		<g >

			<text
				x="50%"
				y="52"
				fontSize={19.5}
				className="readouts"
				textAnchor="middle"
			>
				---------------------------&nbsp;&nbsp;&nbsp;&nbsp;MAIN-ADMIN&nbsp;&nbsp;&nbsp;&nbsp;---------------------------
			</text>
			<text
				x="50%"
				y="121"
				fontSize={19.5}
				className="readouts"
				textAnchor="middle"
			>
				------------------------------------------------------------------------
			</text>

			<text
				x="102"
				y="85"
				fontSize={19.5}
				className="readouts"
				textAnchor="start"
			>
				DTS STATUS : {dtcLoaded ? "LOADED" : "NOT LOADED"}
			</text>

			<text
				x="400"
				y="85"
				fontSize={19.5}
				className="readouts"
				textAnchor="start"
			>
				AIRCRAFT VERSION: {versionlvar}
			</text>
			<text
				x="720"
				y="85"
				fontSize={19.5}
				className="readouts"
				textAnchor="start"
			>
				IEVENT: 0 REM
			</text>

			<text
				x="50%"
				y="153"
				fontSize={19.5}
				className="readouts"
				textAnchor="middle"
			>
				ADMINISTRATION ( ADMIN )
			</text>

			<text
				x="50%"
				y="220"
				fontSize={19.5}
				className="readouts"
				textAnchor="middle"
			>
				AIRCRAFT CONFIGURATION
			</text>


			<text
				x="50%"
				y="286"
				fontSize={19.5}
				className="readouts"
				textAnchor="middle"
			>
				TYPE / MODEL : {aircraft_name}
			</text>


			<text
				x="50%"
				y="352"
				fontSize={19.5}
				className="readouts"
				textAnchor="middle"
			>
				TAIL NUMBER: #{atcId}#{atcFlightNumber}
			</text>

			<text
				x="50%"
				y="418"
				fontSize={19.5}
				className="readouts"
				textAnchor="middle"
			>
				CAGE CODE: 15123
			</text>


			<text
				x="50%"
				y="690"
				fontSize={19.5}
				className="readouts"
				textAnchor="middle"
			>
				* TO LOGIN AS ADMINISTRATOR PRESS ADMIN LOGIN *
			</text>


			{debug_mode_active && (
				<>
					<rect
						x="260"
						y="655"
						width="500"
						height="60"
						fill="black"
						stroke='cyan'
						strokeWidth={3}
						strokeDasharray={10}
					/>
					<Dev_Page />
					<text
						x="50%"
						y="690"
						fontSize={19.5}
						className="tacmap_cyantext"
						textAnchor="middle"
						fill='cyan'
					>
						* DEBUG MODE ACTIVE *
					</text>
					</>
			)}

			<text
				x="50%"
				y="720"
				fontSize={19.5}
				className="readouts"
				textAnchor="middle"
			>
				_____________________________________________________________________
			</text>

			<text
				x="1008"
				y="541"
				fontSize={19.5}
				className="readouts"
				textAnchor="end"
			>
				ADMIN LOGIN
			</text>




		</g>
	);
};