class FA18ACC_DDI extends FA18_DDI {
    constructor() {
        super();
        this._latLonDisplayMode = 0;
        this.waypointManager = new FA18ACC_DDI_WaypointManager(this);
    }
    get latLonDisplayMode() { return this._latLonDisplayMode; }
    Init() {
        this.pages.set(FA18_DDI_Page_Type.HSIAircraftData, document.querySelector("fa18-acc-ddi-hsi-aircraft-data"));
        this.pages.set(FA18_DDI_Page_Type.HSITacanData, document.querySelector("fa18-acc-ddi-hsi-tacan-data"));
        this.pages.set(FA18_DDI_Page_Type.HSIWaypointData, document.querySelector("fa18-acc-ddi-hsi-waypoint-data"));
        this.pages.set(FA18_DDI_Page_Type.Checklist, document.querySelector("fa18-acc-ddi-checklist"));
        this.pages.set(FA18_DDI_Page_Type.FPAS, document.querySelector("fa18-acc-ddi-fpas"));
        this.pages.set(FA18_DDI_Page_Type.HSI, document.querySelector("fa18-acc-ddi-hsi"));
        this.pages.set(FA18_DDI_Page_Type.MenuSupport, document.querySelector("fa18-acc-ddi-menu-support"));
        super.Init();
        if (this.instrumentIndex === 2) {
            SimVar.SetSimVarValue("L:FA18_DDI_LAT_LON_DISPLAY_MODE", "number", this._latLonDisplayMode);
        }
    }
    coordinatesDisplay(coordinates, isLatitude) {
        let nsew = isLatitude ? ((coordinates < 0) ? "S" : "N") : ((coordinates < 0) ? "W" : "E");
        if (this.latLonDisplayMode == 1) {
            return nsew + ' ' + Utils.decimalDegreesToDMS(coordinates, 2, 0);
        }
        else {
            return nsew + ' ' + Utils.decimalDegreesToDDM(coordinates, 2, 4);
        }
    }
    onUpdate(_deltaTime) {
        this._latLonDisplayMode = SimVar.GetSimVarValue("L:FA18_DDI_LAT_LON_DISPLAY_MODE", "number");
        super.onUpdate(_deltaTime);
    }
}
registerInstrument("fa18acc-ddi-element", FA18ACC_DDI);
//# sourceMappingURL=FA18ACC_DDI.js.map