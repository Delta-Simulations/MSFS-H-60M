class FA18ACC_DDI_HSIndicator extends FA18_DDI_HSIndicator {
    construct() {
        super.construct();
    }
    update(deltaTime) {
        super.update(deltaTime);
        if (this.selectedHeadingMode) {
            diffAndSetText(this.selectedHeadingMode, (SimVar.GetSimVarValue("L:FA18_HEADING_SELECT_MODE", "number") === 1) ? "GSEL" : "HSEL");
        }
    }
}
customElements.define("fa18-acc-ddi-hs-indicator", FA18ACC_DDI_HSIndicator);
//# sourceMappingURL=FA18ACC_DDI_HSIndicator.js.map