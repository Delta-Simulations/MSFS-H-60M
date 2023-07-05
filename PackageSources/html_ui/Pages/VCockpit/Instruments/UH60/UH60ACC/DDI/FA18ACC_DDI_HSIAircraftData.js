class FA18ACC_DDI_HSIAircraftData extends FA18_DDI_Page {
    get templateID() { return "FA18ACC_DDI_HSIAircraftData"; }
    show() {
        super.show();
        this._latitudeElement = document.body.querySelector(".aircraft-lat-value");
        this._longitudeElement = document.body.querySelector(".aircraft-lon-value");
        this._windSpeedElement = document.body.querySelector(".wind-speed-value");
        this._windDirectionElement = document.body.querySelector(".wind-dir-value");
        this._magneticVariationElement = document.body.querySelector(".mvar-value");
        this.latLonDecimalModeLabelElement = this.ddi.getChildById("latLonDecimalModeLabel");
        this._baroAltitudeWarningValueElement = this.ddi.getChildById("baroAltitudeWarningValue");
        this._radarAltitudeWarningValueElement = this.ddi.getChildById("radarAltitudeWarningValue");
        for (let i of [1, 2, 3, 4, 5, 9, 11, 13, 17]) {
            this.ddi.setPageButton(i, FA18_DDI_Page_Type.NotImplemented);
        }
        this.ddi.setPageButton(7, FA18_DDI_Page_Type.HSIWaypointData);
        this.ddi.setPageButton(8, FA18_DDI_Page_Type.HSITacanData);
        this.ddi.setPageButton(10, FA18_DDI_Page_Type.HSI);
        this.ddi.onButtonPressed[15] = () => {
            SimVar.SetSimVarValue("L:FA18_DDI_LAT_LON_DISPLAY_MODE", "number", (this.ddi.latLonDisplayMode + 1) % 2);
        };
        this.ddi.setPageButton(18, FA18_DDI_Page_Type.MenuTactical);
        this.ddi.onButtonPressed[19] = () => {
            SimVar.SetSimVarValue("L:FA18_DDI_HSI_DATA_AC_RADAR_Pressed", "number", 1);
        };
        this.ddi.onButtonPressed[20] = () => {
            SimVar.SetSimVarValue("L:FA18_DDI_HSI_DATA_AC_BARO_Pressed", "number", 1);
        };
    }
    update(deltaTime) {
        super.update(deltaTime);
        let planeCoordinates = new LatLong(SimVar.GetSimVarValue("PLANE LATITUDE", "degree latitude"), SimVar.GetSimVarValue("PLANE LONGITUDE", "degree longitude"));
        diffAndSetText(this.latLonDecimalModeLabelElement, (this.ddi.latLonDisplayMode == 1) ? "S E C" : "D C M L");
        planeCoordinates.lat = Utils.Clamp(planeCoordinates.lat, -90, 90);
        planeCoordinates.long = Utils.Clamp(planeCoordinates.long, -180, 180);
        let windSpeed = Simplane.getWindStrength();
        let windDirection = Simplane.getWindDirection();
        let magVar = SimVar.GetSimVarValue("MAGVAR", "degrees");
        diffAndSetText(this._latitudeElement, this.ddi.coordinatesDisplay(planeCoordinates.lat, true));
        diffAndSetText(this._longitudeElement, this.ddi.coordinatesDisplay(planeCoordinates.long, false));
        diffAndSetText(this._windSpeedElement, "WSPD " + windSpeed.toFixed(0) + "KT");
        diffAndSetText(this._windDirectionElement, "WDIR " + windDirection.toFixed(0) + Avionics.Utils.DEGREE_SYMBOL);
        diffAndSetText(this._magneticVariationElement, "MVAR " + ((magVar < 0) ? "W " : "E ") + Utils.decimalDegreesToDDM(magVar, 2, 0));
        diffAndSetText(this._baroAltitudeWarningValueElement, SimVar.GetSimVarValue("L:FA18_Alert_Baro", "number").toFixed(0));
        diffAndSetText(this._radarAltitudeWarningValueElement, SimVar.GetSimVarValue("L:FA18_Alert_Radar", "number").toFixed(0));
    }
}
customElements.define("fa18-acc-ddi-hsi-aircraft-data", FA18ACC_DDI_HSIAircraftData);
//# sourceMappingURL=FA18ACC_DDI_HSIAircraftData.js.map