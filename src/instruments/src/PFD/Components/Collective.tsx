import React, {} from 'react';
import "../style.scss";

import { useSimVar } from '../../Hooks/simVars';

export const Collective = () => {
        var [Stab_Pos] = useSimVar('L:STABILATOR_POS', 'enum')
        var [AC_GS] = useSimVar('A:GROUND VELOCITY', 'knots')

        var [isAT] = useSimVar('A:AUTOPILOT MANAGED THROTTLE ACTIVE', 'Bool')
        var [TH_1] = useSimVar('A:GENERAL ENG THROTTLE LEVER POSITION:1','percent');
        var [TH_2] = useSimVar('A:GENERAL ENG THROTTLE LEVER POSITION:2','percent');
        AC_GS= Math.floor(AC_GS)
        TH_1= Math.floor(TH_1)
        TH_2= Math.floor(TH_2)
        let NR: number = (TH_1+TH_2)/2;
        Stab_Pos = Stab_Pos/4;
        Stab_Pos= Math.floor(Stab_Pos)
        NR= Math.floor(NR)

        return(
                <svg viewBox='0 0 1280 1280'>
                    <g>
                        {/* SPEED/WIND */}
                        <text x={200} y={619} fontSize={38}  className='readouts' textAnchor="start">GS</text>
                        <text x={270} y={619} fontSize={45}  className='readouts' textAnchor="start">{AC_GS}</text>


                        {/* STAB */}
                        <text x={-165} y={105} fontSize={45}  className='readouts' textAnchor="start">{Stab_Pos-30}</text>
                        <g transform={`translate(-170, 120)scale(1.25,1.25)rotate(${20-Stab_Pos})`} className='text'>
                            <path d="M3.05284 4.1724L1.97746 4.99231C0.887084 5.82365 0.681168 7.38339 1.51844 8.46921L2.86269 10.2125C5.76344 13.9744 9.30763 17.1928 13.331 19.7184C20.9569 24.5055 29.3324 27.9784 38.1082 29.9925L73 38L17.0956 3.48191C12.7233 0.7822 7.13925 1.05677 3.05284 4.1724Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                        </g>

                        <g transform={`translate(307, 505) scale(0.93,0.93)`} className='text'>
                        <path d="M17.3635 0.656629C17.269 0.556654 17.1375 0.5 17 0.5C16.8625 0.5 16.731 0.556654 16.6365 0.656629L1.04809 17.1566C0.910985 17.3018 0.873353 17.5145 0.952367 17.6979C1.03138 17.8812 1.21189 18 1.41154 18H32.5885C32.7881 18 32.9686 17.8812 33.0476 17.6979C33.1266 17.5145 33.089 17.3018 32.9519 17.1566L17.3635 0.656629Z" fill="white" stroke="white" stroke-linejoin="round"/>
                        </g>
                        <g transform={`translate(307, 215) scale(0.93,-0.93)`} className='text'>
                        <path d="M17.3635 0.656629C17.269 0.556654 17.1375 0.5 17 0.5C16.8625 0.5 16.731 0.556654 16.6365 0.656629L1.04809 17.1566C0.910985 17.3018 0.873353 17.5145 0.952367 17.6979C1.03138 17.8812 1.21189 18 1.41154 18H32.5885C32.7881 18 32.9686 17.8812 33.0476 17.6979C33.1266 17.5145 33.089 17.3018 32.9519 17.1566L17.3635 0.656629Z" fill="white" stroke="white" stroke-linejoin="round"/>
                        </g>

                        <g visibility={isAT ? 'visible' : 'hidden'} transform={`translate(305, ${-NR*2.6+480} ) scale(1.27,1.27)`} className='apreadout'>
                        <path d="M6.39604 1.5C5.94988 1.5 5.52688 1.69861 5.2419 2.0419L1.84586 6.13281C1.62234 6.40206 1.5 6.74098 1.5 7.09091V10.7273C1.5 11.0772 1.62234 11.4161 1.84586 11.6854L5.2419 15.7763C5.52688 16.1196 5.94988 16.3182 6.39604 16.3182H21.8631L25.2723 19.1574V23.9091C25.2723 24.5178 25.6401 25.0662 26.2034 25.297L30.0846 26.8879C30.4301 27.0296 30.8161 27.0372 31.167 26.9094L35.0456 25.4961L39.4039 26.9253C39.7075 27.0249 40.035 27.0249 40.3387 26.9253L44.7228 25.4877L49.1069 26.9253C49.5405 27.0675 50.0153 27.0046 50.3969 26.7543L52.8226 25.1634C53.2454 24.8862 53.5 24.4146 53.5 23.9091V7.09091C53.5 6.64879 53.305 6.22918 52.967 5.94418L48.1155 1.85327C47.8449 1.62513 47.5024 1.5 47.1485 1.5H6.39604Z" stroke="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>

                        <g visibility={isAT ? 'hidden':'visible'} transform={`translate(305, ${-NR*2.6+480} ) scale(1.27,1.27)`} fill="none">
                        <path d="M6.39604 1.5C5.94988 1.5 5.52688 1.69861 5.2419 2.0419L1.84586 6.13281C1.62234 6.40206 1.5 6.74098 1.5 7.09091V10.7273C1.5 11.0772 1.62234 11.4161 1.84586 11.6854L5.2419 15.7763C5.52688 16.1196 5.94988 16.3182 6.39604 16.3182H21.8631L25.2723 19.1574V23.9091C25.2723 24.5178 25.6401 25.0662 26.2034 25.297L30.0846 26.8879C30.4301 27.0296 30.8161 27.0372 31.167 26.9094L35.0456 25.4961L39.4039 26.9253C39.7075 27.0249 40.035 27.0249 40.3387 26.9253L44.7228 25.4877L49.1069 26.9253C49.5405 27.0675 50.0153 27.0046 50.3969 26.7543L52.8226 25.1634C53.2454 24.8862 53.5 24.4146 53.5 23.9091V7.09091C53.5 6.64879 53.305 6.22918 52.967 5.94418L48.1155 1.85327C47.8449 1.62513 47.5024 1.5 47.1485 1.5H6.39604Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>

                    </g>
                </svg>
        )
        
    };