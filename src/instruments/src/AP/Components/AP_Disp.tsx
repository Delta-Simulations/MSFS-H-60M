import React from 'react';
import { useSimVar } from '../../Hooks/simVars';

export const Ap_Disp = (props) => {

    const [AP_ALT] = useSimVar('A:Autopilot altitude lock var', 'feet');
    const [AP_SPD] = useSimVar('A:Autopilot airspeed hold var','knots');
    var [AP_HDG] = useSimVar('A:Autopilot heading lock dir', 'degrees');
    AP_HDG = Math.floor(AP_HDG)
    const [AP_VS] = useSimVar('A:Autopilot vertical hold var', 'ft/min');

    const [AP_HVR] = useSimVar('L:AP_STAB', 'bool');
    
    return(
        <g>
                 <text x={50} y={390} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">GO</text>
                    <text x={10} y={450} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">ARND</text>

                    <text x={30} y={220} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">FMS</text>

                    <text x={310} y={220} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">RALT</text>

                    <text x={490} y={220} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">ALTP</text>

                    <text x={680} y={220} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">ALT</text>
                    <text x={740} y={280} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">{AP_ALT}</text>

                    <text x={830} y={220} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">IAS</text>
                    <text x={880} y={280} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">{AP_SPD}</text>

                    <text x={80} y={60} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">HDG</text>
                    <text x={80} y={120} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">{AP_HDG}</text>

                    <text x={250} y={60} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">VS</text>
                    <text x={250} y={120} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">{AP_VS}</text>

                    <text x={390} y={60} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">HVR</text>
                    <g visibility={AP_HVR ? 'hidden' : 'visible'}>
                    <text x={390} y={120} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">--</text>
                    </g>

                    <g visibility={AP_HVR ? 'visible' : 'hidden'}>
                    <text x={390} y={120} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">ACT</text>
                    </g>

        </g>
    )
};
