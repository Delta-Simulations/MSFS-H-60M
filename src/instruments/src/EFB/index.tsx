import React, { useEffect } from 'react';
import './style.scss';
import { render } from '../Hooks';
import { Home } from './Components/home/home';
import { MemoryRouter, Route, Routes } from 'react-router';
import { ButtonBar } from './Components/buttonBar/buttonBar';
import { Map } from './Components/map/map';
import { Aircraft } from './Components/aircraft/aircraft';

import { BrowserRouter } from 'react-router-dom';

import { Browser } from './Components/browser/browser';
import { EfbPower } from '../Common/circuit';
import { Settings } from './Components/settings/settings';
const EFB = () => {
	return (
		<MemoryRouter>
			<EfbPower localVar="H60_EFB_MOVE">
				<div className="EFBContainer">
					<Routes>
						<Route path="/" element={<Aircraft />} />
						<Route path="/Map" element={<Map />} />
						<Route path="/Settings" element={<Settings />} />
					</Routes>
					<ButtonBar />
				</div>
			</EfbPower>
		</MemoryRouter>
	);
};
render(<EFB />);
