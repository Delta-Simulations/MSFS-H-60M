class FA18ACC_UFCD extends FA18_UFCD_Base {
    get templateID() { return "AS04F_ACC_UFCD"; }
    Init() {
        super.Init();
        if (this.topRightFixedButton)
            this.topRightFixedButton.onEmptyScratchpadCb = this.switchToComSubMenu.bind(this);
        if (this.bottomRightFixedButton)
            this.bottomRightFixedButton.onEmptyScratchpadCb = this.switchToComSubMenu.bind(this);
        this.apManager = new FA18ACC_AP_Manager();
        this.apSubMenu.setManager(this.apManager);
    }
    createMenus() {
        this.ilsSubMenu = new FA18_UFCD_ILSSubMenu(this);
        this.comSubMenu = new FA18_UFCD_ComSubMenu(this);
        this.apSubMenu = new FA18ACC_UFCD_APSubMenu(this);
        this.lawSubMenu = new FA18_UFCD_LAWSubMenu(this);
        this.tcnSubMenu = new FA18ACC_UFCD_TacanSubMenu(this);
        this.iffSubMenu = new FA18_UFCD_IFFSubMenu(this);
        this.rootMenu = new FA18_UFCD_RightMenu("", () => { }, [
            new FA18_UFCD_ButtonContent("D/L", "BCN", "ILS"),
            (this.topRightFixedButton != null) ? this.topRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "A/P", "", this.switchToApSubMenu.bind(this), this.apSubMenu.apCornerStatus.bind(this.apSubMenu)),
            new FA18_UFCD_ButtonContent("", "RALT", this.lawSubMenu.getAltitudeAlertValue.bind(this.lawSubMenu), this.switchToLawSubMenu.bind(this), this.lawSubMenu.getAltitudeAlertStatus.bind(this.lawSubMenu)),
            new FA18_UFCD_ButtonContent("", "TCN", this.tcnSubMenu.getTacanChannel.bind(this.tcnSubMenu), this.switchToTacanSubMenu.bind(this), this.tcnSubMenu.getTacanActiveStatus.bind(this.tcnSubMenu)),
            new FA18_UFCD_ButtonContent("", "EW", ""),
            new FA18_UFCD_ButtonContent("IFF", this.iffSubMenu.getIffMode3Code.bind(this.iffSubMenu), "", this.switchToIffSubMenu.bind(this), this.iffSubMenu.iffCornerStatus.bind(this.iffSubMenu)),
            new FA18_UFCD_ButtonContent("", "FLR", ""),
            new FA18_UFCD_ButtonContent("", "DDI", ""),
            (this.bottomRightFixedButton != null) ? this.bottomRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
        ]);
        this.wptDataSubMenu = new FA18ACC_UFCD_WaypointDataSubMenu(this);
        this.wptSeqSubMenu = new FA18ACC_UFCD_WaypointSequenceSubMenu(this);
    }
    switchToIlsSubMenu() {
        if (this.ilsSubMenu)
            this.gui.switchToButtonGroup(this.ilsSubMenu);
    }
    switchToComSubMenu(com) {
        if (this.comSubMenu) {
            this.comSubMenu.setSelectedCom(com);
            this.gui.switchToButtonGroup(this.comSubMenu);
        }
    }
    switchToApSubMenu() {
        if (this.apSubMenu)
            this.gui.switchToButtonGroup(this.apSubMenu);
    }
    switchToLawSubMenu(forceSwitch = false) {
        if (this.lawSubMenu) {
            this.gui.switchToButtonGroup(this.lawSubMenu);
        }
    }
    switchToIffSubMenu() {
        if (this.iffSubMenu) {
            if (this.gui.currentInput.length > 0) {
                this.iffSubMenu.setIffMode3Code();
            }
            else {
                this.gui.switchToButtonGroup(this.iffSubMenu);
            }
        }
    }
    switchToWPDataSubMenu() {
        if (this.wptDataSubMenu)
            this.gui.switchToButtonGroup(this.wptDataSubMenu);
    }
    switchToWPSeqSubMenu() {
        if (this.wptSeqSubMenu)
            this.gui.switchToButtonGroup(this.wptSeqSubMenu);
    }
    switchToTacanSubMenu(forceSwitch = false) {
        if (this.tcnSubMenu) {
            if (this.gui.currentInput.length > 0 && !forceSwitch) {
                this.tcnSubMenu.setTacanChannel();
            }
            else {
                this.gui.switchToButtonGroup(this.tcnSubMenu);
            }
        }
    }
    Update() {
        super.Update();
        if (this.apManager)
            this.apManager.Update(this.deltaTime);
        if (SimVar.GetSimVarValue("L:FA18_DDI_HSI_DATA_WYPT_SEQUFC_Pressed", "number") === 1) {
            SimVar.SetSimVarValue("L:FA18_DDI_HSI_DATA_WYPT_SEQUFC_Pressed", "number", 0);
            this.switchToWPSeqSubMenu();
        }
        if (SimVar.GetSimVarValue("L:FA18_DDI_HSI_DATA_WYPT_UFC_Pressed", "number") === 1) {
            SimVar.SetSimVarValue("L:FA18_DDI_HSI_DATA_WYPT_UFC_Pressed", "number", 0);
            this.switchToWPDataSubMenu();
        }
        if (SimVar.GetSimVarValue("L:FA18_DDI_HSI_DATA_TCN_UFC_Pressed", "number") === 1) {
            SimVar.SetSimVarValue("L:FA18_DDI_HSI_DATA_TCN_UFC_Pressed", "number", 0);
            this.switchToTacanSubMenu(true);
        }
        if (SimVar.GetSimVarValue("L:FA18_DDI_HSI_DATA_AC_BARO_Pressed", "number") === 1) {
            SimVar.SetSimVarValue("L:FA18_DDI_HSI_DATA_AC_BARO_Pressed", "number", 0);
            this.switchToLawSubMenu(true);
        }
        if (SimVar.GetSimVarValue("L:FA18_DDI_HSI_DATA_AC_RADAR_Pressed", "number") === 1) {
            SimVar.SetSimVarValue("L:FA18_DDI_HSI_DATA_AC_RADAR_Pressed", "number", 0);
            this.switchToLawSubMenu(true);
        }
    }
    onInteractionEvent(_args) {
        super.onInteractionEvent(_args);
        if (this.isElectricityAvailable()) {
            if (_args[0].toUpperCase() == "AS04F_HSI_HDG_TK_RESYNC") {
                if (this.apManager)
                    this.apManager.synchronizeHeadingTrackValue();
            }
        }
    }
}
class FA18ACC_AP_Mode extends FA18_AP_Mode {
}
FA18ACC_AP_Mode.GTRK = 'GTRK';
FA18ACC_AP_Mode.GSEL = 'GSEL';
FA18ACC_AP_Mode.ROLL = 'ROLL';
FA18ACC_AP_Mode.RALT = 'RALT';
FA18ACC_AP_Mode.BALT = 'BALT';
FA18ACC_AP_Mode.CPL_TCN = 'CPL_TCN';
FA18ACC_AP_Mode.CPL_WYPT = 'CPL_WYPT';
class FA18ACC_AP_Manager extends FA18_AP_Manager {
    constructor() {
        super(...arguments);
        this.activeLatMode = FA18ACC_AP_Mode.NONE;
        this.activeLonMode = FA18ACC_AP_Mode.NONE;
        this.timer = -1;
    }
    setModeState(_mode, state) {
        super.setModeState(_mode, state);
        switch (_mode) {
            case FA18ACC_AP_Mode.BALT:
                (state) ? this.engageBalt() : this.disengageBalt();
                break;
            case FA18ACC_AP_Mode.RALT:
                (state) ? this.engageRalt() : this.disengageRalt();
                break;
            case FA18ACC_AP_Mode.GTRK:
                (state) ? this.engageGtrk() : this.disengageGtrk();
                break;
            case FA18ACC_AP_Mode.GSEL:
                (state) ? this.engageGsel() : this.disengageGsel();
                break;
            case FA18ACC_AP_Mode.ROLL:
                (state) ? this.engageRoll() : this.disengageRoll();
                break;
            case FA18ACC_AP_Mode.CPL_TCN:
                (state) ? this.engageCplTCN() : this.disengageCplTCN();
                break;
            case FA18ACC_AP_Mode.CPL_WYPT:
                (state) ? this.engageCplWYPT() : this.disengageCplWYPT();
                break;
            default:
                break;
        }
    }
    Update(_deltaTime) {
        super.Update(_deltaTime);
        if (this.timer > 0) {
            this.timer -= _deltaTime;
        }
    }
    updateLongitudinal() {
        super.updateLongitudinal();
        if (this.isAutopilotActive) {
            if (this.activeLonMode == FA18ACC_AP_Mode.BALT) {
                if (this.wasStickMovedY)
                    this.disengageMode(this.activeLonMode);
            }
            if (this.activeLonMode == FA18ACC_AP_Mode.RALT) {
                let currentRadarAlt = SimVar.GetSimVarValue("RADIO HEIGHT", "feet");
                if (this.wasStickMovedY || currentRadarAlt > 5000) {
                    this.disengageMode(this.activeLonMode);
                }
            }
        }
    }
    engageBalt() {
        if (this.activeLonMode != FA18ACC_AP_Mode.BALT) {
            this.disengageMode(this.activeLonMode);
            SimVar.SetSimVarValue("K:AP_ALT_HOLD_ON", "number", 0);
            SimVar.SetSimVarValue("K:AP_ALT_RADIO_MODE_OFF", "number", 0);
            SimVar.SetSimVarValue("K:AP_ALT_VAR_SET_ENGLISH", "feet", SimVar.GetSimVarValue("INDICATED ALTITUDE", "feet"));
            this.activeLonMode = FA18ACC_AP_Mode.BALT;
        }
    }
    disengageBalt() {
        if (this.activeLonMode == FA18ACC_AP_Mode.BALT) {
            SimVar.SetSimVarValue("K:AP_ALT_HOLD_OFF", "number", 0);
            this.activeLonMode = FA18ACC_AP_Mode.NONE;
        }
    }
    getApBaltTarget() {
        return this.getActiveLongitudinalMode() == FA18ACC_AP_Mode.BALT ? SimVar.GetSimVarValue("AUTOPILOT ALTITUDE LOCK VAR", "Feet").toFixed(0) : "";
    }
    engageRalt() {
        if (this.activeLonMode != FA18ACC_AP_Mode.RALT) {
            let currentRalt = SimVar.GetSimVarValue("RADIO HEIGHT", "feet");
            if (currentRalt <= 5000) {
                this.disengageMode(this.activeLonMode);
                SimVar.SetSimVarValue("K:AP_ALT_HOLD_ON", "number", 0);
                SimVar.SetSimVarValue("K:AP_ALT_RADIO_MODE_ON", "number", 0);
                SimVar.SetSimVarValue("K:AP_ALT_VAR_SET_ENGLISH", "feet", currentRalt);
                this.activeLonMode = FA18ACC_AP_Mode.RALT;
            }
        }
    }
    disengageRalt() {
        if (this.activeLonMode == FA18ACC_AP_Mode.RALT) {
            SimVar.SetSimVarValue("K:AP_ALT_HOLD_OFF", "number", 0);
            this.activeLonMode = FA18ACC_AP_Mode.NONE;
        }
    }
    getApRaltTarget() {
        return this.getActiveLongitudinalMode() == FA18ACC_AP_Mode.RALT ? SimVar.GetSimVarValue("AUTOPILOT ALTITUDE LOCK VAR", "Feet").toFixed(0) : "";
    }
    updateLateral() {
        super.updateLateral();
        if (this.isAutopilotActive) {
            switch (this.activeLatMode) {
                case FA18ACC_AP_Mode.GTRK:
                    if (this.wasStickMovedX) {
                        this.setHdgTrkModeSimvarWithRoll();
                        this.trackReference = SimVar.GetSimVarValue("GPS GROUND MAGNETIC TRACK", "degrees");
                    }
                    break;
                case FA18ACC_AP_Mode.GSEL:
                    break;
                case FA18ACC_AP_Mode.ROLL:
                    if (this.wasStickMovedX) {
                        SimVar.SetSimVarValue("K:AP_BANK_HOLD_OFF", "number", 0);
                        SimVar.SetSimVarValue("K:AP_BANK_HOLD_ON", "number", 0);
                    }
                    break;
                case FA18ACC_AP_Mode.CPL_TCN:
                    if (SimVar.GetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number") != 2) {
                        this.disengageMode(this.activeLatMode);
                    }
                    else {
                        if (SimVar.GetSimVarValue("L:FA18_DDI_IS_COURSE_STEERING", "Bool")) {
                        }
                        else {
                            if (SimVar.GetSimVarValue("TACAN STATION DISTANCE:1", "nautical mile") > 1) {
                                SimVar.SetSimVarValue("K:HEADING_BUG_SET", "degree", Avionics.Utils.clampAngle(SimVar.GetSimVarValue("TACAN STATION RADIAL:1", "degrees") + 180));
                            }
                            else {
                                this.disengageMode(this.activeLatMode);
                                this.engageHdg(true);
                            }
                        }
                    }
                    break;
                case FA18ACC_AP_Mode.CPL_WYPT:
                    if (SimVar.GetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number") != 1) {
                        this.disengageMode(this.activeLatMode);
                    }
                    else {
                        if (SimVar.GetSimVarValue("GPS WP DISTANCE", "nautical mile") < 1) {
                            if (this.timer == -1) {
                                this.timer = 500;
                            }
                            if (this.timer < 0) {
                                this.timer = -1;
                                this.disengageMode(this.activeLatMode);
                                this.engageHdg(true);
                                break;
                            }
                        }
                        SimVar.SetSimVarValue("K:HEADING_BUG_SET", "degrees", Avionics.Utils.clampAngle(SimVar.GetSimVarValue("GPS WP BEARING", "degrees")));
                    }
                    break;
            }
            if (this.activeLatMode == FA18ACC_AP_Mode.GTRK || this.activeLatMode == FA18ACC_AP_Mode.GSEL) {
                let currentTrack = SimVar.GetSimVarValue("GPS GROUND MAGNETIC TRACK", "degrees");
                let currentHeading = SimVar.GetSimVarValue("PLANE HEADING DEGREES MAGNETIC", "degrees");
                SimVar.SetSimVarValue("K:HEADING_BUG_SET", "degree", currentHeading + this.trackReference - currentTrack);
            }
        }
    }
    engageGtrk() {
        if (this.activeLatMode != FA18ACC_AP_Mode.GTRK) {
            this.disengageMode(this.activeLatMode);
            this.setHdgTrkModeSimvarWithRoll();
            this.trackReference = SimVar.GetSimVarValue("GPS GROUND MAGNETIC TRACK", "degrees");
            this.activeLatMode = FA18ACC_AP_Mode.GTRK;
        }
    }
    disengageGtrk() {
        if (this.activeLatMode == FA18ACC_AP_Mode.GTRK) {
            SimVar.SetSimVarValue("K:AP_PANEL_HEADING_OFF", "number", 0);
            this.activeLatMode = FA18ACC_AP_Mode.NONE;
        }
    }
    engageGsel() {
        if (this.activeLatMode != FA18ACC_AP_Mode.GSEL) {
            this.disengageMode(this.activeLatMode);
            SimVar.SetSimVarValue("K:AP_PANEL_HEADING_ON", "number", 0);
            this.trackReference = SimVar.GetSimVarValue("L:XMLVAR_AS04F_HSI_HDG_TK", "degrees");
            SimVar.SetSimVarValue("L:FA18_HEADING_SELECT_MODE", "number", 1);
            this.activeLatMode = FA18ACC_AP_Mode.GSEL;
        }
    }
    disengageGsel() {
        if (this.activeLatMode == FA18ACC_AP_Mode.GSEL) {
            SimVar.SetSimVarValue("K:AP_PANEL_HEADING_OFF", "number", 0);
            SimVar.SetSimVarValue("L:FA18_HEADING_SELECT_MODE", "number", 0);
            this.activeLatMode = FA18ACC_AP_Mode.NONE;
        }
    }
    synchronizeHeadingTrackValue() {
        super.synchronizeHeadingTrackValue();
        if (this.activeLatMode == FA18ACC_AP_Mode.GSEL) {
            this.trackReference = SimVar.GetSimVarValue("L:XMLVAR_AS04F_HSI_HDG_TK", "degrees");
        }
    }
    engageRoll() {
        if (this.activeLatMode != FA18ACC_AP_Mode.ROLL) {
            this.disengageMode(this.activeLatMode);
            SimVar.SetSimVarValue("K:AP_BANK_HOLD_ON", "number", 0);
            this.activeLatMode = FA18ACC_AP_Mode.ROLL;
        }
    }
    disengageRoll() {
        if (this.activeLatMode == FA18ACC_AP_Mode.ROLL) {
            SimVar.SetSimVarValue("K:AP_BANK_HOLD_OFF", "number", 0);
            this.activeLatMode = FA18ACC_AP_Mode.NONE;
        }
    }
    engageCplTCN() {
        if (this.activeLatMode != FA18ACC_AP_Mode.CPL_TCN) {
            if (SimVar.GetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number") == 2) {
                this.disengageMode(this.activeLatMode);
                if (SimVar.GetSimVarValue("L:FA18_DDI_IS_COURSE_STEERING", "Bool")) {
                    SimVar.SetSimVarValue("TACAN DRIVES NAV1", "number", 1);
                    SimVar.SetSimVarValue("AUTOPILOT NAV SELECTED", "number", 1);
                    SimVar.SetSimVarValue("K:AP_NAV1_HOLD_ON", "number", 0);
                }
                else {
                    SimVar.SetSimVarValue("K:AP_PANEL_HEADING_ON", "number", 1);
                }
                SimVar.SetSimVarValue("L:FA18_IS_STEERING_COUPLED", "number", 1);
                this.activeLatMode = FA18ACC_AP_Mode.CPL_TCN;
            }
        }
    }
    disengageCplTCN() {
        if (this.activeLatMode == FA18ACC_AP_Mode.CPL_TCN) {
            if (SimVar.GetSimVarValue("L:FA18_DDI_IS_COURSE_STEERING", "Bool")) {
                SimVar.SetSimVarValue("K:AP_NAV1_HOLD_OFF", "number", 0);
            }
            else {
                SimVar.SetSimVarValue("K:AP_PANEL_HEADING_OFF", "number", 1);
            }
            SimVar.SetSimVarValue("L:FA18_IS_STEERING_COUPLED", "number", 0);
            this.activeLatMode = FA18ACC_AP_Mode.NONE;
        }
    }
    engageCplWYPT() {
        if (this.activeLatMode != FA18ACC_AP_Mode.CPL_WYPT) {
            if (SimVar.GetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number") == 1) {
                this.disengageMode(this.activeLatMode);
                SimVar.SetSimVarValue("K:AP_PANEL_HEADING_ON", "number", 1);
                SimVar.SetSimVarValue("L:FA18_IS_STEERING_COUPLED", "number", 1);
                this.activeLatMode = FA18ACC_AP_Mode.CPL_WYPT;
            }
        }
    }
    disengageCplWYPT() {
        if (this.activeLatMode == FA18ACC_AP_Mode.CPL_WYPT) {
            SimVar.SetSimVarValue("K:AP_PANEL_HEADING_OFF", "number", 1);
            SimVar.SetSimVarValue("L:FA18_IS_STEERING_COUPLED", "number", 0);
            this.activeLatMode = FA18ACC_AP_Mode.NONE;
        }
    }
}
class FA18ACC_UFCD_APSubMenu extends FA18_UFCD_APSubMenu {
    constructor(_instrument, _manager) {
        super(_instrument, _manager);
        this.buttons[0] = new FA18_UFCD_ButtonContent("", "CPL", this.getApCplMode.bind(this), this.toggleApCpl.bind(this), this.getApCplStatus.bind(this));
        this.buttons[2] = new FA18_UFCD_ButtonContent("", "BALT", this.getApBaroAltTarget.bind(this), this.toggleApBaroAlt.bind(this), this.getApBaroAltStatus.bind(this));
        this.buttons[3] = new FA18_UFCD_ButtonContent("", "ROLL", "", this.toggleApRoll.bind(this), this.getApRollStatus.bind(this));
        this.buttons[4] = new FA18_UFCD_ButtonContent("", "RALT", this.getApRadarAltTarget.bind(this), this.toggleApRadarAlt.bind(this), this.getApRadarAltStatus.bind(this));
        this.buttons[5] = new FA18_UFCD_ButtonContent("", this.getApGtrkIsSelectedText.bind(this), "", this.toggleApGtrk.bind(this), this.getApGtrkStatus.bind(this));
    }
    toggleApBaroAlt() {
        if (this.manager) {
            if (this.manager.getActiveLongitudinalMode() != FA18ACC_AP_Mode.BALT)
                this.manager.engageMode(FA18ACC_AP_Mode.BALT);
            else
                this.manager.disengageMode(FA18ACC_AP_Mode.BALT);
        }
    }
    getApBaroAltStatus() {
        return (this.manager && this.manager.getActiveLongitudinalMode() == FA18ACC_AP_Mode.BALT) ? "Border" : "";
    }
    getApBaroAltTarget() {
        return (this.manager) ? this.manager.getApBaltTarget() : "";
    }
    toggleApRadarAlt() {
        if (this.manager) {
            if (this.manager.getActiveLongitudinalMode() != FA18ACC_AP_Mode.RALT)
                this.manager.engageMode(FA18ACC_AP_Mode.RALT);
            else
                this.manager.disengageMode(FA18ACC_AP_Mode.RALT);
        }
    }
    getApRadarAltStatus() {
        return (this.manager && this.manager.getActiveLongitudinalMode() == FA18ACC_AP_Mode.RALT) ? "Border" : "";
    }
    getApRadarAltTarget() {
        return (this.manager) ? this.manager.getApRaltTarget() : "";
    }
    toggleApRoll() {
        if (this.manager) {
            if (this.manager.getActiveLateralMode() != FA18ACC_AP_Mode.ROLL)
                this.manager.engageMode(FA18ACC_AP_Mode.ROLL);
            else
                this.manager.disengageMode(FA18ACC_AP_Mode.ROLL);
        }
    }
    getApRollStatus() {
        return (this.manager && this.manager.getActiveLateralMode() == FA18ACC_AP_Mode.ROLL) ? "Border" : "";
    }
    toggleApGtrk() {
        if (this.manager) {
            let activeLateralMode = this.manager.getActiveLateralMode();
            if (activeLateralMode == FA18ACC_AP_Mode.GTRK) {
                this.manager.engageMode(FA18ACC_AP_Mode.GSEL);
            }
            else if (activeLateralMode == FA18ACC_AP_Mode.GSEL) {
                this.manager.disengageMode(FA18ACC_AP_Mode.GSEL);
                this.manager.disengageMode(FA18ACC_AP_Mode.GTRK);
            }
            else {
                this.manager.engageMode(FA18ACC_AP_Mode.GTRK);
            }
        }
    }
    getApGtrkIsSelectedText() {
        return (this.manager && this.manager.getActiveLateralMode() == FA18ACC_AP_Mode.GSEL) ? "GSEL" : "GTRK";
    }
    getApGtrkStatus() {
        if (this.manager) {
            let activeLateralMode = this.manager.getActiveLateralMode();
            return (activeLateralMode == FA18ACC_AP_Mode.GTRK || activeLateralMode == FA18ACC_AP_Mode.GSEL) ? "Border" : "";
        }
        return "";
    }
    toggleApCpl() {
        if (this.manager) {
            switch (SimVar.GetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number")) {
                case 1:
                    if (this.manager.getActiveLateralMode() != FA18ACC_AP_Mode.CPL_WYPT) {
                        this.manager.engageMode(FA18ACC_AP_Mode.CPL_WYPT);
                    }
                    else {
                        this.manager.disengageMode(FA18ACC_AP_Mode.CPL_WYPT);
                    }
                    break;
                case 2:
                    if (this.manager.getActiveLateralMode() != FA18ACC_AP_Mode.CPL_TCN) {
                        this.manager.engageMode(FA18ACC_AP_Mode.CPL_TCN);
                    }
                    else {
                        this.manager.disengageMode(FA18ACC_AP_Mode.CPL_TCN);
                    }
                    break;
            }
        }
    }
    getApCplStatus() {
        return (this.manager && (this.manager.getActiveLateralMode() == FA18ACC_AP_Mode.CPL_TCN || this.manager.getActiveLateralMode() == FA18ACC_AP_Mode.CPL_WYPT)) ? "Border" : "";
    }
    getApCplMode() {
        switch (SimVar.GetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number")) {
            case 1:
                return "WYPT";
            case 2:
                return "TCN";
        }
        return "";
    }
}
class FA18ACC_UFCD_TacanSubMenu extends FA18_UFCD_RightMenu {
    constructor(_instrument) {
        super("", () => { }, []);
        this.instrument = _instrument;
        this.entCallback = this.setTacanChannel.bind(this);
        this.buttons = [
            new FA18_UFCD_ButtonContent("", "T/R", "", this.setTacanMode.bind(this, 1), this.getTacanModeStatus.bind(this, 1)),
            (this.instrument.topRightFixedButton != null) ? this.instrument.topRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "RCV", "", this.setTacanMode.bind(this, 2), this.getTacanModeStatus.bind(this, 2)),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "A/A", ""),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", this.getTacanChannelAndMode.bind(this), "", this.setTacanChannel.bind(this)),
            new FA18_UFCD_ButtonContent("", this.getTacanActiveOnOff.bind(this), "", this.switchTacanOnOff.bind(this), this.getTacanActiveStatus.bind(this)),
            new FA18_UFCD_ButtonContent("", "CNI", "", this.instrument.switchToRootMenu.bind(this.instrument)),
            (this.instrument.bottomRightFixedButton != null) ? this.instrument.bottomRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
        ];
    }
    getTacanChannel() {
        const channel = SimVar.GetSimVarValue("TACAN ACTIVE CHANNEL:1", "number");
        return channel;
    }
    getTacanChannelAndMode() {
        const channel = SimVar.GetSimVarValue("TACAN ACTIVE CHANNEL:1", "number");
        const mode = SimVar.GetSimVarValue("TACAN ACTIVE MODE:1", "number");
        return `${channel}${mode == 0 ? 'X' : 'Y'}`;
    }
    setTacanChannel() {
        const mode = SimVar.GetSimVarValue("TACAN ACTIVE MODE:1", "number");
        if (this.instrument.gui.currentInput.length > 0) {
            let val = parseFloat(this.instrument.gui.currentInput);
            if (val > 0 && val < 127) {
                SimVar.SetSimVarValue("K:TACAN1_ACTIVE_CHANNEL_SET", "number", val);
                this.instrument.gui.currentInput = "";
            }
            else {
                this.instrument.gui.displayError();
            }
        }
        else {
            SimVar.SetSimVarValue("K:TACAN1_ACTIVE_MODE_SET", "number", 1 - mode % 2);
        }
    }
    setTacanMode(_mode) {
        SimVar.SetSimVarValue("L:Glasscockpit_TACAN_Mode", "number", _mode);
    }
    getTacanModeStatus(_mode) {
        return SimVar.GetSimVarValue("L:Glasscockpit_TACAN_Mode", "number") == _mode ? "Border" : "";
    }
    switchTacanOnOff() {
        SimVar.SetSimVarValue("L:Glasscockpit_TACAN_Mode", "number", SimVar.GetSimVarValue("L:Glasscockpit_TACAN_Mode", "number") == 0 ? 1 : 0);
    }
    getTacanActiveStatus() {
        return SimVar.GetSimVarValue("L:Glasscockpit_TACAN_Mode", "number") != 0 ? "TopLeft" : "";
    }
    getTacanActiveOnOff() {
        return SimVar.GetSimVarValue("L:Glasscockpit_TACAN_Mode", "number") != 0 ? "ON" : "OFF";
    }
}
var FA18_UFCD_WaypointDataSubMenu_State;
(function (FA18_UFCD_WaypointDataSubMenu_State) {
    FA18_UFCD_WaypointDataSubMenu_State[FA18_UFCD_WaypointDataSubMenu_State["NONE"] = 0] = "NONE";
    FA18_UFCD_WaypointDataSubMenu_State[FA18_UFCD_WaypointDataSubMenu_State["LATITUDE"] = 1] = "LATITUDE";
    FA18_UFCD_WaypointDataSubMenu_State[FA18_UFCD_WaypointDataSubMenu_State["LONGITUDE"] = 2] = "LONGITUDE";
    FA18_UFCD_WaypointDataSubMenu_State[FA18_UFCD_WaypointDataSubMenu_State["ELEVATION"] = 3] = "ELEVATION";
    FA18_UFCD_WaypointDataSubMenu_State[FA18_UFCD_WaypointDataSubMenu_State["NSEW"] = 4] = "NSEW";
})(FA18_UFCD_WaypointDataSubMenu_State || (FA18_UFCD_WaypointDataSubMenu_State = {}));
class FA18ACC_UFCD_WaypointDataSubMenu extends FA18_UFCD_RightMenu {
    constructor(_instrument) {
        super("", () => { }, []);
        this.isNorth = true;
        this.isEast = true;
        this.latLonDisplayMode = 0;
        this.instrument = _instrument;
        this.scratchpadLeftText = this.LeftText.bind(this);
        this.entCallback = this.EnterPress.bind(this);
        this.clrCallback = this.ClrPress.bind(this);
        this.inactivityCallback = this.onInactivityCallback.bind(this);
        this.buttons = [
            new FA18_UFCD_ButtonContent("", "POSN", "", this.SwitchToState.bind(this, FA18_UFCD_WaypointDataSubMenu_State.NSEW), this.GetPosnStatus.bind(this)),
            (this.instrument.topRightFixedButton != null) ? this.instrument.topRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "ELEV", "", this.SwitchToState.bind(this, FA18_UFCD_WaypointDataSubMenu_State.ELEVATION), this.GetStateStatus.bind(this, FA18_UFCD_WaypointDataSubMenu_State.ELEVATION)),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "O/S", ""),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "GRID", ""),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "CNI", "", this.instrument.switchToRootMenu.bind(this.instrument)),
            (this.instrument.bottomRightFixedButton != null) ? this.instrument.bottomRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
        ];
    }
    SwitchToState(_state) {
        this.currentState = _state;
        if (this.currentState == FA18_UFCD_WaypointDataSubMenu_State.NSEW) {
            this.instrument.gui.setKeyboard("NSEW");
        }
        else {
            this.instrument.gui.setKeyboard("");
        }
        this.instrument.gui.currentInput = "";
    }
    GetStateStatus(_state) {
        return _state == this.currentState ? "Border" : "";
    }
    GetPosnStatus() {
        switch (this.currentState) {
            case FA18_UFCD_WaypointDataSubMenu_State.LATITUDE:
            case FA18_UFCD_WaypointDataSubMenu_State.LONGITUDE:
            case FA18_UFCD_WaypointDataSubMenu_State.NSEW:
                return "Border";
            default:
                return "";
        }
    }
    OnEnter() {
        this.SwitchToState(FA18_UFCD_WaypointDataSubMenu_State.NONE);
        this.instrument.gui.inactivityTimerResetTime = 8000;
    }
    Update(_deltaTime) {
        super.Update(_deltaTime);
        this.latLonDisplayMode = SimVar.GetSimVarValue("L:FA18_DDI_LAT_LON_DISPLAY_MODE", "number");
        let _currentEditWaypointIndexDb = SimVar.GetSimVarValue("L:FA18_DDI_CURRENT_WAYPOINT_INDEX_DB", "number");
        if (_currentEditWaypointIndexDb != this.currentEditWaypointIndexDb) {
            this.currentEditWaypointIndexDb = _currentEditWaypointIndexDb;
            this.SwitchToState(FA18_UFCD_WaypointDataSubMenu_State.NONE);
            this.instrument.gui.resetInactivityTimer();
        }
    }
    FormatInput(_input) {
        if (_input == "ERROR") {
            return _input;
        }
        switch (this.currentState) {
            case FA18_UFCD_WaypointDataSubMenu_State.LATITUDE:
                if (this.latLonDisplayMode == 0) {
                    this.instrument.gui.currentInput = _input.slice(0, 8);
                    let val = _input.padStart(8, "0");
                    return val.slice(0, 2) + Avionics.Utils.DEGREE_SYMBOL + "" + val.slice(2, 4) + "." + val.slice(4, 8) + "'";
                }
                else {
                    this.instrument.gui.currentInput = _input.slice(0, 6);
                    let val = _input.padStart(6, "0");
                    return val.slice(0, 2) + Avionics.Utils.DEGREE_SYMBOL + "" + val.slice(2, 4) + "'" + val.slice(4, 6) + '"';
                }
            case FA18_UFCD_WaypointDataSubMenu_State.LONGITUDE:
                if (this.latLonDisplayMode == 0) {
                    this.instrument.gui.currentInput = _input.slice(0, 9);
                    let val = _input.padStart(9, "0");
                    return val.slice(0, 3) + Avionics.Utils.DEGREE_SYMBOL + "" + val.slice(3, 5) + "." + val.slice(5, 9) + "'";
                }
                else {
                    this.instrument.gui.currentInput = _input.slice(0, 7);
                    let val = _input.padStart(7, "0");
                    return val.slice(0, 3) + Avionics.Utils.DEGREE_SYMBOL + "" + val.slice(3, 5) + "'" + val.slice(5, 7) + '"';
                }
            case FA18_UFCD_WaypointDataSubMenu_State.ELEVATION:
                return _input + " FT";
        }
        return _input;
    }
    LeftText() {
        switch (this.currentState) {
            case FA18_UFCD_WaypointDataSubMenu_State.ELEVATION:
                return "ELEV:";
            case FA18_UFCD_WaypointDataSubMenu_State.LATITUDE:
                return (this.isNorth ? "N" : "S");
            case FA18_UFCD_WaypointDataSubMenu_State.LONGITUDE:
                return (this.isEast ? "E" : "W");
        }
        return "";
    }
    ClrPress() {
        if (this.currentState == FA18_UFCD_WaypointDataSubMenu_State.LATITUDE || this.currentState == FA18_UFCD_WaypointDataSubMenu_State.LONGITUDE) {
            if (this.instrument.gui.currentInput == "") {
                this.SwitchToState(FA18_UFCD_WaypointDataSubMenu_State.NSEW);
            }
        }
    }
    onInactivityCallback() {
        this.instrument.gui.currentInput = "";
        this.instrument.switchToRootMenu();
    }
    EnterPress(input) {
        let degrees = 0, minutes = 0, seconds = 0, dd = 0;
        switch (this.currentState) {
            case FA18_UFCD_WaypointDataSubMenu_State.NSEW:
                if (input == "N" || input == "S") {
                    this.isNorth = (input == "N");
                    this.SwitchToState(FA18_UFCD_WaypointDataSubMenu_State.LATITUDE);
                }
                else if (input == "E" || input == "W") {
                    this.isEast = (input == "E");
                    this.SwitchToState(FA18_UFCD_WaypointDataSubMenu_State.LONGITUDE);
                }
                else {
                    this.instrument.gui.displayError();
                }
                break;
            case FA18_UFCD_WaypointDataSubMenu_State.LATITUDE:
                if (this.latLonDisplayMode == 0) {
                    let val = input.padStart(8, "0");
                    degrees = parseFloat(val.slice(0, 2));
                    minutes = parseFloat(val.slice(2, 8)) / 10000;
                }
                else {
                    let val = input.padStart(6, "0");
                    degrees = parseFloat(val.slice(0, 2));
                    minutes = parseFloat(val.slice(2, 4));
                    seconds = parseFloat(val.slice(4, 6));
                }
                dd = degrees + minutes / 60 + seconds / 3600;
                if (dd > 90 || minutes >= 60 || seconds >= 60) {
                    this.instrument.gui.displayError();
                }
                else {
                    if (!this.isNorth)
                        dd = -dd;
                    SimVar.SetSimVarValue("L:FA18_DDI_SET_WAYPOINT_LAT", "number", dd);
                    this.SwitchToState(FA18_UFCD_WaypointDataSubMenu_State.NSEW);
                }
                break;
            case FA18_UFCD_WaypointDataSubMenu_State.LONGITUDE:
                if (this.latLonDisplayMode == 0) {
                    let val = input.padStart(9, "0");
                    degrees = parseFloat(val.slice(0, 3));
                    minutes = parseFloat(val.slice(3, 9)) / 10000;
                }
                else {
                    let val = input.padStart(7, "0");
                    degrees = parseFloat(val.slice(0, 3));
                    minutes = parseFloat(val.slice(3, 5));
                    seconds = parseFloat(val.slice(5, 7));
                }
                dd = degrees + minutes / 60 + seconds / 3600;
                if (dd > 180 || minutes >= 60 || seconds >= 60) {
                    this.instrument.gui.displayError();
                }
                else {
                    if (!this.isEast)
                        dd = -dd;
                    SimVar.SetSimVarValue("L:FA18_DDI_SET_WAYPOINT_LONG", "number", dd);
                    this.SwitchToState(FA18_UFCD_WaypointDataSubMenu_State.NONE);
                }
                break;
                break;
            case FA18_UFCD_WaypointDataSubMenu_State.ELEVATION:
                SimVar.SetSimVarValue("L:FA18_DDI_SET_WAYPOINT_ELEV", "number", Avionics.Utils.FEET2METER * parseInt(input));
                this.SwitchToState(FA18_UFCD_WaypointDataSubMenu_State.NONE);
                break;
        }
    }
}
var FA18_UFCD_WaypointSequenceSubMenu_State;
(function (FA18_UFCD_WaypointSequenceSubMenu_State) {
    FA18_UFCD_WaypointSequenceSubMenu_State[FA18_UFCD_WaypointSequenceSubMenu_State["NONE"] = 0] = "NONE";
    FA18_UFCD_WaypointSequenceSubMenu_State[FA18_UFCD_WaypointSequenceSubMenu_State["GSPD"] = 1] = "GSPD";
    FA18_UFCD_WaypointSequenceSubMenu_State[FA18_UFCD_WaypointSequenceSubMenu_State["TGT"] = 2] = "TGT";
    FA18_UFCD_WaypointSequenceSubMenu_State[FA18_UFCD_WaypointSequenceSubMenu_State["TOT"] = 3] = "TOT";
    FA18_UFCD_WaypointSequenceSubMenu_State[FA18_UFCD_WaypointSequenceSubMenu_State["INSERT"] = 4] = "INSERT";
    FA18_UFCD_WaypointSequenceSubMenu_State[FA18_UFCD_WaypointSequenceSubMenu_State["DELETE"] = 5] = "DELETE";
})(FA18_UFCD_WaypointSequenceSubMenu_State || (FA18_UFCD_WaypointSequenceSubMenu_State = {}));
class FA18ACC_UFCD_WaypointSequenceSubMenu extends FA18_UFCD_RightMenu {
    constructor(_instrument) {
        super("", () => { }, []);
        this.instrument = _instrument;
        this.scratchpadLeftText = this.LeftText.bind(this);
        this.entCallback = this.EnterPress.bind(this);
        this.inactivityCallback = this.onInactivityCallback.bind(this);
        this.buttons = [
            new FA18_UFCD_ButtonContent("", "GSPD", ""),
            (this.instrument.topRightFixedButton != null) ? this.instrument.topRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "TGT", ""),
            new FA18_UFCD_ButtonContent("", "TOT", ""),
            new FA18_UFCD_ButtonContent("", "INSERT", "", this.SwitchToState.bind(this, FA18_UFCD_WaypointSequenceSubMenu_State.INSERT), this.GetStateStatus.bind(this, FA18_UFCD_WaypointSequenceSubMenu_State.INSERT)),
            new FA18_UFCD_ButtonContent("", "DELETE", "", this.SwitchToState.bind(this, FA18_UFCD_WaypointSequenceSubMenu_State.DELETE), this.GetStateStatus.bind(this, FA18_UFCD_WaypointSequenceSubMenu_State.DELETE)),
            new FA18_UFCD_ButtonContent("", "GRID", ""),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "CNI", "", this.instrument.switchToRootMenu.bind(this.instrument)),
            (this.instrument.bottomRightFixedButton != null) ? this.instrument.bottomRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
        ];
    }
    SwitchToState(_state) {
        this.currentState = _state;
        this.instrument.gui.currentInput = "";
    }
    OnEnter() {
        this.instrument.gui.setKeyboard("");
        this.SwitchToState(FA18_UFCD_WaypointSequenceSubMenu_State.NONE);
        this.instrument.gui.inactivityTimerResetTime = 8000;
    }
    onInactivityCallback() {
        this.instrument.gui.currentInput = "";
        this.instrument.switchToRootMenu();
    }
    FormatInput(_input) {
        if (_input == "ERROR") {
            return _input;
        }
        switch (this.currentState) {
            case FA18_UFCD_WaypointSequenceSubMenu_State.GSPD:
                {
                    return _input;
                }
            case FA18_UFCD_WaypointSequenceSubMenu_State.TGT:
                {
                    return _input;
                }
            case FA18_UFCD_WaypointSequenceSubMenu_State.TOT:
                {
                    return _input;
                }
            case FA18_UFCD_WaypointSequenceSubMenu_State.INSERT:
                {
                    return _input;
                }
            case FA18_UFCD_WaypointSequenceSubMenu_State.DELETE:
                {
                    return _input;
                }
        }
        return _input;
    }
    LeftText() {
        return "";
    }
    GetStateStatus(_state) {
        return _state == this.currentState ? "Border" : "";
    }
    EnterPress(input) {
        switch (this.currentState) {
            case FA18_UFCD_WaypointSequenceSubMenu_State.GSPD:
                {
                }
                break;
            case FA18_UFCD_WaypointSequenceSubMenu_State.TGT:
                {
                }
                break;
            case FA18_UFCD_WaypointSequenceSubMenu_State.TOT:
                {
                }
                break;
            case FA18_UFCD_WaypointSequenceSubMenu_State.INSERT:
                {
                    if (input == "") {
                        this.instrument.gui.displayError();
                    }
                    else {
                        let n = parseInt(input);
                        if (n < 0 || n > 59) {
                            this.instrument.gui.displayError();
                        }
                        else {
                            SimVar.SetSimVarValue("L:FA18_DDI_INSERT_WAYPOINT", "number", n);
                            this.instrument.gui.currentInput = "";
                        }
                    }
                }
                break;
            case FA18_UFCD_WaypointSequenceSubMenu_State.DELETE:
                {
                    if (input == "") {
                        this.instrument.gui.displayError();
                    }
                    else {
                        let n = parseInt(input);
                        if (n < 0 || n > 59) {
                            this.instrument.gui.displayError();
                        }
                        else {
                            SimVar.SetSimVarValue("L:FA18_DDI_DELETE_WAYPOINT", "number", n);
                            this.instrument.gui.currentInput = "";
                        }
                    }
                }
                break;
        }
    }
}
registerInstrument("fa18acc-ufcd-element", FA18ACC_UFCD);
//# sourceMappingURL=FA18ACC_UFCD.js.map