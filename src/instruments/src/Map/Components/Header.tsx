/*
 *   Copyright (c) 2021 Synaptic Simulations and its contributors

 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.

 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.

 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import React from 'react';
import { useShowMap, usePlanMode } from '@instruments/Hooks/map';
import { NavButton, NavDropdown, NavDropdownItem } from '@instruments/MFW/Components/Navbar';
import { useDialogContext, useTaskMenuContext } from '@instruments/MFW/Components/Context';
import { MapSymbolsMenu } from '@instruments/MFW/Components/TaskMenu/MapSymbolsMenu';
import { MapOverlayMenu } from '@instruments/MFW/Components/TaskMenu/MapOverlayMenu';
import { MapCenterDialog } from '@instruments/MFW/Components/Dialog/MapCenter';

type HeaderProps = {
    fullscreen: boolean,
}

const Header: React.FC<HeaderProps> = ({ fullscreen }) => {
    const setTaskMenu = useTaskMenuContext();
    const setDialog = useDialogContext();

    const [showMap, toggleShowMap] = useShowMap();
    const [planMode, togglePlanMode] = usePlanMode();

    return (
        <g>
            <rect x={0} y={0} width={fullscreen ? 1480 : 740} height={70} fill="#000000" />
            <NavButton x={8} y={6} width={65} height={62} selected={showMap} onClick={toggleShowMap}>MAP</NavButton>
            <NavButton x={79} y={6} width={75} height={62} selected={planMode} onClick={togglePlanMode}>PLAN</NavButton>
            <NavDropdown x={161} y={6} width={119} height={62} blackBg label="ACT">
                <NavDropdownItem>ACT</NavDropdownItem>
                <NavDropdownItem>SEC</NavDropdownItem>
            </NavDropdown>
            <NavDropdown x={298} y={6} width={105} height={62} onClick={() => setTaskMenu(<MapOverlayMenu />)} label="OVLY" />
            <NavDropdown x={602} y={6} width={130} height={62} onClick={() => setTaskMenu(<MapSymbolsMenu />)} label="SYMBOL" compressed />
            <g visibility={planMode ? 'visible' : 'hidden'}>
                <NavButton x={409} y={6} width={70} height={62} onClick={() => setDialog(<MapCenterDialog />)}>CTR</NavButton>
                <NavButton x={485} y={6} width={60} height={62}>
                    {/* Todo: Make a component for the hand icon. Original SVG is in assets */}
                </NavButton>
            </g>
        </g>
    );
};

export default Header;
