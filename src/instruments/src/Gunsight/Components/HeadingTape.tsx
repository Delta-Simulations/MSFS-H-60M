import React, {} from 'react';
import "../style.scss";
import { TurnCoordinator } from './TurnCoordinator';
import { useSimVar } from '../../Hooks/simVars';

export const HeadingTape = () => {
    let [AC_Heading] = useSimVar('A:Plane heading degrees gyro','degrees');
    AC_Heading = Math.floor(AC_Heading*10)/10
    let [AP_HDG] = useSimVar('A:Autopilot heading lock dir', 'degrees');
    AP_HDG = Math.floor(AP_HDG)

    AC_Heading = AC_Heading*9.90
        return(
            <svg viewBox='0 0 1360 1350'>
                    <g>
                        
                    <clipPath id='#ClipHeading' >

                        <rect x={80} y={862} width={1200} height={200} fill='black' />

                    </clipPath>
                        <g clipPath="url(#ClipHeading)" >
                            <g transform={`translate(${516+AC_Heading} ${910})`}>
                                <line x1="0" y2="55" className='linehollow' stroke-width="10"/>
                                <line x1="89" x2="89"   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*2} x2={89*2}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*3} x2={89*3}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*4} x2={89*4}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*5} x2={89*5}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*6} x2={89*6}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*7} x2={89*7}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*8} x2={89*8}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*9} x2={89*9}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*10} x2={89*10}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*11} x2={89*11}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*12} x2={89*12}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*13} x2={89*13}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*14} x2={89*14}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*15} x2={89*15}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*16} x2={89*16}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*17} x2={89*17}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={89*18} x2={89*18}   y2="55" className='linehollow' stroke-width="10"/>

                                <line x1="-89" x2="-89"   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*2} x2={-89*2}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*3} x2={-89*3}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*4} x2={-89*4}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*5} x2={-89*5}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*6} x2={-89*6}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*7} x2={-89*7}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*8} x2={-89*8}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*9} x2={-89*9}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*10} x2={-89*10}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*11} x2={-89*11}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*12} x2={-89*12}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*13} x2={-89*13}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*14} x2={-89*14}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*15} x2={-89*15}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*16} x2={-89*16}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*17} x2={-89*17}   y2="55" className='linehollow' stroke-width="10"/>
                                <line x1={-89*18} x2={-89*18}   y2="55" className='linehollow' stroke-width="10"/>


                            </g>
                        </g>

                    </g>
                </svg>
        )
        
    };