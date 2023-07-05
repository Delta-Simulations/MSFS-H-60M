class FA18_DDI_ADI extends FA18_DDI_Page {
    get templateID() { return "FA18_DDI_ADI"; }
    show() {
        super.show();
        this._adiAirspeedElement = this.ddi.getChildById("adi-airspeed");
        this._adiVerticalSpeedElement = this.ddi.getChildById("adi-vertical-speed");
        this._adiAltitudeLargeElement = this.ddi.getChildById("adi-altitude-large");
        this._adiAltitudeSmallElement = this.ddi.getChildById("adi-altitude-small");
        this._horizonClipElement = this.ddi.getChildById("circleClip");
        this._horizonElement = this.ddi.getChildById("horizon-group");
        this._horizonContainerElement = this.ddi.getChildById("horizon-container-group");
        this._turnRateElement = this.ddi.getChildById("turn-rate-box");
        for (let i = 0; i < 200; i++) {
            let rect = document.createElementNS(Avionics.SVG.NS, "rect");
            diffAndSetAttribute(rect, "x", "0");
            diffAndSetAttribute(rect, "y", (500 + 15 * i).toFixed(1));
            diffAndSetAttribute(rect, "width", "1000");
            diffAndSetAttribute(rect, "height", "2");
            diffAndSetAttribute(rect, "fill", "#00ff00");
            diffAndSetAttribute(rect, "clip-path", "url(#circleClip)");
            this._horizonElement.appendChild(rect);
        }
        for (let i = -17; i < 18; i++) {
            let text = document.createElementNS(Avionics.SVG.NS, "text");
            let s = "";
            if (Math.abs(i) < 9) {
                s = Math.abs(i).toFixed(0) + "  0";
            }
            else if (i > 9) {
                s = Math.abs(18 - i).toFixed(0) + "  0";
            }
            else if (i < -9) {
                s = Math.abs(18 + i).toFixed(0) + "  0";
            }
            if (s != "") {
                diffAndSetText(text, s);
                diffAndSetAttribute(text, "x", "500");
                diffAndSetAttribute(text, "y", (500 - i * 500 / 3 + 18).toFixed(0));
                diffAndSetAttribute(text, "font-size", "48");
                diffAndSetAttribute(text, "text-anchor", "middle");
                diffAndSetAttribute(text, "fill", "#00ff00");
                diffAndSetAttribute(text, "clip-path", "url(#circleClip)");
                this._horizonElement.appendChild(text);
            }
            else {
                let circle = document.createElementNS(Avionics.SVG.NS, "circle");
                diffAndSetAttribute(circle, "cx", "500");
                diffAndSetAttribute(circle, "cy", (500 - i * 500 / 3).toFixed(0));
                diffAndSetAttribute(circle, "r", "30");
                diffAndSetAttribute(circle, "stroke", "#00ff00");
                diffAndSetAttribute(circle, "stroke-width", "5");
                diffAndSetAttribute(circle, "clip-path", "url(#circleClip)");
                this._horizonElement.appendChild(circle);
            }
            let line = document.createElementNS(Avionics.SVG.NS, "line");
            diffAndSetAttribute(line, "x1", "493");
            diffAndSetAttribute(line, "y1", (500 - (i + 0.5) * 500 / 3).toFixed(0));
            diffAndSetAttribute(line, "x2", "507");
            diffAndSetAttribute(line, "y2", (500 - (i + 0.5) * 500 / 3).toFixed(0));
            diffAndSetAttribute(line, "stroke", "#00ff00");
            diffAndSetAttribute(line, "stroke-width", "4");
            diffAndSetAttribute(line, "clip-path", "url(#circleClip)");
            this._horizonElement.appendChild(line);
        }
        for (let i of [16, 20]) {
            this.ddi.setPageButton(i, FA18_DDI_Page_Type.NotImplemented);
        }
        this.ddi.setPageButton(18, FA18_DDI_Page_Type.MenuTactical);
    }
    update(deltaTime) {
        super.update(deltaTime);
        let bank = Simplane.getBank();
        let pitch = Simplane.getPitch();
        let airspeed = Simplane.getIndicatedSpeed();
        let verticalSpeed = Simplane.getVerticalSpeed();
        let altitude = Simplane.getAltitude();
        const formatedAltitude = Avionics.Utils.computeThousandsAltitude(altitude);
        let turnRate = Simplane.getTurnRate() / Math.PI * 180;
        diffAndSetText(this._adiAirspeedElement, airspeed.toFixed(0));
        diffAndSetText(this._adiVerticalSpeedElement, verticalSpeed.toFixed(0));
        diffAndSetText(this._adiAltitudeLargeElement, formatedAltitude);
        diffAndSetText(this._adiAltitudeSmallElement, (Math.abs(altitude) % 1000).toFixed(0).padStart(3, "0"));
        let a = bank;
        let y = -pitch / 60 * 1000;
        diffAndSetAttribute(this._horizonElement, "transform", "translate(0, " + y.toFixed(1) + ")");
        diffAndSetAttribute(this._horizonContainerElement, "transform", "rotate(" + a.toFixed(1) + " 500 500)");
        diffAndSetAttribute(this._horizonClipElement, "transform", "translate(0, " + (-y).toFixed(1) + ")");
        if (this._turnRateElement)
            diffAndSetAttribute(this._turnRateElement, "transform", "translate(" + (turnRate / 3 * 200).toFixed(1) + ", 0)");
    }
}
customElements.define("fa18-ddi-adi", FA18_DDI_ADI);
//# sourceMappingURL=FA18_DDI_ADI.js.map