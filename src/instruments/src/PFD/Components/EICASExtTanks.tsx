import React, {} from 'react';
import "../style.scss";

import { useSimVar } from '../../Hooks/simVars';

export const EICASExtTanks = () => {

        var [Ext_Tanks] = useSimVar('L:ADDITIONSVIS', 'enum');
        let TEST: number = 105 ;
        return(
                <svg viewBox='0 0 1280 1280'>
                    <g>
                        <rect x={370} y={1045} width="130" height="95" stroke="white" fill="none" stroke-width="3"/>
                        <rect x={805} y={1045} width="130" height="95" stroke="white" fill="none" stroke-width="3"/>
                        <rect x="370" y="937" width="130" height="95" rx="29" fill='none' stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        
                        <text x={400} y={1083} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">INT</text>
                        <text x={380} y={1130} fontSize={45} fill='#00EE00' className='bargauge' textAnchor="start">XXXX</text>

                        <text x={440} y={977} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">IB</text>
                        <text x={375} y={1020} fontSize={45} fill='#00EE00' className='bargauge' textAnchor="start">XXXX</text> 
                        
                        <rect x="370" y={937-TEST} width="130" height="95" rx="29" fill='none' stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <text x={385} y={973-TEST} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">OB</text>
                        <text x={375} y={1020-TEST} fontSize={45} fill='#00EE00' className='bargauge' textAnchor="start">XXXX</text> 
                        
                        <text x={400+10} y={773+15} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">L</text>
                        <text x={410+10} y={805+15} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">AUX</text>
                        
                        <g transform="translate(431,0)" >
                        <rect x="370" y="937" width="130" height="95" rx="29" fill='none' stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        
                        <text x={400} y={1083} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">INT</text>
                        <text x={380} y={1130} fontSize={45} fill='#00EE00' className='bargauge' textAnchor="start">XXXX</text>

                        <text x={440-55} y={977} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">IB</text>
                        <text x={375} y={1020} fontSize={45} fill='#00EE00' className='bargauge' textAnchor="start">XXXX</text> 
                        
                        <rect x="370" y={937-TEST} width="130" height="95" rx="29" fill='none' stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <text x={385+60} y={973-TEST} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">OB</text>
                        <text x={375} y={1020-TEST} fontSize={45} fill='#00EE00' className='bargauge' textAnchor="start">XXXX</text> 
                        
                        <text x={400+45} y={773+15} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">R</text>
                        <text x={410+45} y={805+15} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">AUX</text>
                        
                        </g>

                    </g>
                </svg>
        )
        
    };