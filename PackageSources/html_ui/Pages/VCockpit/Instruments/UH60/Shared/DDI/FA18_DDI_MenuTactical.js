class FA18_DDI_MenuTactical extends FA18_DDI_Page {
    get templateID() { return "FA18_DDI_MenuTactical"; }
    show() {
        super.show();
        for (let i of [1, 5, 6, 7, 8, 9, 10, 11, 13, 14, 16, 17, 20]) {
            this.ddi.setPageButton(i, FA18_DDI_Page_Type.NotImplemented);
        }
        this.ddi.setPageButton(3, FA18_DDI_Page_Type.HUD);
        this.ddi.setPageButton(4, FA18_DDI_Page_Type.RDR);
        this.ddi.setPageButton(18, FA18_DDI_Page_Type.MenuSupport);
    }
    update(deltaTime) {
        super.update(deltaTime);
    }
}
customElements.define("fa18-ddi-menu-tactical", FA18_DDI_MenuTactical);
//# sourceMappingURL=FA18_DDI_MenuTactical.js.map