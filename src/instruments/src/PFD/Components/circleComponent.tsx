import React, {useEffect, useRef, useState} from 'react';
import "../style.scss";

import { SpdMarker } from './speedMarker';
import { useSimVar } from '../../Hooks/simVars';

export const CircleComponent = (props) => {

    //let ones: string = "";
    let indicator: number = 0;
    let ones: Array<any> = [];
    let ones_y: number = 0;
    let tens: string = "";
    let hundreds: string = "";

    // ------------------------------------------------

    const [offset, setOffset] = useState(0);
    const progress = props.progress

    const size = props.size
    const radius = size / 2 - 3 / 2;

    const rotation = props.rot

    const circumference = 2 * Math.PI * radius;
    useEffect(() => {
        const progressOffset = ((progress) / 100) * circumference;
        setOffset(progressOffset);
    }, [setOffset, circumference, progress, offset]);

    return(
        <g>
            <circle strokeWidth={props.strokeWidth} cx={props.x} cy={props.y} r={radius} stroke={props.stroke} strokeDasharray={circumference} strokeDashoffset={offset} fill={"rgba(255,255,255,0)"}/>
        </g>
    )
};
