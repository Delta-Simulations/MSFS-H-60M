import React, {} from 'react';
import "../style.scss";
import { useSimVar } from '../../Hooks/simVars';


export const EICASAdvisory = () => {
    let PAGEWarn: number = 1 
    let PAGEAlert: number = 1 
        return(
            
                <g>
            {/* BOX============ */}

                        <g transform="translate(-31,0)" >
                            <rect x={-119} y={875} width="500" height="300" stroke="white" fill="none" stroke-width="3"/>
                            
                        
                            <rect x={-164} y={924} width="35" height="145" stroke="white" fill="none" stroke-width="3"/>
                            <text x={-135} y={957} fontSize={35} fill='#00EE00' className='text' textAnchor="start">P</text>
                            <text x={-135} y={990} fontSize={35} fill='#00EE00' className='text' textAnchor="start">A</text>
                            <text x={-135} y={1025} fontSize={35} fill='#00EE00' className='text' textAnchor="start">G</text>
                            <text x={-135} y={1060} fontSize={35} fill='#00EE00' className='text' textAnchor="start">E</text>
                            <text x={105} y={1210} fontSize={35} fill='#00EE00' className='text' textAnchor="start">PAGE</text>
                            <text x={145} y={1210} fontSize={35} fill='#00EE00' className='text' textAnchor="start">{PAGEWarn}</text>
                            <text x={210} y={1210} fontSize={35} fill='#00EE00' className='text' textAnchor="start">OF</text>
                            <text x={250} y={1210} fontSize={35} fill='#00EE00' className='text' textAnchor="start">3</text>
                            <g transform="translate(1115,0)" >
                            <text x={105} y={1210} fontSize={35} fill='#00EE00' className='text' textAnchor="start">PAGE</text>
                            <text x={145} y={1210} fontSize={35} fill='#00EE00' className='text' textAnchor="start">{PAGEWarn}</text>
                            <text x={210} y={1210} fontSize={35} fill='#00EE00' className='text' textAnchor="start">OF</text>
                            <text x={250} y={1210} fontSize={35} fill='#00EE00' className='text' textAnchor="start">3</text>
                            <rect x={-130} y={875} width="500" height="300" stroke="white" fill="none" stroke-width="3"/>
                            </g>
                            <g transform="translate(1665,0)" >
                            <rect x={-164} y={924} width="35" height="145" stroke="white" fill="none" stroke-width="3"/>
                            <text x={-135} y={957} fontSize={35} fill='#00EE00' className='text' textAnchor="start">P</text>
                            <text x={-135} y={990} fontSize={35} fill='#00EE00' className='text' textAnchor="start">A</text>
                            <text x={-135} y={1025} fontSize={35} fill='#00EE00' className='text' textAnchor="start">G</text>
                            <text x={-135} y={1060} fontSize={35} fill='#00EE00' className='text' textAnchor="start">E</text>
                            </g>
                            <text x={105} y={1210} fontSize={35} fill='#00EE00' className='text' textAnchor="start">PAGE</text>
                            <text x={145} y={1210} fontSize={35} fill='#00EE00' className='text' textAnchor="start">{PAGEWarn}</text>
                            <text x={210} y={1210} fontSize={35} fill='#00EE00' className='text' textAnchor="start">OF</text>
                            <text x={250} y={1210} fontSize={35} fill='#00EE00' className='text' textAnchor="start">3</text>

                            <g transform={`translate(1488,760)scale(-1,1)`}>
                                <polygon points='0,110  80,110 40,90' className='text'/>

                                <polygon points='-42,315  -12,315 -27,340' className='text'/>
                                <polygon points='-42,160  -12,160 -27,135' className='text'/>
                                <polygon points='0,420  80,420 40,450' className='text'/>
                            </g>

                            <g transform={`translate(-120,760)`}>
                                <polygon points='0,110  80,110 40,90' className='text'/>

                                <polygon points='-42,315  -12,315 -27,340' className='text'/>
                                <polygon points='-42,160  -12,160 -27,135' className='text'/>
                                <polygon points='0,420  80,420 40,450' className='text'/>
                            </g>


                    </g>





                </g>
        )
        
    };