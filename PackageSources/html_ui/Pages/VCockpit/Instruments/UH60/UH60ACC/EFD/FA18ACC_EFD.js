class FA18ACC_EFD extends BaseInstrument {
    get templateID() { return "AS04F_ACC_EFD"; }
    get IsGlassCockpit() { return true; }
    Init() {
        super.Init();
        this.fuelSystemDisplay = new FA18ACC_EFD_FuelSystemDisplay();
        this.fuelSystemDisplay.init(this);
        this.engineDisplay = new FA18_EFD_EngineDisplay();
        this.engineDisplay.init(this);
        this.nozzleDisplay = new FA18_EFD_NozzleDisplay();
        this.nozzleDisplay.init(this);
    }
    Update() {
        super.Update();
        if (this.fuelSystemDisplay)
            this.fuelSystemDisplay.Update(this.deltaTime);
        if (this.engineDisplay)
            this.engineDisplay.Update(this.deltaTime);
        if (this.nozzleDisplay)
            this.nozzleDisplay.Update(this.deltaTime);
    }
    onInteractionEvent(_args) {
        if (this.fuelSystemDisplay)
            this.fuelSystemDisplay.onEvent(_args[0]);
    }
}
class FA18ACC_EFD_FuelSystemDisplay extends FA18_EFD_FuelSystemDisplay {
}
class FA18ACC_EFD_FuelSystemExternal extends TemplateElement {
    get templateID() { return "AS04F_ACC_EFD_FuelSystemExternal"; }
    init(_instrument, _fuelSystem) {
        this.instrument = _instrument;
        this.fuelSystem = _fuelSystem;
        this.externalLeftMidboardTank = new FA18_EFD_FuelDisplay(this.instrument, "ExtLeftMidboardFuel", 36);
        this.externalLeftInboardTank = new FA18_EFD_FuelDisplay(this.instrument, "ExtLeftInboardFuel", 36);
        this.externalCenterTank = new FA18_EFD_FuelDisplay(this.instrument, "ExtCenterFuel", 36);
        this.externalRightInboardTank = new FA18_EFD_FuelDisplay(this.instrument, "ExtRightInboardFuel", 36);
        this.externalRightMidboardTank = new FA18_EFD_FuelDisplay(this.instrument, "ExtRightMidboardFuel", 36);
        this.externalLeftMidboardTankText = this.instrument.getChildById("ExtLeftMidboardFuelText");
        this.externalLeftInboardTankText = this.instrument.getChildById("ExtLeftInboardFuelText");
        this.externalCenterTankText = this.instrument.getChildById("ExtCenterFuelText");
        this.externalRightInboardTankText = this.instrument.getChildById("ExtRightInboardFuelText");
        this.externalRightMidboardTankText = this.instrument.getChildById("ExtRightMidboardFuelText");
        this.externalLeftMidboardTankCapacity = 0;
        this.externalLeftInboardTankCapacity = 0;
        this.externalCenterTankCapacity = 0;
        this.externalRightInboardTankCapacity = 0;
        this.externalRightMidboardTankCapacity = 0;
    }
    updateFuelQuantity() {
        this.externalLeftMidboardTankQuantity = 0;
        this.externalLeftInboardTankQuantity = 0;
        this.externalCenterTankQuantity = 0;
        this.externalRightInboardTankQuantity = 0;
        this.externalRightMidboardTankQuantity = 0;
    }
    get externalFuelQuantity() {
        return (this.externalLeftMidboardTankQuantity + this.externalLeftInboardTankQuantity + this.externalCenterTankQuantity + this.externalRightInboardTankQuantity + this.externalRightMidboardTankQuantity);
    }
    Update(_deltaTime) {
        diffAndSetText(this.externalLeftMidboardTankText, (this.externalLeftMidboardTankQuantity * this.fuelSystem.fuelWeightPerGallon / 1000).toFixed(1));
        diffAndSetText(this.externalLeftInboardTankText, (this.externalLeftInboardTankQuantity * this.fuelSystem.fuelWeightPerGallon / 1000).toFixed(1));
        diffAndSetText(this.externalCenterTankText, (this.externalCenterTankQuantity * this.fuelSystem.fuelWeightPerGallon / 1000).toFixed(1));
        diffAndSetText(this.externalRightInboardTankText, (this.externalRightInboardTankQuantity * this.fuelSystem.fuelWeightPerGallon / 1000).toFixed(1));
        diffAndSetText(this.externalRightMidboardTankText, (this.externalRightMidboardTankQuantity * this.fuelSystem.fuelWeightPerGallon / 1000).toFixed(1));
        this.externalLeftMidboardTank.UpdateValue(this.fuelSystem.calculateLevel(this.externalLeftMidboardTankQuantity, this.externalLeftMidboardTankCapacity));
        this.externalLeftInboardTank.UpdateValue(this.fuelSystem.calculateLevel(this.externalLeftInboardTankQuantity, this.externalLeftInboardTankCapacity));
        this.externalCenterTank.UpdateValue(this.fuelSystem.calculateLevel(this.externalCenterTankQuantity, this.externalCenterTankCapacity));
        this.externalRightInboardTank.UpdateValue(this.fuelSystem.calculateLevel(this.externalRightInboardTankQuantity, this.externalRightInboardTankCapacity));
        this.externalRightMidboardTank.UpdateValue(this.fuelSystem.calculateLevel(this.externalRightMidboardTankQuantity, this.externalRightMidboardTankCapacity));
    }
}
customElements.define("fa18acc-efd-fuel-system", FA18ACC_EFD_FuelSystemDisplay);
customElements.define("fa18acc-efd-fuel-system-external", FA18ACC_EFD_FuelSystemExternal);
registerInstrument("fa18acc-efd-element", FA18ACC_EFD);
//# sourceMappingURL=FA18ACC_EFD.js.map