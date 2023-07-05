class FA18ACC_DDI_HSITacanData extends FA18_DDI_Page {
    get templateID() { return "FA18ACC_DDI_HSITacanData"; }
    show() {
        super.show();
        this._titleTacanElement = this.ddi.getChildById("tacan-title-value");
        this._latitudeTacanElement = this.ddi.getChildById("tacan-lat-value");
        this._longitudeTacanElement = this.ddi.getChildById("tacan-lon-value");
        this._elevationTacanElement = this.ddi.getChildById("tacan-elev-value");
        for (let i of [11, 12, 13, 16]) {
            this.ddi.setPageButton(i, FA18_DDI_Page_Type.NotImplemented);
        }
        this.ddi.onButtonPressed[5] = () => {
            SimVar.SetSimVarValue("L:FA18_DDI_HSI_DATA_TCN_UFC_Pressed", "number", 1);
        };
        this.ddi.setPageButton(6, FA18_DDI_Page_Type.HSIAircraftData);
        this.ddi.setPageButton(7, FA18_DDI_Page_Type.HSIWaypointData);
        this.ddi.setPageButton(10, FA18_DDI_Page_Type.HSI);
        this.ddi.setPageButton(18, FA18_DDI_Page_Type.MenuTactical);
    }
    update(deltaTime) {
        super.update(deltaTime);
        if (SimVar.GetSimVarValue("L:Glasscockpit_TACAN_Mode", "number") != 0 && SimVar.GetSimVarValue("NAV HAS TACAN:1", "Bool")) {
            let tacanStationLatLonAlt = SimVar.GetSimVarValue("TACAN STATION LATLONALT:1", "latlonalt");
            diffAndSetText(this._titleTacanElement, SimVar.GetSimVarValue("TACAN ACTIVE CHANNEL:1", "number") + " " + (SimVar.GetSimVarValue("TACAN ACTIVE MODE:1", "Bool") == 0 ? "X" : "Y"));
            diffAndSetText(this._latitudeTacanElement, this.ddi.coordinatesDisplay(tacanStationLatLonAlt.lat, true));
            diffAndSetText(this._longitudeTacanElement, this.ddi.coordinatesDisplay(tacanStationLatLonAlt.long, false));
            diffAndSetText(this._elevationTacanElement, "ELEV " + fastToFixed(tacanStationLatLonAlt.alt * Avionics.Utils.METER2FEET, 1) + " FT");
            this.showTacanData();
        }
        else {
            this.hideTacanData();
        }
    }
    showTacanData() {
        diffAndSetStyle(this._titleTacanElement, StyleProperty.display, "block");
        diffAndSetStyle(this._latitudeTacanElement, StyleProperty.display, "block");
        diffAndSetStyle(this._longitudeTacanElement, StyleProperty.display, "block");
        diffAndSetStyle(this._elevationTacanElement, StyleProperty.display, "block");
    }
    hideTacanData() {
        diffAndSetStyle(this._titleTacanElement, StyleProperty.display, "none");
        diffAndSetStyle(this._latitudeTacanElement, StyleProperty.display, "none");
        diffAndSetStyle(this._longitudeTacanElement, StyleProperty.display, "none");
        diffAndSetStyle(this._elevationTacanElement, StyleProperty.display, "none");
    }
}
customElements.define("fa18-acc-ddi-hsi-tacan-data", FA18ACC_DDI_HSITacanData);
//# sourceMappingURL=FA18ACC_DDI_HSITacanData.js.map