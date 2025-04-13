import React, { } from 'react';
import "../../style.scss";


import { useSimVar } from '../../../Hooks/simVars';

export const EICASFuel = () => {

    let [Fuel_1] = useSimVar('A:FUELSYSTEM TANK WEIGHT:1', 'pounds');
    let [Fuel_2] = useSimVar('A:FUELSYSTEM TANK WEIGHT:2', 'pounds');
    let [Tot_Fuel] = useSimVar('A:FUEL TOTAL QUANTITY WEIGHT', 'pounds');

    Tot_Fuel = Math.floor(Tot_Fuel / 5) * 5;

    return (
        <g>
            {/* FUEL============ */}
            <text x={485} y={503} fontSize={23} fill='#00EE00' className='readouts' textAnchor="start">MAIN</text>
            <text x={485} y={588} fontSize={23} fill='#00EE00' className='readouts' textAnchor="start">FUEL</text>

            <g transform="translate(418.5,321)">
                <rect
                    transform={`rotate(180 49.7 216.5)`}
                    x={36.7}
                    y={159}
                    width="26"
                    height={Math.max(Math.min(Fuel_1 * 0.199, 115), 0)}
                    className={
                        Fuel_1 < 200 ? "tapeYellow" : "tapeGreen"

                    }
                />
                <rect
                    x={36.7}
                    y={159}
                    width="26"
                    height="115"
                    stroke="white"
                    fill="none"
                />

                <rect
                    x={34.7}
                    y={253.6}
                    width="30"
                    height="2"
                    stroke="none"
                    className="barwarn"
                />
					<text
						x={49}
						y={182}
						fontSize={23}
						className="readouts"
						textAnchor="middle"
					>
						1
					</text>
                <text
                    x={50}
                    y={300}
                    fontSize={27}
                    className={

                        Fuel_1 < 200 ? "text-caution" : "text-safe"
                    }
                    textAnchor="middle"
                >
                    {Math.floor(Fuel_1 / 5) * 5}
                </text>
            </g>
            <g transform="translate(506.5,321)">
                <rect
                    transform={`rotate(180 49.7 216.5)`}
                    x={36.7}
                    y={159}
                    width="26"
                    height={Math.max(Math.min(Fuel_2 * 0.199, 115), 0)}
                    className={
                        Fuel_2 < 200 ? "tapeYellow" : "tapeGreen"

                    }
                />
                <rect
                    x={36.7}
                    y={159}
                    width="26"
                    height="115"
                    stroke="white"
                    fill="none"
                />

                <rect
                    x={34.7}
                    y={253.6}
                    width="30"
                    height="2"
                    stroke="none"
                    className="barwarn"
                />
					<text
						x={49}
						y={182}
						fontSize={23}
						className="readouts"
						textAnchor="middle"
					>
						2
					</text>
                <text
                    x={50}
                    y={300}
                    fontSize={27}
                    className={

                        Fuel_2 < 200 ? "text-caution" : "text-safe"
                    }
                    textAnchor="middle"
                >
                    {Math.floor(Fuel_2 / 5) * 5}
                </text>

                <text
                    x={6}
                    y={361}
                    fontSize={27}
                    className={

                        Tot_Fuel < 400 ? "text-caution" : "text-safe"
                    }
                    textAnchor="middle"
                >
                    {Math.round(Tot_Fuel)}
                </text>
            </g>

            <text x={477} y={652} fontSize={23} fill='#00EE00' className='readouts' textAnchor="start">TOTAL</text>

            <rect
						x={466}
						y={631}
						width="92"
						height="56"
						stroke="white"
						fill="none"
                        strokeWidth={1.5}
					/>

        </g>
    )

};