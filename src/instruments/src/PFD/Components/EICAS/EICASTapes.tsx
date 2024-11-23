import React, { } from 'react';

import "../../style.scss";
import { EICASAdvisory } from './EICASAdvisory';


import { useSimVar } from '../../../Hooks/simVars';

export const EICASTapes = () => {
    let [TMP_1] = useSimVar('A:ENG OIL TEMPERATURE:1', 'Celsius');
    TMP_1 = Math.round(TMP_1 * 10) / 10
    let [PRESS_1] = useSimVar('A:ENG OIL PRESSURE:1', 'psi');
    PRESS_1 = Math.round(PRESS_1 * 10) / 10
    let [NG_1] = useSimVar('A:TURB ENG CORRECTED N1:1', 'percent');
    NG_1 = Math.round(NG_1 * 10) / 10
    let [TGT_1] = useSimVar('A:ENG EXHAUST GAS TEMPERATURE:1', 'Celsius');
    TGT_1 = Math.round(TGT_1 * 10) / 10
    let [Q1] = useSimVar('A:ENG TORQUE PERCENT:1', 'percent');
    Q1 = Math.round(Q1 * 10) / 10
    let [NP_1] = useSimVar('GENERAL ENG PCT MAX RPM:1', 'percent');
    NP_1 = Math.round(NP_1 * 10) / 10
    let [TMP_2] = useSimVar('A:ENG OIL TEMPERATURE:1', 'Celsius');
    TMP_2 = Math.round(TMP_2 * 10) / 10
    let [PRESS_2] = useSimVar('A:ENG OIL PRESSURE:1', 'psi');
    PRESS_2 = Math.round(PRESS_2 * 10) / 10
    let [NG_2] = useSimVar('A:TURB ENG CORRECTED N1:1', 'percent');
    NG_2 = Math.round(NG_2 * 10) / 10
    let [TGT_2] = useSimVar('A:ENG EXHAUST GAS TEMPERATURE:1', 'Celsius');
    TGT_2 = Math.round(TGT_2 * 10) / 10
    let [Q2] = useSimVar('A:ENG TORQUE PERCENT:1', 'percent');
    Q2 = Math.round(Q2 * 10) / 10
    let [NP_2] = useSimVar('GENERAL ENG PCT MAX RPM:1', 'percent');
    NP_2 = Math.round(NP_2 * 10) / 10

    let [NR] = useSimVar('A:ROTOR RPM PCT:1', 'percent');
    NR = Math.round(NR * 10) / 10

    return (
        <g>
            <g>
                {/* TAPES - LEFT TEMP PRESSURE */}
                <g transform="translate(0,0)" >
                    <rect
                        transform={`rotate(180 49.7 239)`}
                        x={36.7}
                        y={159}
                        width="26"
                        height={Math.min(TMP_1 * 1.65 - 115, 160)}
                        className={
                            TMP_1 < 135
                                ? "tapeGreen"
                                : TMP_1 <= 150
                                    ? "tapeYellow"
                                    : "tapeRedStripes"
                        }
                    />
                    <rect x={36.7} y={159} width="26" height="160" stroke="white" fill="none" />
                    <rect x={34.7} y={182} width="30" height="2" stroke="none" className='barmax' />
                    <text x={58} y={123} fontSize={23} className='text' textAnchor="middle">T</text>
                    <text x={76} y={152} fontSize={27} className={TMP_1 < 135 ? "text-safe" : TMP_1 <= 150 ? "text-caution" : "text-warning"} textAnchor="middle">{Math.round(TMP_1)}</text>
                </g>
                <g transform="translate(70.5,0)" >
                    <rect
                        transform={`rotate(180 49.7 239)`}
                        x={36.7}
                        y={159}
                        width="26"
                        height={Math.min(PRESS_1 * 1.2 - 10, 160)}
                        className={
                            PRESS_1 <= 22
                                ? "tapeRedStripes"
                                : PRESS_1 <= 26
                                    ? "tapeYellow"
                                    : PRESS_1 <= 100
                                        ? "tapeGreen"
                                        : PRESS_1 <= 120
                                            ? "tapeYellow"
                                            : "tapeRedStripes"
                        }
                    />
                    <rect x={36.7} y={159} width="26" height="160" stroke="white" fill="none" />
                    <rect x={34.7} y={182} width="30" height="2" className='barmax' />
                    <rect x={34.7} y={280} width="30" height="2" className='barwarn' />
                    <rect x={34.7} y={300} width="30" height="2" className='barmax' />

                    <text x={58} y={123} fontSize={23} className='text' textAnchor="middle">P</text>
                    <text x={76} y={152} fontSize={27} className={PRESS_1 <= 22 ? "text-warning" : PRESS_1 <= 26 ? "text-caution" : PRESS_1 <= 100 ? "text-safe" : PRESS_1 <= 120 ? "text-caution" : "text-warning"} textAnchor="middle">{Math.round(PRESS_1)}</text>
                </g>
                <g transform="translate(144.3,0)" >
                    <rect
                        transform={`rotate(180 49.7 239)`}
                        x={36.7}
                        y={159}
                        width="26"
                        height={Math.min(NG_1 * 30 - 3075, 160)}
                        className={


                            NG_1 <= 105
                                ? "tapeGreen"
                                : NG_1 <= 106
                                    ? "tapeYellow"
                                    : "tapeRedStripes"
                        }
                    />
                    <rect x={36.7} y={159} width="26" height="160" stroke="white" fill="none" />
                    <rect x={34.7} y={182} width="30" height="2" className='barmax' />

                    <text x={64} y={123} fontSize={23} className='text' textAnchor="middle">NG</text>
                    <text x={76} y={152} fontSize={27} className={NG_1 <= 105 ? "text-safe" : NG_1 <= 106 ? "text-caution" : "text-warning"} textAnchor="middle">{Math.round(NG_1)}</text>
                </g>
                <g transform="translate(221.5,0)" >
                    <rect
                        transform={`rotate(180 49.7 239)`}
                        x={36.7}
                        y={159}
                        width="26"
                        height={Math.min(TGT_1 * 0.33 - 154, 160)}
                        className={
                            TGT_1 < 793
                                ? "tapeGreen"
                                : TGT_1 <= 879
                                    ? "tapeYellow"
                                    : "tapeRedStripes"
                        }
                    />
                    <rect x={36.7} y={159} width="26" height="160" stroke="white" fill="none" />
                    <rect x={34.7} y={182} width="30" height="2" className='barmax' />
                    <rect x={34.7} y={192} width="30" height="2" className='barwarn' />
                    <rect x={34.7} y={202} width="30" height="2" className='barwarn' />

                    <text x={72} y={123} fontSize={23} className='text' textAnchor="middle">TGT</text>
                    <text x={84} y={152} fontSize={27} className={TGT_1 < 793 ? "text-safe" : TGT_1 <= 879 ? "text-caution" : "text-warning"} textAnchor="middle">{Math.round(TGT_1)}</text>
                </g>
                <g transform="translate(301.4,0)" >
                    <rect
                        transform={`rotate(180 49.7 239)`}
                        x={36.7}
                        y={159}
                        width="26"
                        height={Math.min(Q1 * 1.39 - 55, 160)}
                        className={


                            Q1 <= 120
                                ? "tapeGreen"
                                : Q1 <= 144
                                    ? "tapeYellow"
                                    : "tapeRedStripes"
                        }
                    />
                    <rect x={36.7} y={159} width="26" height="160" stroke="white" fill="none" />
                    <rect x={34.7} y={169.3} width="30" height="2" className='barmax' />

                    <text x={57} y={123} fontSize={23} className='text' textAnchor="middle">Q</text>
                    <text x={76} y={152} fontSize={27} className={Q1 <= 120 ? "text-safe" : Q1 <= 144 ? "text-caution" : "text-warning"} textAnchor="middle">{Math.round(Q1)}</text>
                </g>
                <g transform="translate(384.5,0)" >
                    <rect
                        transform={`rotate(180 49.7 239)`}
                        x={36.7}
                        y={159}
                        width="26"
                        height={Math.min(NP_1 * 6 - 500, 160)}
                        className={
                            NP_1 <= 91
                                ? "tapeRedStripes"
                                : NP_1 < 95
                                    ? "tapeYellow"
                                    : NP_1 <= 101
                                        ? "tapeGreen"
                                        : NP_1 <= 105
                                            ? "tapeYellow"
                                            : "tapeRedStripes"
                        }
                    />
                    <rect x={36.7} y={159} width="26" height="160" stroke="white" fill="none" />
                    <rect x={34.7} y={182} width="30" height="2" className='barmax' />
                    <rect x={34.7} y={280} width="30" height="2" className='barwarn' />
                    <rect x={34.7} y={300} width="30" height="2" className='barmax' />

                    <text x={73} y={123} fontSize={23} className='text' textAnchor="middle">NP1</text>
                    <text x={76} y={152} fontSize={27} className={NP_1 <= 91 ? "text-warning" : NP_1 < 95 ? "text-caution" : NP_1 <= 101 ? "text-safe" : NP_1 <= 105 ? "text-caution" : "text-warning"} textAnchor="middle">{Math.round(NP_1)}</text>
                </g>
                <g transform="translate(462.5,0)" >
                    <rect
                        transform={`rotate(180 49.7 239)`}
                        x={36.7}
                        y={159}
                        width="26"
                        height={Math.min(NR * 6 - 510, 160)}
                        className={
                            NR <= 90
                                ? "tapeRedStripes"
                                : NR < 95
                                    ? "tapeYellow"
                                    : NR <= 101
                                        ? "tapeGreen"
                                        : NR <= 110
                                            ? "tapeYellow"
                                            : "tapeRedStripes"
                        }
                    />
                    <rect x={36.7} y={159} width="26" height="160" stroke="white" fill="none" />
                    <rect x={34.7} y={167} width="30" height="2" className='barmax' />
                    <rect x={34.7} y={280} width="30" height="2" className='barwarn' />
                    <rect x={34.7} y={300} width="30" height="2" className='barmax' />

                    <text x={65} y={117} fontSize={23} className='text' textAnchor="middle">NR</text>
                    <text x={76} y={147} fontSize={30} className={NR <= 90 ? "text-warning" : NR < 95 ? "text-caution" : NR <= 101 ? "text-safe" : NR <= 110 ? "text-caution" : "text-warning"} textAnchor="middle">{Math.round(NR)}</text>
                </g>

                {/* TAPES - RIGHT PODS */}

                <g transform="translate(541,0)" >
                    <rect
                        transform={`rotate(180 49.7 239)`}
                        x={36.7}
                        y={159}
                        width="26"
                        height={Math.min(NP_2 * 6 - 500, 160)}
                        className={
                            NP_2 <= 91
                                ? "tapeRedStripes"
                                : NP_2 < 95
                                    ? "tapeYellow"
                                    : NP_2 <= 101
                                        ? "tapeGreen"
                                        : NP_2 <= 105
                                            ? "tapeYellow"
                                            : "tapeRedStripes"
                        }
                    />
                    <rect x={36.7} y={159} width="26" height="160" stroke="white" fill="none" />
                    <rect x={34.7} y={182} width="30" height="2" className='barmax' />
                    <rect x={34.7} y={280} width="30" height="2" className='barwarn' />
                    <rect x={34.7} y={300} width="30" height="2" className='barmax' />

                    <text x={73} y={123} fontSize={23} className='text' textAnchor="middle">NP2</text>
                    <text x={76} y={152} fontSize={27} className={NP_2 <= 91 ? "text-warning" : NP_2 < 95 ? "text-caution" : NP_2 <= 101 ? "text-safe" : NP_2 <= 105 ? "text-caution" : "text-warning"} textAnchor="middle">{Math.round(NP_2)}</text>
                </g>
                <g transform="translate(624,0)" >
                    <rect
                        transform={`rotate(180 49.7 239)`}
                        x={36.7}
                        y={159}
                        width="26"
                        height={Math.min(Q2 * 1.39 - 55, 160)}
                        className={


                            Q2 <= 120
                                ? "tapeGreen"
                                : Q2 <= 144
                                    ? "tapeYellow"
                                    : "tapeRedStripes"
                        }
                    />
                    <rect x={36.7} y={159} width="26" height="160" stroke="white" fill="none" />
                    <rect x={34.7} y={169.3} width="30" height="2" className='barmax' />

                    <text x={57} y={123} fontSize={23} className='text' textAnchor="middle">Q</text>
                    <text x={76} y={152} fontSize={27} className={Q2 <= 120 ? "text-safe" : Q2 <= 144 ? "text-caution" : "text-warning"} textAnchor="middle">{Math.round(Q2)}</text>
                </g>
                <g transform="translate(703.5,0)" >
                    <rect
                        transform={`rotate(180 49.7 239)`}
                        x={36.7}
                        y={159}
                        width="26"
                        height={Math.min(TGT_2 * 0.33 - 154, 160)}
                        className={
                            TGT_2 < 793
                                ? "tapeGreen"
                                : TGT_2 <= 879
                                    ? "tapeYellow"
                                    : "tapeRedStripes"
                        }
                    />
                    <rect x={36.7} y={159} width="26" height="160" stroke="white" fill="none" />
                    <rect x={34.7} y={182} width="30" height="2" className='barmax' />
                    <rect x={34.7} y={192} width="30" height="2" className='barwarn' />
                    <rect x={34.7} y={202} width="30" height="2" className='barwarn' />

                    <text x={72} y={123} fontSize={23} className='text' textAnchor="middle">TGT</text>
                    <text x={84} y={152} fontSize={27} className={TGT_2 < 793 ? "text-safe" : TGT_2 <= 879 ? "text-caution" : "text-warning"} textAnchor="middle">{Math.round(TGT_2)}</text>
                </g>

                <g transform="translate(780.7,0)" >
                    <rect
                        transform={`rotate(180 49.7 239)`}
                        x={36.7}
                        y={159}
                        width="26"
                        height={Math.min(NG_2 * 30 - 3075, 160)}
                        className={
                            NG_2 <= 105
                                ? "tapeGreen"
                                : NG_2 <= 106
                                    ? "tapeYellow"
                                    : "tapeRedStripes"
                        }
                    />
                    <rect x={36.7} y={159} width="26" height="160" stroke="white" fill="none" />
                    <rect x={34.7} y={182} width="30" height="2" className='barmax' />

                    <text x={64} y={123} fontSize={23} className='text' textAnchor="middle">NG</text>
                    <text x={76} y={152} fontSize={27} className={NG_2 <= 105 ? "text-safe" : NG_2 <= 106 ? "text-caution" : "text-warning"} textAnchor="middle">{Math.round(NG_2)}</text>
                </g>

                <g transform="translate(855.1,0)" >
                    <rect
                        transform={`rotate(180 49.7 239)`}
                        x={36.7}
                        y={159}
                        width="26"
                        height={Math.min(PRESS_2 * 1.2 - 10, 160)}
                        className={
                            PRESS_2 <= 22
                                ? "tapeRedStripes"
                                : PRESS_2 <= 26
                                    ? "tapeYellow"
                                    : PRESS_2 <= 100
                                        ? "tapeGreen"
                                        : PRESS_2 <= 120
                                            ? "tapeYellow"
                                            : "tapeRedStripes"
                        }
                    />
                    <rect x={36.7} y={159} width="26" height="160" stroke="white" fill="none" />
                    <rect x={34.7} y={182} width="30" height="2" className='barmax' />
                    <rect x={34.7} y={280} width="30" height="2" className='barwarn' />
                    <rect x={34.7} y={300} width="30" height="2" className='barmax' />

                    <text x={58} y={123} fontSize={23} className='text' textAnchor="middle">P</text>
                    <text x={76} y={152} fontSize={27} className={PRESS_2 <= 22 ? "text-warning" : PRESS_2 <= 26 ? "text-caution" : PRESS_2 <= 100 ? "text-safe" : PRESS_2 <= 120 ? "text-caution" : "text-warning"} textAnchor="middle">{Math.round(PRESS_2)}</text>
                </g>
                <g transform="translate(925,0)" >
                    <rect
                        transform={`rotate(180 49.7 239)`}
                        x={36.7}
                        y={159}
                        width="26"
                        height={Math.min(TMP_2 * 1.65 - 115, 160)}
                        className={
                            TMP_2 < 135
                                ? "tapeGreen"
                                : TMP_2 <= 150
                                    ? "tapeYellow"
                                    : "tapeRedStripes"
                        }
                    />
                    <rect x={36.7} y={159} width="26" height="160" stroke="white" fill="none" />
                    <rect x={34.7} y={182} width="30" height="2" stroke="none" className='barmax' />
                    <text x={58} y={123} fontSize={23} className='text' textAnchor="middle">T</text>
                    <text x={76} y={152} fontSize={27} className={TMP_2 < 135 ? "text-safe" : TMP_2 <= 150 ? "text-caution" : "text-warning"} textAnchor="middle">{Math.round(TMP_2)}</text>
                </g>
            </g>
            <g>
                <g transform="translate(925,0)" >
                    <rect
                        transform={`rotate(180 49.7 239)`}
                        x={36.7}
                        y={159}
                        width="26"
                        height={Math.min(TMP_2 * 1.65 - 115, 160)}
                        className={
                            TMP_2 < 135
                                ? "tapeGreen"
                                : TMP_2 <= 150
                                    ? "tapeYellow"
                                    : "tapeRedStripes"
                        }
                    />
                    <rect x={36.7} y={159} width="26" height="160" stroke="white" fill="none" />
                    <rect x={34.7} y={182} width="30" height="2" stroke="none" className='barmax' />
                    <text x={58} y={123} fontSize={23} className='text' textAnchor="middle">T</text>
                    <text x={76} y={152} fontSize={27} className={TMP_2 < 135 ? "text-safe" : TMP_2 <= 150 ? "text-caution" : "text-warning"} textAnchor="middle">{Math.round(TMP_2)}</text>
                </g>
            </g>


        </g>

    )

};