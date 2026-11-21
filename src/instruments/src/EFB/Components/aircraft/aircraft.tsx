
import React from 'react';
import {
    Box,
    Stack,
    Button,
    ButtonGroup,
    Slider,
    Typography,
    ThemeProvider,
    Divider,
} from '@mui/material';

import { useSimVar } from '../../../Hooks/simVars';
import { ButtonColour } from '../ThemesEFB';
import './aircraft.scss';

// Define outside Aircraft
const buttonSx = {
    minHeight: 38,
    fontSize: 13,
};

const ControlButton = ({
    label,
    value,
    onClick,
    disabled = false,
}: {
    label: string;
    value: boolean;
    onClick: () => void;
    disabled?: boolean;
}) => (
    <Button
        fullWidth
        size="large"
        variant={value ? 'contained' : 'outlined'}
        disabled={disabled}
        onClick={onClick}
        sx={buttonSx}
    >
        {label}
    </Button>
);

const SliderControl = ({
    label,
    value,
    onChange,
    left,
    right,
}: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    left: string;
    right: string;
}) => {
    const sliderValue = Math.max(
        0,
        Math.min(100, Number(value) || 0)
    );

    return (
        <Box sx={{ width: '100%', mb: 1 }}>
            <Typography variant="body2" sx={{ mb: 0.5, color: '#aeb0b3' }}>
                {label}
            </Typography>



            <Slider
                value={sliderValue}
                min={0}
                max={100}
                step={1}
                onChange={(_, newValue) => onChange(newValue as number)}
                onKeyDown={(event) => event.preventDefault()}
                size="small"
                sx={{
                    height: 3,
                    py: 0,
                    my: 0,
                    '& .MuiSlider-thumb': {
                        width: 11,
                        height: 11,
                    },
                    '& .MuiSlider-track': {
                        border: 'none',
                    },
                    '& .MuiSlider-rail': {
                        height: 3,
                    },
                }}
            />

            <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ mt: '-7px', lineHeight: 1 }}
            >
                <Typography variant="caption" sx={{ fontSize: 10, lineHeight: 1 }}>
                    {left}
                </Typography>
                <Typography variant="caption" sx={{ fontSize: 10, lineHeight: 1 }}>
                    {right}
                </Typography>
            </Stack>
        </Box>
    );
};

