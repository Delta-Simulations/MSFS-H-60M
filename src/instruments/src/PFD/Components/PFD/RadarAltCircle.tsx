import React, { } from 'react';
import "../../style.scss";

import { useSimVar } from '../../../Hooks/simVars';



export const RadarAltCircle = () => {
    function getRadarAltRotation(altitude: number): number {
        if (altitude <= 50) {
            return 180 + (altitude / 50) * 90;
        } else if (altitude <= 100) {
            return 180 + 90 + ((altitude - 50) / 50) * 90;
        } else if (altitude <= 400) {
            return 180 + 180 + ((altitude - 100) / 300) * 90;
        } else if (altitude <= 1050) {
            return 180 + 270 + ((altitude - 400) / 600) * 45;
        } else if (altitude > 1050) {
            return 180 + 318.75
        } else {
            return 180;
        }
    }


    let [STD_ALT] = useSimVar('A:PLANE ALTITUDE', 'feet')
    let [RA_ALT] = useSimVar('A:PLANE ALT ABOVE GROUND MINUS CG', 'feet')
    STD_ALT = Math.floor(STD_ALT * 20) / 20

    const [AFCS_RadAlt] = useSimVar('L:H60_AFCS_RADALT', 'feet')

    const [RA_Alt_Lo] = useSimVar('L:H60_CAS_RADALT_LO', 'feet')
    const [RA_Alt_Hi] = useSimVar('L:H60_CAS_RADALT_HI', 'feet')

    const [RA_Alt_Lo_Alert] = useSimVar('L:H60_CAS_RADALT_LO_ALERT', 'feet')
    const [RA_Alt_Hi_Alert] = useSimVar('L:H60_CAS_RADALT_HI_ALERT', 'feet')


    let RA_Readout = Math.floor(RA_ALT);
    RA_ALT = Math.floor(RA_ALT)
    const [isFD] = useSimVar('AUTOPILOT FLIGHT DIRECTOR ACTIVE', 'Bool');




    return (

        <g>

            {/* RA */}

            {RA_Readout <= 1050 && (
                <g>

                    <g transform={`translate(730.5, 280)scale(0.9)`} >
                        <g transform={`rotate(${getRadarAltRotation(RA_ALT)}, 178, 217)`}>
                            <polygon points='174,187 182,187 182,150 179,140 179,125 178,110 177,125 177,140 174,150' fill={RA_Alt_Lo_Alert || RA_Alt_Hi_Alert ? 'yellow' : 'white'} />
                        </g>
                        <circle cx="178" cy="217" r="41" fill='black' stroke-width="3" />
                    </g>
                    {RA_Alt_Hi > -1 && (
                        <g transform={`rotate(${getRadarAltRotation(RA_Alt_Hi)}, 891, 475) translate(881, 366) `} >
                            <path d="M0 0L9.5 13L19 0L14 0.619048L9.5 12.381L5 0.619048L0 0Z" fill="#006EFF" />
                        </g>
                    )}

                    {RA_Alt_Lo > -1 && (
                        <g transform={`rotate(${getRadarAltRotation(RA_Alt_Lo)}, 891, 475)translate(881, 371)`} >
                            <path d="M0 8V0H2.5L9.5 5.33333L16.5 0H19V8H0Z" fill="#9DFF00" />
                        </g>
                    )}

                    {isFD && (
                        <g transform={`rotate(${getRadarAltRotation(AFCS_RadAlt)},891, 475) translate(881, 391) scale(1, -1.3)`} >
                            <path d="M0 8V0H2.5L9.5 5.33333L16.5 0H19V8H0Z" fill="rgb(209, 1, 209)" />
                        </g>
                    )}



                    <g transform={`translate(794, 378)scale(0.74)`} >
                        <circle cx="131" cy="131" r="129" stroke="white" fill='none' stroke-width="3.5" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M129 23.0181C129.665 23.0061 130.332 23 131 23C131.334 23 131.667 23.0015 132 23.0045V2H129V23.0181ZM184.316 37.0559C185.185 37.5506 186.048 38.0571 186.902 38.5751L197.686 20.2605L195.101 18.7383L184.316 37.0559ZM224.342 76.6386C224.845 77.5017 225.337 78.3723 225.818 79.2504L244.486 68.6061L243 66L224.342 76.6386ZM238.996 130.039C238.999 130.359 239 130.679 239 131C239 131.681 238.994 132.361 238.981 133.039L259.006 133L259 130L238.996 130.039ZM208.046 206.683C207.345 207.396 206.634 208.1 205.914 208.794L220.925 223.167L223 221L208.046 206.683ZM132 238.995C131.667 238.998 131.334 239 131 239C130.332 239 129.665 238.994 129 238.982V259H132V238.995ZM23.0274 133.456C23.0092 132.64 23 131.821 23 131C23 130.819 23.0004 130.638 23.0013 130.456L0.5 130.5L0.505802 133.5L23.0274 133.456Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M158.487 19.3057C159.46 19.5443 160.428 19.7953 161.391 20.0585L164.901 6.76576L162 6L158.487 19.3057ZM212.212 49.5775C212.92 50.2837 213.619 50.9991 214.308 51.7235L224.098 42.1442L222 40L212.212 49.5775ZM241.92 100.53C242.184 101.492 242.435 102.46 242.675 103.433L255.782 99.8964L255 97L241.92 100.53ZM245.226 144.411C245.111 145.406 244.982 146.398 244.841 147.386L258.656 148.98L259 146L245.226 144.411ZM242.146 160.633C241.888 161.602 241.619 162.565 241.337 163.523L254.24 166.902L255 164L242.146 160.633ZM237.65 174.101C237.275 175.029 236.888 175.952 236.489 176.868L248.894 181.789L250 179L237.65 174.101ZM230.812 188.158C230.314 189.026 229.805 189.887 229.285 190.741L241.531 197.616L243 195L230.812 188.158ZM223.038 199.961C222.437 200.761 221.826 201.554 221.205 202.338L232.226 210.419L234 208L223.038 199.961ZM96.8503 240.845C95.8935 240.548 94.942 240.238 93.996 239.917L90.1208 253.157L93 254L96.8503 240.845ZM64.1904 224.614C63.3763 224.032 62.5701 223.439 61.7719 222.837L54.5334 233.292L57 235L64.1904 224.614ZM38.1745 198.899C37.5835 198.092 37.0028 197.278 36.4326 196.455L24.2037 205.597L26 208L38.1745 198.899ZM22.1158 168.1C21.7938 167.155 21.4837 166.204 21.1857 165.248L7.01624 170.166L7.99998 173L22.1158 168.1ZM20.8281 97.9226C21.1157 96.9633 21.4155 96.0092 21.7273 95.0605L8.87724 91.1311L7.99998 94L20.8281 97.9226ZM95.942 21.4416C94.9881 21.7465 94.0396 22.0636 93.0967 22.3927L89 10L91.8484 9.05838L95.942 21.4416ZM63.4095 37.9495L55.4056 27.2076L53 29L61.0068 39.746C61.7996 39.137 62.6005 38.5381 63.4095 37.9495ZM37.9424 63.4193L26.7235 55.5445L25 58L36.2092 65.868C36.7765 65.044 37.3543 64.2276 37.9424 63.4193Z" fill="white" />
                    </g>

                    <text x={886} y={546} fontSize={20} className='readouts'>0</text>
                    <text x={811} y={483} fontSize={20} className='readouts'>50</text>
                    <text x={885} y={414} fontSize={20} className='readouts'>1</text>
                    <text x={921} y={423} fontSize={20} className='readouts'>2</text>
                    <text x={947} y={447} fontSize={20} className='readouts'>3</text>
                    <text x={958} y={483} fontSize={20} className='readouts'>4</text>
                    <text x={925} y={531} fontSize={20} className='readouts'>10</text>

                </g>
            )}
            {RA_Readout <= 1500 && (
                <g>

            <rect
                        x={RA_Alt_Lo_Alert || RA_Alt_Hi_Alert ? 833 : 856}
                        y={RA_Alt_Lo_Alert || RA_Alt_Hi_Alert ? 434 : 448}
                        width={RA_Alt_Lo_Alert || RA_Alt_Hi_Alert ? 120 : 76}
                        height={RA_Alt_Lo_Alert || RA_Alt_Hi_Alert ? 45 : 33}
                        fill="black"
                        stroke={RA_Alt_Lo_Alert || RA_Alt_Hi_Alert ? 'yellow' : 'white'}
                        strokeWidth="2"

                    />
                    <text x={RA_Alt_Lo_Alert || RA_Alt_Hi_Alert ? 952 : 925} y={475} textAnchor="end" fontSize={RA_Alt_Lo_Alert || RA_Alt_Hi_Alert ? 50 : 27} className={RA_Alt_Lo_Alert || RA_Alt_Hi_Alert ? 'text-caution' : 'readouts'} >{RA_Readout}</text>
                    <text x={881} y={498} fontSize={20} className='readouts'>RA</text>

                </g>
            )}
            {RA_Alt_Lo > -1 && (
                <text x={958} y={610} fontSize={27} textAnchor="end" fill="green" className='text-radAltLow'>{RA_Alt_Lo} LO</text>
            )}
 {RA_Alt_Hi > -1 && (
        <text x={958} y={632} fontSize={27} textAnchor="end" fill="green" className='text-radAltHi'>{RA_Alt_Hi} HI</text>)}
        {isFD && ( <text x={990} y={654} fontSize={27}  textAnchor="end" fill="green" className='text-FD'>{AFCS_RadAlt} RALT</text>)}



        </g>

    )

};