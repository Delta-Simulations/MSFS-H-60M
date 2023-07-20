import React, {FC} from 'react';
import { render } from '../Hooks/index';
import { useSimVar } from '../Hooks/simVars';
import { Horizon } from './Components/horizon';
import { Ap_Disp } from './Components/Ap_Disp';
import './style.scss';
import { VertSpeed } from './Components/VSpeed';
import { Clock } from './Components/Clock';

interface ElectricityProps {
    circuit: string | number;
  }
  
    const Electricity: FC<ElectricityProps> = ({ circuit, children }) => {
    const [isPowerOn] = useSimVar(`CIRCUIT ON:${circuit}`, "Bool");
  
    if (!isPowerOn) return null;
  
    return <div>{children}</div>;
};

const AP = () => {

    return(
        <Electricity circuit='3'>
            <svg viewBox='0 0 1280 1280'>
                <rect x={0} y={0} width={1280} height={1280} fill='black'/>
                <g> 
                    <Ap_Disp />
                    <Clock />

                    <clipPath id='ESIS_CLIP' >
                        <rect x={110} y={757} width={446} height={424} fill='black'/> {/*clipPath='url(#ah-clip)'*/}
                    </clipPath>

                    <g clipPath='url(#ESIS_CLIP)'>
                        <g transform="translate(-320,704)scale(1.24)">
                            <Horizon />
                        </g>
                        <VertSpeed />
                    </g>
                    <image x={-400} y={550} xlinkHref="/Images/ESIS.png" width={1400} opacity={0.7}/>

                    <image x={600} y={650} xlinkHref="/Images/clockH60.png" width={600} opacity={0.8}/>
                </g>
            </svg>
        </Electricity>
    )
    
};

render(<AP/>);
