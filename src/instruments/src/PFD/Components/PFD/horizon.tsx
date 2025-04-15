import React from 'react';
import { HorizonLine } from './horizonLine';
import { HorizonLine2 } from './horizonLine2';

import { useSimVar } from '../../../Hooks/simVars';

export const Horizon = () => {

    const [roll] = useSimVar('PLANE BANK DEGREES', 'Degrees');
    let [pitch] = useSimVar('PLANE PITCH DEGREES', 'Degrees');
    pitch = pitch

    const elements : JSX.Element[] = []

    for (let i = 1; i < 10; i++) {
        let height2 = 548 - (i*45)
        let aircraftPitch = (i*10)
        const SpdMark = <HorizonLine height={height2} label={aircraftPitch} />
        elements.push(SpdMark)
    }
    for (let i = 1; i < 10; i++) {
        let height2 = 544 + (i*45)
        let aircraftPitch = (i*10)
        const SpdMark = <HorizonLine height={height2} label={aircraftPitch} />
        elements.push(SpdMark)
    }
    for (let i = 1; i < 10; i++) {
        let height2 = 503 - (i*45)
        const SpdMark = <HorizonLine2 height={height2}/>
        elements.push(SpdMark)
    }
    for (let i = 0; i < 9; i++) {
        let height2 = 589 + (i * 45)
        const SpdMark = <HorizonLine2 height={height2}/>
        elements.push(SpdMark)
    }

    const [RA_Alt_Lo_Alert] = useSimVar('L:H60_CAS_RADALT_LO_ALERT', 'feet')
    const [RA_Alt_Hi_Alert] = useSimVar('L:H60_CAS_RADALT_HI_ALERT', 'bool')
    const [RA_ALT] = useSimVar('A:PLANE ALT ABOVE GROUND MINUS CG', 'feet')


    return(
        <g>

            <clipPath id='ah-clip' >

                <rect x={350} y={6} width={326} height={340} fill='grey' rx={40} ry={40}/>
                {/*clipPath='url(#ah-clip)'*/}
            </clipPath>
            <clipPath id='line-clip' >

                <rect x={350} y={62} width={326} height={248} fill='grey' rx={0} ry={0}/>
                {/*clipPath='url(#ah-clip)'*/}
            </clipPath>
            {/*<path d="M 593 559 L 611 559 L 633 594 L 650 556 L 655 556 L 674 594 L 695 559 L 713 559" fill="transparent" stroke="white" strokeWidth={5} strokeLinecap={"round"} strokeLinejoin={"round"}/>*/}

            <g clipPath='url(#ah-clip)' transform={`translate(6 30)`}>
                <g transform={`rotate(${roll}, 512, 188)`}>
                    <g transform={`translate(0 ${pitch * -4.45}) `}>
                        <g transform={`translate(-65 -360)`}>
                            <g>
                                <rect x={-500} y={-953} height={1500} width={2000} fill='#00bee6'/>
                                <rect x={-500} y={547} height={1500} width={2000} fill='#ca9f30'/>

                                <rect x={-500} y={545} width={2000} height={3} fill='white'/>

                            </g>
                        </g>
                    </g>

                </g>
                    <g transform={`rotate(${roll}, 512, 188)`}>
                        <g transform={`translate(-127 -70)`}>
                            <polygon points='630,120 640,100 650,120' fill='white'/>
                        </g>
                    </g>
            </g>
                <g clipPath='url(#line-clip)' transform={`translate(5 30)`}>
                    <g transform={`rotate(${roll}, 512, 188)`}>
                        <g transform={`translate(0 ${pitch * -4.45}) `}>
                            <g transform={`translate(-65 -360)`}>
                                <g>
                                    {elements}
                                    <rect x={571} y={512} width={16} height={2} fill='white'/>
                                    <rect x={554} y={522} width={50} height={2} fill='white'/>
                                    <rect x={571} y={578} width={16} height={2} fill='white'/>
                                    <rect x={554} y={568} width={50} height={2} fill='white'/>

                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            <g transform={`translate(402,210)scale(0.6)`}>
                <path d="M130.5 2V42.5H115.5V16H2V2H130.5Z" fill="black"/>
                <path d="M260.5 2V42.5H275.5V16H389V2H260.5Z" fill="black"/>
                <path d="M130.5 2V42.5H115.5V16H2V2H130.5Z" stroke="white" stroke-width="3" stroke-linejoin="round"/>
                <path d="M260.5 2V42.5H275.5V16H389V2H260.5Z" stroke="white" stroke-width="3" stroke-linejoin="round"/>

                <circle cx="195" cy="17.5" r="16" stroke="white" stroke-width="3"fill='none'/>
            </g>
          
        {RA_Alt_Lo_Alert && (
            <text x={660} y={200} fontSize={35}  className='text-caution' textAnchor="end">LO</text>
            )}
        {RA_Alt_Hi_Alert && (
            <text x={660} y={200} fontSize={35}  className='text-caution' textAnchor="end">HI</text>
        )}
        </g>
    )
};
