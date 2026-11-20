import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import { useSimVar } from '../../../Hooks/simVars';

import './settings.scss';

export const Settings = () => {
	const [RtrMode, setRtrMode] = useSimVar('L:Uh60_RTR_Type', 'bool');
	const [Downwash, setDownwashwash] = useSimVar('L:UH60_EFFECT_DOWNWASH', 'bool');
	const [brightnessEFB, setbrightnessEFB] = useSimVar('L:Uh60_EFB_BRT', 'enum');

	const handleChange = (event: Event, newValue: number | number[]) => {
		setbrightnessEFB(newValue as number);
	};

	return (
		<div className="settingsContainer">
			<Box
				sx={{
					position: 'absolute',
					width: 560, // Increased width to fit the keybind layout
					height: 'auto', // Let content dictate height
					pb: 3, // Padding bottom
					backgroundColor: '16161E',
					borderRadius: 4,
					left: 300,
					boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
					color: '#1B93FF',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'center',
					fontSize: 14,
				}}
			>
				<h1 style={{ marginTop: 15 }}>Settings</h1>
				
				<Stack spacing={2} sx={{ width: '90%' }}>
					
					{/* --- VISUAL SETTINGS --- */}
					<Stack spacing={1}>
						<Button
							size="large"
							onClick={() => setRtrMode(!RtrMode)}
							color={RtrMode ? 'success' : 'primary'}
							variant={RtrMode ? 'contained' : 'outlined'}
						>
							Rotor Type - {RtrMode ? 'Mesh' : 'Blurred'}
						</Button>
						
						<Button
							size="large"
							onClick={() => setDownwashwash(!Downwash)}
							color={Downwash ? 'primary' : 'success'}
							variant={Downwash ? 'outlined' : 'contained'}
						>
							Custom Downwash FX - {Downwash ? 'ON' : 'OFF'}
						</Button>
					</Stack>

					<Divider sx={{ borderColor: '#1B93FF', opacity: 0.3 }} />

					{/* --- EFB BRIGHTNESS --- */}
					<Box sx={{ px: 2 }}>
						<Typography gutterBottom>
							EFB Brightness
						</Typography>
						<Slider 
							aria-labelledby="brightness" 
							value={brightnessEFB} 
							onChange={handleChange} 
							sx={{ color: '#1B93FF' }}
						/>
					</Box>

					<Divider sx={{ borderColor: '#1B93FF', opacity: 0.3 }} />

					{/* --- KEYBINDS VISUAL AREA --- */}
					<Box 
						sx={{ 
							backgroundColor: '#1a1b26', 
							borderRadius: 2, 
							p: 2, 
							textAlign: 'left',
							border: '1px solid #1B93FF',
							width: '100%',
							boxSizing: 'border-box'
						}}
					>
						<Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: '#1B93FF' }}>
							Keybindings
						</Typography>
						
						<Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1.5 }}>
							<Box 
								sx={{ 
									px: 1.5, 
									py: 0.5, 
									backgroundColor: '#333', 
									borderRadius: 1, 
									borderBottom: '3px solid #111',
									color: '#fff',
									fontFamily: 'monospace',
									fontWeight: 'bold',
									minWidth: '60px'
								}}
							>
								[ Increase Mac Cready ]
							</Box>
							<Typography>Weapon Trigger</Typography>
						</Stack>

						<Stack direction="row" alignItems="center" spacing={2}>
							<Box 
								sx={{ 
									px: 1.5, 
									py: 0.5, 
									backgroundColor: '#333', 
									borderRadius: 1, 
									borderBottom: '3px solid #111',
									color: '#fff',
									fontFamily: 'monospace',
									fontWeight: 'bold',
									minWidth: '60px'
								}}
							>
								[ Decrease Mac Cready ]
							</Box>
							<Typography>Release Water</Typography>
						</Stack>

						<Stack direction="row" alignItems="center" spacing={2}>
							<Box 
								sx={{ 
									px: 1.5, 
									py: 0.5, 
									backgroundColor: '#333', 
									borderRadius: 1, 
									borderBottom: '3px solid #111',
									color: '#fff',
									fontFamily: 'monospace',
									fontWeight: 'bold',
									minWidth: '60px'
								}}
							>
								[ Increase/Decrease Cowl Flaps 4 ]
							</Box>
							<Typography>Searchlight Out/In</Typography>
						</Stack>
						<Stack direction="row" alignItems="center" spacing={2}>
							<Box 
								sx={{ 
									px: 1.5, 
									py: 0.5, 
									backgroundColor: '#333', 
									borderRadius: 1, 
									borderBottom: '3px solid #111',
									color: '#fff',
									fontFamily: 'monospace',
									fontWeight: 'bold',
									minWidth: '60px'
								}}
							>
								[ Increase/Decrease Cowl Flaps 3 ]
							</Box>
							<Typography>Searchlight Left/Right</Typography>
						</Stack>
						<Stack direction="row" alignItems="center" spacing={2}>
							<Box 
								sx={{ 
									px: 1.5, 
									py: 0.5, 
									backgroundColor: '#333', 
									borderRadius: 1, 
									borderBottom: '3px solid #111',
									color: '#fff',
									fontFamily: 'monospace',
									fontWeight: 'bold',
									minWidth: '60px'
								}}
							>
								[ Increase/Decrease Mixture 4 ]
							</Box>
							<Typography>Minigun Up/Down</Typography>
						</Stack>
												<Stack direction="row" alignItems="center" spacing={2}>
							<Box 
								sx={{ 
									px: 1.5, 
									py: 0.5, 
									backgroundColor: '#333', 
									borderRadius: 1, 
									borderBottom: '3px solid #111',
									color: '#fff',
									fontFamily: 'monospace',
									fontWeight: 'bold',
									minWidth: '60px'
								}}
							>
								[ Increase/Decrease Mixture 3 ]
							</Box>
							<Typography>Minigun Left/Right</Typography>
						</Stack>
					</Box>

				</Stack>
			</Box>	
		</div>
	);
};