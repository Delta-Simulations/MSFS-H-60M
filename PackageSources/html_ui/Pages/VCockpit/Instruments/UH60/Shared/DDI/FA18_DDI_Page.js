class FA18_DDI_Page extends TemplateElement {
    show() {
        this.style.display = "block";
        this._timerElement = this.querySelector(".ddi-timer");
        if (this._timerElement) {
            this.updateTimer();
        }
    }
    init(ddi) {
        this.ddi = ddi;
    }
    update(deltaTime) {
        if (SimVar.GetSimVarValue("SIM ON GROUND", "boolean")) {
            diffAndSetText(this._timerElement, "MENU");
        }
        else {
            this.updateTimer();
        }
    }
    updateTimer() {
        if (this._timerElement) {
            let seconds = Simplane.getCurrentUTC();
            let minutes = Math.floor(seconds / 60) % 60;
            seconds = Math.floor(seconds) % 60;
            diffAndSetText(this._timerElement, Utils.leadingZeros(minutes, 2, 0) + Utils.leadingZeros(seconds, 2, 0));
        }
    }
}
//# sourceMappingURL=FA18_DDI_Page.js.map