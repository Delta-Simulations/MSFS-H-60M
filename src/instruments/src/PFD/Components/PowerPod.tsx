import React, {} from 'react';
import "../style.scss";

import { useSimVar } from '../../Hooks/simVars';

export const PowerPod = () => {

        var [Fuel_1] = useSimVar('A:FUELSYSTEM TANK WEIGHT:1', 'pounds');
        var [Fuel_2] = useSimVar('A:FUELSYSTEM TANK WEIGHT:2', 'pounds');
        var [Tot_Fuel] = useSimVar('A:FUEL TOTAL QUANTITY WEIGHT', 'pounds');
        Tot_Fuel = Math.floor(Tot_Fuel / 5) * 5;

        var [Q1] = useSimVar('A:ENG TORQUE PERCENT:1','percent');
        var [Q2] = useSimVar('A:ENG TORQUE PERCENT:2','percent');
        var [NP_1] = useSimVar('A:ENG RPM ANIMATION PERCENT:1','percent');
        var [NP_2] = useSimVar('A:ENG RPM ANIMATION PERCENT:2','percent');
        NP_1= Math.floor(NP_1)
        NP_2= Math.floor(NP_2)
        Q1= Math.floor(Q1)
        Q2= Math.floor(Q2)

        let NR: number = 1;
        var [RTR_RPM] = useSimVar('A:ROTOR RPM PCT:1','percent');

        NR = Math.floor(RTR_RPM) ;

        let NRScale: number = 1;
        
        if ( NR<20) {
            NRScale = 0
    
        } else if((20<=NR)&&(NR<=90)){
            NRScale = 1.3
       
        } else if((90<NR)&&(NR<=95)){
            NRScale = 2.0
        } else if((95<NR)&&(NR<=100)){
            NRScale = 2.6
        } else if((100<NR)&&(NR<=105)){
            NRScale = 3.16
        } else if((105<NR)&&(NR<=110)){
            NRScale = 3.4
        } else{
            NRScale = 1
        }





        return(
                <svg viewBox='0 0 1280 1280'>
                    <g>
                {/* FUEL============ */}
                        <rect x={278} y={1229} width="180" height="40" stroke="white" fill='none' stroke-width="3" />
                        <text x={285} y={1263} fontSize={32} fill='#00EE00' className='readouts' textAnchor="start">REF-BARO</text>
                        <text x={285} y={1060} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="middle">{Tot_Fuel}</text>
                        <text x={294} y={835} fontSize={32} fill='#00EE00' className='readouts' textAnchor="middle">FUEL</text>
                       
                       <g transform="translate(270,855)scale(1.25)" fill="none">
                            <path d="M5 7.47451V128H15V1H1V3.4902L5 7.47451Z" className='bargauge'/>
                            <path d="M29 7.47451V128H19V1H33V3.4902L29 7.47451Z" className='bargauge'/>
                            <path d="M5 7.47451V128H15V1H1V3.4902L5 7.47451Z" className='barline' stroke-linejoin="round"/>
                            <path d="M29 7.47451V128H19V1H33V3.4902L29 7.47451Z" className='barline' stroke-linejoin="round"/>
                        </g>
                        <rect x={252} y={1011} width="75" height="5" stroke="none" className='text' stroke-width="3" />
                        
                        <rect x={264} y={841} width="55" height="3" stroke="none" className='text' stroke-width="3" />

                        <rect x={266} y={980} width="50" height="3" stroke="none" className='barwarn' stroke-width="3" />

                        <rect x={266} y={1011+-(Fuel_1/12.7)} width="25" height="3" stroke="none" className='text' stroke-width="3" />
                        
                        <rect x={291} y={1011+-(Fuel_2/12.7)} width="25" height="3" stroke="none" className='text' stroke-width="3" />


                {/* ROTOR============ */}

                        
        
                        {/* ENG1 */}
                        <g transform="rotate(180,-62.5,957)" >
                            <rect x={-80} y={770} width="35" height={Q1*3.1} stroke="none" fill="greenyellow" stroke-width="3" />
                        </g>
                        <rect x={-80} y={770} width="35" height="375" stroke="white" fill="none" stroke-width="3"/>
                        <text x={-40} y={760} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="end">{Q1}</text>
                        
                        <text x={50} y={640} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="end">{NR}</text>
                        
                        {/* ENG2 */}
                        <g transform="translate(170,0)">
                            <g transform="rotate(180,-62.5,957)" >
                                <rect x={-80} y={770} width="35" height={Q2*3.1} stroke="none" fill="greenyellow" stroke-width="3" />
                            </g>
                            <rect x={-80} y={770} width="35" height="375" stroke="white" fill="none" stroke-width="3"/>

                            <text x={-80} y={760} fontSize={44} fill='#00EE00' className='apdisp' textAnchor="start">{Q2}</text>
                        </g>

                        {/* LINES */}
                        <rect x={90} y={895} width="35" height="3" stroke="none" className='barwarn' stroke-width="3" />
                        <rect x={-80} y={895} width="35" height="3" stroke="none" className='barwarn' stroke-width="3" />
                        <rect x={90} y={788} width="35" height="3" stroke="none" className='barmax' stroke-width="3" />
                        <rect x={-80} y={788} width="35" height="3" stroke="none" className='barmax' stroke-width="3" />
                       
                        <rect x={44} y={816} width="28" height="3" stroke="none" className='barmax' stroke-width="3" />
                        <rect x={-32} y={816} width="28" height="3" stroke="none" className='barmax' stroke-width="3" />
                       
                        <rect x={44} y={1015} width="28" height="3" stroke="none" className='barmax' stroke-width="3" />
                        <rect x={-32} y={1015} width="28" height="3" stroke="none" className='barmax' stroke-width="3" />
                        <rect x={-4} y={1013} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />
                        
                        <rect x={44} y={943} width="28" height="3" stroke="none" className='barwarn' stroke-width="3" />
                        <rect x={-32} y={943} width="28" height="3" stroke="none" className='barwarn' stroke-width="3" />
                        <rect x={-4} y={940} width="48" height="3" stroke="none" className='barwarn' stroke-width="3" />
                            
                        <rect x={44} y={873} width="28" height="3" stroke="none" className='barwarn' stroke-width="3" />
                        <rect x={-32} y={873} width="28" height="3" stroke="none" className='barwarn' stroke-width="3" />
                        <rect x={-4} y={872} width="48" height="3" stroke="none" className='barwarn' stroke-width="3" />                                
                        <rect x={-4} y={745} width="48" height="3" stroke="none" className='barmax' stroke-width="3" />                                

                
                    {/* ROTOR STACK */}
                        <g transform="rotate(180,-62.5,957)translate(-85,-6)" >
                            <rect x={-80} y={770} width="35" height={NR*NRScale} stroke="none" fill="greenyellow" stroke-width="3" />
                        </g>
                        <g transform= {`translate(-32, ${-NP_1*2.5+1130} ) scale(1.27)`} fill="none">
                            <path d="M17.5 0V22.5H15L0.5 8V0H17.5Z" className='bargauge'/>
                        </g>
                        <g transform={`translate(73, ${-NP_2*2.5+1130} ) scale(-1.27,1.27)`} fill="none">
                            <path d="M17.5 0V22.5H15L0.5 8V0H17.5Z" className='bargauge'/>
                        </g>



                        <g transform="translate(-35,665)scale(1.25)" fill="none">
                            <path d="M1.5 78H8M8 90H1.5M8 101.5H1.5M8 112.5H1.5M8 136.5H1.5M8 146.5H1.5M8 157.5H1.5M8 203H1.5M8 214.5H1.5M8 248H1.5M8 259.5H1.5M8 271H1.5M19 2H1.5V35.5M1.5 35.5H19M1.5 35.5V68M1.5 68H19M1.5 68V181M1.5 181H19M1.5 181V237M1.5 237H19M1.5 237V292.5M1.5 292.5H19M1.5 292.5V388H19M87.5 78H81M87.5 78V68M87.5 78V90M81 90H87.5M87.5 90V101.5M81 101.5H87.5M87.5 101.5V112.5M81 112.5H87.5M87.5 112.5V136.5M81 136.5H87.5M87.5 136.5V146.5M81 146.5H87.5M87.5 146.5V157.5M81 157.5H87.5M87.5 157.5V181M81 203H87.5M87.5 203V181M87.5 203V214.5M81 214.5H87.5M87.5 214.5V237M81 248H87.5M87.5 248V237M87.5 248V259.5M81 259.5H87.5M87.5 259.5V271M81 271H87.5M87.5 271V292.5M70 2H87.5V35.5M87.5 35.5H70M87.5 35.5V68M87.5 68H70M87.5 181H70M87.5 237H70M87.5 292.5H70M87.5 292.5V388H70" stroke="white" stroke-width="3" stroke-linecap="square"/>
                        </g>

                        

                        <text x={-80} y={710} fontSize={32} fill='#00EE00' className='readouts' textAnchor="start">Q1</text>
                        <text x={80} y={710} fontSize={32} fill='#00EE00' className='readouts' textAnchor="start">Q2</text>
                        <text x={5} y={600} fontSize={32} fill='#00EE00' className='readouts' textAnchor="start">NR</text>

                        <text x={-10} y={675} fontSize={31} fill='#00EE00' className='readouts' textAnchor="start">120</text>

                        <text x={-10} y={760} fontSize={31} fill='#00EE00' className='readouts' textAnchor="start">110</text>

                        <text x={-10} y={900} fontSize={31} fill='#00EE00' className='readouts' textAnchor="start">100</text>

                        <text x={0} y={1040} fontSize={31} fill='#00EE00' className='readouts' textAnchor="start">90</text>

                        <text x={0} y={1160} fontSize={31} fill='#00EE00' className='readouts' textAnchor="start">20</text>
                    </g>
                </svg>
        )
        
    };