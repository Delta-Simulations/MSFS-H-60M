import React, { FC } from 'react';
import { useSimVar } from '../../Hooks/simVars';
import { useInteractionEvent } from '../../Hooks/hooks';

export const FPV: FC = () => {
    const [isFPVon] = useSimVar('L:FPV_ON', 'bool');
    const [vertVelocity] = useSimVar('VELOCITY WORLD Y', 'feet per second');
    const [horizVelocity] = useSimVar('VELOCITY BODY Z', 'feet per second');
    const [pitch] = useSimVar('PLANE PITCH DEGREES', 'degrees');
    const [roll] = useSimVar('PLANE BANK DEGREES', 'degrees');
    const [heading] = useSimVar('PLANE HEADING DEGREES TRUE', 'degrees');
    const [track] = useSimVar('GPS GROUND TRUE TRACK', 'degrees');
    const [fpv, setFpv] = useSimVar('L:FPV_ON', 'bool');

    useInteractionEvent('B737_8_PFD_FPV', () => {
        setFpv(!fpv);
    });

    const degreesToPixels = (angle: number): number =>
        angle < 0 ? Math.max(angle * 8, -16 * 8) : Math.min(angle * 8, 22.5 * 8);

    const vertVecToPixels = (): number => {
        const fpa = (180 / Math.PI) * Math.asin(vertVelocity / horizVelocity);
        return degreesToPixels(fpa + pitch);
    };

    const trackToPixels = (): number => {
        let driftAngle = heading - track;
        if (driftAngle > 180) {
            driftAngle -= 360;
        } else if (driftAngle < -180) {
            driftAngle += 360;
        }
        if (driftAngle > 0) {
            driftAngle = Math.min(driftAngle, 35);
        } else {
            driftAngle = Math.max(driftAngle, -35);
        }
        return degreesToPixels(driftAngle * -0.25);
    };

    return (
        <g
            transform={`translate(${trackToPixels() || 0} ${-vertVecToPixels() || 0})`}
            visibility={isFPVon ? 'visible' : 'hidden'}
        >
            <g>
                <g transform={`rotate(${-roll || 0} 349 382)`}>
                    {/* FPV symbol */}

                    <rect x={603} y={452} width={45} height={45} className='linehollow'fill="none"stroke-width="2px"/>
                </g>
            </g>
        </g>
    );
};