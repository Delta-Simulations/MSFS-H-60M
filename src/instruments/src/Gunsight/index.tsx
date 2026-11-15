import React from 'react';
import { render } from '../Hooks/index';
import { HUDPower, Electricity } from '../Common/circuit';

const Gunsight = () => {
    return (
        <Electricity>
            <HUDPower localVar="H60_GUNSIGHT_PWR">
                <svg viewBox="0 0 512 512" width="100%" height="100%">

                    {/* Black background */}
                    <rect
                        width="512"
                        height="512"
                        fill="black"
                    />

                    {/* Green rounded HUD border */}
                    <rect
                        x="96"
                        y="76"
                        width="320"
                        height="320"
                        rx="32"
                        ry="32"
                        fill="none"
                        stroke="#33ff00"
                        strokeWidth="2"
                    />

                    {/* Four separate green lines */}
                    <g
                        stroke="#33ff00"
                        strokeWidth="5"
                        strokeLinecap="round"
                    >
                        {/* Top */}
                        <line x1="256" y1="195" x2="256" y2="235" />

                        {/* Bottom */}
                        <line x1="256" y1="277" x2="256" y2="317" />

                        {/* Left */}
                        <line x1="195" y1="256" x2="235" y2="256" />

                        {/* Right */}
                        <line x1="277" y1="256" x2="317" y2="256" />
                    </g>

                    {/* Centre dot */}
                    <circle
                        cx="256"
                        cy="256"
                        r="5"
                        fill="#33ff00"
                    />

                </svg>
            </HUDPower>
        </Electricity>
    );
};

render(<Gunsight />);