import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useSimVar } from '../../../Hooks/simVars';
import Typography from '@material-ui/core/Typography';
import { Slider } from '@mui/material';
import './settings.scss';
import Grid from '@material-ui/core/Grid';

export const Settings = () => {
	const [RtrMode, setRtrMode] = useSimVar('L:Uh60_RTR_Type', 'bool');
	const [Downwash, setDownwashwash] = useSimVar('L:UH60_EFFECT_DOWNWASH', 'bool');

	const [brightnessEFB, setbrightnessEFB] = useSimVar('L:Uh60_EFB_BRT', 'enum');
	
	const handleChange = (event: Event, newValue: number | number[]) =>{
		setbrightnessEFB(newValue as number);
	  
	  };
	return (
		<div className="settingsContainer">

				<Box
					sx={{
						position: 'absolute',
						width: 500,
						height: 300,
						backgroundColor: '16161E',
						borderRadius: 4,
						left: 300,
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
					<h1 style={{ marginTop: 10 }}>Settings</h1>
					<Stack spacing={1}>
						<Button
							size="large"
							onClick={() => setRtrMode(!RtrMode)}
							color={RtrMode ? 'success' : 'primary'}
							variant={RtrMode ? 'contained' : 'outlined'}
						>
							Rotor Type
						</Button>
						<Button
							size="large"
							onClick={() => setDownwashwash(!Downwash)}
							color={Downwash ? 'primary' : 'success'}
							variant={Downwash ? 'outlined' : 'contained'}
						>
							Downwash
						</Button>
						<Typography id="continuous-slider" gutterBottom>
							Brightness
						</Typography>
						<Grid container spacing={0} >
							<Grid item xs>
							<Slider aria-labelledby="brightness" value={brightnessEFB} onChange={handleChange}/>                
							</Grid>
						</Grid>

					</Stack>


			</Box>	
		</div>
	);
};
