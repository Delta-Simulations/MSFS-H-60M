import React, { } from 'react';

import "../../style.scss";
import { EICASAdvisory } from './EICASAdvisory';


import { useSimVar } from '../../../Hooks/simVars';
import { EICASBaseShapes } from './EICASBaseShapes';
import { EICASTapes } from './EICASTapes';

export const EICAS = () => {


    var [NP_1] = useSimVar('A:ENG ROTOR RPM:1', 'percent');
    var [NP_2] = useSimVar('A:ENG ROTOR RPM:2', 'percent');

    var [TMP_1] = useSimVar('A:ENG OIL TEMPERATURE:1', 'Celsius');
    var [TMP_2] = useSimVar('A:ENG OIL TEMPERATURE:2', 'Celsius');

    var [PRESS_1] = useSimVar('A:ENG OIL PRESSURE:1', 'psi');
    var [PRESS_2] = useSimVar('A:ENG OIL PRESSURE:2', 'psi');

    var [NG_1] = useSimVar('A:TURB ENG CORRECTED N1:1', 'percent');
    var [NG_2] = useSimVar('A:TURB ENG CORRECTED N1:2', 'percent');

    var [TGT_1] = useSimVar('A:ENG EXHAUST GAS TEMPERATURE:1', 'Celsius');
    var [TGT_2] = useSimVar('A:ENG EXHAUST GAS TEMPERATURE:2', 'Celsius');

    var [Q1] = useSimVar('A:ENG TORQUE PERCENT:1', 'percent');
    var [Q2] = useSimVar('A:ENG TORQUE PERCENT:2', 'percent');

    var [RTR_RPM] = useSimVar('A:ROTOR RPM PCT:1', 'percent');

    var [TOT_ENG] = useSimVar('L:TotEngRunning', 'enum');

    var [RTR_PRESS] = useSimVar('A:ROTOR TEMPERATURE', 'Celsius');

    let TEST: number = 100;



    Q1 = Q1 / 6300;
    Q2 = Q2 / 6300;
    Q1 = Math.round(Q1)
    Q2 = Math.round(Q2)
    NP_1 = Math.round(NP_1)
    NP_2 = Math.round(NP_2)
    PRESS_1 = Math.round(PRESS_1)
    PRESS_2 = Math.round(PRESS_2)
    NG_1 = Math.round(NG_1)
    NG_2 = Math.round(NG_2)
    TGT_1 = Math.round(TGT_1 / 4)
    TGT_2 = Math.round(TGT_2 / 4)
    TMP_1 = Math.round(TMP_1)
    TMP_2 = Math.round(TMP_2)

    let NR = Math.round(RTR_RPM * 10) / 10;


    let RTR_TMP: number = Math.round((NR) / TOT_ENG);

    return (
        <g>

            <EICASTapes />
            <EICASBaseShapes/>
            



        </g>
    )

};