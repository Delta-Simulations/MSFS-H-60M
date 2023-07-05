class FA18_DDI_MenuSupport extends FA18_DDI_Page {
    get templateID() { return "FA18_DDI_MenuSupport"; }
    show() {
        super.show();
        this.ddi.setPageButton(1, FA18_DDI_Page_Type.ADI);
        this.ddi.setPageButton(2, FA18_DDI_Page_Type.HSI);
        for (let i of [3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 16, 19]) {
            this.ddi.setPageButton(i, FA18_DDI_Page_Type.NotImplemented);
        }
        this.ddi.setPageButton(12, FA18_DDI_Page_Type.Engine);
        this.ddi.setPageButton(18, FA18_DDI_Page_Type.MenuTactical);
        this.ddi.setPageButton(20, FA18_DDI_Page_Type.Fuel);
    }
    update(deltaTime) {
        super.update(deltaTime);
    }
}
customElements.define("fa18-ddi-menu-support", FA18_DDI_MenuSupport);
//# sourceMappingURL=FA18_DDI_MenuSupport.js.map