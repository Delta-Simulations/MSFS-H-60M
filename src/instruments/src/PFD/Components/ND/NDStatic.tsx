import React from 'react';
import "../../style.scss";
import { useSimVar } from '../../../Hooks/simVars';
import { createRadialLines } from '../../../Common/DrawShapes';
import { RadarAltCircle } from '../PFD/RadarAltCircle';
import { NDFullDisplay } from './NDFullDisplay';

export const NDStatic = () => {
	const [Map_Orientation] = useSimVar("L:H60_TAC_MAP_ORIENT", "bool");
	let [ac_heading] = useSimVar("A:PLANE HEADING DEGREES GYRO", "degrees");
	ac_heading = Math.round(ac_heading * 100) / 100;
	return (
		<g>
			<g transform="translate(10,-358)">
				<RadarAltCircle />
			</g>

			{/* Aircraft symbol */}
			<g
				transform={`translate(-103, -2) rotate(${Map_Orientation ? ac_heading : 0
					}, 512, 384)`}
			>
				<line
					x1="50%"
					y1="49.1%"
					x2="50%"
					y2="53.5%"
					stroke="black"
					strokeWidth={4}
				/>
				<line
					x1="48.7%"
					y1="50%"
					x2="51.3%"
					y2="50%"
					stroke="black"
					strokeWidth={4}
				/>
				<line
					x1="49.4%"
					y1="53%"
					x2="50.6%"
					y2="53%"
					stroke="black"
					strokeWidth={4}
				/>

				<line
					x1="50%"
					y1="49.1%"
					x2="50%"
					y2="53.5%"
					stroke="white"
					strokeWidth={2}
				/>
				<line
					x1="48.7%"
					y1="50%"
					x2="51.3%"
					y2="50%"
					stroke="white"
					strokeWidth={2}
				/>
				<line
					x1="49.4%"
					y1="53%"
					x2="50.6%"
					y2="53%"
					stroke="white"
					strokeWidth={2}
				/>
			</g>


			<NDFullDisplay />
		</g>
	)
};
