import React, { useEffect } from "react";
import { render } from "../Hooks/index";
import { useSimVar } from "../Hooks/simVars";
import { Fixed } from "./Components/Fixed";
import { getDisplayIndex } from "../Hooks/defaults";


import { EICAS } from "./Components/EICAS/EICAS";
import { EICASExtTanks } from "./Components/EICAS/EICASExtTanks";
import { Electricity_MFD } from "../Common/circuit";
import "./style.scss";

import { NDBase } from "./Components/ND/NDBase";
import { TacMap } from "./Components/TacMap/TacMap";
import { PFDBase } from "./Components/PFD/PFDBase";
import { Horizon } from "../AP/Components/horizon";
import { MapDataProvider } from "../Common/MapDataProvider";
import { JMVFBase } from "./Components/JMVF/JMVFBase";
import { IVHMSBase } from "./Components/IVHMS/IVHMSBase";

const PFD = () => {


	let DisplayID = getDisplayIndex();
	let displaycontrols = `L:H60_MFD_${DisplayID}_MODE`;

	const [DISP_TYPE] = useSimVar(displaycontrols, "enum");
	const [Ext_Tanks] = useSimVar("L:ADDITIONSVIS", "enum");


	return (
		<Electricity_MFD powerVar={`L:H60_MFD_${DisplayID}_PWR`}>
			<MapDataProvider>
				<div
					style={{
						position: "absolute",
						top: 0,
						width: "1024px",
						height: "768px",
						
					}}
				>
					{DISP_TYPE === 1 && <NDBase />}
					
				</div>
				<div
					style={{
						position: "absolute",
						top: 0,
						width: "1024px",
						height: "768px",
						
					}}
				>
					{DISP_TYPE === 4 && <TacMap />}
				</div>

				<svg
					viewBox="0 0 1024 768"
					style={{ position: "absolute", top: 0, zIndex: 100000 }}
				>
					<g>
						{/* PFD SPECIFIC */}

						<g visibility={DISP_TYPE == 0 ? "visible" : "hidden"}>
							<PFDBase />
							<image
								xlinkHref="/Images/REF/pfd.png"
								x={0}
								y={0}
								opacity={0.25}
							/>
						</g>

						<g visibility={DISP_TYPE == 2 ? "visible" : "hidden"}>
							<rect
								x={0}
								y={0}
								width={1024}
								height={768}
								fill="#00000"
							/>
							<image
								xlinkHref="/Images/REF/EICAS.png"
								x={0}
								y={0}
								opacity={0.6}
							/>

							<EICAS />
						</g>

						<g
							visibility={
								2 == Ext_Tanks && DISP_TYPE == 2
									? "visible"
									: "hidden"
							}
						>
							<EICASExtTanks />
						</g>

						<g visibility={DISP_TYPE == 7 ? "visible" : "hidden"}>
							<IVHMSBase />
							<image
								xlinkHref="/Images/REF/MPD_AVIONICS4.png"
								x={0}
								y={0}
								opacity={0.3}
							/>
						</g>




						<g visibility={DISP_TYPE == 1 ? "visible" : "hidden"}>
														<image
								xlinkHref="/Images/REF/MPD_AVIONICS2.png"
								x={0}
								y={0}
								opacity={0.1}
							/>
						</g>

						<g visibility={DISP_TYPE == 5 ? "visible" : "hidden"}>
							<JMVFBase />
														<image
								xlinkHref="/Images/REF/MPD_AVIONICS10.png"
								x={0}
								y={0}
								opacity={0.3}
							/>
						</g>

						<Fixed />
						
					</g>
				</svg>
				</MapDataProvider>
		</Electricity_MFD>
	);
};
render(<PFD />);



