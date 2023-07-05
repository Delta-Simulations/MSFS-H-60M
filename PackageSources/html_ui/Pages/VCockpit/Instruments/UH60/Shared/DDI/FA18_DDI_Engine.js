class FA18_DDI_Engine extends FA18_DDI_Page {
    constructor() {
        super(...arguments);
        this._engineStatusElements = [];
        this._engineInletTempElements = [];
        this._engineN1Elements = [];
        this._engineN2Elements = [];
        this._engineEGTElements = [];
        this._engineFFElements = [];
        this._engineNozPosElements = [];
        this._engineOilPressElements = [];
        this._engineThrustElements = [];
        this._engineFanVibElements = [];
        this._engineCoreVibElements = [];
        this._engineEPRElements = [];
        this._engineCDPElements = [];
        this._engineCPRElements = [];
        this._engineTHAElements = [];
        this._engineAmadOilTempElements = [];
        this._engineEngOilTempElements = [];
        this._engineFuelInletTempElements = [];
        this._engineFuelNozTempElements = [];
        this._engineFeedTankTempElements = [];
    }
    get templateID() { return "FA18_DDI_Engine"; }
    show() {
        super.show();
        let lr = ["left", "right"];
        for (let i = 0; i < 2; i++) {
            let side = lr[i];
            this._engineStatusElements[i] = document.body.querySelector(".engine-eng-status-value-" + side);
            this._engineInletTempElements[i] = document.body.querySelector(".engine-inlet-temp-value-" + side);
            this._engineN1Elements[i] = document.body.querySelector(".engine-n1-value-" + side);
            this._engineN2Elements[i] = document.body.querySelector(".engine-n2-value-" + side);
            this._engineEGTElements[i] = document.body.querySelector(".engine-egt-value-" + side);
            this._engineFFElements[i] = document.body.querySelector(".engine-ff-value-" + side);
            this._engineNozPosElements[i] = document.body.querySelector(".engine-noz-pos-value-" + side);
            this._engineOilPressElements[i] = document.body.querySelector(".engine-oil-press-value-" + side);
            this._engineThrustElements[i] = document.body.querySelector(".engine-thrust-value-" + side);
            this._engineFanVibElements[i] = document.body.querySelector(".engine-fan-vib-value-" + side);
            this._engineCoreVibElements[i] = document.body.querySelector(".engine-core-vib-value-" + side);
            this._engineEPRElements[i] = document.body.querySelector(".engine-epr-value-" + side);
            this._engineCDPElements[i] = document.body.querySelector(".engine-cdp-value-" + side);
            this._engineCPRElements[i] = document.body.querySelector(".engine-cpr-value-" + side);
            this._engineTHAElements[i] = document.body.querySelector(".engine-tha-value-" + side);
            this._engineAmadOilTempElements[i] = document.body.querySelector(".engine-amad-oil-temp-value-" + side);
            this._engineEngOilTempElements[i] = document.body.querySelector(".engine-eng-oil-temp-value-" + side);
            this._engineFuelInletTempElements[i] = document.body.querySelector(".engine-fuel-inlet-temp-value-" + side);
            this._engineFuelNozTempElements[i] = document.body.querySelector(".engine-fuel-noz-temp-value-" + side);
            this._engineFeedTankTempElements[i] = document.body.querySelector(".engine-feed-tank-temp-value-" + side);
        }
        for (let i of [5, 6, 7, 9, 10, 15, 16]) {
            this.ddi.setPageButton(i, FA18_DDI_Page_Type.NotImplemented);
        }
        this.ddi.setPageButton(18, FA18_DDI_Page_Type.MenuTactical);
    }
    update(deltaTime) {
        super.update(deltaTime);
        for (let i = 0; i < 2; i++) {
            let n = i + 1;
            diffAndSetText(this._engineStatusElements[i], SimVar.GetSimVarValue("GENERAL ENG COMBUSTION:" + n, "number").toFixed(0));
            diffAndSetText(this._engineInletTempElements[i], SimVar.GetSimVarValue("TURB ENG INLET TEMPERATURE:" + n, "celsius").toFixed(1));
            diffAndSetText(this._engineN1Elements[i], SimVar.GetSimVarValue("TURB ENG N1:" + n, "percent").toFixed(1));
            diffAndSetText(this._engineN2Elements[i], SimVar.GetSimVarValue("TURB ENG N2:" + n, "percent").toFixed(1));
            diffAndSetText(this._engineEGTElements[i], SimVar.GetSimVarValue("GENERAL ENG EXHAUST GAS TEMPERATURE:" + n, "celsius").toFixed(0));
            diffAndSetText(this._engineFFElements[i], SimVar.GetSimVarValue("ENG FUEL FLOW GPH:" + n, "pounds per hour").toFixed(1));
            diffAndSetText(this._engineNozPosElements[i], SimVar.GetSimVarValue("TURB ENG PRIMARY NOZZLE PERCENT:" + n, "percent").toFixed(0));
            diffAndSetText(this._engineOilPressElements[i], SimVar.GetSimVarValue("ENG OIL PRESSURE:" + n, "psi").toFixed(1));
            diffAndSetText(this._engineThrustElements[i], SimVar.GetSimVarValue("TURB ENG JET THRUST:" + n, "percent").toFixed(0));
            diffAndSetText(this._engineFanVibElements[i], SimVar.GetSimVarValue("ENG VIBRATION:" + n, "number").toFixed(1));
            diffAndSetText(this._engineEPRElements[i], SimVar.GetSimVarValue("TURB ENG PRESSURE RATIO:" + n, "number").toFixed(2));
            diffAndSetText(this._engineTHAElements[i], SimVar.GetSimVarValue("GENERAL ENG THROTTLE LEVER POSITION:" + n, "percent").toFixed(1));
            diffAndSetText(this._engineEngOilTempElements[i], SimVar.GetSimVarValue("GENERAL ENG OIL TEMPERATURE:" + n, "celsius").toFixed(0));
        }
    }
}
customElements.define("fa18-ddi-engine", FA18_DDI_Engine);
//# sourceMappingURL=FA18_DDI_Engine.js.map