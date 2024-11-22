import React, {} from 'react';

import "../style.scss";
import { EICASAdvisory } from './EICASAdvisory';


import { useSimVar } from '../../Hooks/simVars';

export const EICAS = () => {


        var [NP_1] = useSimVar('A:ENG ROTOR RPM:1','percent');
        var [NP_2] = useSimVar('A:ENG ROTOR RPM:2','percent');

        var [TMP_1] = useSimVar('A:ENG OIL TEMPERATURE:1','Celsius');
        var [TMP_2] = useSimVar('A:ENG OIL TEMPERATURE:2','Celsius');
        
        var [PRESS_1] = useSimVar('A:ENG OIL PRESSURE:1','psf');
        var [PRESS_2] = useSimVar('A:ENG OIL PRESSURE:2','psf');

        var [NG_1] = useSimVar('A:TURB ENG CORRECTED N1:1','percent');
        var [NG_2] = useSimVar('A:TURB ENG CORRECTED N1:2','percent');

        var [TGT_1] = useSimVar('A:ENG EXHAUST GAS TEMPERATURE:1','Celsius');
        var [TGT_2] = useSimVar('A:ENG EXHAUST GAS TEMPERATURE:2','Celsius');
       
        var [Q1] = useSimVar('A:ENG TORQUE PERCENT:1','percent');
        var [Q2] = useSimVar('A:ENG TORQUE PERCENT:2','percent');

        var [RTR_RPM] = useSimVar('A:ROTOR RPM PCT:1','percent');
        
        var [TOT_ENG] = useSimVar('L:TotEngRunning','enum');

        var [RTR_PRESS] = useSimVar('A:ROTOR TEMPERATURE','Celsius');

        let TEST: number = 100 ;

       
       
        Q1 = Q1/6300;
        Q2 = Q2/6300;
        Q1= Math.floor(Q1)
        Q2= Math.floor(Q2)
        NP_1= Math.floor(NP_1)
        NP_2= Math.floor(NP_2)
        PRESS_1= Math.floor(PRESS_1/930)
        PRESS_2= Math.floor(PRESS_2/930)
        NG_1= Math.floor(NG_1)
        NG_2= Math.floor(NG_2)
        TGT_1= Math.floor(TGT_1/4)
        TGT_2= Math.floor(TGT_2/4)
        TMP_1= Math.floor(TMP_1)
        TMP_2= Math.floor(TMP_2)

        let NR = Math.floor(RTR_RPM*10)/10 ;


        let RTR_TMP: number = Math.floor((NR)/TOT_ENG) ;

        return(
                <svg viewBox='0 0 1280 1280'>
                    <g>
                    <EICASAdvisory />
                {/* BOXES */}
                        <g transform="translate(460,140)">
                            <svg width="500px" height="500">
                                <path className='engbox' stroke-width="4.05px" stroke-linecap="square" stroke-linejoin="bevel" fill="none" 
                                d="M26,2 
                                L365,2, 
                                L385,22 
                                L385,385 
                                L365,405 
                                L22,405
                                L2,385
                                L2,22 
                                L22,2 Z"/>
                            
                            </svg>
                        </g>                        
                        <g transform="translate(460,555)">
                            <svg width="500px" height="500">
                                <path className='engbox' stroke-width="4.05px" stroke-linecap="square" stroke-linejoin="bevel" fill="none" 
                                d="M26,2 
                                L365,2, 
                                L385,22 
                                L385,215 
                                L365,235 
                                L22,235
                                L2,215
                                L2,22 
                                L22,2 Z"/>
                            
                            </svg>
                        </g>   
                        <g transform="translate(60,160)">
                            <svg width="500px" height="500">
                                <path className='engbox' stroke-width="4.05px" stroke-linecap="square" stroke-linejoin="bevel" fill="none" 
                                d="M26,2 
                                L365,2, 
                                L385,22 
                                L385,365 
                                L365,385 
                                L22,385
                                L2,365
                                L2,22 
                                L22,2 Z"/>
                            
                            </svg>
                        </g>
                        <g transform="translate(855,160)">
                            <svg width="500px" height="500">
                                <path className='engbox' stroke-width="4.05px" stroke-linecap="square" stroke-linejoin="bevel" fill="none" 
                                d="M26,2 
                                L365,2, 
                                L385,22 
                                L385,365 
                                L365,385 
                                L22,385
                                L2,365
                                L2,22 
                                L22,2 Z"/>
                            
                            </svg>
                        </g>
                        <g transform="translate(-190,160)">
                            <svg width="500px" height="500">
                                <path className='engbox' stroke-width="4.05px" stroke-linecap="square" stroke-linejoin="bevel" fill="none" 
                                d="M26,2 
                                L220,2, 
                                L240,22 
                                L240,365 
                                L220,385 
                                L22,385
                                L2,365
                                L2,22 
                                L22,2 Z"/>
                            
                            </svg>
                        </g>

                        <g transform="translate(1250,160)">
                            <svg width="500px" height="500">
                                <path className='engbox' stroke-width="4.05px" stroke-linecap="square" stroke-linejoin="bevel" fill="none" 
                                d="M26,2 
                                L220,2, 
                                L240,22 
                                L240,365 
                                L220,385 
                                L22,385
                                L2,365
                                L2,22 
                                L22,2 Z"/>
                            
                            </svg>
                        </g>

                {/* ROTOR============ */}
                        {/* ENG1 */}
                        <rect x={-155} y={352} width="480" height="3" stroke="none" className='barwarn' stroke-width="3" />

                        <text x={-80} y={527} fontSize={38} fill='#00EE00' className='bargauge' textAnchor="start">1</text>
                        <text x={170} y={527} fontSize={38} fill='#00EE00' className='bargauge' textAnchor="start">1</text>

                        <text x={1110} y={527} fontSize={38} fill='#00EE00' className='bargauge' textAnchor="start">2</text>
                        <text x={1360} y={527} fontSize={38} fill='#00EE00' className='bargauge' textAnchor="start">2</text>

                        <g transform="translate(-60,-510)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={690} width="45" height={TMP_1*7.6} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="275" stroke="white" fill="none" stroke-width="3"/>
                            <rect x={-91.5} y={810} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />
                            <text x={-55} y={710} fontSize={38} fill='#00EE00' className='text' textAnchor="middle">T</text>
                            <text x={-25} y={760} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="end">{TMP_1}</text>
                        </g>         
                        <g transform="translate(1500,-510)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={690} width="45" height={TMP_2*7.6} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="275" stroke="white" fill="none" stroke-width="3"/>
                            <rect x={-91.5} y={810} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />
                            <text x={-55} y={710} fontSize={38} fill='#00EE00' className='text' textAnchor="middle">T</text>
                            <text x={-25} y={760} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="end">{TMP_2}</text>
                        </g>  

                        <g transform="translate(60,-510)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={690} width="45" height={PRESS_1} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="275" stroke="white" fill="none" stroke-width="3"/>
                            <rect x={-91.5} y={810} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />
                            <rect x={-91.5} y={970} width="48" height="3" stroke="none" className='barwarn' stroke-width="3" />
                            <rect x={-91.5} y={1010} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />
                            <text x={-55} y={710} fontSize={38} fill='#00EE00' className='text' textAnchor="middle">P</text>
                            <text x={-25} y={760} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="end">{PRESS_1}</text>
                        </g>     
                        <g transform="translate(1382,-510)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={690} width="45" height={PRESS_2} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="275" stroke="white" fill="none" stroke-width="3"/>
                            <rect x={-91.5} y={810} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />
                            <rect x={-91.5} y={970} width="48" height="3" stroke="none" className='barwarn' stroke-width="3" />
                            <rect x={-91.5} y={1010} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />
                            <text x={-55} y={710} fontSize={38} fill='#00EE00' className='text' textAnchor="middle">P</text>
                            <text x={-25} y={760} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="end">{PRESS_2}</text>
                        </g>          
                        <g transform="translate(183,-510)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={690} width="45" height={NG_1*2} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="275" stroke="white" fill="none" stroke-width="3"/>
                            <rect x={-91.5} y={810} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />
                            <text x={-40} y={710} fontSize={38} fill='#00EE00' className='text' textAnchor="middle">NG</text>
                            <text x={-25} y={760} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="end">{NG_1}</text>
                        </g>   
                        <g transform="translate(1257,-510)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={690} width="45" height={NG_2*2} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="275" stroke="white" fill="none" stroke-width="3"/>
                            <rect x={-91.5} y={810} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />
                            <text x={-40} y={710} fontSize={38} fill='#00EE00' className='text' textAnchor="middle">NG</text>
                            <text x={-25} y={760} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="end">{NG_2}</text>
                        </g>
                        <g transform="translate(314,-510)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={690} width="45" height={TGT_1*2} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="275" stroke="white" fill="none" stroke-width="3"/>
                            <rect x={-91.5} y={810} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />
                            <rect x={-91.5} y={828} width="48" height="3" stroke="none" className='barwarn' stroke-width="3" />
                            <rect x={-91.5} y={845} width="48" height="3" stroke="none" className='barwarn' stroke-width="3" />

                            <text x={-30} y={710} fontSize={38} fill='#00EE00' className='text' textAnchor="middle">TGT</text>
                            <text x={-15} y={760} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="end">{TGT_1}</text>
                        </g>   

                        <g transform="translate(1125,-510)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={690} width="45" height={TGT_2*2} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="275" stroke="white" fill="none" stroke-width="3"/>
                            <rect x={-91.5} y={810} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />
                            <rect x={-91.5} y={828} width="48" height="3" stroke="none" className='barwarn' stroke-width="3" />
                            <rect x={-91.5} y={845} width="48" height="3" stroke="none" className='barwarn' stroke-width="3" />

                            <text x={-30} y={710} fontSize={38} fill='#00EE00' className='text' textAnchor="middle">TGT</text>
                            <text x={-15} y={760} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="end">{TGT_2}</text>
                        </g>

                        <g transform="translate(448,-510)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={690} width="45" height={Q1*2.2} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="275" stroke="white" fill="none" stroke-width="3"/>

                            <rect x={-91.5} y={789} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />

                            <text x={-55} y={710} fontSize={38} fill='#00EE00' className='text' textAnchor="middle">Q</text>
                            <text x={-25} y={760} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="end">{Q1}</text>
                        </g>
                        <g transform="translate(993,-510)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={690} width="45" height={Q2*2.2} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="275" stroke="white" fill="none" stroke-width="3"/>

                            <rect x={-91.5} y={789} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />

                            <text x={-55} y={710} fontSize={38} fill='#00EE00' className='text' textAnchor="middle">Q</text>
                            <text x={-25} y={760} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="end">{Q2}</text>
                        </g>

                        <g transform="translate(588,-510)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={690} width="45" height={NP_1*2.1} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="275" stroke="white" fill="none" stroke-width="3"/>

                            <rect x={-91.5} y={810} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />
                            <rect x={-91.5} y={970} width="48" height="3" stroke="none" className='barwarn' stroke-width="3" />
                            <rect x={-91.5} y={1010} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />

                            <text x={-30} y={710} fontSize={38} fill='#00EE00' className='text' textAnchor="middle">NP1</text>
                            <text x={-25} y={760} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="end">{NP_1}</text>
                        </g>
                        <g transform="translate(720,-510)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={690} width="45" height={NR*3} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="275" stroke="white" fill="none" stroke-width="3"/>

                            <rect x={-91.5} y={810} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />
                            <rect x={-91.5} y={970} width="48" height="3" stroke="none" className='barwarn' stroke-width="3" />
                            <rect x={-91.5} y={1010} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />

                            <text x={-40} y={700} fontSize={38} fill='#00EE00' className='text' textAnchor="middle">NR</text>
                            <text x={-5} y={750} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="end">{NR}</text>
                        </g>
                        <g transform="translate(852,-510)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={690} width="45" height={NP_2*2.1} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="275" stroke="white" fill="none" stroke-width="3"/>

                            <rect x={-91.5} y={810} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />
                            <rect x={-91.5} y={970} width="48" height="3" stroke="none" className='barwarn' stroke-width="3" />
                            <rect x={-91.5} y={1010} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />

                            <text x={-30} y={710} fontSize={38} fill='#00EE00' className='text' textAnchor="middle">NP2</text>
                            <text x={-25} y={760} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="end">{NP_2}</text>
                        </g>

                        <g transform="translate(752,-178)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={774} width="45" height={RTR_PRESS*5} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="191" stroke="white" fill="none" stroke-width="3"/>

                            <rect x={-91.5} y={802} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />

                            <rect x={-91.5} y={912} width="48" height="3" stroke="none" className='barwarn' stroke-width="3" />
                            <rect x={-91.5} y={936} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />


                        </g>
                        <g transform="translate(688,-178)" >
                            <g transform="rotate(180,-67.5,867)" >
                                <rect x={-90} y={774} width="45" height={RTR_TMP*2.2} stroke="none" className='bargauge' stroke-width="3" />
                            </g>
                            <rect x={-90} y={770} width="45" height="191" stroke="white" fill="none" stroke-width="3"/>

                            <rect x={-91.5} y={802} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />

                            <rect x={-104} y={839} width="135" height="3" stroke="none" className='barwarn' stroke-width="3" />

                            <text x={-123} y={796} fontSize={38} fill='#00EE00' className='text' textAnchor="middle">T</text>
                            <text x={-123} y={845} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="end">{RTR_TMP}</text>

                            <text x={73} y={796} fontSize={38} fill='#00EE00' className='text' textAnchor="middle">P</text>
                            <text x={43} y={845} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="start">{RTR_PRESS}</text>

                        </g>
                        




                        <rect x={-155} y={352} width="480" height="3" stroke="none" className='barwarn' stroke-width="3" />   
                        <rect x={325} y={348} width="110" height="3" stroke="none" className='barwarn' stroke-width="3" />
                        <rect x={435} y={352} width="435" height="3" stroke="none" className='barwarn' stroke-width="3" />   
                        <rect x={870} y={348} width="110" height="3" stroke="none" className='barwarn' stroke-width="3" />
                        <rect x={980} y={352} width="480" height="3" stroke="none" className='barwarn' stroke-width="3" />   



                    </g>
                </svg>
        )
        
    };