import React, { useMemo } from 'react';
import { useSimVar } from '../../../Hooks/simVars';

export const Clock = () => {
    const [clockMode] = useSimVar('L:H60_Clock_Mode', 'bool'); // 0 = C, 1 = ET
    const [timer_sec] = useSimVar('L:H60_Clock_Timer_Sec', 'seconds'); // Timer seconds (for ET mode)
    const [time] = useSimVar('E:LOCAL TIME', 'seconds');
    let active_time = 0;
    if (clockMode) {
       active_time = timer_sec;
    } else {
        active_time = Math.floor(time*100)/100;
    }

    // --- FORMAT TIME (HH:MM:SS) ---
    const { hh, mm, ss } = useMemo(() => {
        const hours = Math.floor(active_time / 3600) % 24;
        const minutes = Math.floor((active_time % 3600) / 60);
        const seconds = Math.floor(active_time % 60);

        return {
            hh: String(hours).padStart(2, '0'),
            mm: String(minutes).padStart(2, '0'),
            ss: String(seconds).padStart(2, '0'),
        };
    }, [active_time]);

    // --- NEEDLE ROTATION (seconds → 360°) ---
    const seconds = active_time % 60;
    const angle = seconds * 6; // 360 / 60

    // --- CENTER OF YOUR DIAL (adjust if needed) ---
    const cx = 896;   // ~center of your numbers
    const cy = 940;

    // --- DIAL NUMBERS ---
    const numbers = [
        { val: "60", x: 882, y: 773 },
        { val: "5", x: 966, y: 793 },
        { val: "10", x: 1018, y: 846 },
        { val: "15", x: 1046, y: 936 },
        { val: "20", x: 1026, y: 1016 },
        { val: "25", x: 970, y: 1078 },
        { val: "30", x: 882, y: 1103 },
        { val: "35", x: 788, y: 1072 },
        { val: "40", x: 748, y: 1010 },
        { val: "45", x: 735, y: 930 },
        { val: "50", x: 760, y: 850 },
        { val: "55", x: 810, y: 793 },
    ];

    return (
        <g>

            {/* --- DIAL NUMBERS --- */}
            {numbers.map((n, i) => (
                <text
                    key={i}
                    x={14 + n.x}
                    y={n.y}
                    fontSize={30}
                    textAnchor="middle"
                    className="readouts_white"
                >
                    {n.val}
                </text>
            ))}

            {/* --- SWEEP SECOND HAND --- */}
            <g transform={`rotate(${angle} ${cx} ${cy})`}>
                <line
                    x1={cx}
                    y1={cy}
                    x2={cx}
                    y2={cy - 140} // length of needle
                    stroke="white"
                    strokeWidth={3}
                />
            </g>

            {/* --- CENTER HUB --- */}
            <circle cx={cx} cy={cy} r={100} fill="black" />

            {/* --- DIGITAL READOUT --- */}
            <text
                x={cx}
                y={cy - 43}
                fontSize={50}
                textAnchor="middle"
                className="readouts_white"
            >
                {hh}{mm}
            </text>

            <text
                x={cx}
                y={cy + 11}
                fontSize={50}
                textAnchor="middle"
                className="readouts_white"
            >
                {ss}
            </text>

            {/* --- MODE INDICATOR --- */}
            <text
                x={cx}
                y={cy + 67}
                fontSize={50}
                textAnchor="middle"
                className="readouts_white"
            >
                {clockMode ? "ET" : "C"}
            </text>



        </g>
    );
};