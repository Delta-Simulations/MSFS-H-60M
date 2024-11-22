import React, { FC, ReactNode, useState, useEffect } from 'react';
import { render } from "../Hooks/index";
import { useSimVar } from '../Hooks/simVars';
import { Horizon } from './Components/horizon';
//import { VerticalSpeed } from './Components/verticalSpeed';
import { SpdIndicator } from './Components/speedIndicator';
import { ApReadout } from './Components/ApReadout';
import { Fixed } from './Components/Fixed';
import { PowerPod } from './Components/PowerPod';
import { Collective } from './Components/Collective';
import { HeadingBug } from './Components/HeadingBug';
import { FlightDirector } from './Components/flightDirector';
import { AltCircle } from './Components/AltCircle';
import { VerticalSpeed } from './Components/verticalSpeed';
import { getDisplayIndex } from '../Hooks/defaults';

import { EICAS } from './Components/EICAS';
import { EICASFuel } from './Components/EICASFuel';
import { EICASExtTanks } from './Components/EICASExtTanks';
import { Electricity_MFD } from '../Common/circuit';
import "./style.scss";

import { NDMain } from './Components/NDMain';

const PFD = () => {
    let DisplayID = getDisplayIndex();
    let displaycontrols = `L:H60_MFD_${DisplayID}_MODE`;
    
    const [DISP_TYPE] = useSimVar(displaycontrols, 'enum');
    const [Ext_Tanks] = useSimVar('L:ADDITIONSVIS', 'enum');

    const [loadingDisp, setShowRectangle] = useState(true); // State to track rectangle visibility
    useEffect(() => {
        if (loadingDisp) {
          // Hide the rectangle after 4 seconds
          const timer = setTimeout(() => setShowRectangle(false),  Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000);
          return () => clearTimeout(timer); // Cleanup the timeout if component unmounts
        }
      }, [loadingDisp]);
   
return(
    <Electricity_MFD powerVar={`L:H60_MFD_${DisplayID}_PWR`}>
            <svg viewBox='0 0 1024 768'>
                <rect x={0} y={0} width={1024} height={768} fill='#000000'/>
                <g transform="translate(-9,0)">

                    


                    {/* PFD SPECIFIC */}

                    <g visibility={DISP_TYPE == 0 ? 'visible' : 'hidden'}>
                        <image xlinkHref="/Images/pd.png"  height={768} x={0} y={0} opacity={0.7}/>
                        <Horizon />
                        <SpdIndicator />
                        <ApReadout />
                        <PowerPod />
                        <HeadingBug />
                        <Collective />
                        <AltCircle />

                        
                        <VerticalSpeed />
                        <g transform="translate(-67,-158)">
                            <FlightDirector />
                        </g>
                        
                    </g>

                    <g visibility={DISP_TYPE == 2 ? 'visible' : 'hidden'}>
                        <rect x={0} y={0} width={1024} height={768} fill='#00000'/>
                        <image xlinkHref="/Images/ECAS.png" height={768} x={-0} y={0} opacity={0.7}/>      
                        <EICAS />
                        <EICASFuel />
                    </g>

                    <g visibility={(2==Ext_Tanks)&&(DISP_TYPE==2) ?'visible' : 'hidden'}>
                    <EICASExtTanks />
                    </g>

                    <g visibility={DISP_TYPE == 1 ? 'visible' : 'hidden'}>
                        <rect x={0} y={0} width={1024} height={768} fill='#00000'/>
                        <NDMain />
                    </g>


                    <Fixed />
                </g>
                <rect visibility={loadingDisp ? 'visible' : 'hidden'} x={0} y={0} width={1024} height={768} fill='#fff9cb'/>

            </svg>
            </Electricity_MFD>
    )
};

type TapeProps = {
    x: number,
    y: number,
    fontSize: number,
    valueAmount: number,
    valueMinimum: number,
    valueMultiple: number,
    valueSpacing: number,
    markAmount: number,
    markSpacing: number,
    markDistance: number,
    markYOffset: number,
    markWidth: number,
};
export const Tape = ({ x, y, fontSize, valueAmount, valueMinimum, valueMultiple, valueSpacing, markAmount, markSpacing, markDistance, markYOffset, markWidth }: TapeProps) => {
    return (
        <g>
            {[...Array(valueAmount)].map((_, index) => index * valueMultiple >= valueMinimum && <text x={x} y={y - index * valueSpacing} fontSize={fontSize} fill='white' textAnchor='middle'>{index * valueMultiple < 100 ? index * valueMultiple < 10 ? `00${index * valueMultiple}` : `0${index * valueMultiple}` : index * valueMultiple}</text>)}
            {[...Array(markAmount)].map((_, index) => index * valueMultiple > valueMinimum && <rect x={x + markDistance} y={(y - fontSize / 2 - index * markSpacing) + markYOffset} width={markWidth} height={3.5} fill='white' />)}
        </g>
    );
};


render(<PFD/>)
