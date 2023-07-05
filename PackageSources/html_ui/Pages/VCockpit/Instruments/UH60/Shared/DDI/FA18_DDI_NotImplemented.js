class FA18_DDI_NotImplemented extends FA18_DDI_Page {
    constructor() {
        super(...arguments);
        this._timer = 0;
        this.previousPage = FA18_DDI_Page_Type.MenuSupport;
    }
    get templateID() { return "FA18_DDI_NotImplemented"; }
    show() {
        super.show();
        this._timer = 0;
        for (let i = 1; i <= 20; i++) {
            this.ddi.onButtonPressed[i] = () => {
                this._timer = Infinity;
            };
        }
    }
    update(deltaTime) {
        super.update(deltaTime);
        this._timer += deltaTime;
        if (this._timer > 3000) {
            this._timer = 0;
            this.ddi.showPage(this.previousPage);
        }
    }
}
customElements.define("fa18-ddi-not-implemented", FA18_DDI_NotImplemented);
//# sourceMappingURL=FA18_DDI_NotImplemented.js.map