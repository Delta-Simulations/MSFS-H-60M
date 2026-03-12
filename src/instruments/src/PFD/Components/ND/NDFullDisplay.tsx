import React from 'react';
import "../../style.scss";
import { useSimVar } from '../../../Hooks/simVars';
import { createRadialLines } from '../../../Common/DrawShapes';
import { RadarAltCircle } from '../PFD/RadarAltCircle';

export const NDFullDisplay = () => {

    const lines_small = createRadialLines({
        cx: 0,
        cy: 0,
        radius: 302,
        count: 72,
        length: 15
    });
    const lines_large = createRadialLines({
        cx: 0,
        cy: 0,
        radius: 302,
        count: 36,
        length: 30
    });


    const [Map_Orientation] = useSimVar("L:H60_TAC_MAP_ORIENT", "bool");
    let [ac_heading] = useSimVar("A:PLANE HEADING DEGREES GYRO", "degrees");
    ac_heading = Math.round(ac_heading * 100) / 100;


    return (
        <g>

            <g transform={`translate(409, 384) rotate(${Map_Orientation ? 0 : -ac_heading})`}>
                {lines_small.map((line, i) => (<line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="black" strokeWidth={4} />))}
                {lines_large.map((line, i) => (<line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="black" strokeWidth={4} />))}

                {lines_small.map((line, i) => (<line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="white" strokeWidth={2} />))}
                {lines_large.map((line, i) => (<line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="white" strokeWidth={2} />))}
            </g>
            <g transform="translate(380.5,36)scale(0.72)">
                <path d="M2 40.5V2H81.5V40.5H55.5L41.5 54.5L27.5 40.5H2Z" stroke="white" stroke-width="3" stroke-linejoin="bevel" />
            </g>

            <text x={410} y={62} fontSize={27} fill='White' className='readouts' textAnchor="middle">{Math.floor(ac_heading)}</text>



        </g>
    )
};
