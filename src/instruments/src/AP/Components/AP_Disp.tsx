import React from 'react';
import { useSimVar } from '../../Hooks/simVars';

export const Ap_Disp = (props) => {

    const [AP_ALT] = useSimVar('A:Autopilot altitude lock var', 'feet');
    const [AP_SPD] = useSimVar('A:Autopilot airspeed hold var','knots');
    let [AP_HDG] = useSimVar('A:Autopilot heading lock dir', 'degrees');
    AP_HDG = Math.floor(AP_HDG)
    const [AP_VS] = useSimVar('A:Autopilot vertical hold var', 'ft/min');
    const [isHVRActive] = useSimVar('L:H60_AFCS_HVR', 'bool');

    const [AP_CPLD] = useSimVar('L:H60_AFCS_CPLD', 'bool');
    const [isFD] = useSimVar('AUTOPILOT FLIGHT DIRECTOR ACTIVE', 'Bool');

    return(
        <g>
                 <text x={50} y={390} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">GO</text>
                    <text x={30} y={440} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">ARND</text>

                    <text x={195} y={390} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">DECL</text>
                    <text x={515} y={390} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">HVR</text>
                    <g visibility={isHVRActive ? 'visible' : 'hidden'}>
                        <text x={553} y={440} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">****</text>
                    </g>

                    <text x={710} y={390} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">FD</text>
                    <g visibility={isFD ? 'visible' : 'hidden'}>
                        <text x={730} y={440} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">****</text>
                    </g>


                    <text x={30} y={220} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">FMS</text>

                    <text x={210} y={220} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">GS</text>

                    <text x={355} y={220} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">RALT</text>

                    <text x={500} y={220} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">ALTP</text>

                    <text x={680} y={220} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">ALT</text>
                    <text x={740} y={280} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">{AP_ALT}</text>

                    <text x={830} y={220} fontSize={35} fill='#00EE00' className='readouts' textAnchor="start">IAS</text>
                    <text x={880} y={280} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">{AP_SPD}</text>

                    <text x={80} y={60} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">HDG</text>
                    <text x={80} y={120} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">{AP_HDG}</text>

                    <text x={250} y={60} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">VS</text>
                    <text x={250} y={120} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">{AP_VS}</text>

                    <text x={390} y={60} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">CPLD</text>
                    <g visibility={AP_CPLD ? 'visible' : 'hidden'}>
                        <text x={395} y={120} fontSize={35} fill='#00EE00' className='readouts' textAnchor="middle">****</text>
                    </g>


        </g>
    )
};
