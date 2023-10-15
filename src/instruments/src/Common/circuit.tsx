import React, { FC } from 'react';
import { useSimVar } from '../Hooks/simVars';

interface ElectricityProps {
	circuit: string | number;
}

export const Electricity: FC<ElectricityProps> = ({ circuit, children }) => {
	const [circuitOn] = useSimVar(`L:H60_Cpit_26VPower`, 'Bool');
	if (!circuitOn) return null;
	else return <div>{children}</div>;
};

interface EfbPowerProps {
	localVar: string;
}

export const EfbPower: FC<EfbPowerProps> = ({ localVar, children }) => {
	const [isOn] = useSimVar(`L:${localVar}`, 'bool');

	if (isOn) return null;
	else return <div>{children}</div>;
};
interface HUDPowerProps {
	localVar: string;
}
export const HUDPower: FC<HUDPowerProps> = ({ localVar, children }) => {
	const [isOn] = useSimVar(`L:${localVar}`, 'bool');

	if (!isOn) return null;
	else return <div>{children}</div>;
};
