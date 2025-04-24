import React, {FC} from 'react';
import { render } from '../Hooks/index';
import { useSimVar } from '../Hooks/simVars';
import { Fixed_Readout } from './Components/Fixed_Readout';
import { Fixed } from './Components/Fixed';
import { Horizon } from './Components/horizon';
import { FlightDirector } from './Components/flightDirector';
import { HoverIndicator } from './Components/HoverIndicator';
import { HUDPower } from '../Common/circuit';
import './style.scss';
import { HeadingTape } from './Components/HeadingTape';
import { RAIndicator } from './Components/RAIndicator';



import { Electricity } from '../Common/circuit';

const HUD = () => {



    const [DCLT_HUD] = useSimVar('L:DCLT_HUD', 'enum');
    const [HUD_OVERLAY] = useSimVar('L:HUD_OVERLAY', 'bool');


    let indicator: boolean = HUD_OVERLAY
    return(
        <Electricity circuit='3'>
            <HUDPower localVar="H60_HUD_PWR">
            <svg viewBox='0 0 1360 1350'>
                <g>
                    
                   <image visibility={indicator ? 'visible' : 'hidden'} x={0} y={0} xlinkHref="/Images/HUDH60.jpg" width={1360} height={1350} opacity={0.6}/>
                    
                    <g transform={`translate(-395, 180)scale(2.1)`}>
                        <Horizon />
                    </g>
                    <g transform={`translate(-535, -150)scale(2.1)`}>
                        <FlightDirector />
                    </g>
                    
                    <Fixed />
                    <Fixed_Readout />
                    <RAIndicator />
                    {/* <HeadingTape /> */}
                    <HoverIndicator />
                    {/* <FPVCombo /> */}

                </g>
            </svg>
            </HUDPower>
    </Electricity>

    )
    
};

render(<HUD/>);
