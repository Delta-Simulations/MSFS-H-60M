import React from 'react';
import { HorizonLine } from './horizonLine';
import { HorizonLine2 } from './horizonLine2';

import { useSimVar } from '../../Hooks/simVars';

export const Horizon = () => {

    const [roll] = useSimVar('PLANE BANK DEGREES', 'Degrees');
    const [pitch] = useSimVar('PLANE PITCH DEGREES', 'Degrees');


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

    return(
        <g>

            <clipPath id='ah-clip' >

                <rect x={350} y={6} width={326} height={340} fill='grey' rx={40} ry={40}/>
            </clipPath>
            <clipPath id='line-clip' >

                <rect x={350} y={62} width={326} height={248} fill='grey' rx={0} ry={0}/>

            </clipPath>



            <g clipPath='url(#ah-clip)' transform={`translate(6 30)`}>
                <g transform={`rotate(${roll}, 512, 188)`}>
                    <g transform={`translate(0 ${pitch * -4.45}) `}>
                        <g transform={`translate(-65 -360)`}>
                            <g>
                                <rect x={-500} y={-953} height={1500} width={2000}  fill='none'/>
                                <rect x={-500} y={547} height={1500} width={2000} fill='none'/>

                                
                                <g transform={`translate(408, 545)scale(0.3)`}>
                                <line y1="5" x2="1200" y2="5" className='linehollow' stroke-width="10" stroke-dasharray="100 30"/>
                                </g>
                            </g>
                        </g>
                    </g>

                </g>



            </g>
                <g clipPath='url(#line-clip)' transform={`translate(5 30)`}>
                    <g transform={`rotate(${roll}, 512, 188)`}>
                        <g transform={`translate(0 ${pitch * -4.45}) `}>
                            <g transform={`translate(-65 -360)`}>
                                <g>
                                    {elements}
                                    <rect x={571} y={512} width={16} height={2} className='barline'/>
                                    <rect x={554} y={522} width={50} height={2} className='barline'/>
                                    <rect x={571} y={578} width={16} height={2} className='barline'/>
                                    <rect x={554} y={568} width={50} height={2} className='barline'/>

                                </g>
                            </g>
                        </g>
                    </g>
                </g>

            <g transform={`translate(387,210)scale(0.6)`}>
                <path d="M154.5 33V5H5.5M285 33V5H434" fill='none' stroke="#05FF00" stroke-width="10" stroke-linecap="square"/>
            </g>

            <g transform={`rotate(${roll}, 512, 188)`}>
                    <g transform={`translate(-113 -70)`}>
                        <polygon points='630,110  635,110 635,85 630,85' className='barline'/>
                    </g>
                </g>
            <g transform={`translate(406.5,-16)scale(0.5)`}>
            <path d="M226 48.5V5M162.554 53.8391L155 11M100.878 70.8766L86 30M28.75 99.6721L7 62M289 53.8391L296.554 11M350.676 70.8766L365.554 30M422.804 99.6721L444.554 62" stroke="#05FF00" stroke-width="10" stroke-linecap="square" stroke-linejoin="bevel"/>

            </g>
            
        </g>
    )
};
