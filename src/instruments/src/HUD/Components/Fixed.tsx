import React, {} from 'react';
import "../style.scss";
import { TurnCoordinator } from './TurnCoordinator';
import { useSimVar } from '../../Hooks/simVars';

export const Fixed = () => {
    var [Q1] = useSimVar('A:TURB ENG FREE TURBINE TORQUE:1','percent');
    var [Q2] = useSimVar('A:TURB ENG FREE TURBINE TORQUE:2','percent');
    var [TGT_1] = useSimVar('A:ENG EXHAUST GAS TEMPERATURE:1','Celsius');
    var [TGT_2] = useSimVar('A:ENG EXHAUST GAS TEMPERATURE:2','Celsius');

    const [DCLT_HUD] = useSimVar('L:DCLT_HUD', 'enum');
    Q1 = Q1/6300;
    Q2 = Q2/6300;
    Q1= Math.floor(Q1)
    Q2= Math.floor(Q2)
    TGT_1= Math.floor(TGT_1)
    TGT_2= Math.floor(TGT_2)

    var [RA_ALT] = useSimVar('A:PLANE ALT ABOVE GROUND MINUS CG', 'feet')
    RA_ALT= Math.floor(RA_ALT)
    let indicator: boolean = false
    if ( RA_ALT<=999) {
        indicator = true
    } else{
        indicator = false
    }
    var [STD_ALT] = useSimVar('A:PLANE ALTITUDE', 'feet')
    STD_ALT= Math.floor(STD_ALT)

        return(
            <svg viewBox='0 0 1360 1350'>
                    <g>
                    <text x={221} y={1125} fontSize={52} fill='#00EE00' letter-spacing="-2" className='text' textAnchor="end">{TGT_1}T1</text>
                    <text x={221} y={1200} fontSize={52} fill='#00EE00' letter-spacing="-2" className='text' textAnchor="end">{TGT_2}T2</text>

                        <g transform={`translate(-569 815)scale(2)`}>
                            <polygon points='630,110  635,110 635,85 630,85' className='barline'/>
                        </g>
                        <text x={215} y={680} fontSize={55} fill='#00EE00' className='text' textAnchor="end">{Q1}</text>
                        <text x={215} y={775} fontSize={55} fill='#00EE00' className='text' textAnchor="end">{Q2}</text>

                        <text x={76} y={1300} fontSize={50} fill='#00EE00' className='text' textAnchor="end">{DCLT_HUD+1}</text>
                        <text x={110} y={1300} fontSize={50} fill='#00EE00' className='text' textAnchor="end">D</text>
                        {/* FIXED PARTS */}
                        <g transform={`translate(30, 100)`}>
                            <path d="M4 513.5H207.5V595.5H4V513.5ZM1094.5 3.5H1298V85.5H1094.5V3.5ZM4 610.5H207.5V692.5H4V610.5Z" fill='none' className='linehollow' stroke-width="7"/>
                        </g>
                        <TurnCoordinator />



                        <text x={1307} y={80} fontSize={50} fill='#00EE00' className='text' textAnchor="end">{STD_ALT}B</text>

                        <text visibility={indicator ? 'visible' : 'hidden'} x={1295} y={165} fontSize={50} fill='#00EE00' className='text' textAnchor="end">{RA_ALT}</text>
                        {/* ALLIGNMENT */}
                        {/* <path d="M696 1350V0" fill='none' className='linehollow' stroke-width="5" stroke-linecap="square"/> */}
                    </g>
                </svg>
        )
        
    };