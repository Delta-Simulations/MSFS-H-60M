class FA18_EFD_FuelSystemDisplay extends TemplateElement {
    constructor() {
        super(...arguments);
        this.displayMode = 0;
        this.bingoUnit = 1;
    }
    get templateID() { return "AS04F_EFD_FuelSystem"; }
    init(_instrument) {
        this.instrument = _instrument;
        this.totalFuel = this.instrument.getChildById("TotalFuel");
        this.internalFuelText = this.instrument.getChildById("INTValue");
        this.internalFuelDisplay = this.instrument.getChildById("InternalFuelDisplay");
        this.internalFuelBingo = this.instrument.getChildById("InternalFuelBingo");
        this.internalFuelBingoLine = this.instrument.getChildById("InternalFuelBingoLine");
        this.bingoText = this.instrument.getChildById("BingoValue");
        this.internalTank1 = new FA18_EFD_FuelDisplay(this.instrument, "IntTank1Fuel", 55);
        this.internalTank2 = new FA18_EFD_FuelDisplay(this.instrument, "IntTank2Fuel", 36);
        this.internalTank3 = new FA18_EFD_FuelDisplay(this.instrument, "IntTank3Fuel", 36);
        this.internalTank4 = new FA18_EFD_FuelDisplay(this.instrument, "IntTank4Fuel", 55);
        this.wingTankL = new FA18_EFD_FuelDisplay(this.instrument, "WingLeftFuel", 36);
        this.wingTankR = new FA18_EFD_FuelDisplay(this.instrument, "WingRightFuel", 36);
        this.tank2Value = this.instrument.getChildById("Tank2Value");
        this.tank3Value = this.instrument.getChildById("Tank3Value");
        this.internalTank1Capacity = SimVar.GetSimVarValue("FUELSYSTEM TANK CAPACITY:1", "Gallons");
        this.internalTank2Capacity = SimVar.GetSimVarValue("FUELSYSTEM TANK CAPACITY:2", "Gallons");
        this.internalTank3Capacity = SimVar.GetSimVarValue("FUELSYSTEM TANK CAPACITY:3", "Gallons");
        this.internalTank4Capacity = SimVar.GetSimVarValue("FUELSYSTEM TANK CAPACITY:4", "Gallons");
        this.wingTankLCapacity = SimVar.GetSimVarValue("FUELSYSTEM TANK CAPACITY:5", "Gallons");
        this.wingTankRCapacity = SimVar.GetSimVarValue("FUELSYSTEM TANK CAPACITY:6", "Gallons");
        this.internalCapacity = this.internalTank1Capacity + this.internalTank2Capacity + this.internalTank3Capacity + this.internalTank4Capacity + this.wingTankLCapacity + this.wingTankRCapacity;
        this.fuelWeightPerGallon = SimVar.GetSimVarValue("FUEL WEIGHT PER GALLON", "Pounds");
        this.bingo = SimVar.GetSimVarValue("L:FA18_Fuel_Bingo", "number");
        if (this.bingo == 0) {
            this.bingo = 4.5;
            SimVar.SetSimVarValue("L:FA18_Fuel_Bingo", "number", this.bingo);
        }
        this.displayModeElement = this.instrument.getChildById("FuelSystemDisplayMode");
        SimVar.SetSimVarValue("L:FA18_EFD_Page", "number", this.displayMode);
    }
    updateFuelQuantity() {
        this.internalTank1Quantity = SimVar.GetSimVarValue("FUELSYSTEM TANK TOTAL QUANTITY:1", "Gallons");
        this.internalTank2Quantity = SimVar.GetSimVarValue("FUELSYSTEM TANK TOTAL QUANTITY:2", "Gallons");
        this.internalTank3Quantity = SimVar.GetSimVarValue("FUELSYSTEM TANK TOTAL QUANTITY:3", "Gallons");
        this.internalTank4Quantity = SimVar.GetSimVarValue("FUELSYSTEM TANK TOTAL QUANTITY:4", "Gallons");
        this.wingTankLQuantity = SimVar.GetSimVarValue("FUELSYSTEM TANK TOTAL QUANTITY:5", "Gallons");
        this.wingTankRQuantity = SimVar.GetSimVarValue("FUELSYSTEM TANK TOTAL QUANTITY:6", "Gallons");
        this.internalQuantity = this.internalTank1Quantity + this.internalTank2Quantity + this.internalTank3Quantity + this.internalTank4Quantity + this.wingTankLQuantity + this.wingTankRQuantity;
        this.totalQuantity = this.internalQuantity;
    }
    calculateLevel(quantity, capacity) {
        if (capacity != 0)
            return quantity / capacity;
        return 0;
    }
    Update(_deltaTime) {
        this.updateFuelQuantity();
        diffAndSetText(this.totalFuel, (this.totalQuantity * this.fuelWeightPerGallon / 1000).toFixed(1));
        let internalPercent = this.internalQuantity / this.internalCapacity;
        diffAndSetText(this.internalFuelText, (this.internalQuantity * this.fuelWeightPerGallon / 1000).toFixed(1));
        diffAndSetAttribute(this.internalFuelDisplay, "y", (60 - (internalPercent * 60)) + '');
        diffAndSetAttribute(this.internalFuelDisplay, "height", (internalPercent * 60) + '');
        let bingoPercent = ((this.bingo * 1000 / this.fuelWeightPerGallon) / this.internalCapacity);
        diffAndSetText(this.bingoText, this.bingo.toFixed(1));
        diffAndSetAttribute(this.internalFuelBingo, "transform", "translate(0, -" + (bingoPercent * 60) + ")");
        diffAndSetAttribute(this.internalFuelBingoLine, "fill", ((bingoPercent < internalPercent) ? "#020902" : "#50A050"));
        this.internalTank1.UpdateValue(this.calculateLevel(this.internalTank1Quantity, this.internalTank1Capacity));
        this.internalTank2.UpdateValue(this.calculateLevel(this.internalTank2Quantity, this.internalTank2Capacity));
        this.internalTank3.UpdateValue(this.calculateLevel(this.internalTank3Quantity, this.internalTank3Capacity));
        this.internalTank4.UpdateValue(this.calculateLevel(this.internalTank4Quantity, this.internalTank4Capacity));
        this.wingTankL.UpdateValue(this.calculateLevel(this.wingTankLQuantity, this.wingTankLCapacity));
        this.wingTankR.UpdateValue(this.calculateLevel(this.wingTankRQuantity, this.wingTankRCapacity));
        diffAndSetText(this.tank2Value, (this.internalTank2Quantity * this.fuelWeightPerGallon / 1000).toFixed(1));
        diffAndSetText(this.tank3Value, (this.internalTank3Quantity * this.fuelWeightPerGallon / 1000).toFixed(1));
    }
    onEvent(_event) {
        switch (_event) {
            case "AS04F_EFD_KNOB_BINGO_INC":
                this.bingo += 0.1 * this.bingoUnit;
                let maxBingo = this.internalCapacity * this.fuelWeightPerGallon / 1000;
                if (this.bingo > maxBingo) {
                    this.bingo = maxBingo;
                }
                SimVar.SetSimVarValue("L:FA18_Fuel_Bingo", "number", this.bingo);
                break;
            case "AS04F_EFD_KNOB_BINGO_DEC":
                this.bingo -= 0.1 * this.bingoUnit;
                if (this.bingo < 0) {
                    this.bingo = 0;
                }
                SimVar.SetSimVarValue("L:FA18_Fuel_Bingo", "number", this.bingo);
                break;
            case "AS04F_EFD_PUSH_MODE":
                this.displayMode = (this.displayMode + 1) % 2;
                diffAndSetAttribute(this.displayModeElement, "state", this.displayMode == 1 ? "Internal" : "TopLevel");
                SimVar.SetSimVarValue("L:FA18_EFD_Page", "number", this.displayMode);
                break;
            case "AS04F_EFD_KNOB_BINGO_PUSHPULL":
                this.bingoUnit = (SimVar.GetSimVarValue("L:EFD_Knob_Bingo_Pulled", "number") == 1) ? 10 : 1;
                break;
        }
    }
}
class FA18_EFD_FuelDisplay {
    constructor(_instrument, _baseId, _height) {
        this.base = _instrument.getChildById(_baseId);
        this.display = this.base.getElementsByClassName("Display")[0];
        this.height = _height;
    }
    UpdateValue(_percent) {
        let newHeight = _percent * this.height;
        diffAndSetAttribute(this.display, "y", (this.height - newHeight) + '');
        diffAndSetAttribute(this.display, "height", newHeight + '');
    }
}
class FA18_EFD_EngineDisplay extends TemplateElement {
    get templateID() { return "AS04F_EFD_Engine"; }
    init(_instrument) {
        this.instrument = _instrument;
        this.rpm = this.instrument.getChildById("RPM");
        this.rpm_Left = this.rpm.getElementsByClassName("valueLeft")[0];
        this.rpm_Right = this.rpm.getElementsByClassName("valueRight")[0];
        this.temp = this.instrument.getChildById("Temp");
        this.temp_Left = this.temp.getElementsByClassName("valueLeft")[0];
        this.temp_Right = this.temp.getElementsByClassName("valueRight")[0];
        this.fuelFlow = this.instrument.getChildById("FF");
        this.fuelFlow_Left = this.fuelFlow.getElementsByClassName("valueLeft")[0];
        this.fuelFlow_Right = this.fuelFlow.getElementsByClassName("valueRight")[0];
        this.oilPressure = this.instrument.getChildById("Oil");
        this.oilPressure_Left = this.oilPressure.getElementsByClassName("valueLeft")[0];
        this.oilPressure_Right = this.oilPressure.getElementsByClassName("valueRight")[0];
    }
    Update(_deltaTime) {
        let N2_1 = SimVar.GetSimVarValue("ENG N2 RPM:1", "percent");
        let N2_2 = SimVar.GetSimVarValue("ENG N2 RPM:2", "percent");
        diffAndSetText(this.rpm_Left, N2_1.toFixed(0));
        diffAndSetAttribute(this.rpm_Left, "state", N2_1 >= 102 ? "Reverse" : "");
        diffAndSetText(this.rpm_Right, N2_2.toFixed(0));
        diffAndSetAttribute(this.rpm_Right, "state", N2_2 >= 102 ? "Reverse" : "");
        let EGT_1 = SimVar.GetSimVarValue("GENERAL ENG EXHAUST GAS TEMPERATURE:1", "celsius");
        let EGT_2 = SimVar.GetSimVarValue("GENERAL ENG EXHAUST GAS TEMPERATURE:2", "celsius");
        diffAndSetText(this.temp_Left, EGT_1 >= 1100 ? "9999" : EGT_1.toFixed(0));
        diffAndSetAttribute(this.temp_Left, "state", EGT_1 >= 1100 ? "Reverse" : "");
        diffAndSetText(this.temp_Right, EGT_2 >= 1100 ? "9999" : EGT_2.toFixed(0));
        diffAndSetAttribute(this.temp_Right, "state", EGT_2 >= 1100 ? "Reverse" : "");
        let FF_1 = SimVar.GetSimVarValue("ENG FUEL FLOW PPH:1", "Pounds per hour");
        let FF_2 = SimVar.GetSimVarValue("ENG FUEL FLOW PPH:2", "Pounds per hour");
        diffAndSetText(this.fuelFlow_Left, N2_1 <= 10 ? "999" : (FF_1 / 100).toFixed(0));
        diffAndSetAttribute(this.fuelFlow_Left, "state", N2_1 <= 10 ? "Reverse" : "");
        diffAndSetText(this.fuelFlow_Right, N2_2 <= 10 ? "999" : (FF_2 / 100).toFixed(0));
        diffAndSetAttribute(this.fuelFlow_Right, "state", N2_2 <= 10 ? "Reverse" : "");
        let OilPress_1 = SimVar.GetSimVarValue("ENG OIL PRESSURE:1", "psi");
        let OilPress_2 = SimVar.GetSimVarValue("ENG OIL PRESSURE:2", "psi");
        diffAndSetText(this.oilPressure_Left, OilPress_1.toFixed(0));
        diffAndSetText(this.oilPressure_Right, OilPress_2.toFixed(0));
    }
}
class FA18_EFD_NozzleDisplay extends TemplateElement {
    constructor() {
        super(...arguments);
        this.minRadius = 5;
        this.maxRadius = 45;
    }
    get templateID() { return "AS04F_EFD_Nozzle"; }
    init(_instrument) {
        this.instrument = _instrument;
        this.nozLeftDisplay = this.instrument.getChildById("NOZLeftDisplayCircle");
        this.nozRightDisplay = this.instrument.getChildById("NOZRightDisplayCircle");
        this.nozLeftText = this.instrument.getChildById("NOZLeftValue");
        this.nozRightText = this.instrument.getChildById("NOZRightValue");
    }
    Update(_deltaTime) {
        let nozzle_left = SimVar.GetSimVarValue("TURB ENG PRIMARY NOZZLE PERCENT:1", "percent");
        let nozzle_right = SimVar.GetSimVarValue("TURB ENG PRIMARY NOZZLE PERCENT:2", "percent");
        diffAndSetAttribute(this.nozLeftDisplay, "r", (((this.maxRadius - this.minRadius) / 100) * nozzle_left + this.minRadius) + '');
        diffAndSetAttribute(this.nozRightDisplay, "r", (((this.maxRadius - this.minRadius) / 100) * nozzle_right + this.minRadius) + '');
        diffAndSetText(this.nozLeftText, nozzle_left.toFixed(0));
        diffAndSetText(this.nozRightText, nozzle_right.toFixed(0));
    }
}
customElements.define("fa18-efd-fuel-system", FA18_EFD_FuelSystemDisplay);
customElements.define("fa18-efd-nozzle", FA18_EFD_NozzleDisplay);
customElements.define("fa18-efd-engine", FA18_EFD_EngineDisplay);
//# sourceMappingURL=FA18_EFD_Common.js.map