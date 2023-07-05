class FA18ACC_DDI_MenuSupport extends FA18_DDI_MenuSupport {
    show() {
        super.show();
        this.ddi.setPageButton(11, FA18_DDI_Page_Type.Checklist);
        this.ddi.setPageButton(19, FA18_DDI_Page_Type.FPAS);
    }
}
customElements.define("fa18-acc-ddi-menu-support", FA18ACC_DDI_MenuSupport);
//# sourceMappingURL=FA18ACC_DDI_MenuSupport.js.map