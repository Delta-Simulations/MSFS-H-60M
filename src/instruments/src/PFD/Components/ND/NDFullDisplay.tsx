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

            <g transform={`translate(409, 384) rotate(${Map_Orientation ? 0 : ac_heading})`}>
{lines_small.map((line, i) => ( <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="black" strokeWidth={4} /> ))}
{lines_large.map((line, i) => ( <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="black" strokeWidth={4} /> ))}

{lines_small.map((line, i) => ( <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="white" strokeWidth={2} /> ))}
{lines_large.map((line, i) => ( <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="white" strokeWidth={2} /> ))}
            </g>
        </g>
    )
};
