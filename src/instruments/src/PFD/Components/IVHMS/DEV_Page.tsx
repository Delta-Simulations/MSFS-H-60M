import React, { useEffect, useRef } from 'react';
import { useMapData } from '../../../Common/MapDataProvider';
import { useSimVar } from '../../../Hooks/simVars';

export const Dev_Page = () => {

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