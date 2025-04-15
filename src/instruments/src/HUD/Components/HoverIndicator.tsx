import React, { FC } from 'react';
import { useSimVar } from '../../Hooks/simVars';
import { useInteractionEvent } from '../../Hooks/hooks';

export const HoverIndicator: FC = () => {
    let [VelocityForward] = useSimVar('VELOCITY BODY Z', 'feet per second');
    let [VelocitySide] = useSimVar('VELOCITY BODY X', 'feet per second');
    let [AC_INSPD] = useSimVar('A:GROUND VELOCITY', 'knots');

let HoverVisible = 1
if(AC_INSPD>150){
    HoverVisible = 0
}else{
    HoverVisible = 1
}

let ScalarMovement = 10
if(VelocityForward>36){
    VelocityForward = 36*ScalarMovement
}else{
    VelocityForward = VelocityForward*ScalarMovement
}
if(VelocitySide>36){
    VelocitySide = 36*ScalarMovement
}else{
    VelocitySide = VelocitySide*ScalarMovement
}
    return (
        <g visibility={HoverVisible ? 'visible' : 'hidden'}>


            <g clipPath='url(line-clip)'>
                <line x1="696" y1="636" x2={696+VelocitySide} y2={636-VelocityForward} className='linehollow' stroke-width="7" />
            </g>

            <g transform={`translate(${VelocitySide} ${-VelocityForward})`}>
                <rect x={674} y={613} width={43} height={43} className='linehollow' fill="none" stroke-width="5"/>
            </g>
            



        </g>
    );
};