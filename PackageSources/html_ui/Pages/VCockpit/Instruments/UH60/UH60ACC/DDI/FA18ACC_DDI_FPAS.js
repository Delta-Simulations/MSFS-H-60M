class FA18ACC_DDI_FPAS extends FA18_DDI_Page {
    constructor() {
        super(...arguments);
        this._currentAirspeed = 0;
        this._timeTo2000Lb = 0;
        this._rangeTo2000Lb = 0;
        this._fuelRemainTo2000Lb = 0;
        this._currentFuelFlow = 0;
        this._bestMachRange = 0;
        this._bestMachEndurance = 0;
        this._optimumRangeAltitude = 0;
        this._optimumRangeMach = 0;
        this._optimumRangeDistance = 0;
        this._maximumEnduranceAltitude = 0;
        this._maximumEnduranceMach = 0;
        this._maximumEnduranceTime = 0;
    }
    get templateID() { return "FA18ACC_DDI_FPAS"; }
    show() {
        super.show();
        this._rangeTo2000LbElement = document.body.querySelector(".fpas-range-2000lb-value");
        this._timeTo2000LbElement = document.body.querySelector(".fpas-time-2000lb-value");
        this._fuelRemainElement = document.body.querySelector(".fpas-fuel-remain-value");
        this._fuelFlowElement = document.body.querySelector(".fpas-fuel-flow-value");
        this._bestMachRangeElement = document.body.querySelector(".fpas-range-best-mach-value");
        this._bestMachEnduranceElement = document.body.querySelector(".fpas-time-best-mach-value");
        this._optimumRangeAltitudeElement = document.body.querySelector(".fpas-optimum-range-altitude-value");
        this._optimumRangeMachElement = document.body.querySelector(".fpas-optimum-range-mach-value");
        this._optimumRangeDistanceElement = document.body.querySelector(".fpas-optimum-range-distance-value");
        this._maximumEnduranceAltitudeElement = document.body.querySelector(".fpas-maximum-endurance-altitude-value");
        this._maximumEnduranceMachElement = document.body.querySelector(".fpas-maximum-endurance-mach-value");
        this._maximumEnduranceTimeElement = document.body.querySelector(".fpas-maximum-endurance-time-value");
        for (let i of [16, 17, 20]) {
            this.ddi.setPageButton(i, FA18_DDI_Page_Type.NotImplemented);
        }
        this.ddi.setPageButton(18, FA18_DDI_Page_Type.MenuTactical);
    }
    update(deltaTime) {
        super.update(deltaTime);
        let gallonToPounds = SimVar.GetSimVarValue("FUEL WEIGHT PER GALLON", "lbs");
        let fuelRemain = SimVar.GetSimVarValue("FUEL TOTAL QUANTITY", "gallons") * gallonToPounds;
        let instantFuelFlow = SimVar.GetSimVarValue("TURB ENG FUEL FLOW PPH:1", "pounds per hour") + SimVar.GetSimVarValue("TURB ENG FUEL FLOW PPH:2", "pounds per hour");
        if (this._currentFuelFlow < 10) {
            this._currentFuelFlow = instantFuelFlow;
        }
        else {
            this._currentFuelFlow = 0.995 * this._currentFuelFlow + 0.005 * instantFuelFlow;
        }
        this._fuelRemainTo2000Lb = fuelRemain - 2000;
        if (this._currentFuelFlow > 0) {
            this._timeTo2000Lb = this._fuelRemainTo2000Lb / this._currentFuelFlow * 60;
        }
        let airspeed = Simplane.getGroundSpeed();
        if (this._currentAirspeed < 10) {
            this._currentAirspeed = airspeed;
        }
        this._currentAirspeed = Utils.SmoothPow(this._currentAirspeed, airspeed, 2, 2);
        this._rangeTo2000Lb = this._currentAirspeed * this._timeTo2000Lb / 60;
        let w = Simplane.getWeight() * 2.204623;
        let alt = Simplane.getAltitude();
        let bestMach = this._getBestMachForAltitude(alt, w);
        if (this._bestMachEndurance < 0.1) {
            this._bestMachEndurance = bestMach;
        }
        else {
            this._bestMachEndurance = 0.995 * this._bestMachEndurance + 0.005 * bestMach;
        }
        this._bestMachRange = this._bestMachEndurance + 0.03;
        this._optimumRangeAltitude = this._getOptimumRangeAltitude(w);
        this._optimumRangeMach = this._getBestMachForAltitude(this._optimumRangeAltitude, w);
        this._optimumRangeDistance = this._getNMPerPoundOfFuelAtOptimumRangeAltitude(w) * this._fuelRemainTo2000Lb;
        let optimumRangeIAS = this._optimumRangeMach * 643.99568;
        let optimumRangeTAS = this._getTASFromIAS(optimumRangeIAS, this._optimumRangeAltitude);
        this._maximumEnduranceAltitude = this._getMaximumEnduranceAltitude(w);
        this._maximumEnduranceMach = this._getBestMachForAltitude(this._maximumEnduranceAltitude, w);
        this._maximumEnduranceTime = this._fuelRemainTo2000Lb / 3000 * 60;
        let h = Math.floor(this._timeTo2000Lb / 60);
        let m = this._timeTo2000Lb - h * 60;
        let tFormat = "";
        if (h > 0) {
            tFormat = h.toFixed(0) + ":" + m.toFixed(0).padStart(2, "0");
        }
        else {
            tFormat = ":" + m.toFixed(0);
        }
        diffAndSetText(this._timeTo2000LbElement, tFormat);
        diffAndSetText(this._fuelRemainElement, this._fuelRemainTo2000Lb.toFixed(1));
        if (this._currentAirspeed > 10) {
            diffAndSetText(this._rangeTo2000LbElement, this._rangeTo2000Lb.toFixed(1));
            diffAndSetText(this._fuelFlowElement, (this._currentFuelFlow / this._currentAirspeed).toFixed(1));
        }
        else {
            diffAndSetText(this._rangeTo2000LbElement, "-");
            diffAndSetText(this._fuelFlowElement, "-");
        }
        if (this._bestMachEndurance > 0.1 && this._bestMachRange > 0.1) {
            diffAndSetText(this._bestMachRangeElement, this._bestMachRange.toFixed(2));
            diffAndSetText(this._bestMachEnduranceElement, this._bestMachEndurance.toFixed(2));
        }
        else {
            diffAndSetText(this._bestMachRangeElement, "-");
            diffAndSetText(this._bestMachEnduranceElement, "-");
        }
        if (this._optimumRangeAltitude > 10) {
            diffAndSetText(this._optimumRangeAltitudeElement, (this._optimumRangeAltitude / 10).toFixed(0) + "0 ft");
        }
        else {
            diffAndSetText(this._optimumRangeAltitudeElement, "-");
        }
        if (this._optimumRangeMach > 0.1) {
            diffAndSetText(this._optimumRangeMachElement, this._optimumRangeMach.toFixed(2));
        }
        else {
            diffAndSetText(this._optimumRangeMachElement, "-");
        }
        if (this._optimumRangeDistance > 0) {
            diffAndSetText(this._optimumRangeDistanceElement, this._optimumRangeDistance.toFixed(0) + " NM");
        }
        else {
            diffAndSetText(this._optimumRangeDistanceElement, "-");
        }
        if (this._maximumEnduranceAltitude > 10) {
            diffAndSetText(this._maximumEnduranceAltitudeElement, (this._maximumEnduranceAltitude / 10).toFixed(0) + "0 ft");
        }
        else {
            diffAndSetText(this._maximumEnduranceAltitudeElement, "-");
        }
        if (this._maximumEnduranceMach > 0.1) {
            diffAndSetText(this._maximumEnduranceMachElement, this._maximumEnduranceMach.toFixed(2));
        }
        else {
            diffAndSetText(this._maximumEnduranceMachElement, "-");
        }
        if (this._maximumEnduranceTime > 0) {
            let h = Math.floor(this._maximumEnduranceTime / 60);
            let m = this._maximumEnduranceTime - h * 60;
            let tFormat = "";
            if (h > 0) {
                tFormat = h.toFixed(0) + ":" + m.toFixed(0).padStart(2, "0");
            }
            else {
                tFormat = ":" + m.toFixed(0);
            }
            diffAndSetText(this._maximumEnduranceTimeElement, tFormat);
        }
        else {
            diffAndSetText(this._maximumEnduranceTimeElement, "-");
        }
    }
    _getTASFromIAS(ias, altitude) {
        return (1.59 * altitude / 45000 + 1) * ias;
    }
    _getBestMachSeaLevel(weight) {
        let f = (weight - 30000) / (66000 - 30000);
        f = Math.max(0, Math.min(1, f));
        return 0.27 * (1 - f) + 0.38 * f;
    }
    _getBestMach5000ft(weight) {
        let f = (weight - 30000) / (66000 - 30000);
        f = Math.max(0, Math.min(1, f));
        return 0.28 * (1 - f) + 0.43 * f;
    }
    _getBestMach10000ft(weight) {
        let f = (weight - 30000) / (66000 - 30000);
        f = Math.max(0, Math.min(1, f));
        return 0.32 * (1 - f) + 0.48 * f;
    }
    _getBestMach15000ft(weight) {
        let f = (weight - 30000) / (66000 - 30000);
        f = Math.max(0, Math.min(1, f));
        return 0.37 * (1 - f) + 0.53 * f;
    }
    _getBestMach20000ft(weight) {
        let f = (weight - 30000) / (66000 - 30000);
        f = Math.max(0, Math.min(1, f));
        return 0.4 * (1 - f) + 0.58 * f;
    }
    _getBestMach25000ft(weight) {
        let f = (weight - 30000) / (66000 - 30000);
        f = Math.max(0, Math.min(1, f));
        return 0.43 * (1 - f) + 0.66 * f;
    }
    _getBestMach30000ft(weight) {
        let f = (weight - 30000) / (66000 - 30000);
        f = Math.max(0, Math.min(1, f));
        return 0.48 * (1 - f) + 0.73 * f;
    }
    _getBestMach35000ft(weight) {
        let f = (weight - 30000) / (66000 - 30000);
        f = Math.max(0, Math.min(1, f));
        return 0.57 * (1 - f) + 0.82 * f;
    }
    _getBestMach40000ft(weight) {
        let f = (weight - 30000) / (58000 - 30000);
        f = Math.max(0, Math.min(1, f));
        return 0.62 * (1 - f) + 0.85 * f;
    }
    _getBestMach45000ft(weight) {
        let f = (weight - 30000) / (46000 - 30000);
        f = Math.max(0, Math.min(1, f));
        return 0.7 * (1 - f) + 0.85 * f;
    }
    _getBestMach50000ft(weight) {
        return 0.85;
    }
    _getBestMachForAltitude(alt, w) {
        let fAltitude = (alt - Math.floor(alt / 5000) * 5000) / 5000;
        let min = 0;
        let max = 1;
        if (alt < 5000) {
            min = this._getBestMachSeaLevel(w);
            max = this._getBestMach5000ft(w);
        }
        else if (alt < 10000) {
            min = this._getBestMach5000ft(w);
            max = this._getBestMach10000ft(w);
        }
        else if (alt < 15000) {
            min = this._getBestMach10000ft(w);
            max = this._getBestMach15000ft(w);
        }
        else if (alt < 20000) {
            min = this._getBestMach15000ft(w);
            max = this._getBestMach20000ft(w);
        }
        else if (alt < 25000) {
            min = this._getBestMach20000ft(w);
            max = this._getBestMach25000ft(w);
        }
        else if (alt < 30000) {
            min = this._getBestMach25000ft(w);
            max = this._getBestMach30000ft(w);
        }
        else if (alt < 35000) {
            min = this._getBestMach30000ft(w);
            max = this._getBestMach35000ft(w);
        }
        else if (alt < 40000) {
            min = this._getBestMach35000ft(w);
            max = this._getBestMach40000ft(w);
        }
        else if (alt < 45000) {
            min = this._getBestMach40000ft(w);
            max = this._getBestMach45000ft(w);
        }
        else if (alt < 50000) {
            min = this._getBestMach45000ft(w);
            max = this._getBestMach50000ft(w);
        }
        else {
            return this._getBestMach50000ft(w);
        }
        return min * (1 - fAltitude) + max * fAltitude;
    }
    _getOptimumRangeAltitude(weight) {
        let f = (weight - 30000) / (66000 - 30000);
        return 40000 * (1 - f) + 32000 * f;
    }
    _getNMPerPoundOfFuelAtOptimumRangeAltitude(weight) {
        let f = (weight - 26000) / (66000 - 26000);
        return 0.13 * (1 - f) + 0.06 * f;
    }
    _getMaximumEnduranceAltitude(weight) {
        let f = (weight - 30000) / (66000 - 30000);
        return 32000 * (1 - f) + 21000 * f;
    }
}
customElements.define("fa18-acc-ddi-fpas", FA18ACC_DDI_FPAS);
//# sourceMappingURL=FA18ACC_DDI_FPAS.js.map