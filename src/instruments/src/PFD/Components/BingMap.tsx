import React from 'react';
import { useSimVar } from '../../Hooks/simVars';
import { CanvasMap } from 'react-msfs/dist/components';
import "../style.scss";

export const BingMap = () => {
const [latitude] = useSimVar('A:PLANE LATITUDE', 'Degrees');
const [longitude] = useSimVar('A:PLANE LONGITUDE', 'Degrees');
const [headingTrue] = useSimVar('A:PLANE HEADING DEGREES TRUE', 'Degrees');

return (
    <CanvasMap
        bingConfigFolder="/Pages/VCockpit/Instruments/MAP/"
        mapId="MAP"
        centerLla={{ lat: latitude, long: longitude }}
        range={10}
        rotation={-headingTrue}
    />
)
};