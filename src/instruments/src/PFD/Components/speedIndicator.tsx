import React, {useEffect, useRef, useState} from 'react';
import "../style.scss";

import { SpdMarker } from './speedMarker';
import { useSimVar } from '../../Hooks/simVars';
import { CircleComponent } from './circleComponent'

export const SpdIndicator = () => {
    const [speed] = useSimVar('AIRSPEED INDICATED', 'knots');
    const [gs] = useSimVar('GROUND VELOCITY', 'knots');
    const elements : JSX.Element[] = []

    //let ones: string = "";
    let indicator: number = 0;
    let ones: Array<any> = [];
    let ones_y: number = 0;
    let tens: string = "";
    let hundreds: string = "";

    for (let i = 0; i < 11; i++) {
        let y_ = 229 - i * 28
        const tex = <text x={186} y={y_} fontSize={29} fill='white'>{i % 10}</text>
        ones.push(tex)
    }
    if (speed >= 40) {
        let y_ = 229 + 28
        const tex = <text x={186} y={y_} fontSize={29} fill='white'>9</text>
        ones.push(tex)
    }

    // ------------------------------------------------

    if (speed <= 30) {
        //ones = "0"
        tens = "3"
        ones_y = 0
    } else {
        //ones = Math.floor(speed % 10).toString()
        tens = (Math.floor(Math.floor(speed % 100) / 10)).toString()
        ones_y = ((speed % 10) * 28)
    }
    if (speed >= 100) {
        hundreds = (Math.floor(Math.floor(speed % 1000) / 100)).toString()
    }

    // Iterative adding of markers

    for (let i = 0; i < 6; i++) {
        let rot = -53 + i * 17.8
        const marker = <g transform={`rotate(${rot}, 178, 217)`}><rect x={66} y={217} height={3} width={14} fill='#ffffff'/></g>
        elements.push(marker)
    }

    for (let i = 0; i < 4; i++) {
        let rot = 55 + i * 17.8
        const marker = <g transform={`rotate(${rot}, 178, 217)`}><rect x={66} y={217} height={3} width={14} fill='#ffffff'/></g>
        elements.push(marker)
    }

    for (let i = 0; i < 2; i++) {
        let rot = 125 + i * 17.8
        const marker = <g transform={`rotate(${rot}, 178, 217)`}><rect x={66} y={217} height={3} width={14} fill='#ffffff'/></g>
        elements.push(marker)
    }

    for (let i = 0; i < 3; i++) {
        let rot = 159.5 + i * 17
        const marker = <g transform={`rotate(${rot}, 178, 217)`}><rect x={66} y={217} height={3} width={14} fill='#ffffff'/></g>
        elements.push(marker)
    }

    for (let i = 0; i < 2; i++) {
        let rot = 210 + i * 16.3
        const marker = <g transform={`rotate(${rot}, 178, 217)`}><rect x={66} y={217} height={3} width={14} fill='#ffffff'/></g>
        elements.push(marker)
    }

    // --------------------------------------------------------

    for (let i = 0; i < 5; i++) {
        let rot = -53 + i * 17.8 + 9
        const marker2 = <g transform={`rotate(${rot}, 178, 217)`}><rect x={66} y={217} height={3} width={9} fill='#ffffff'/></g>
        elements.push(marker2)
    }

    for (let i = 0; i < 4; i++) {
        let rot = 37 + i * 17.8 + 9
        const marker2 = <g transform={`rotate(${rot}, 178, 217)`}><rect x={66} y={217} height={3} width={9} fill='#ffffff'/></g>
        elements.push(marker2)
    }

    for (let i = 0; i < 7; i++) {
        let rot = 108 + i * 16.9 + 9
        const marker2 = <g transform={`rotate(${rot}, 178, 217)`}><rect x={66} y={217} height={3} width={9} fill='#ffffff'/></g>
        elements.push(marker2)
    }

    for (let i = 0; i < 3; i++) {
        let rot = 159.5 + i * 17
        const marker2 = <g transform={`rotate(${rot}, 178, 217)`}><rect x={66} y={217} height={3} width={14} fill='#ffffff'/></g>
        elements.push(marker2)
    }

    for (let i = 0; i < 2; i++) {
        let rot = 210 + i * 16.3
        const marker2 = <g transform={`rotate(${rot}, 178, 217)`}><rect x={66} y={217} height={3} width={14} fill='#ffffff'/></g>
        elements.push(marker2)
    }

    // --------------------------------------------------------

    for (let i = 0; i < 4; i++) {
        let rot = -89.45 + i * 9.15
        const marker = <g transform={`rotate(${rot}, 178, 217)`}><rect x={66} y={217} height={3} width={14} fill='#ffffff'/></g>
        elements.push(marker)
    }

    for (let i = 0; i < 4; i++) {
        let rot = -89.45 + 4.5 + i * 9.15
        const marker = <g transform={`rotate(${rot}, 178, 217)`}><rect x={66} y={217} height={3} width={9} fill='#ffffff'/></g>
        elements.push(marker)
    }
    if (speed >= 40) {
        indicator = speed * 1.712 - 207
    } else {
        indicator = speed * 0.9 - 180
    }

    return(
        <g>
            {/* Airspeed Indicator */}
            {/* Circle */}

            <g transform={`rotate(33, 178, 217)`}>
                <CircleComponent x={178} y={217} rot={0} size={213.2} progress={96.5} stroke={"#ff0000"} strokeWidth={14} />
            </g>
            <g transform={`rotate(89, 178, 217)`}>
                <CircleComponent x={178} y={217} rot={"50"} size={228} progress={11.87} stroke={"#ffffff"} strokeWidth={3} />
            </g>


            {elements}

            {/* Ones, tens, hund */}

            <clipPath id='spd-clip' >
                <polygon points='152,183 183,183 183,174 205,174 205,259 183,259 183,251 152,251' fill='grey'/>
            </clipPath>

            {/*<text x={200} y={200} fontSize={40} fill='white'>{ones}</text>*/}
            <g transform={`rotate(${indicator}, 178, 217)`}>
                <polygon points='174,217 182,217 182,150 179,140 179,125 178,110 177,125 177,140 174,150'fill='white'/>
            </g>

            <polygon points='152,183 183,183 183,174 205,174 205,259 183,259 183,251 152,251' stroke='white' strokeWidth={2} fill='black'/>

            <g clipPath='url(#spd-clip)'>
                <g transform={`translate(0 ${ones_y}) `}>
                    {ones}
                </g>
            </g>
            <text x={170} y={229} fontSize={29} fill='white'>{tens}</text>
            <text x={153} y={229} fontSize={29} fill='white'>{hundreds}</text>

            <text x={145} y={178} letter-spacing="-1" fontSize={20} fill='white'>KTS</text>
            {/* SPD Labels */}

            <text x={171} y={310} letter-spacing="-2" fontSize={22} fill='white'>0</text>
            <text x={139} y={305} letter-spacing="-2" fontSize={22} fill='white'>20</text>
            <text x={114} y={291} letter-spacing="-2" fontSize={22} fill='white'>40</text>
            <text x={87} y={250} letter-spacing="-2" fontSize={22} fill='white'>60</text>
            <text x={87} y={200} letter-spacing="-2" fontSize={22} fill='white'>80</text>
            <text x={109} y={157} letter-spacing="-2" fontSize={22} fill='white'>100</text>
            <text x={160} y={140} letter-spacing="-2" fontSize={22} fill='white'>120</text>
            <text x={206} y={157} letter-spacing="-2" fontSize={22} fill='white'>140</text>
            <text x={229} y={196} letter-spacing="-2" fontSize={22} fill='white'>160</text>
            <text x={234} y={241} letter-spacing="-2" fontSize={22} fill='white'>180</text>
            <text x={216} y={282} letter-spacing="-2" fontSize={22} fill='white'>200</text>


            {/* ------------ */}

          

        </g>
    )
};
