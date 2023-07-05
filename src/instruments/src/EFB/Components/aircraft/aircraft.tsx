import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useSimVar } from '../../../Hooks/simVars';

import './aircraft.scss';

export const Airctaft = () => {
	const [fireGun, setFireGun] = useSimVar('L:EFFECT_GUN', 'Bool');
	const [fireRocket, setFireRocket] = useSimVar('L:ROCKET_anim', 'Bool');
	const [fireFlare, setFireFlare] = useSimVar('L:EFFECT_FLARE', 'Bool');
	const [lift, setLift] = useSimVar('L:Winch_EXT', 'bool');
	const [skis, setSkis] = useSimVar('L:Skis', 'bool');
	const [modelType, setModelType] = useSimVar('L:MODEL_TYPE', 'enum');
	const [probe, setProbe] = useSimVar('L:ADDITIONSVIS', 'enum');
	const [rearDoorL, setRearDoorL] = useSimVar('L:DOORS_OPEN_REAR_L', 'bool');
	const [rearDoorR, setRearDoorR] = useSimVar('L:DOORS_OPEN_REAR_R', 'bool');
	const [doorR, setDoorR] = useSimVar('L:FR_ANIM', 'bool');
	const [doorL, setDoorL] = useSimVar('L:FL_ANIM', 'bool');
	const [doorHide, setDoorHide] = useSimVar('L:PART1', 'bool');
	const [gunnerDoor, setGunnerDoor] = useSimVar('L:PART2', 'bool');

	return (
		<div className="aircraftContainer">
			<Box
				sx={{
					position: 'absolute',
					width: 1040,
					height: 810,
					backgroundImage: 'url(/images/Top_down.png)',
					backgroundPosition: 'right',
					backgroundSize: '80%',
					backgroundRepeat: 'no-repeat',
					borderRadius: 4,
					left: 5,
					boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
					color: '#1B93FF',
					justifyContent: 'center',
					display: 'flex',
					textAlign: 'center',
					fontSize: 14,
				}}
			>
				<h1 style={{ marginLeft: 15, color: '#1B93FF' }}>
					Aircraft Customization
				</h1>
				<Box
					sx={{
						position: 'absolute',
						width: 200,
						height: 400,
						backgroundColor: '16161E',
						borderRadius: 4,
						left: 5,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						textAlign: 'center',
						fontSize: 14,
					}}
				>
					<Container maxWidth="sm">
						<h1>Weapons</h1>
						<Stack spacing={4}>
							<Button
								onMouseDown={() => setFireRocket(true)}
								onMouseUp={() => setFireRocket(false)}
								onMouseLeave={() => setFireRocket(false)}
								color="error"
								variant="outlined"
							>
								Fire Missile
							</Button>
							<Button
								onMouseDown={() => setFireGun(true)}
								onMouseUp={() => setFireGun(false)}
								onMouseLeave={() => setFireGun(false)}
								color="error"
								variant="outlined"
							>
								Fire Gun
							</Button>
							<Button
								onMouseDown={() => setFireFlare(true)}
								onMouseUp={() => setFireFlare(false)}
								onMouseLeave={() => setFireFlare(false)}
								color="error"
								variant="outlined"
							>
								Flares
							</Button>
							<h1>Util</h1>
							<Button
								onClick={() => setLift(!lift)}
								color="success"
								variant="outlined"
							>
								Hoist Move
							</Button>
						</Stack>
					</Container>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 500,
						height: 150,
						backgroundColor: '16161E',
						borderRadius: 4,
						left: 400,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<h1 style={{ marginTop: 0 }}>Addons</h1>
					<Stack direction="row" spacing={4}>
						<Button
							size="large"
							onClick={() => setSkis(!skis)}
							color={skis ? 'success' : 'primary'}
							variant={skis ? 'contained' : 'outlined'}
						>
							Skis
						</Button>

						<Button
							size="large"
							onClick={() => setModelType(!modelType)}
							color={modelType ? 'success' : 'primary'}
							variant={modelType ? 'contained' : 'outlined'}
						>
							Hoist
						</Button>
						<Button
							size="large"
							onClick={() => setProbe(!probe)}
							color={probe ? 'success' : 'primary'}
							variant={probe ? 'contained' : 'outlined'}
						>
							Probe
						</Button>
					</Stack>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 77,
						height: 35,
						backgroundColor: '16161E',
						borderRadius: 1.5,
						left: 350,
						top: 340,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<Button size="small" variant="contained">
						Pilot R
					</Button>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 75,
						height: 35,
						backgroundColor: '16161E',
						borderRadius: 1.5,
						left: 350,
						top: 437,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<Button size="small" variant="contained">
						Pilot L
					</Button>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 110,
						height: 35,
						backgroundColor: '16161E',
						borderRadius: 1.5,
						left: 310,
						top: 389,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<Button
						onClick={() => setDoorHide(!doorHide)}
						size="small"
						variant="contained"
						color={doorHide ? 'error' : 'success'}
					>
						Hide Doors
					</Button>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 75,
						height: 29,
						backgroundColor: '16161E',
						borderRadius: 1.5,
						left: 370,
						top: 485,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<Button
						onClick={() => setDoorL(!doorL)}
						size="small"
						variant="contained"
						color={doorL ? 'error' : 'success'}
					>
						Door L
					</Button>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 75,
						height: 29,
						backgroundColor: '16161E',
						borderRadius: 1.5,
						left: 370,
						top: 290,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<Button
						onClick={() => setDoorR(!doorR)}
						size="small"
						variant="contained"
						color={doorR ? 'error' : 'success'}
					>
						Door R
					</Button>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 90,
						height: 52,
						backgroundColor: '16161E',
						borderRadius: 1,
						left: 460,
						top: 380,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<Button
						onClick={() => setGunnerDoor(!gunnerDoor)}
						size="small"
						variant="contained"
						color={gunnerDoor ? 'error' : 'success'}
					>
						Gunner Door
					</Button>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 79,
						height: 52,
						backgroundColor: '16161E',
						borderRadius: 1,
						left: 600,
						top: 290,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<Button
						onClick={() => setRearDoorR(!rearDoorR)}
						color={rearDoorR ? 'error' : 'success'}
						size="small"
						variant="contained"
					>
						Rear Door R
					</Button>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 79,
						height: 52,
						backgroundColor: '16161E',
						borderRadius: 1,
						left: 600,
						top: 470,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<Button
						onClick={() => setRearDoorL(!rearDoorL)}
						color={rearDoorL ? 'error' : 'success'}
						size="small"
						variant="contained"
					>
						Rear Door L
					</Button>
				</Box>
			</Box>
		</div>
	);
};
