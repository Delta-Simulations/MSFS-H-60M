
import React from 'react';
import {
    Box,
    Stack,
    Button,
    Slider,
    Typography,
    ThemeProvider,
    Divider,
} from '@mui/material';

import { useSimVar } from '../../../Hooks/simVars';
import { ButtonColour } from '../ThemesEFB';
import './settings.scss';

export const Settings = () => {
    const [RtrMode, setRtrMode] = useSimVar('L:Uh60_RTR_Type', 'bool');
    const [Downwash, setDownwashwash] = useSimVar('L:UH60_EFFECT_DOWNWASH', 'bool');
    const [brightnessEFB, setbrightnessEFB] = useSimVar('L:Uh60_EFB_BRT', 'enum');

    const panelStyle = {
        backgroundColor: '#343a40',
        borderRadius: 1,
        padding: 1.5,
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.699)',
        color: '#aeb0b3',
    };

    const headingStyle = {
        color: '#aeb0b3',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 1.5,
    };

    const buttonSx = {
        minHeight: 38,
        fontSize: 13,
    };

const ControlButton = ({
    label,
    value,
    onClick,
}: {
    label: string;
    value: boolean;
    onClick: () => void;
}) => (
    <Button
        fullWidth
        size="large"
        variant={value ? 'contained' : 'outlined'}
        onClick={(event) => {
            event.preventDefault();
            onClick();
        }}
        sx={{
            ...buttonSx,
            transition: 'none',
        }}
    >
        {label}
    </Button>
);

    const Keybind = ({
        keyName,
        description,
    }: {
        keyName: string;
        description: string;
    }) => (
        <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ width: '100%' }}
        >
            <Box
                sx={{
                    backgroundColor: '#252a30',
                    border: '1px solid #505860',
                    borderBottom: '3px solid #171a1d',
                    borderRadius: 1,
                    color: '#e0e0e0',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    fontSize: 12,
                    px: 1.5,
                    py: 1,
                    minWidth: 220,
                    textAlign: 'center',
                    boxSizing: 'border-box',
                }}
            >
                {keyName}
            </Box>

            <Typography variant="body2" sx={{ color: '#aeb0b3' }}>
                {description}
            </Typography>
        </Stack>
    );

    return (
        <ThemeProvider theme={ButtonColour}>
            <Box className="settingsContainer">

                {/* MAIN CONTENT */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: 15,
                        top: 15,
                        width: 1010,
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 1.5,
                    }}
                >

                    {/* LEFT COLUMN */}
                    <Stack spacing={1.5}>

                        {/* VISUAL CONFIGURATION */}
                        <Box sx={panelStyle}>
                            <Typography sx={headingStyle}>
                                VISUAL CONFIGURATION
                            </Typography>

							<Stack spacing={1}>
								<Button
									fullWidth
									size="large"
									variant={RtrMode ? 'contained' : 'outlined'}
									onClick={() => setRtrMode(!RtrMode)}
									sx={buttonSx}
								>
									{`ROTOR TYPE - ${RtrMode ? 'MESH' : 'BLURRED'}`}
								</Button>
								<Button
									fullWidth
									size="large"
									variant={Downwash ? 'contained' : 'outlined'}
									onClick={() => setDownwashwash(!Downwash)}
									sx={buttonSx}
								>
									{`CUSTOM DOWNWASH FX - ${Downwash ? 'ON' : 'OFF'}`}
								</Button>
							</Stack>
                        </Box>

                        {/* DISPLAY SETTINGS */}
                        <Box sx={panelStyle}>
                            <Typography sx={headingStyle}>
                                DISPLAY SETTINGS
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 1 }}>
                                EFB BRIGHTNESS
                            </Typography>

                            <Slider
                                value={Math.max(0, Math.min(100, Number(brightnessEFB) || 0))}
                                min={0}
                                max={100}
                                step={1}
                                onChange={(_, value) => setbrightnessEFB(value as number)}
                                size="small"
                            />

                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="caption">0%</Typography>
                                <Typography variant="caption">
                                    {Math.round(Number(brightnessEFB) || 0)}%
                                </Typography>
                                <Typography variant="caption">100%</Typography>
                            </Stack>
                        </Box>

                    </Stack>

                    {/* RIGHT COLUMN */}
                    <Stack spacing={1.5}>

{/* KEYBINDINGS */}
<Box sx={panelStyle}>
    <Typography sx={headingStyle}>
        KEYBINDINGS
    </Typography>

    <Stack spacing={1.5}>
        <Keybind
            keyName="INCREASE MAC CREADY"
            description="Weapon Trigger"
        />

        <Divider sx={{ borderColor: '#626a72', opacity: 0.5 }} />

        <Keybind
            keyName="DECREASE MAC CREADY"
            description="Release Water"
        />

        <Divider sx={{ borderColor: '#626a72', opacity: 0.5 }} />

        <Keybind
            keyName="INCREASE / DECREASE COWL FLAPS 4"
            description="Searchlight Out / In"
        />

        <Divider sx={{ borderColor: '#626a72', opacity: 0.5 }} />

        <Keybind
            keyName="INCREASE / DECREASE COWL FLAPS 3"
            description="Searchlight Left / Right"
        />

        <Divider sx={{ borderColor: '#626a72', opacity: 0.5 }} />

        <Keybind
            keyName="INCREASE / DECREASE MIXTURE 4"
            description="Minigun Up / Down"
        />

        <Divider sx={{ borderColor: '#626a72', opacity: 0.5 }} />

        <Keybind
            keyName="INCREASE / DECREASE MIXTURE 3"
            description="Minigun Left / Right"
        />
    </Stack>
</Box>

                        {/* INFORMATION */}
                        <Box sx={panelStyle}>
                            <Typography sx={headingStyle}>
                                INFORMATION
                            </Typography>

                            <Typography variant="body2">
                                Aircraft visual settings and EFB display
                                preferences can be adjusted here.
                            </Typography>

                            <Typography
                                variant="caption"
                                sx={{ display: 'block', mt: 1, color: '#92999f' }}
                            >
                                Keybindings are configured through the
                                Microsoft Flight Simulator controls menu.
                            </Typography>
                        </Box>

                    </Stack>

                </Box>
            </Box>
        </ThemeProvider>
    );
};
