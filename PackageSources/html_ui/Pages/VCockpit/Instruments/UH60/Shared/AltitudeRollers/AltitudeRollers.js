class FA18_AltitudeRollers extends BaseInstrument {
    get templateID() { return "AS04F_AltitudeRollers"; }
    connectedCallback() {
        super.connectedCallback();
        this.altitudeDigits = [];
        this.altitudeDigitsBot = [];
        this.altitudeSettingDigits = [];
        this.altitudeSettingDigitsBot = [];
        let altitudeDiv = this.getChildById("Altitude");
        let digits;
        for (let i = 1; i <= 2; i++) {
            digits = altitudeDiv.getElementsByClassName("d" + i);
            for (let j = 0; j < digits.length; j++) {
                if (digits[j].classList.contains("digit")) {
                    if (digits[j].classList.contains("bot")) {
                        this.altitudeDigitsBot.push(digits[j]);
                    }
                    else {
                        this.altitudeDigits.push(digits[j]);
                    }
                }
            }
        }
        let altitudeSettingDiv = this.getChildById("AltitudeSetting");
        for (let i = 1; i <= 4; i++) {
            digits = altitudeSettingDiv.getElementsByClassName("d" + i);
            for (let j = 0; j < digits.length; j++) {
                if (digits[j].classList.contains("digit")) {
                    if (digits[j].classList.contains("bot")) {
                        this.altitudeSettingDigitsBot.push(digits[j]);
                    }
                    else {
                        this.altitudeSettingDigits.push(digits[j]);
                    }
                }
            }
        }
    }
    updateRoller(digits, digitsBot, value) {
        for (let i = digits.length - 1; i >= 0; i--) {
            if (value < 0)
                value = 0;
            let power = digits.length - i - 1;
            let digit = Math.floor((value % Math.pow(10, power + 1)) / Math.pow(10, power));
            diffAndSetText(digits[i], digit + '');
            diffAndSetText(digitsBot[i], ((digit + 1) % 10) + '');
            if (Math.pow(10, power) * (digit + 1) < (value % Math.pow(10, power + 1)) + 1) {
                diffAndSetStyle(digits[i], StyleProperty.transform, "translate(0vh,-" + ((100 * value) % 100) / 2 + '' + "vh)");
                diffAndSetStyle(digitsBot[i], StyleProperty.transform, "translate(0vh,-" + ((100 * value) % 100) / 2 + '' + "vh)");
            }
            else {
                diffAndSetStyle(digits[i], StyleProperty.transform, "");
                diffAndSetStyle(digitsBot[i], StyleProperty.transform, "");
            }
            value -= 0.1;
        }
    }
    Update() {
        super.Update();
        let altitude = Utils.Clamp(Simplane.getAltitude(), 0, 99999) / 1000;
        let altitudeSetting = Simplane.getPressureValue() * 100;
        this.updateRoller(this.altitudeDigits, this.altitudeDigitsBot, altitude);
        this.updateRoller(this.altitudeSettingDigits, this.altitudeSettingDigitsBot, altitudeSetting);
    }
}
registerInstrument("fa18-altitude-rollers", FA18_AltitudeRollers);
//# sourceMappingURL=AltitudeRollers.js.map