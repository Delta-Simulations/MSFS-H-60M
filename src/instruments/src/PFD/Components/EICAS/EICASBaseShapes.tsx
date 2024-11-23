import React, { } from 'react';

import "../../style.scss";
import { EICASAdvisory } from './EICASAdvisory';
import { useSimVar } from '../../../Hooks/simVars';

export const EICASBaseShapes = () => {
    let [TMP_1] = useSimVar('A:ENG OIL TEMPERATURE:1', 'Celsius');
    TMP_1 = Math.round(TMP_1)
    let [PRESS_1] = useSimVar('A:ENG OIL PRESSURE:1', 'psi');
    PRESS_1 = Math.round(PRESS_1)
    const [ENG_COMB_1] = useSimVar('A:ENG COMBUSTION:1', 'bool');
    const [ENG_COMB_2] = useSimVar('A:ENG COMBUSTION:2', 'bool');

    return (
        <g>
            {ENG_COMB_1 != 1 && (
            <g >
                <line x1="14" y1="111.5" x2="389" y2="317.5" stroke="black" stroke-width="4"/>
                <line x1="389" y1="111.5" x2="14" y2="317.5" stroke="black" stroke-width="4"/>
                <line x1="14" y1="111.5" x2="389" y2="317.5" stroke="red" stroke-width="2"/>
                <line x1="389" y1="111.5" x2="14" y2="317.5" stroke="red" stroke-width="2"/>
            </g>)}
            {ENG_COMB_2 != 1 && (
            <g>
                <line x1="1010" y1="111.5" x2="635" y2="317.5" stroke="black" stroke-width="4"/>
                <line x1="635" y1="111.5" x2="1010" y2="317.5" stroke="black" stroke-width="4"/>
                <line x1="1010" y1="111.5" x2="635" y2="317.5" stroke="red" stroke-width="2"/>
                <line x1="635" y1="111.5" x2="1010" y2="317.5" stroke="red" stroke-width="2"/>
            </g>)}
            {/* BOXES */}
            {/* LEFT */}
            <g transform='translate(12,100)'>
                <svg fill="none" >
                    <path d="M133.821 2H12.1792L2 12V218L12.1792 228H133.821L144 218V12L133.821 2Z" className='engbox' stroke-width="2"/>
                </svg>
            </g>
            <g transform='translate(161,100)'>
                <svg fill="none" >
                <path d="M217.5 2H12.1792L2 12V218L12.1792 228H217.5L227.679 218V12L217.5 2Z" className='engbox' stroke-width="2"/>
                </svg>
            </g>
            {/* CENTER */}
            <g transform='translate(397.5,85)'>
                <svg fill="none" >
                <path d="M217.821 2H12.1792L2 12V233L12.1792 243H217.821L228 233V12L217.821 2Z" className='engbox' stroke-width="2"/>
                </svg>
            </g>
            <g transform='translate(397.5,332.3)'>
                <svg fill="none" >
                <path d="M217.821 2H12.1792L2 12V133L12.1792 143H217.821L228 133V12L217.821 2Z" className='engbox' stroke-width="2"/>
                </svg>
            </g>

            {/* RIGHT */}
            <g transform='translate(633.5,100)'>
                <svg fill="none" >
                <path d="M217.5 2H12.1792L2 12V218L12.1792 228H217.5L227.679 218V12L217.5 2Z" className='engbox' stroke-width="2"/>
                </svg>
            </g>
            <g transform='translate(866.5,100)'>
                <svg fill="none" >
                    <path d="M133.821 2H12.1792L2 12V218L12.1792 228H133.821L144 218V12L133.821 2Z" className='engbox' stroke-width="2"/>
                </svg>
            </g>


            {/* ROTOR============ */}
            {/* ENG1 */}
            <text x={79} y={316} fontSize={21} fill='#00EE00' className='bargauge' textAnchor="start">1</text>
            <text x={225} y={316} fontSize={21} fill='#00EE00' className='bargauge' textAnchor="start">1</text>

            <text x={785.7} y={316} fontSize={21} fill='#00EE00' className='bargauge' textAnchor="start">2</text>
            <text x={932} y={316} fontSize={21} fill='#00EE00' className='bargauge' textAnchor="start">2</text>


            <text x={1110} y={527} fontSize={38} fill='#00EE00' className='bargauge' textAnchor="start">2</text>
            <text x={1360} y={527} fontSize={38} fill='#00EE00' className='bargauge' textAnchor="start">2</text>

            <rect x={32} y={212} width="285" height="2" stroke="none" className='barwarn' stroke-width="2" />
            <rect x={319} y={209} width="62" height="2" stroke="none" className='barwarn' stroke-width="2" />
            <rect x={383} y={212} width="258" height="2" stroke="none" className='barwarn' stroke-width="2" />
            <rect x={643} y={209} width="62" height="2" stroke="none" className='barwarn' stroke-width="2" />
            <rect x={707} y={212} width="285" height="2" stroke="none" className='barwarn' stroke-width="2" />


        </g>

    )

};