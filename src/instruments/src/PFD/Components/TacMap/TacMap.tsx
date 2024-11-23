import React from "react";
import "../../style.scss";
import { useSimVar } from "../../../Hooks/simVars";
import MapComponent from "./map_component/MapComponent";

export const TacMap = ({}) => {
	// SimVar hooks to fetch required data
	const [latitude] = useSimVar("GPS POSITION LAT", "degree");
	const [longitude] = useSimVar("GPS POSITION LON", "degree");
	const [heading] = useSimVar("PLANE HEADING DEGREES GYRO", "degrees");
	const [zoom] = useSimVar("L:PFD_MAP_ZOOM", "number");

    const [Disp_mode] = useSimVar('L:H60_TAC_MAP_MODE', 'enum');


	return (
		<>
			{/* Pass props correctly to MapComponent */}
			<MapComponent
				lat={latitude}
				lng={longitude}
				heading={heading}
				zoom={zoom}
                map_mode={Disp_mode}
			/>
			<svg
				width="100%"
				height="100%"
				style={{
					position: "absolute",
					top: "0",
					left: "0",
					zIndex: "10000",
				}}
			>
				<g>
					<rect x={23} y={735} width={50} height={40} fill="#00000" />
					<rect
						x={124}
						y={735}
						width={39}
						height={40}
						fill="#00000"
					/>
					<rect
						x={200}
						y={735}
						width={80}
						height={40}
						fill="#00000"
					/>
					<rect
						x={856}
						y={735}
						width={53}
						height={40}
						fill="#00000"
					/>
					<rect
						x={946}
						y={735}
						width={65}
						height={40}
						fill="#00000"
					/>
                    <line x1="50%" y1="40%" x2="50%" y2="50%" stroke="white" stroke-width="4"/>


				</g>
			</svg>
		</>
	);
};
