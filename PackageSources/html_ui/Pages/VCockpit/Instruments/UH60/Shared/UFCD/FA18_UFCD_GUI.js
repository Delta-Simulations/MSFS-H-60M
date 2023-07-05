class FA18_UFCD_GUI extends TemplateElement {
    constructor() {
        super(...arguments);
        this.clrButtonTimer = Infinity;
        this.inactivityTimerResetTime = Infinity;
        this.inactivityTimer = Infinity;
    }
    get templateID() { return "AS04F_UFCD_GUI"; }
    static alwaysBordered() {
        return "Border";
    }
    static alwaysTopLeft() {
        return "TopLeft";
    }
    static alwaysBottomLeft() {
        return "BottomLeft";
    }
    init(_instrument) {
        this.instrument = _instrument;
        this.scratchpad_Message = this.instrument.getChildById("Scratchpad_Left");
        this.scratchpad_Value = this.instrument.getChildById("Scratchpad_Right");
        this.keyboard = this.instrument.getChildById("CNI_Keypad");
        this.currentInput = "";
        this.rightButtonElems = [];
        for (let i = 1; i <= 10; i++) {
            let button = new FA18_UFCD_ButtonElements();
            button.button = this.instrument.getChildById("Right" + i);
            button.topLine = button.button.getElementsByClassName("topLine")[0];
            button.bottomLine = button.button.getElementsByClassName("bottomLine")[0];
            button.middleLine = button.button.getElementsByClassName("middleLine")[0];
            button.cornerHighlight = button.button.getElementsByClassName("cornerHighlight")[0];
            button.topSelectedStatus = button.button.getElementsByClassName("topSelectedStatus")[0];
            this.makeButton(button.button, this.rightButtonPress.bind(this, i - 1));
            this.rightButtonElems.push(button);
        }
        for (let i = 0; i <= 9; i++) {
            let button = this.instrument.getChildById("CNI_" + i);
            this.makeButton(button, this.numButtonPress.bind(this, i));
        }
        this.makeButton(this.instrument.getChildById("CNI_N"), this.symbolButtonPress.bind(this, "N"));
        this.makeButton(this.instrument.getChildById("CNI_S"), this.symbolButtonPress.bind(this, "S"));
        this.makeButton(this.instrument.getChildById("CNI_E"), this.symbolButtonPress.bind(this, "E"));
        this.makeButton(this.instrument.getChildById("CNI_W"), this.symbolButtonPress.bind(this, "W"));
        let clrButtonElement = this.instrument.getChildById("CNI_CLR");
        this.makeButton(clrButtonElement, this.clrButtonPress.bind(this));
        clrButtonElement.addEventListener("mousedown", this.clrButtonMouseDown.bind(this));
        this.makeButton(this.instrument.getChildById("CNI_ENT"), this.entButtonPress.bind(this));
    }
    displayError() {
        this.currentInput = "ERROR";
        this.errorDisplayed = true;
    }
    setKeyboard(_keyboard) {
        diffAndSetAttribute(this.keyboard, "display", _keyboard);
    }
    clrButtonMouseDown() {
        this.clrButtonTimer = 1000;
    }
    clrButtonPress() {
        if (isFinite(this.clrButtonTimer)) {
            this.clrButtonTimer = Infinity;
        }
        if (this.currentInput.length > 0) {
            this.currentInput = this.currentInput.slice(0, -1);
        }
        if (this.rightButtonsCurrentContent.clrCallback) {
            this.rightButtonsCurrentContent.clrCallback();
        }
    }
    entButtonPress() {
        if (this.rightButtonsCurrentContent.entCallback) {
            this.rightButtonsCurrentContent.entCallback(this.currentInput);
        }
    }
    numButtonPress(_digit) {
        if (this.currentInput.length < (17 - this.scratchpad_Message.textContent.length - 1)) {
            this.currentInput = this.currentInput + _digit;
        }
    }
    symbolButtonPress(_symbol) {
        this.currentInput = _symbol;
    }
    rightButtonPress(_index) {
        if (this.rightButtonsCurrentContent.buttons[_index].onClickCB != null) {
            this.rightButtonsCurrentContent.buttons[_index].onClickCB();
        }
    }
    makeButton(_button, _callback) {
        if (!_button) {
            console.warn("Trying to add an interaction on null element, ignoring");
            return;
        }
        _button.addEventListener("mouseup", this.onButtonPressed.bind(this, _callback));
    }
    resetInactivityTimer() {
        if (this.rightButtonsCurrentContent.inactivityCallback) {
            this.inactivityTimer = this.inactivityTimerResetTime;
        }
        else {
            this.inactivityTimer = Infinity;
        }
    }
    onButtonPressed(_callback) {
        if (this.errorDisplayed) {
            this.errorDisplayed = false;
            this.currentInput = "";
        }
        this.resetInactivityTimer();
        _callback();
        this.instrument.playInstrumentSound("tone_NavSystemTouch_touch");
    }
    switchToButtonGroup(buttonGroup) {
        for (let i = 0; i < Math.min(buttonGroup.buttons.length, this.rightButtonElems.length); i++) {
            let top = buttonGroup.buttons[i].topLine;
            let mid = buttonGroup.buttons[i].middleLine;
            let bot = buttonGroup.buttons[i].bottomLine;
            diffAndSetText(this.rightButtonElems[i].topLine, typeof top == "string" ? top : top());
            diffAndSetText(this.rightButtonElems[i].middleLine, typeof mid == "string" ? mid : mid());
            diffAndSetText(this.rightButtonElems[i].bottomLine, typeof bot == "string" ? bot : bot());
            diffAndSetAttribute(this.rightButtonElems[i].button, "SelectionStatus", buttonGroup.buttons[i].selectionStatusCB ? buttonGroup.buttons[i].selectionStatusCB() : "");
            diffAndSetAttribute(this.rightButtonElems[i].topSelectedStatus, "state", buttonGroup.buttons[i].topSelectedStatusCB && buttonGroup.buttons[i].topSelectedStatusCB() ? "Visible" : "Hidden");
            diffAndSetAttribute(this.rightButtonElems[i].button, "interactive", buttonGroup.buttons[i].isInteractive() ? "On" : "Off");
            buttonGroup.buttons[i].DisplayButton(this.rightButtonElems[i]);
        }
        this.setKeyboard("");
        let leftText = buttonGroup.scratchpadLeftText;
        diffAndSetText(this.scratchpad_Message, leftText ? typeof leftText == "string" ? leftText : leftText() : "");
        this.rightButtonsCurrentContent = buttonGroup;
        this.rightButtonsCurrentContent.OnEnter();
        this.resetInactivityTimer();
    }
    Update(_deltaTime) {
        diffAndSetText(this.scratchpad_Value, this.rightButtonsCurrentContent.FormatInput(this.currentInput));
        if (isFinite(this.clrButtonTimer) && this.clrButtonTimer > 0) {
            this.clrButtonTimer -= _deltaTime;
        }
        if (isFinite(this.clrButtonTimer) && this.clrButtonTimer <= 0) {
            this.currentInput = "";
            this.clrButtonTimer = Infinity;
        }
        for (let i = 0; i < Math.min(this.rightButtonsCurrentContent.buttons.length, this.rightButtonElems.length); i++) {
            let top = this.rightButtonsCurrentContent.buttons[i].topLine;
            let mid = this.rightButtonsCurrentContent.buttons[i].middleLine;
            let bot = this.rightButtonsCurrentContent.buttons[i].bottomLine;
            if (typeof top != "string")
                diffAndSetText(this.rightButtonElems[i].topLine, top());
            if (typeof mid != "string")
                diffAndSetText(this.rightButtonElems[i].middleLine, mid());
            if (typeof bot != "string")
                diffAndSetText(this.rightButtonElems[i].bottomLine, bot());
            if (this.rightButtonsCurrentContent.buttons[i].selectionStatusCB)
                diffAndSetAttribute(this.rightButtonElems[i].button, "SelectionStatus", this.rightButtonsCurrentContent.buttons[i].selectionStatusCB());
            if (this.rightButtonsCurrentContent.buttons[i].topSelectedStatusCB)
                diffAndSetAttribute(this.rightButtonElems[i].topSelectedStatus, "state", this.rightButtonsCurrentContent.buttons[i].topSelectedStatusCB() ? "Visible" : "Hidden");
        }
        let leftText = this.rightButtonsCurrentContent.scratchpadLeftText;
        if (leftText && typeof leftText != "string") {
            diffAndSetText(this.scratchpad_Message, leftText());
        }
        if (this.rightButtonsCurrentContent) {
            this.rightButtonsCurrentContent.Update(_deltaTime);
            if (this.rightButtonsCurrentContent.inactivityCallback && isFinite(this.inactivityTimer)) {
                if (this.inactivityTimer > 0) {
                    this.inactivityTimer -= _deltaTime;
                }
                else {
                    this.inactivityTimer = Infinity;
                    this.rightButtonsCurrentContent.inactivityCallback();
                }
            }
        }
    }
}
customElements.define("fa18-ufcd-gui", FA18_UFCD_GUI);
//# sourceMappingURL=FA18_UFCD_GUI.js.map