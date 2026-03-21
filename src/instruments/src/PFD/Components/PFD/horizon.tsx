import React from 'react';
import { HorizonLine } from './horizonLine';
import { HorizonLine2 } from './horizonLine2';

import { useSimVar } from '../../../Hooks/simVars';

export const Horizon = () => {

    const [roll] = useSimVar('A:PLANE BANK DEGREES', 'Degrees');
    const [pitch] = useSimVar('A:PLANE PITCH DEGREES', 'Degrees');


    const [RA_Alt_Lo_Alert] = useSimVar('L:H60_CAS_RADALT_LO_ALERT', 'feet')
    const [RA_Alt_Hi_Alert] = useSimVar('L:H60_CAS_RADALT_HI_ALERT', 'bool')
    const [RA_ALT] = useSimVar('A:PLANE ALT ABOVE GROUND MINUS CG', 'feet')


    return (
        <g>

            <clipPath id='ah-clip' >
                <rect x={350} y={36} width={325} height={340} fill='grey' rx={40} ry={40} />

                {/*clipPath='url(#ah-clip)'*/}
            </clipPath>
            <clipPath id='line-clip' >

                <rect x={350} y={62} width={325} height={248} fill='grey' rx={0} ry={0} />
                {/*clipPath='url(#ah-clip)'*/}
            </clipPath>
            {/* clipPath='url(#ah-clip)'v <path d="M 593 559 L 611 559 L 633 594 L 650 556 L 655 556 L 674 594 L 695 559 L 713 559" fill="transparent" stroke="white" strokeWidth={5} strokeLinecap={"round"} strokeLinejoin={"round"}/>*/}

            <g clipPath='url(#ah-clip)'>

                {/* Rotating group (shared) */}
                <g transform={`rotate(${roll}, 511, 215)`}>

                    {/* Pitch tape */}
                    <g transform={`translate(0 ${pitch * -4.3})`}>
                        <image
                            xlinkHref="/Images/MFD/PFDTape.svg"
                            x={0}
                            y={-491}
                            width={1024}
                            height={1416}
                        />
                        <text x={450} y={-167} fontSize={20} className='readouts' textAnchor="start">90</text>
                        <text x={553} y={-167} fontSize={20} className='readouts' textAnchor="start">90</text>

                        <text x={450} y={185} fontSize={20} className='readouts' textAnchor="start">10</text>
                        <text x={450} y={141} fontSize={20} className='readouts' textAnchor="start">20</text>
                        <text x={450} y={97} fontSize={20} className='readouts' textAnchor="start">30</text>
                        <text x={450} y={53} fontSize={20} className='readouts' textAnchor="start">40</text>
                        <text x={450} y={9} fontSize={20} className='readouts' textAnchor="start">50</text>
                        <text x={553} y={185} fontSize={20} className='readouts' textAnchor="start">10</text>
                        <text x={553} y={141} fontSize={20} className='readouts' textAnchor="start">20</text>
                        <text x={553} y={97} fontSize={20} className='readouts' textAnchor="start">30</text>
                        <text x={553} y={53} fontSize={20} className='readouts' textAnchor="start">40</text>
                        <text x={553} y={9} fontSize={20} className='readouts' textAnchor="start">50</text>



                        <text x={450} y={268} fontSize={20} className='readouts' textAnchor="start">10</text>
                        <text x={450} y={312} fontSize={20} className='readouts' textAnchor="start">20</text>
                        <text x={450} y={356} fontSize={20} className='readouts' textAnchor="start">30</text>
                        <text x={450} y={400} fontSize={20} className='readouts' textAnchor="start">40</text>

                        <text x={553} y={268} fontSize={20} className='readouts' textAnchor="start">10</text>
                        <text x={553} y={312} fontSize={20} className='readouts' textAnchor="start">20</text>
                        <text x={553} y={356} fontSize={20} className='readouts' textAnchor="start">30</text>
                        <text x={553} y={400} fontSize={20} className='readouts' textAnchor="start">40</text>
                        <text x={553} y={620} fontSize={20} className='readouts' textAnchor="start">90</text>
                        <text x={450} y={620} fontSize={20} className='readouts' textAnchor="start">40</text>



                    </g>

                    {/* Fixed marker (rotates with roll only) */}
                    <g transform="translate(-127 -42)">
                        <polygon points="630,120 640,100 650,120" fill="white" />
                    </g>

                </g>
            </g>






            <g transform={`translate(367,210)scale(0.75)`}>
                <path d="M130.5 2V42.5H115.5V16H2V2H130.5Z" fill="black" />
                <path d="M260.5 2V42.5H275.5V16H389V2H260.5Z" fill="black" />
                <path d="M130.5 2V42.5H115.5V16H2V2H130.5Z" stroke="white" stroke-width="3" stroke-linejoin="round" />
                <path d="M260.5 2V42.5H275.5V16H389V2H260.5Z" stroke="white" stroke-width="3" stroke-linejoin="round" />

                <circle cx="195" cy="10.5" r="12" stroke="white" stroke-width="3" fill='none' />
            </g>

            
            <path d="M512.5 58L499.943 36L525.057 36L512.5 58Z" fill="white" />
            <path d="M631.532 81.693L645.733 95.8945L625.484 101.942L631.532 81.693Z" fill="none" stroke="white" stroke-width="3" />
            <path d="M393.468 81.693L379.267 95.8945L399.516 101.942L393.468 81.693Z" fill="none" stroke="white" stroke-width="3" />
            <line x1="540.517" y1="58.7719" x2="542.517" y2="45.7719" stroke="white" stroke-width="3" />
            <line y1="-1.5" x2="13.1529" y2="-1.5" transform="matrix(-0.152057 -0.988372 -0.988372 0.152057 483 59)" stroke="white" stroke-width="3" />
            <line x1="565.638" y1="66.3714" x2="571.638" y2="53.3714" stroke="white" stroke-width="3" />
            <line y1="-1.5" x2="14.3178" y2="-1.5" transform="matrix(-0.419058 -0.907959 -0.907959 0.419058 458 67)" stroke="white" stroke-width="3" />
            <line x1="591.72" y1="77.2178" x2="602.72" y2="59.2178" stroke="white" stroke-width="3" />
            <line y1="-1.5" x2="21.095" y2="-1.5" transform="matrix(-0.52145 -0.853282 -0.853282 0.52145 432 78)" stroke="white" stroke-width="3" />
            <line x1="651.239" y1="135.707" x2="668.239" y2="125.707" stroke="white" stroke-width="3" />
            <line y1="-1.5" x2="19.7231" y2="-1.5" transform="matrix(-0.861934 -0.50702 -0.50702 0.861934 373 137)" stroke="white" stroke-width="3" />


            {RA_Alt_Lo_Alert && (
                <text x={660} y={200} fontSize={35} className='text-caution' textAnchor="end">LO</text>
            )}
            {RA_Alt_Hi_Alert && (
                <text x={660} y={200} fontSize={35} className='text-caution' textAnchor="end">HI</text>
            )}
        </g>
    )
};
