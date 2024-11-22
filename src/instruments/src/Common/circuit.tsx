import React, { FC, ReactNode } from 'react';
import { useSimVar } from '../Hooks/simVars';

interface ElectricityProps {
	powerVar: string;
	children: ReactNode;
  }
  
export const Electricity_MFD: FC<ElectricityProps> = ({ powerVar, children }) => {
	const [powerOn] = useSimVar(powerVar, 'bool');

	if (!powerOn) return null;

	return <div>{children}</div>;
};

export const Electricity: FC = ({ children }) => {
	const [circuitOn] = useSimVar(`L:H60_Cpit_26VPower`, 'bool');
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
