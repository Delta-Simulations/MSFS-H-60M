import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useSimVar } from '../../../Hooks/simVars';

import './aircraft.scss';
import { Typography } from '@mui/material';

export const Airctaft = () => {
	let [fireGun, setFireGun] = useSimVar('L:EFFECT_GUN', 'Bool');
	let [fireRocket, setFireRocket] = useSimVar('L:ROCKET_anim', 'Bool');
	let [fireFlare, setFireFlare] = useSimVar('L:EFFECT_FLARE', 'Bool');
	let [lift, setLift] = useSimVar('L:H60_Winch', 'bool');
	let [skis, setSkis] = useSimVar('L:H60_Skis', 'bool');
	let [EIBF, setEIBF] = useSimVar('L:H60_EBF', 'bool');
	let [HasProbe] = useSimVar('L:H60_HasProbe', 'bool');
	let [HasHoist] = useSimVar('L:H60_HasHoist', 'bool');
	let [HasMissile] = useSimVar('L:H60_HasMissile', 'bool');
	let [ModelVariant, setModelVariant] = useSimVar('L:H60_IsVariant', 'bool');
	let [probe, setProbe] = useSimVar('L:Fuel_door', 'bool');
	let [rearDoor, setRearDoor] = useSimVar('L:H60_TroopDoor', 'bool');
	let [doorR, setDoorR] = useSimVar('L:H60_DoorP', 'bool');
	let [doorL, setDoorL] = useSimVar('L:H60_DoorCP', 'bool');
	let [doorHide, setDoorHide] = useSimVar('L:H60_FrontDoorVis', 'bool');
	let [gunnerDoor, setGunnerDoor] = useSimVar('L:H60_GunnerDoor', 'bool');
	let [showPilot, setshowPilot] = useSimVar('L:H60_Pilot_Vis', 'bool');
	let [showCoPilot, setshowCoPilot] = useSimVar('L:H60_CoPilot_Vis', 'bool');
	let [SLPWR, setSLPWR] = useSimVar('L:H60_SL_TOGGLE', 'bool');
	let [SLDownUp, setSLDownUp] = useSimVar('L:H60_SL_DownUp', 'enum');
	let [SLLeftRight, setSLLeftRight] = useSimVar('L:H60_SL_RightLeft', 'enum');

	let [ACOnGround] = useSimVar('A:SIM ON GROUND', 'bool');
	let [State_ColdandDark, setState_ColdandDark] = useSimVar('L:H60_State_ColdandDark', 'bool');
	let [State_Startup, setState_Startup] = useSimVar('L:H60_State_Startup', 'bool');
	let [State_Taxi, setState_Taxi] = useSimVar('L:H60_State_Taxi', 'bool');

	let [eqip_bambi, setEquip_bambi] = useSimVar('L:H60_Cargo_BambiBucket_Installed', 'bool');
	let [fill_bambi, setFill_bambi] = useSimVar('L:H60_Cargo_Bambi_Water_Lvl', 'enum');
	useEffect(() => {
		if (HasProbe || HasHoist || HasMissile) {
			setModelVariant(true);
		}
	}, [HasProbe, HasHoist, HasMissile]); // Run the effect whenever these variables change




	return (
		<div className="aircraftContainer">
			<Box
				sx={{
					position: 'absolute',
					width: 1040,
					height: 810,
					backgroundPosition: 'right',
					backgroundSize: '80%',
					backgroundRepeat: 'no-repeat',

				}}
			>
				<Box
					sx={{
						position: 'absolute',
						width: 1000,
						height: 1000,
						left: -250,
						top: -20,
						backgroundImage: 'url(/images/LineArtEXT.png)',
						backgroundPosition: 'right',
						backgroundSize: '80%',
						backgroundRepeat: 'no-repeat',
						transform: 'rotate(90deg)', // Apply the rotation here

					}}
				/>
				<Box
					sx={{
						position: 'absolute',
						width: 200,
						height: 200,
						backgroundColor: '16161E',
						borderRadius: 2,
						left: 445,
						top: 360,
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
					<h1 style={{ marginTop: 0 }}>Search Light</h1>
					<Button
						size="large"
						onClick={() => setSLDownUp(Math.min(SLDownUp - 5, 100))}
						color='primary'
						variant='outlined'
					>
						RETR
					</Button>
					<Stack direction="row" spacing={0}>
						<Button
							size="large"
							onClick={() => setSLLeftRight(Math.max(SLLeftRight - 5, 0))}
							color='primary'
							variant='outlined'
						>
							L
						</Button>
						<Button
							size="large"
							onClick={() => setSLPWR(!SLPWR)}
							variant="contained"
							color={SLPWR ? 'success' : 'error'}
						>
							PWR
						</Button>
						<Button
							size="large"
							onClick={() => setSLLeftRight(Math.min(SLLeftRight + 5, 100))}
							color='primary'
							variant='outlined'
						>
							R
						</Button>
					</Stack>
					<Button
						size="large"
						onClick={() => setSLDownUp(Math.max(SLDownUp + 5, 0))}
						color='primary'
						variant='outlined'
					>
						EXTD
					</Button>


				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 350,
						height: 150,
						backgroundColor: '16161E',
						borderRadius: 2,
						left: 65,
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
					<h1 style={{ marginTop: 0 }}>Configuration</h1>
					<Stack direction="row" spacing={4}>
						<Button
							size="large"
							onClick={() => setSkis(!skis)}
							color={skis ? 'primary' : 'primary'}
							variant={skis ? 'contained' : 'outlined'}
						>
							Skis
						</Button>
						<Button
							size="large"
							onClick={() => setEIBF(!EIBF)}
							color={EIBF ? 'primary' : 'primary'}
							variant={EIBF ? 'contained' : 'outlined'}
						>
							EIBF
						</Button>
						<Button
							size="large"
							onClick={() => setEquip_bambi(!eqip_bambi)}
							color={eqip_bambi ? 'primary' : 'primary'}
							variant={eqip_bambi ? 'contained' : 'outlined'}
						>
							BAMBI
						</Button>
					</Stack>
				</Box>

				<Box
					sx={{
						position: 'absolute',
						width: 500,
						height: 150,
						backgroundColor: '16161E',
						borderRadius: 2,
						left: 445,
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
					<h1 style={{ marginTop: 0 }}>Set Aircraft State</h1>
					<Stack direction="row" spacing={2}>
						<Button
							size="large"
							onClick={() => setState_ColdandDark(!State_ColdandDark)}
							color={State_ColdandDark ? 'primary' : 'primary'}
							variant={State_ColdandDark ? 'contained' : 'outlined'}
							disabled={!ACOnGround}
						>
							Cold&Dark
						</Button>
						<Button
							size="large"
							onClick={() => setState_Startup(!State_Startup)}
							color={State_Startup ? 'primary' : 'primary'}
							variant={State_Startup ? 'contained' : 'outlined'}
							disabled={!ACOnGround}
						>
							Ready for Startup
						</Button>
						<Button
							size="large"
							onClick={() => setState_Taxi(!State_Taxi)}
							color={State_Taxi ? 'primary' : 'primary'}
							variant={State_Taxi ? 'contained' : 'outlined'}
							disabled={!ACOnGround}
						>
							Ready for Taxi
						</Button>
					</Stack>
				</Box>
				{eqip_bambi && <Box

					sx={{
						position: 'absolute',
						width: 300,
						height: 180,
						backgroundColor: '16161E',
						borderRadius: 2,
						left: 675,
						top: 360,
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
					<h1 style={{ marginTop: 0 }}>Bambi Configuration</h1>
					<Stack direction="row" spacing={2}>
						<Button
							size="large"
							onClick={() => setFill_bambi(100)}
							color={fill_bambi ? 'primary' : 'primary'}
							variant={fill_bambi ? 'contained' : 'outlined'}
						>
							Force Fill
						</Button>
						<Box
  sx={{
    position: 'relative',
    width: '100%',
    height: 100,
    backgroundColor: '#333',
    borderRadius: 1,
    overflow: 'hidden'
  }}
>
<Box
  sx={{
    width: '100%',
    height: `${fill_bambi}%`,
    backgroundColor: '#1B93FF',
    transition: 'height 0.3s ease',
    position: 'absolute',
    bottom: 0
  }}
/>
						</Box>
					</Stack>
					<Typography sx={{ mt: 1 }}>
						{Math.round(fill_bambi)}% FULL
					</Typography>

				</Box>
				}
				{ModelVariant && <Box

					sx={{
						position: 'absolute',
						width: 500,
						height: 150,
						backgroundColor: '16161E',
						borderRadius: 2,
						left: 445,
						top: 580,
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
					<h1 style={{ marginTop: 0 }}>Variant Configuration</h1>
					<Stack direction="row" spacing={2}>
						<Button
							size="large"
							onClick={() => setProbe(!probe)}
							color={probe ? 'primary' : 'primary'}
							variant={probe ? 'contained' : 'outlined'}
							disabled={!HasProbe}
						>
							Probe Position
						</Button>
						<Button
							size="large"
							onClick={() => setLift(!lift)}
							color={lift ? 'primary' : 'primary'}
							variant={lift ? 'contained' : 'outlined'}
							disabled={!HasHoist}
						>
							Hoist
						</Button>
						<Button
							size="large"
							onClick={() => setFireRocket(!fireRocket)}
							color={fireRocket ? 'error' : 'primary'}
							variant={fireRocket ? 'contained' : 'outlined'}
							disabled={!HasMissile}
						>
							Missiles
						</Button>
					</Stack>
				</Box>
				}

				<Box
					sx={{
						position: 'absolute',
						width: 71,
						height: 35,
						backgroundColor: '16161E',
						borderRadius: 1.5,
						left: 270,
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
					<Button
						size="small"
						onClick={() => setshowPilot(!showPilot)}
						color={showPilot ? 'primary' : 'primary'}
						variant={showPilot ? 'contained' : 'outlined'}
					>
						Pilot
					</Button>

				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 85,
						height: 35,
						backgroundColor: '16161E',
						borderRadius: 1.5,
						left: 150,
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
					<Button
						size="small"
						onClick={() => setshowCoPilot(!showCoPilot)}
						color={showCoPilot ? 'primary' : 'primary'}
						variant={showCoPilot ? 'contained' : 'outlined'}
					>
						CoPilot
					</Button>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 110,
						height: 35,
						backgroundColor: '16161E',
						borderRadius: 1.5,
						left: 195,
						top: 377,
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
						width: 71,
						height: 35,
						backgroundColor: '16161E',
						borderRadius: 1.5,
						left: 100,
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
						onClick={() => setDoorL(!doorL)}
						size="small"
						variant="contained"
						color={doorL ? 'error' : 'success'}
					>
						Door
					</Button>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 71,
						height: 35,
						backgroundColor: '16161E',
						borderRadius: 1.5,
						left: 329,
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
						onClick={() => setDoorR(!doorR)}
						size="small"
						variant="contained"
						color={doorR ? 'error' : 'success'}
					>
						Door
					</Button>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 79,
						height: 52,
						backgroundColor: '16161E',
						borderRadius: 1,
						left: 210,
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
						onClick={() => setGunnerDoor(!gunnerDoor)}
						size="small"
						variant="contained"
						color={gunnerDoor ? 'error' : 'success'}
					>
						Gunner Window
					</Button>
				</Box>

				<Box
					sx={{
						position: 'absolute',
						width: 79,
						height: 52,
						backgroundColor: '16161E',
						borderRadius: 1,
						left: 100,
						top: 630,
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
						onClick={() => setRearDoor(!rearDoor)}
						color={rearDoor ? 'error' : 'success'}
						size="small"
						variant="contained"
					>
						Troop Door
					</Button>
				</Box>
			</Box>
		</div>
	);
};
