import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import './buttonBar.scss';

export const ButtonBar = () => {
	return (
		<g>
			<div className="ButtonBarContainer">
				{/* <NavLink
					style={{ textDecoration: 'none' }}
					to="/"
					className={(isActive) =>
						'BottomButton' + (isActive ? 'ButtomButtonActive' : '')
					}
				>
					<Button variant="outlined">Home</Button>
				</NavLink> */}
				<NavLink
					style={{ textDecoration: 'none' }}
					to="/"
					className={(isActive) =>
						'BottomButton' + (isActive ? 'ButtomButtonActive' : '')
					}
				>
					<Button variant="outlined">Aircraft</Button>
				</NavLink>

				<NavLink
					style={{ textDecoration: 'none' }}
					to="/Checklist"
					className={(isActive) =>
						'BottomButton' + (isActive ? 'ButtomButtonActive' : '')
					}
				>
					<Button variant="outlined">Checklist</Button>
				</NavLink>

				<NavLink
					style={{ textDecoration: 'none' }}
					to="/Map"
					className={(isActive) =>
						'BottomButton' + (isActive ? 'ButtomButtonActive' : '')
					}
				>
					<Button variant="outlined">Map</Button>
				</NavLink>

				<NavLink
					style={{ textDecoration: 'none' }}
					to="/Browser"
					className={(isActive) =>
						'BottomButton' + (isActive ? 'ButtomButtonActive' : '')
					}
				>
					<Button variant="outlined">Browser</Button>
				</NavLink>
				<NavLink
					style={{ textDecoration: 'none' }}
					to="/Settings"
					className={(isActive) =>
						'BottomButton' + (isActive ? 'ButtomButtonActive' : '')
					}
				>
					<Button variant="outlined">Settings</Button>
				</NavLink>
			</div>
		</g>
	);
};