export const Aircraft = () => {

    // Configuration
    const [skis, setSkis] = useSimVar('L:H60_Skis', 'bool');
    const [EIBF, setEIBF] = useSimVar('L:H60_EBF', 'bool');

    // Equipment
    const [HasProbe] = useSimVar('L:H60_HasProbe', 'bool');
    const [HasHoist] = useSimVar('L:H60_HasHoist', 'bool');

    const [probe, setProbe] = useSimVar('L:Fuel_door', 'bool');
    const [lift, setLift] = useSimVar('L:H60_Winch', 'bool');

    // Doors
    const [rearDoor, setRearDoor] = useSimVar('L:H60_TroopDoor', 'bool');
    const [doorR, setDoorR] = useSimVar('L:H60_DoorP', 'bool');
    const [doorL, setDoorL] = useSimVar('L:H60_DoorCP', 'bool');
    const [doorHide, setDoorHide] = useSimVar('L:H60_FrontDoorVis', 'bool');
    const [gunnerDoor, setGunnerDoor] = useSimVar('L:H60_GunnerDoor', 'bool');

    // Crew
    const [showPilot, setShowPilot] = useSimVar('L:H60_Pilot_Vis', 'bool');
    const [showCoPilot, setShowCoPilot] = useSimVar('L:H60_CoPilot_Vis', 'bool');
    const [showCrewChief, setShowCrewChief] = useSimVar('L:H60_CrewChief_Vis', 'bool');
    const [showSoliders, setShowSoliders] = useSimVar('L:H60_Soliders_Vis', 'bool');

    // Lighting
    const [LDGDownUp, setLDGDownUp] = useSimVar('L:H60_LDG_LT_DownUp', 'enum');
    const [LDGPWR, setLDGPWR] = useSimVar('A:LIGHT TAXI:1', 'bool');

    const [SLPWR, setSLPWR] = useSimVar('A:LIGHT LANDING:1', 'bool');
    const [SLDownUp, setSLDownUp] = useSimVar('L:H60_SL_DownUp', 'enum');
    const [SLLeftRight, setSLLeftRight] = useSimVar('L:H60_SL_RightLeft', 'enum');

    const [GunTrigger, setGunTrigger] = useSimVar('L:H60_Gun_Trigger_Oride', 'bool');
    const [Gun_Slew, setGun_Slew] = useSimVar('L:H60_DoorGun_Yaw', 'enum');
    const [Gun_UpDown, setGun_UpDown] = useSimVar('L:H60_DoorGun_Pitch', 'enum');
    const [MasterArm, setMasterArm] = useSimVar('L:H60_Master_Arm', 'bool');

    const [showWeapons] = useSimVar('L:H60_Variant_Is_Armed', 'bool');

    // Water system
    const [eqip_bambi, setEquip_bambi] = useSimVar(
        'L:H60_Cargo_BambiBucket_Installed', 'bool'
    );

    const [eqip_helitak] = useSimVar(
        'L:H60_Helitank_Installed', 'bool'
    );

    const [fill_bambi, setFill_bambi] = useSimVar(
        'L:H60_Cargo_Bambi_Water_Lvl', 'enum'
    );

    const [BambiTrigger, setBambiTrigger] = useSimVar(
        'L:H60_Trigger_Override', 'bool'
    );

    const hasWaterEquipment = Boolean(eqip_bambi || eqip_helitak);
    const waterLevel = Math.max(0, Math.min(100, Number(fill_bambi) || 0));

    const panelStyle = {
        backgroundColor: '#343a40',
        borderRadius: 1,
        padding: 1.1,
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.699)',
        color: '#aeb0b3',
    };

    const headingStyle = {
        color: '#aeb0b3',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 1.5,
    };



    return (
        <ThemeProvider theme={ButtonColour}>
            <Box className="aircraftContainer">

                {/* MAIN CONTENT */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: 15,
                        top: 15,
                        width: 1010,
                        height: 640,
                        display: 'grid',
                        gridTemplateColumns: '220px 1fr 180px',
                        gap: 1.5,
                    }}
                >

                    {/* LEFT COLUMN */}
                    <Stack spacing={1.5}>

                        <Box sx={panelStyle}>
                            <Typography sx={headingStyle}>
                                CONFIGURATION
                            </Typography>

                            <Stack spacing={1}>
                                <ControlButton
                                    label="SKIS"
                                    value={skis}
                                    onClick={() => setSkis(!skis)}
                                />
                                <ControlButton
                                    label="EIBF"
                                    value={EIBF}
                                    onClick={() => setEIBF(!EIBF)}
                                />

                                <ControlButton
                                    label="BAMBI BUCKET"
                                    value={Boolean(eqip_bambi || eqip_helitak)}
                                    disabled={Boolean(eqip_helitak)}
                                    onClick={() => setEquip_bambi(!eqip_bambi)}
                                />
                            </Stack>
                        </Box>

                        <Box sx={panelStyle}>
                            <Typography sx={headingStyle}>
                                CREW VISIBILITY
                            </Typography>

                            <Stack spacing={1}>
                                <ControlButton label="PILOT" value={Boolean(showPilot)} onClick={() => setShowPilot(!showPilot)} />
                                <ControlButton label="CO-PILOT" value={Boolean(showCoPilot)} onClick={() => setShowCoPilot(!showCoPilot)} />
                                <ControlButton label="CREW CHIEF" value={Boolean(showCrewChief)} onClick={() => setShowCrewChief(!showCrewChief)} />
                                <ControlButton label="TROOPS" value={Boolean(showSoliders)} onClick={() => setShowSoliders(!showSoliders)} />
                            </Stack>
                        </Box>

                    </Stack>

                    {/* CENTRE COLUMN */}
                    <Stack spacing={1.5}>

                        <Box
                            sx={{
                                ...panelStyle,
                                height: 410,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography sx={headingStyle}>
                                AIRCRAFT LAYOUT
                            </Typography>

                            <Box
                                sx={{
                                    flex: 1,
                                    minHeight: 0,
                                    width: '100%',
                                    backgroundImage: "url('/images/EFB/H60_TopDown.png')",
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'auto 150%',
                                }}
                            />
                            <Box sx={panelStyle}>
                                <Typography sx={headingStyle}>
                                    DOOR CONFIGURATION
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                        gap: 1,
                                    }}
                                >
                                    <ControlButton label="HIDE DOORS" value={Boolean(doorHide)} onClick={() => setDoorHide(!doorHide)} />
                                    <ControlButton label="DOOR L" value={Boolean(doorL)} onClick={() => setDoorL(!doorL)} />
                                    <ControlButton label="DOOR R" value={Boolean(doorR)} onClick={() => setDoorR(!doorR)} />
                                    <ControlButton label="TROOP DOOR" value={Boolean(rearDoor)} onClick={() => setRearDoor(!rearDoor)} />
                                    <ControlButton label="GUNNER WIN" value={Boolean(gunnerDoor)} onClick={() => setGunnerDoor(!gunnerDoor)} />
                                </Box>
                            </Box>
                        </Box>



                    </Stack>

                    {/* RIGHT COLUMN */}
                    <Stack spacing={1}>

                        <Box sx={panelStyle}>
                            <Typography sx={headingStyle}>
                                EQUIPMENT
                            </Typography>

                            <Stack spacing={1}>
                                <ControlButton label="PROBE" value={Boolean(probe)} disabled={!HasProbe} onClick={() => setProbe(!probe)} />
                                <ControlButton label="HOIST" value={Boolean(lift)} disabled={!HasHoist} onClick={() => setLift(!lift)} />
                            </Stack>
                        </Box>

                        <Box sx={panelStyle}>
                            <Typography sx={headingStyle}>
                                WATER SYSTEM
                            </Typography>

                            <Typography variant="caption">
                                {eqip_helitak ? 'HELITAK' : eqip_bambi ? 'BAMBI' : ''}
                            </Typography>
                            {hasWaterEquipment ? (
                                <>
                                    <Stack spacing={1} sx={{ mt: 1 }}>
                                        <Button fullWidth variant="outlined" onClick={() => setFill_bambi(100)}>
                                            FORCE FILL
                                        </Button>

                                        <ControlButton
                                            label="DROP"
                                            value={Boolean(BambiTrigger)}
                                            onClick={() => setBambiTrigger(!BambiTrigger)}
                                        />
                                    </Stack>

                                    <Box
                                        sx={{
                                            height: 80,
                                            width: 55,
                                            border: '2px solid #aeb0b3',
                                            borderRadius: 1,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            mx: 'auto',
                                            mt: 2,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                width: '100%',
                                                height: `${waterLevel}%`,
                                                backgroundColor: '#1f6feb',
                                            }}
                                        />
                                    </Box>

                                    <Typography align="center" sx={{ mt: 1 }}>
                                        {Math.round(waterLevel)}%
                                    </Typography>
                                </>
                            ) : (
                                <Typography variant="caption">
                                    NO WATER EQUIPMENT
                                </Typography>
                            )}
                        </Box>

                    </Stack>

                </Box>

                {/* LIGHTING PANEL */}
                <Box
                    sx={{
                        ...panelStyle,
                        position: 'absolute',
                        left: 15,
                        top: 455,
                        width: 610,
                        height: 300,
                        boxSizing: 'border-box',
                        overflow: 'visible',
                        p: 2, // Increased padding for inner breathing room
                    }}
                >
                    <Typography sx={headingStyle}>
                        AIRCRAFT LIGHTING
                    </Typography>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '1fr auto 1fr', // Use 'auto' for the divider column
                            columnGap: 3,                        // Explicit horizontal separation
                            alignItems: 'flex-start',
                        }}
                    >
                        <Stack spacing={1.5}>
                            <Typography fontWeight="bold">SEARCH LIGHT</Typography>

                            <ControlButton
                                label={SLPWR ? 'POWER ON' : 'POWER OFF'}
                                value={Boolean(SLPWR)}
                                onClick={() => setSLPWR(!SLPWR)}
                            />

                            <SliderControl
                                label="EXTENSION"
                                value={SLDownUp}
                                onChange={setSLDownUp}
                                left="RETRACT"
                                right="EXTEND"
                            />

                            <SliderControl
                                label="DIRECTION"
                                value={SLLeftRight}
                                onChange={setSLLeftRight}
                                left="LEFT"
                                right="RIGHT"
                            />
                        </Stack>

                        <Divider orientation="vertical" flexItem sx={{ my: 1, borderColor: 'rgba(255,255,255,0.1)' }} />

                        <Stack spacing={1.5}>
                            <Typography fontWeight="bold">LANDING LIGHT</Typography>

                            <ControlButton
                                label={LDGPWR ? 'POWER ON' : 'POWER OFF'}
                                value={Boolean(LDGPWR)}
                                onClick={() => setLDGPWR(!LDGPWR)}
                            />

                            <SliderControl
                                label="EXTENSION"
                                value={LDGDownUp}
                                onChange={setLDGDownUp}
                                left="RETRACT"
                                right="EXTEND"
                            />
                        </Stack>
                    </Box></Box>
                {/* WEAPONS PANEL */}
                {showWeapons && (
                    <Box
                        sx={{
                            ...panelStyle,
                            position: 'absolute',
                            left: 640,
                            top: 425,
                            width: 370,
                            height: 350,
                            boxSizing: 'border-box',
                            p: 2,
                        }}
                    >
                        <Typography sx={headingStyle}>
                            WEAPONS SYSTEM
                        </Typography>

                        <Stack spacing={1}>

                            <Box
                                sx={{
                                    backgroundColor: '#252a2f',
                                    borderRadius: 1,
                                    p: 1.5,
                                }}
                            >
                                <ControlButton
                                    label={`MASTER ARM: ${MasterArm ? 'ARMED' : 'SAFE'}`}
                                    value={MasterArm}
                                    onClick={() => setMasterArm(!MasterArm)}
                                    sx={MasterArm ? {
                                        backgroundColor: '#d32f2f',
                                        color: '#fff',
                                        borderColor: '#d32f2f',
                                        '&:hover': {
                                            backgroundColor: '#b71c1c',
                                        },
                                    } : {}}
                                />
                            </Box>
                            <ControlButton label="FIRE" value={GunTrigger} onClick={() => setGunTrigger(!GunTrigger)} />

                            <SliderControl
                                label="MINIGUN YAW"
                                value={Gun_Slew}
                                onChange={setGun_Slew}
                                left="IN"
                                right="OUT"
                            />
                            <SliderControl
                                label="MINIGUN UP/DOWN"
                                value={Gun_UpDown}
                                onChange={setGun_UpDown}
                                left="UP"
                                right="DOWN"
                            />


                        </Stack>

                    </Box>)}

            </Box>
        </ThemeProvider>
    );
};
