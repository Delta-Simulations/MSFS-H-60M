import React, { } from 'react';
import "../../style.scss";

import { useSimVar } from '../../../Hooks/simVars';

export const Collective = () => {
    let [Stab_Pos] = useSimVar('L:STABILATOR_POS', 'enum');
    let [Egi_Failed] = useSimVar('L:H60_SYS_EGI_FAILED', 'bool');

    let [AC_GS] = useSimVar('A:GROUND VELOCITY', 'knots');
    let [AC_Wind_Speed] = useSimVar('A:AMBIENT WIND VELOCITY', 'knots');
    let [AC_Wind_Dir] = useSimVar('A:AMBIENT WIND DIRECTION', 'degrees');
    let [AC_Bearing] = useSimVar("A:PLANE HEADING DEGREES GYRO", "degrees");

    AC_Wind_Speed = Math.floor(AC_Wind_Speed) ;
    AC_Wind_Dir = Math.floor(((AC_Wind_Dir - AC_Bearing + 360) % 360)*10)/10 ;

    let [collective_POS] = useSimVar('A:COLLECTIVE POSITION', 'percent');
    let [AFCS_Collective_FD] = useSimVar('AUTOPILOT FLIGHT DIRECTOR ACTIVE', 'Bool');

    AC_GS = Math.floor(AC_GS)

 

    return (
        
            <g>
                {/* SPEED/WIND */}
                <text x={248} y={369} fontSize={20} className='readouts' textAnchor="start">GS</text>
                <text x={278} y={369.5} fontSize={27} className={Egi_Failed ? "text-warning" : "readouts"} textAnchor="start">{Egi_Failed ? "---" : AC_GS}</text>

            {AC_Wind_Speed >= 4 && (
                <g>
                    <text x={284} y={404} fontSize={27} className='readouts' textAnchor="start">{AC_Wind_Speed}</text>
                    <g transform={`rotate(${AC_Wind_Dir}, 296, 425) translate(289, 410) `}>
                        <path d="M7.25 40L14.4669 27.5L0.0331204 27.5L7.25 40ZM6 -5.46392e-08L6 28.75L8.5 28.75L8.5 5.46392e-08L6 -5.46392e-08Z" fill="white" />
                    </g>
                </g>
            )}

                {/* STAB */}
                <text x={28} y={35.5} fontSize={20} className='readouts' textAnchor="start">STB</text>
                <text x={29} y={62} fontSize={27} className='readouts' textAnchor="start">{20}</text>
                <g transform={`translate(26, 70)scale(0.73,0.73)rotate(${-3})`} className='text'>
                    <path d="M3.05284 4.1724L1.97746 4.99231C0.887084 5.82365 0.681168 7.38339 1.51844 8.46921L2.86269 10.2125C5.76344 13.9744 9.30763 17.1928 13.331 19.7184C20.9569 24.5055 29.3324 27.9784 38.1082 29.9925L73 38L17.0956 3.48191C12.7233 0.7822 7.13925 1.05677 3.05284 4.1724Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round" />
                </g>

                <g transform={`translate(307, 302) scale(0.6)`} className='text'>
                    <path d="M17.3635 0.656629C17.269 0.556654 17.1375 0.5 17 0.5C16.8625 0.5 16.731 0.556654 16.6365 0.656629L1.04809 17.1566C0.910985 17.3018 0.873353 17.5145 0.952367 17.6979C1.03138 17.8812 1.21189 18 1.41154 18H32.5885C32.7881 18 32.9686 17.8812 33.0476 17.6979C33.1266 17.5145 33.089 17.3018 32.9519 17.1566L17.3635 0.656629Z" fill="white" stroke="white" stroke-linejoin="round" />
                </g>
                <g transform={`translate(307, 128) scale(0.6,-0.6)`} className='text'>
                    <path d="M17.3635 0.656629C17.269 0.556654 17.1375 0.5 17 0.5C16.8625 0.5 16.731 0.556654 16.6365 0.656629L1.04809 17.1566C0.910985 17.3018 0.873353 17.5145 0.952367 17.6979C1.03138 17.8812 1.21189 18 1.41154 18H32.5885C32.7881 18 32.9686 17.8812 33.0476 17.6979C33.1266 17.5145 33.089 17.3018 32.9519 17.1566L17.3635 0.656629Z" fill="white" stroke="white" stroke-linejoin="round" />
                </g>

                
            {AFCS_Collective_FD && (
                <g transform={`translate(307, ${285 - collective_POS * 1.55} ) scale(0.7)`} fill="rgb(209, 1, 209)" >
                    <path d="M6.39604 1.5C5.94988 1.5 5.52688 1.69861 5.2419 2.0419L1.84586 6.13281C1.62234 6.40206 1.5 6.74098 1.5 7.09091V10.7273C1.5 11.0772 1.62234 11.4161 1.84586 11.6854L5.2419 15.7763C5.52688 16.1196 5.94988 16.3182 6.39604 16.3182H21.8631L25.2723 19.1574V23.9091C25.2723 24.5178 25.6401 25.0662 26.2034 25.297L30.0846 26.8879C30.4301 27.0296 30.8161 27.0372 31.167 26.9094L35.0456 25.4961L39.4039 26.9253C39.7075 27.0249 40.035 27.0249 40.3387 26.9253L44.7228 25.4877L49.1069 26.9253C49.5405 27.0675 50.0153 27.0046 50.3969 26.7543L52.8226 25.1634C53.2454 24.8862 53.5 24.4146 53.5 23.9091V7.09091C53.5 6.64879 53.305 6.22918 52.967 5.94418L48.1155 1.85327C47.8449 1.62513 47.5024 1.5 47.1485 1.5H6.39604Z" stroke="none" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            )}  

                <g transform={`translate(307, ${285 - collective_POS * 1.55} ) scale(0.7)`} fill="none">
                    <path d="M6.39604 1.5C5.94988 1.5 5.52688 1.69861 5.2419 2.0419L1.84586 6.13281C1.62234 6.40206 1.5 6.74098 1.5 7.09091V10.7273C1.5 11.0772 1.62234 11.4161 1.84586 11.6854L5.2419 15.7763C5.52688 16.1196 5.94988 16.3182 6.39604 16.3182H21.8631L25.2723 19.1574V23.9091C25.2723 24.5178 25.6401 25.0662 26.2034 25.297L30.0846 26.8879C30.4301 27.0296 30.8161 27.0372 31.167 26.9094L35.0456 25.4961L39.4039 26.9253C39.7075 27.0249 40.035 27.0249 40.3387 26.9253L44.7228 25.4877L49.1069 26.9253C49.5405 27.0675 50.0153 27.0046 50.3969 26.7543L52.8226 25.1634C53.2454 24.8862 53.5 24.4146 53.5 23.9091V7.09091C53.5 6.64879 53.305 6.22918 52.967 5.94418L48.1155 1.85327C47.8449 1.62513 47.5024 1.5 47.1485 1.5H6.39604Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                

            </g>
        
    )

};