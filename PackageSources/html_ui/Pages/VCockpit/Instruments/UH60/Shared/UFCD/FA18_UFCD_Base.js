class FA18_UFCD_Base extends BaseInstrument {
    get gui() { return this._gui; }
    get IsGlassCockpit() { return true; }
    get isInteractive() { return true; }
    Init() {
        super.Init();
        this._gui = this.getChildById("GUI");
        if (this.gui)
            this.gui.init(this);
        this.initFixedButtons();
        this.createMenus();
        this.switchToRootMenu();
    }
    initFixedButtons() {
        this.topRightFixedButton = new FA18_UFCD_ComButtonContent(this, 1);
        this.bottomRightFixedButton = new FA18_UFCD_ComButtonContent(this, 2);
    }
    switchToRootMenu() {
        if (this.rootMenu)
            this.gui.switchToButtonGroup(this.rootMenu);
    }
    Update() {
        super.Update();
        if (this.gui)
            this.gui.Update(this.deltaTime);
        this.updateAltitudeTrigger();
    }
    onInteractionEvent(_args) {
        super.onInteractionEvent(_args);
        switch (_args[0]) {
            case "AS04F_UFCD_1_KNOB_COM1_INC":
            case "AS04F_UFCD_1_KNOB_COM2_INC":
            case "AS04F_UFCD_1_KNOB_COM1_DEC":
            case "AS04F_UFCD_1_KNOB_COM2_DEC":
                let event = _args[0].endsWith("INC") ? "KNOB_COM_INC" : "KNOB_COM_DEC";
                if (_args[0].indexOf("COM1") != -1 && this.topRightFixedButton instanceof FA18_UFCD_ComButtonContent) {
                    this.topRightFixedButton.onEvent(event);
                }
                else if (this.bottomRightFixedButton instanceof FA18_UFCD_ComButtonContent) {
                    this.bottomRightFixedButton.onEvent(event);
                }
                break;
        }
    }
    updateAltitudeTrigger() {
        if ((SimVar.GetSimVarValue("RADIO HEIGHT", "feet") < SimVar.GetSimVarValue("L:FA18_Alert_RAlt", "number") ||
            SimVar.GetSimVarValue("INDICATED ALTITUDE", "feet") < SimVar.GetSimVarValue("L:FA18_Alert_Baro", "number") ||
            SimVar.GetSimVarValue("RADIO HEIGHT", "feet") < SimVar.GetSimVarValue("L:FA18_Alert_Radar", "number")) &&
            SimVar.GetSimVarValue("L:FA18_Alert_Active", "boolean")) {
            SimVar.SetSimVarValue("L:FA18_Alert_Triggered", "boolean", true);
        }
        else {
            SimVar.SetSimVarValue("L:FA18_Alert_Triggered", "boolean", false);
        }
    }
}
class FA18_UFCD_ButtonElements {
}
class FA18_UFCD_ButtonContent {
    constructor(_top, _mid, _bot, _onClickCB = null, _SelectionStatusCB = null, _topSelectedStatusCB = null) {
        this.topLine = _top;
        this.middleLine = _mid;
        this.bottomLine = _bot;
        this.onClickCB = _onClickCB;
        this.selectionStatusCB = _SelectionStatusCB;
        this.topSelectedStatusCB = _topSelectedStatusCB;
    }
    DisplayButton(_button) {
        diffAndSetAttribute(_button.button, "DisplaySymbol", "");
    }
    isInteractive() {
        return this.onClickCB != null;
    }
    onEvent(_event) { }
}
class FA18_UFCD_SymbolButton extends FA18_UFCD_ButtonContent {
    constructor(_symbol, _onClickCB = null, _SelectionStatusCB = null, _topSelectedStatusCB = null) {
        super("", "", "", _onClickCB, _SelectionStatusCB, _topSelectedStatusCB);
        this.symbol = _symbol;
    }
    DisplayButton(_button) {
        diffAndSetAttribute(_button.button, "DisplaySymbol", this.symbol);
    }
}
class FA18_UFCD_ComButtonContent extends FA18_UFCD_ButtonContent {
    constructor(_instrument, comId, _onEmptyScratchpadCb = null) {
        super("", "CH M", "");
        this._comId = comId;
        this.instrument = _instrument;
        this.bottomLine = this.getComFrequency.bind(this);
        this.onClickCB = this.comButtonPress.bind(this);
        this.selectionStatusCB = this.isComActiveStatus.bind(this);
        this.topSelectedStatusCB = this.isComReceiving.bind(this);
        this.onEmptyScratchpadCb = _onEmptyScratchpadCb;
    }
    get comId() { return this._comId; }
    getComFrequency() {
        return SimVar.GetSimVarValue("COM ACTIVE FREQUENCY:" + this._comId, "MHz").toFixed(3);
    }
    isComReceiving() {
        return SimVar.GetSimVarValue("COM RECEIVE:" + this._comId, "Bool");
    }
    isComActive() {
        return SimVar.GetSimVarValue("COM STATUS:" + this._comId, "Enum") == 0;
    }
    isComActiveStatus() {
        return this.isComActive() ? "TopLeft" : "";
    }
    comButtonPress() {
        if (this.instrument.gui.currentInput.length > 0) {
            this.setFrequencyFromInput();
        }
        else {
            if (this.onEmptyScratchpadCb)
                this.onEmptyScratchpadCb(this);
        }
    }
    readInput() {
        let currentInput = this.instrument.gui.currentInput;
        let val = parseFloat(currentInput);
        if (currentInput.length > 3 && currentInput.indexOf(".") == -1) {
            val /= Math.pow(10, currentInput.length - 3);
        }
        return val;
    }
    isFrequencyValid(_value) {
        return (!isNaN(_value) && (_value >= 118 && _value < 137 && ((_value * 1000) % 5 == 0)));
    }
    setFrequency(_value) {
        SimVar.SetSimVarValue("K:COM" + (this._comId == 1 ? "" : "2") + "_RADIO_SET_HZ", "Hz", _value * 1000000);
    }
    setFrequencyFromInput() {
        let value = this.readInput();
        if (this.isFrequencyValid(value)) {
            this.setFrequency(value);
            this.instrument.gui.currentInput = "";
        }
        else {
            this.instrument.gui.displayError();
        }
    }
    onEvent(_event) {
        switch (_event) {
            case "KNOB_COM_INC":
                break;
            case "KNOB_COM_DEC":
                break;
        }
    }
}
class FA18_UFCD_RightMenu {
    constructor(_scratchpadLeftText, _entCallback, _buttons, _clrCallback, _inactivityCallback) {
        this.buttons = _buttons;
        this.scratchpadLeftText = _scratchpadLeftText;
        this.entCallback = _entCallback;
        this.clrCallback = _clrCallback;
        this.inactivityCallback = _inactivityCallback;
    }
    OnEnter() {
    }
    Update(_deltaTime) {
    }
    FormatInput(_input) {
        return _input;
    }
}
class FA18_UFCD_RightMenu_FrequencyFormat extends FA18_UFCD_RightMenu {
    FormatInput(_input) {
        if (_input.length > 3 && _input != "ERROR") {
            return _input.slice(0, 3) + "." + _input.slice(3);
        }
        else {
            return _input;
        }
    }
}
class FA18_UFCD_ComSubMenu extends FA18_UFCD_RightMenu_FrequencyFormat {
    constructor(_instrument) {
        super("", () => { }, []);
        this.instrument = _instrument;
        this.scratchpadLeftText = this.getComSublevelLeftText.bind(this);
        this.entCallback = this.setSelectedComFrequency.bind(this);
        this.buttons = [
            new FA18_UFCD_ButtonContent("", "GRCV", ""),
            (this.instrument.topRightFixedButton != null) ? this.instrument.topRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "CPHR", ""),
            new FA18_UFCD_ButtonContent("", "SQCH", ""),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "AM", "", null, FA18_UFCD_GUI.alwaysBordered),
            new FA18_UFCD_ButtonContent("", "AJ", "MENU"),
            new FA18_UFCD_ButtonContent("", "ADF", ""),
            new FA18_UFCD_ButtonContent("", "CNI", "", this.instrument.switchToRootMenu.bind(this.instrument)),
            (this.instrument.bottomRightFixedButton != null) ? this.instrument.bottomRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
        ];
    }
    setSelectedCom(com) {
        this.selectedCom = com;
    }
    getComSublevelLeftText() {
        if (this.selectedCom)
            return this.selectedCom.comId + ": M";
        return "ERROR";
    }
    setSelectedComFrequency() {
        if (this.selectedCom) {
            if (this.instrument.gui.currentInput.length > 0) {
                this.selectedCom.setFrequencyFromInput();
            }
            else {
                this.instrument.gui.displayError();
            }
        }
        else {
            this.instrument.gui.displayError();
        }
    }
}
class FA18_UFCD_ILSSubMenu extends FA18_UFCD_RightMenu_FrequencyFormat {
    constructor(_instrument) {
        super("", () => { }, []);
        this.instrument = _instrument;
        this.entCallback = this.setIlsFrequency.bind(this);
        this.buttons = [
            new FA18_UFCD_ButtonContent("", "CHNL", this.getIlsFrequency.bind(this), this.setIlsFrequency.bind(this)),
            (this.instrument.topRightFixedButton != null) ? this.instrument.topRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "ON", "", null, FA18_UFCD_GUI.alwaysTopLeft),
            new FA18_UFCD_ButtonContent("", "CNI", "", this.instrument.switchToRootMenu.bind(this.instrument)),
            (this.instrument.bottomRightFixedButton != null) ? this.instrument.bottomRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
        ];
    }
    getIlsFrequency() {
        return SimVar.GetSimVarValue("NAV ACTIVE FREQUENCY:1", "MHz").toFixed(2);
    }
    setIlsFrequency() {
        if (this.instrument.gui.currentInput.length > 0) {
            let val = parseFloat(this.instrument.gui.currentInput);
            if (!isNaN(val) && (val >= 108 && val < 118 && ((val * 100) % 5 == 0))) {
                SimVar.SetSimVarValue("K:NAV1_RADIO_SET_HZ", "Hz", val * 1000000);
                this.instrument.gui.currentInput = "";
            }
            else {
                this.instrument.gui.displayError();
            }
        }
        else {
            this.instrument.gui.displayError();
        }
    }
}
class FA18_UFCD_IFFSubMenu extends FA18_UFCD_RightMenu {
    constructor(_instrument) {
        super("", () => { }, []);
        this.instrument = _instrument;
        this.entCallback = this.setIffMode3Code.bind(this);
        this.buttons = [
            new FA18_UFCD_ButtonContent("", "1-XX", ""),
            (this.instrument.topRightFixedButton != null) ? this.instrument.topRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "2-XXXX", ""),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", this.getIffMode3Code.bind(this), "", this.switchIffMode3.bind(this), this.getIffMode3ActiveStatus.bind(this)),
            new FA18_UFCD_ButtonContent("", "C", "", this.switchIffModeC.bind(this), this.getIffmodeCActiveStatus.bind(this)),
            new FA18_UFCD_ButtonContent("", "XPOND", ""),
            new FA18_UFCD_ButtonContent("", this.getIffActiveOnOff.bind(this), "", this.switchIffOnOff.bind(this), this.getIffActiveStatus.bind(this)),
            new FA18_UFCD_ButtonContent("", "CNI", "", this.instrument.switchToRootMenu.bind(this.instrument)),
            (this.instrument.bottomRightFixedButton != null) ? this.instrument.bottomRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
        ];
    }
    iffCornerStatus() {
        return SimVar.GetSimVarValue("TRANSPONDER STATE:1", "number") >= 3 ? "TopLeft" : "";
    }
    getIffMode3Code() {
        return "3-" + ("0000" + SimVar.GetSimVarValue("TRANSPONDER CODE:1", "number")).slice(-4);
    }
    setIffMode3Code() {
        let currentInput = this.instrument.gui.currentInput;
        if (currentInput.length == 4 &&
            currentInput[0] >= '0' && currentInput[0] <= '7' &&
            currentInput[1] >= '0' && currentInput[1] <= '7' &&
            currentInput[2] >= '0' && currentInput[2] <= '7' &&
            currentInput[3] >= '0' && currentInput[3] <= '7') {
            let code = (parseInt(currentInput[0]) * 4096 + parseInt(currentInput[1]) * 256 + parseInt(currentInput[2]) * 16 + parseInt(currentInput[3]));
            SimVar.SetSimVarValue("K:XPNDR_SET", "Bco16", code);
            this.instrument.gui.currentInput = "";
        }
        else {
            this.instrument.gui.displayError();
        }
    }
    switchIffModeC() {
        SimVar.SetSimVarValue("TRANSPONDER STATE:1", "number", SimVar.GetSimVarValue("TRANSPONDER STATE:1", "number") == 4 ? 3 : 4);
    }
    switchIffMode3() {
        if (this.instrument.gui.currentInput.length > 0) {
            this.setIffMode3Code();
        }
        else {
            SimVar.SetSimVarValue("TRANSPONDER STATE:1", "number", SimVar.GetSimVarValue("TRANSPONDER STATE:1", "number") >= 3 ? 1 : 3);
        }
    }
    switchIffOnOff() {
        SimVar.SetSimVarValue("TRANSPONDER STATE:1", "number", SimVar.GetSimVarValue("TRANSPONDER STATE:1", "number") >= 1 ? 0 : 1);
    }
    getIffmodeCActiveStatus() {
        return SimVar.GetSimVarValue("TRANSPONDER STATE:1", "number") == 4 ? "Border" : "";
    }
    getIffMode3ActiveStatus() {
        return SimVar.GetSimVarValue("TRANSPONDER STATE:1", "number") >= 3 ? "Border" : "";
    }
    getIffActiveStatus() {
        return SimVar.GetSimVarValue("TRANSPONDER STATE:1", "number") >= 1 ? "TopLeft" : "";
    }
    getIffActiveOnOff() {
        return SimVar.GetSimVarValue("TRANSPONDER STATE:1", "number") >= 1 ? "ON" : "OFF";
    }
}
class FA18_UFCD_APSubMenu extends FA18_UFCD_RightMenu {
    constructor(_instrument, _manager) {
        super("", () => { }, []);
        this.instrument = _instrument;
        this.setManager(_manager);
        this.buttons = [
            new FA18_UFCD_ButtonContent("", "", ""),
            (this.instrument.topRightFixedButton != null) ? this.instrument.topRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "FPAH", "", this.toggleApFpah.bind(this), this.getApFpahStatus.bind(this)),
            new FA18_UFCD_ButtonContent("", this.getApHdgIsSelectedText.bind(this), "", this.toggleApHdg.bind(this), this.getApHdgStatus.bind(this)),
            new FA18_UFCD_ButtonContent("", "CNI", "", this.instrument.switchToRootMenu.bind(this.instrument)),
            (this.instrument.bottomRightFixedButton != null) ? this.instrument.bottomRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
        ];
    }
    setManager(_manager) { this.manager = _manager; }
    apCornerStatus() {
        return (this.manager && this.manager.isAutopilotActive) ? "TopLeft" : "";
    }
    toggleApFpah() {
        if (this.manager) {
            if (this.manager.getActiveLongitudinalMode() != FA18_AP_Mode.FPAH)
                this.manager.engageMode(FA18_AP_Mode.FPAH);
            else
                this.manager.disengageMode(FA18_AP_Mode.FPAH);
        }
    }
    getApFpahStatus() {
        return (this.manager && this.manager.getActiveLongitudinalMode() == FA18_AP_Mode.FPAH) ? "Border" : "";
    }
    toggleApHdg() {
        if (this.manager) {
            let activeLateralMode = this.manager.getActiveLateralMode();
            if (activeLateralMode == FA18_AP_Mode.HDG) {
                this.manager.engageMode(FA18_AP_Mode.HSEL);
            }
            else if (activeLateralMode == FA18_AP_Mode.HSEL) {
                this.manager.disengageMode(FA18_AP_Mode.HSEL);
                this.manager.disengageMode(FA18_AP_Mode.HDG);
            }
            else {
                this.manager.engageMode(FA18_AP_Mode.HDG);
            }
        }
    }
    getApHdgIsSelectedText() {
        return (this.manager && this.manager.getActiveLateralMode() == FA18_AP_Mode.HSEL) ? "HSEL" : "HDG";
    }
    getApHdgStatus() {
        if (this.manager) {
            let activeLateralMode = this.manager.getActiveLateralMode();
            return (activeLateralMode == FA18_AP_Mode.HDG || activeLateralMode == FA18_AP_Mode.HSEL) ? "Border" : "";
        }
        return "";
    }
}
class FA18_UFCD_LAWSubMenu extends FA18_UFCD_RightMenu {
    constructor(_instrument) {
        super("", () => { }, []);
        this._isBelowRaltAlert = false;
        this.maxRAltAltitude = 5000;
        this.maxBaroAltitude = 25000;
        this.maxRadarAltitude = 5000;
        this.instrument = _instrument;
        this.entCallback = this.setSelectedAlarmValue.bind(this);
        this.buttons = [
            new FA18_UFCD_ButtonContent("", "RALT", this.getRaltAlert.bind(this), this.setSelectedAlert.bind(this, 0), this.getSelectedAlertStatus.bind(this, 0)),
            (this.instrument.topRightFixedButton != null) ? this.instrument.topRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "BARO", this.getBaroAlert.bind(this), this.setSelectedAlert.bind(this, 1), this.getSelectedAlertStatus.bind(this, 1)),
            new FA18_UFCD_SymbolButton("ArrowUp", this.arrowUp.bind(this)),
            new FA18_UFCD_ButtonContent("", "RADAR", this.getRadarAlert.bind(this), this.setSelectedAlert.bind(this, 2), this.getSelectedAlertStatus.bind(this, 2)),
            new FA18_UFCD_SymbolButton("ArrowDown", this.arrowDown.bind(this)),
            new FA18_UFCD_ButtonContent("", this.getOnOffContent.bind(this), "", this.switchOnOff.bind(this), this.getOnOffStatus.bind(this)),
            new FA18_UFCD_ButtonContent("", "", ""),
            new FA18_UFCD_ButtonContent("", "CNI", "", this.instrument.switchToRootMenu.bind(this.instrument)),
            (this.instrument.bottomRightFixedButton != null) ? this.instrument.bottomRightFixedButton : new FA18_UFCD_ButtonContent("", "", ""),
        ];
        this.selectedAlert = 0;
        SimVar.SetSimVarValue("L:FA18_Alert_RAlt", "number", 0);
        SimVar.SetSimVarValue("L:FA18_Alert_Baro", "number", 5000);
        SimVar.SetSimVarValue("L:FA18_Alert_Radar", "number", 0);
        SimVar.SetSimVarValue("L:FA18_Alert_Active", "boolean", 0);
    }
    get isBelowRaltAlert() { return this._isBelowRaltAlert; }
    Update(_deltaTime) {
        super.Update(_deltaTime);
        if ((SimVar.GetSimVarValue("RADIO HEIGHT", "feet") < this.getRaltAlert() ||
            SimVar.GetSimVarValue("INDICATED ALTITUDE", "feet") < this.getBaroAlert() ||
            SimVar.GetSimVarValue("RADIO HEIGHT", "feet") < this.getRadarAlert()) &&
            SimVar.GetSimVarValue("L:FA18_Alert_Active", "boolean")) {
            SimVar.SetSimVarValue("L:FA18_Alert_Triggered", "boolean", true);
        }
        else {
            SimVar.SetSimVarValue("L:FA18_Alert_Triggered", "boolean", false);
        }
        if (!Simplane.getIsGrounded() && SimVar.GetSimVarValue("L:FA18_Alert_Active", "boolean")) {
            if (SimVar.GetSimVarValue("RADIO HEIGHT", "feet") < SimVar.GetSimVarValue("L:FA18_Alert_RAlt", "number"))
                this._isBelowRaltAlert = true;
        }
        else {
            this._isBelowRaltAlert = false;
        }
    }
    getAltitudeAlertValue() {
        return SimVar.GetSimVarValue("L:FA18_Alert_RAlt", "number").toString();
    }
    getAltitudeAlertStatus() {
        return SimVar.GetSimVarValue("L:FA18_Alert_Triggered", "boolean") ? "Flash" : "";
    }
    getSelectedAlertStatus(_alert) {
        return _alert == this.selectedAlert ? "Border" : "";
    }
    setSelectedAlert(_alert) {
        this.selectedAlert = _alert;
        this.setSelectedAlarmValue();
    }
    setSelectedAlarmValue() {
        if (this.instrument.gui.currentInput != "") {
            switch (this.selectedAlert) {
                case 0:
                    SimVar.SetSimVarValue("L:FA18_Alert_RAlt", "number", Math.min(Math.round(parseInt(this.instrument.gui.currentInput) / 100) * 100, this.maxRAltAltitude));
                    break;
                case 1:
                    SimVar.SetSimVarValue("L:FA18_Alert_Baro", "number", Math.min(Math.round(parseInt(this.instrument.gui.currentInput) / 100) * 100, this.maxBaroAltitude));
                    break;
                case 2:
                    SimVar.SetSimVarValue("L:FA18_Alert_Radar", "number", Math.min(Math.round(parseInt(this.instrument.gui.currentInput) / 100) * 100, this.maxRadarAltitude));
                    break;
            }
            this.instrument.gui.currentInput = "";
        }
    }
    getRaltAlert() {
        return SimVar.GetSimVarValue("L:FA18_Alert_RAlt", "number").toString();
    }
    getBaroAlert() {
        return SimVar.GetSimVarValue("L:FA18_Alert_Baro", "number").toString();
    }
    getRadarAlert() {
        return SimVar.GetSimVarValue("L:FA18_Alert_Radar", "number").toString();
    }
    getOnOffContent() {
        return SimVar.GetSimVarValue("L:FA18_Alert_Active", "boolean") ? "ON" : "OFF";
    }
    getOnOffStatus() {
        return SimVar.GetSimVarValue("L:FA18_Alert_Active", "boolean") ? "TopLeft" : "";
    }
    arrowUp() {
        switch (this.selectedAlert) {
            case 0:
                SimVar.SetSimVarValue("L:FA18_Alert_RAlt", "number", Math.min(SimVar.GetSimVarValue("L:FA18_Alert_RAlt", "number") + 100, this.maxRAltAltitude));
                break;
            case 1:
                SimVar.SetSimVarValue("L:FA18_Alert_Baro", "number", Math.min(SimVar.GetSimVarValue("L:FA18_Alert_Baro", "number") + 100, this.maxBaroAltitude));
                break;
            case 2:
                SimVar.SetSimVarValue("L:FA18_Alert_Radar", "number", Math.min(SimVar.GetSimVarValue("L:FA18_Alert_Radar", "number") + 100, this.maxRadarAltitude));
                break;
        }
    }
    arrowDown() {
        switch (this.selectedAlert) {
            case 0:
                SimVar.SetSimVarValue("L:FA18_Alert_RAlt", "number", Math.max(SimVar.GetSimVarValue("L:FA18_Alert_RAlt", "number") - 100, 0));
                break;
            case 1:
                SimVar.SetSimVarValue("L:FA18_Alert_Baro", "number", Math.max(SimVar.GetSimVarValue("L:FA18_Alert_Baro", "number") - 100, 0));
                break;
            case 2:
                SimVar.SetSimVarValue("L:FA18_Alert_Radar", "number", Math.max(SimVar.GetSimVarValue("L:FA18_Alert_Radar", "number") - 100, 0));
                break;
        }
    }
    switchOnOff() {
        return SimVar.SetSimVarValue("L:FA18_Alert_Active", "boolean", SimVar.GetSimVarValue("L:FA18_Alert_Active", "boolean") == 0 ? 1 : 0);
    }
}
class FA18_AP_Mode {
}
FA18_AP_Mode.NONE = 'NONE';
FA18_AP_Mode.HDG = 'HDG';
FA18_AP_Mode.HSEL = 'HSEL';
FA18_AP_Mode.FPAH = 'FPAH';
class FA18_AP_Manager {
    constructor() {
        this.wasStickMovedY = false;
        this.wasStickMovedX = false;
        this.isAutopilotActive = false;
        this.autopilotActivationTemporisationActive = false;
        this.defaultLatMode = FA18_AP_Mode.HDG;
        this.defaultLonMode = FA18_AP_Mode.FPAH;
        this.activeLatMode = FA18_AP_Mode.NONE;
        this.activeLonMode = FA18_AP_Mode.NONE;
        FA18_AP_Manager.DEBUG_INSTANCE = this;
        SimVar.SetSimVarValue("L:FA18_HEADING_SELECT_MODE", "number", 0);
    }
    Update(_deltaTime) {
        this.updateAutopilotActive();
        if (this.isAutopilotActive) {
            if (this.activeLatMode == FA18_AP_Mode.NONE) {
                this.engageMode(this.defaultLatMode);
            }
            if (this.activeLonMode == FA18_AP_Mode.NONE) {
                this.engageMode(this.defaultLonMode);
            }
            this.updateStickMoves();
            this.updateLateral();
            this.updateLongitudinal();
        }
        else {
            if (!this.autopilotActivationTemporisationActive) {
                if (this.activeLatMode != FA18_AP_Mode.NONE)
                    this.disengageMode(this.activeLatMode);
                if (this.activeLonMode != FA18_AP_Mode.NONE)
                    this.disengageMode(this.activeLonMode);
            }
        }
    }
    updateStickMoves() {
        this.wasStickMovedY = Math.abs(SimVar.GetSimVarValue("YOKE Y POSITION", "position")) >= 0.005;
        this.wasStickMovedX = Math.abs(SimVar.GetSimVarValue("YOKE X POSITION", "position")) >= 0.005;
    }
    updateAutopilotActive() {
        this.isAutopilotActive = !!SimVar.GetSimVarValue("AUTOPILOT MASTER", "Bool");
    }
    engageAutopilot() {
        if (!this.isAutopilotActive) {
            this.autopilotActivationTemporisationActive = true;
            SimVar.SetSimVarValue("K:AUTOPILOT_ON", "number", 0);
            this.engageMode(this.defaultLonMode, false);
            this.engageMode(this.defaultLatMode, false);
            setTimeout(() => { this.autopilotActivationTemporisationActive = false; }, 10);
        }
    }
    engageMode(_mode, forceEngageAutopilot = true) {
        if (_mode == FA18_AP_Mode.NONE)
            return;
        if (forceEngageAutopilot)
            this.engageAutopilot();
        this.setModeState(_mode, true);
    }
    disengageMode(_mode) {
        if (_mode == FA18_AP_Mode.NONE)
            return;
        if (this.isAutopilotActive) {
            if (_mode == this.defaultLatMode || _mode == this.defaultLonMode)
                return;
        }
        this.setModeState(_mode, false);
    }
    setModeState(_mode, state) {
        switch (_mode) {
            case FA18_AP_Mode.FPAH:
                (state) ? this.engageFpah() : this.disengageFpah();
                break;
            case FA18_AP_Mode.HDG:
                (state) ? this.engageHdg() : this.disengageHdg();
                break;
            case FA18_AP_Mode.HSEL:
                (state) ? this.engageHsel() : this.disengageHsel();
                break;
            default:
                break;
        }
    }
    getActiveLongitudinalMode() {
        return this.activeLonMode;
    }
    updateLongitudinal() {
        if (this.isAutopilotActive) {
            if (this.activeLonMode == FA18_AP_Mode.FPAH) {
                if (this.wasStickMovedY) {
                    this.flightPathAngleReference = Simplane.getFlightPathAngleY();
                }
                SimVar.SetSimVarValue("K:AP_VS_VAR_SET_ENGLISH", "number", Simplane.convertFPAToVS(this.flightPathAngleReference));
            }
        }
    }
    engageFpah() {
        if (this.activeLonMode != FA18_AP_Mode.FPAH) {
            this.disengageMode(this.activeLonMode);
            this.flightPathAngleReference = Simplane.getFlightPathAngleY();
            SimVar.SetSimVarValue("K:AP_PANEL_VS_ON", "number", 1);
            SimVar.SetSimVarValue("K:AP_VS_VAR_SET_ENGLISH", "number", Simplane.convertFPAToVS(this.flightPathAngleReference));
            this.activeLonMode = FA18_AP_Mode.FPAH;
        }
    }
    disengageFpah() {
        if (this.activeLonMode == FA18_AP_Mode.FPAH) {
            SimVar.SetSimVarValue("K:AP_PANEL_VS_OFF", "number", 1);
            this.activeLonMode = FA18_AP_Mode.NONE;
        }
    }
    getActiveLateralMode() {
        return this.activeLatMode;
    }
    updateLateral() {
        if (this.isAutopilotActive) {
            switch (this.activeLatMode) {
                case FA18_AP_Mode.HDG:
                    if (this.wasStickMovedX) {
                        this.setHdgTrkModeSimvarWithRoll();
                        SimVar.SetSimVarValue("K:HEADING_BUG_SET", "degree", SimVar.GetSimVarValue("PLANE HEADING DEGREES MAGNETIC", "degree"));
                    }
                    break;
                case FA18_AP_Mode.HSEL:
                    break;
            }
        }
    }
    setHdgTrkModeSimvarWithRoll(bypassRoll = false) {
        let planeBank = Simplane.getBank();
        if (!bypassRoll && Math.abs(planeBank) >= 5) {
            SimVar.SetSimVarValue("K:AP_BANK_HOLD_OFF", "number", 0);
            SimVar.SetSimVarValue("K:AP_BANK_HOLD_ON", "number", 0);
        }
        else {
            SimVar.SetSimVarValue("K:AP_PANEL_HEADING_ON", "number", 0);
        }
    }
    engageHdg(bypassRoll = false) {
        if (this.activeLatMode != FA18_AP_Mode.HDG) {
            this.disengageMode(this.activeLatMode);
            this.setHdgTrkModeSimvarWithRoll(bypassRoll);
            SimVar.SetSimVarValue("K:HEADING_BUG_SET", "degree", SimVar.GetSimVarValue("PLANE HEADING DEGREES MAGNETIC", "degree"));
            this.activeLatMode = FA18_AP_Mode.HDG;
        }
    }
    disengageHdg() {
        if (this.activeLatMode == FA18_AP_Mode.HDG) {
            SimVar.SetSimVarValue("K:AP_PANEL_HEADING_OFF", "number", 0);
            this.activeLatMode = FA18_AP_Mode.NONE;
        }
    }
    engageHsel() {
        if (this.activeLatMode != FA18_AP_Mode.HSEL) {
            this.disengageMode(this.activeLatMode);
            SimVar.SetSimVarValue("K:AP_PANEL_HEADING_ON", "number", 0);
            SimVar.SetSimVarValue("K:HEADING_BUG_SET", "degree", SimVar.GetSimVarValue("L:XMLVAR_AS04F_HSI_HDG_TK", "degree"));
            this.activeLatMode = FA18_AP_Mode.HSEL;
        }
    }
    disengageHsel() {
        if (this.activeLatMode == FA18_AP_Mode.HSEL) {
            SimVar.SetSimVarValue("K:AP_PANEL_HEADING_OFF", "number", 0);
            this.activeLatMode = FA18_AP_Mode.NONE;
        }
    }
    synchronizeHeadingTrackValue() {
        if (this.activeLatMode == FA18_AP_Mode.HSEL) {
            SimVar.SetSimVarValue("K:HEADING_BUG_SET", "degree", SimVar.GetSimVarValue("L:XMLVAR_AS04F_HSI_HDG_TK", "degree"));
        }
    }
}
//# sourceMappingURL=FA18_UFCD_Base.js.map