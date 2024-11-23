import React, {} from 'react';
import "../../style.scss";


import { useSimVar } from '../../../Hooks/simVars';

export const EICASFuel = () => {

        let [Fuel_1] = useSimVar('A:FUELSYSTEM TANK WEIGHT:1', 'pounds');
        let [Fuel_2] = useSimVar('A:FUELSYSTEM TANK WEIGHT:2', 'pounds');
        let [Tot_Fuel] = useSimVar('A:FUEL TOTAL QUANTITY WEIGHT', 'pounds');

        Fuel_1 = Math.floor(Fuel_1 / 5) * 5;
        Fuel_2 = Math.floor(Fuel_2 / 5) * 5;
        Tot_Fuel = Math.floor(Tot_Fuel / 5) * 5;

        return(
                    <g>
                {/* FUEL============ */}
                        <text x={595} y={1088} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">TOTAL</text>

                        <text x={610} y={980} fontSize={34} fill='#00EE00' className='readouts' textAnchor="start">FUEL</text>
                        <text x={610} y={838} fontSize={34} fill='#00EE00' className='readouts' textAnchor="start">MAIN</text>

                        <text x={725} y={1137} fontSize={45} fill='#00EE00' className='bargauge' textAnchor="end">{Tot_Fuel}</text>


                        

                        <rect x={575} y={1051} width="155" height="95" stroke="white" fill="none" stroke-width="3"/>
                        



                        <g transform="translate(646,30)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={774} width="45" height={Fuel_1/10} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="191" stroke="white" fill="none" stroke-width="3"/>
                            <text x={-68} y={808} fontSize={33} fill='#00EE00' className='readouts' textAnchor="middle">1</text>

                            <text x={-68} y={1006} fontSize={45} fill='#00EE00' className='bargauge' textAnchor="middle">{Fuel_1}</text>

                            <rect x={-91.5} y={927} width="48" height="3" stroke="none" className='barwarn' stroke-width="3" />
                        </g>

                        <g transform="translate(796,30)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={774} width="45" height={Fuel_2/10} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="191" stroke="white" fill="none" stroke-width="3"/>
                            <text x={-68} y={808} fontSize={33} fill='#00EE00' className='readouts' textAnchor="middle">2</text>

                            <text x={-68} y={1006} fontSize={45} fill='#00EE00' className='bargauge' textAnchor="middle">{Fuel_2}</text>

                            <rect x={-91.5} y={927} width="48" height="3" stroke="none" className='barwarn' stroke-width="3" />
                        </g>

                    </g>
        )
        
    };