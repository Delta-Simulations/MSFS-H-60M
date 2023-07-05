class FA18_DDI_HSIndicator extends HTMLElement {
    constructor() {
        super(...arguments);
        this.fontSize = 7;
        this.refStartX = 0;
        this.refWidth = 0;
        this.isCoupled = false;
        this.coupledTimer = -1;
    }
    connectedCallback() {
        this.construct();
    }
    setInstrument(instrument) {
        this.instrument = instrument;
    }
    construct() {
        let posX = 0;
        let posY = 0;
        let width = 200;
        let height = 200;
        this.rootSVG = document.createElementNS(Avionics.SVG.NS, "svg");
        diffAndSetAttribute(this.rootSVG, "id", "ViewBox");
        diffAndSetAttribute(this.rootSVG, "viewBox", "0 0 " + width + " " + height);
        {
            let circleRadius = 75;
            this.rotatingCompass = document.createElementNS(Avionics.SVG.NS, "g");
            diffAndSetAttribute(this.rotatingCompass, "id", "Circle");
            this.rootSVG.appendChild(this.rotatingCompass);
            {
                this.rotatingCompassX = posX + width * 0.5;
                this.rotatingCompassY = posY + height * 0.5;
                let graduationsGroup = document.createElementNS(Avionics.SVG.NS, "g");
                diffAndSetAttribute(graduationsGroup, "id", "Graduations");
                this.rotatingCompass.appendChild(graduationsGroup);
                {
                    let angle = 0;
                    for (let i = 0; i < 36; i++) {
                        let isPrimary = (i % 3 == 0) ? true : false;
                        let length = 1;
                        if (isPrimary) {
                            let text = document.createElementNS(Avionics.SVG.NS, "text");
                            let textContent = "";
                            if (i === 0) {
                                textContent = "N";
                            }
                            else if (i === 9) {
                                textContent = "E";
                            }
                            else if (i === 18) {
                                textContent = "S";
                            }
                            else if (i === 27) {
                                textContent = "W";
                            }
                            else {
                                textContent = (angle / 10) + '';
                            }
                            diffAndSetText(text, textContent);
                            diffAndSetAttribute(text, "x", this.rotatingCompassX + '');
                            diffAndSetAttribute(text, "y", (this.rotatingCompassY - circleRadius) + '');
                            diffAndSetAttribute(text, "fill", "#00ff00");
                            diffAndSetAttribute(text, "font-size", this.fontSize + '');
                            diffAndSetAttribute(text, "font-family", "Arial, Helvetica, sans-serif");
                            diffAndSetAttribute(text, "text-anchor", "middle");
                            diffAndSetAttribute(text, "alignment-baseline", "central");
                            diffAndSetAttribute(text, "transform", "rotate(" + angle + " " + this.rotatingCompassX + " " + this.rotatingCompassY + ")");
                            graduationsGroup.appendChild(text);
                        }
                        else {
                            let dot = document.createElementNS(Avionics.SVG.NS, "line");
                            diffAndSetAttribute(dot, "x1", this.rotatingCompassX + '');
                            diffAndSetAttribute(dot, "y1", (this.rotatingCompassY - circleRadius) + '');
                            diffAndSetAttribute(dot, "x2", this.rotatingCompassX + '');
                            diffAndSetAttribute(dot, "y2", (this.rotatingCompassY - circleRadius + length) + '');
                            diffAndSetAttribute(dot, "stroke", "#00ff00");
                            diffAndSetAttribute(dot, "stroke-width", "1");
                            diffAndSetAttribute(dot, "transform", "rotate(" + angle + " " + this.rotatingCompassX + " " + this.rotatingCompassY + ")");
                            graduationsGroup.appendChild(dot);
                        }
                        angle += 360 / 36;
                    }
                }
            }
            this.magneticHeadingGroup = document.createElementNS(Avionics.SVG.NS, "g");
            diffAndSetAttribute(this.magneticHeadingGroup, "id", "magneticHeadingGroup");
            this.rootSVG.appendChild(this.magneticHeadingGroup);
            {
                this.magneticHeadingBug = document.createElementNS(Avionics.SVG.NS, "rect");
                diffAndSetAttribute(this.magneticHeadingBug, "x", this.rotatingCompassX.toFixed(0));
                diffAndSetAttribute(this.magneticHeadingBug, "y", (this.rotatingCompassY - circleRadius - 10).toFixed(0));
                diffAndSetAttribute(this.magneticHeadingBug, "width", "0.7");
                diffAndSetAttribute(this.magneticHeadingBug, "height", "15");
                diffAndSetAttribute(this.magneticHeadingBug, "fill", "#00ff00");
                diffAndSetAttribute(this.magneticHeadingBug, "id", "magneticHeadingBug");
                this.magneticHeadingGroup.appendChild(this.magneticHeadingBug);
            }
            {
                this.currentTrackIndicator = document.createElementNS(Avionics.SVG.NS, "path");
                diffAndSetAttribute(this.currentTrackIndicator, "id", "CurrentTrack");
                let x = this.rotatingCompassX;
                let y = this.rotatingCompassY - circleRadius + 15;
                diffAndSetAttribute(this.currentTrackIndicator, "d", "M " + x + " " + y + " l -3 -3, l 3 -3, l 3 3, l -3 3, v8 Z");
                diffAndSetAttribute(this.currentTrackIndicator, "fill", "none");
                diffAndSetAttribute(this.currentTrackIndicator, "stroke", "#00ff00");
                diffAndSetAttribute(this.currentTrackIndicator, "stroke-width", "0.7");
                this.rootSVG.appendChild(this.currentTrackIndicator);
            }
            this.selectedHeadingGroup = document.createElementNS(Avionics.SVG.NS, "g");
            diffAndSetAttribute(this.selectedHeadingGroup, "id", "selectedHeadingGroup");
            {
                let selectedHeadingMarkerBox = document.createElementNS(Avionics.SVG.NS, "rect");
                diffAndSetAttribute(selectedHeadingMarkerBox, "x", (this.rotatingCompassX - 5).toFixed(0));
                diffAndSetAttribute(selectedHeadingMarkerBox, "y", (this.rotatingCompassY - circleRadius - 7.5).toFixed(0));
                diffAndSetAttribute(selectedHeadingMarkerBox, "width", "10");
                diffAndSetAttribute(selectedHeadingMarkerBox, "height", "3");
                diffAndSetAttribute(selectedHeadingMarkerBox, "fill", "none");
                diffAndSetAttribute(selectedHeadingMarkerBox, "stroke", "#00ff00");
                diffAndSetAttribute(selectedHeadingMarkerBox, "stroke-width", "1");
                this.selectedHeadingGroup.appendChild(selectedHeadingMarkerBox);
                let selectedHeadingMarkerCenter = document.createElementNS(Avionics.SVG.NS, "line");
                diffAndSetAttribute(selectedHeadingMarkerCenter, "x1", (this.rotatingCompassX).toFixed(0));
                diffAndSetAttribute(selectedHeadingMarkerCenter, "y1", (this.rotatingCompassY - circleRadius - 7.5).toFixed(0));
                diffAndSetAttribute(selectedHeadingMarkerCenter, "x2", (this.rotatingCompassX).toFixed(0));
                diffAndSetAttribute(selectedHeadingMarkerCenter, "y2", (this.rotatingCompassY - circleRadius - 7.5 + 3).toFixed(0));
                diffAndSetAttribute(selectedHeadingMarkerCenter, "stroke", "#00ff00");
                diffAndSetAttribute(selectedHeadingMarkerCenter, "stroke-width", "2");
                this.selectedHeadingGroup.appendChild(selectedHeadingMarkerCenter);
            }
            this.rootSVG.appendChild(this.selectedHeadingGroup);
            {
                let selectedHeadingReadout = document.createElementNS(Avionics.SVG.NS, "g");
                diffAndSetAttribute(selectedHeadingReadout, "id", "selectedHeadingReadout");
                {
                    let x = posX + 15;
                    let y = posY + height - 25;
                    this.selectedHeadingMode = document.createElementNS(Avionics.SVG.NS, "text");
                    diffAndSetText(this.selectedHeadingMode, "HSEL");
                    diffAndSetAttribute(this.selectedHeadingMode, "x", (x) + '');
                    diffAndSetAttribute(this.selectedHeadingMode, "y", (y) + '');
                    diffAndSetAttribute(this.selectedHeadingMode, "fill", "#00ff00");
                    diffAndSetAttribute(this.selectedHeadingMode, "font-size", this.fontSize + '');
                    diffAndSetAttribute(this.selectedHeadingMode, "text-anchor", "start");
                    selectedHeadingReadout.appendChild(this.selectedHeadingMode);
                    this.selectedHeadingValue = document.createElementNS(Avionics.SVG.NS, "text");
                    diffAndSetAttribute(this.selectedHeadingValue, "x", (x) + '');
                    diffAndSetAttribute(this.selectedHeadingValue, "y", (y + 7) + '');
                    diffAndSetAttribute(this.selectedHeadingValue, "fill", "#00ff00");
                    diffAndSetAttribute(this.selectedHeadingValue, "font-size", this.fontSize + '');
                    diffAndSetAttribute(this.selectedHeadingValue, "text-anchor", "start");
                    selectedHeadingReadout.appendChild(this.selectedHeadingValue);
                }
                this.rootSVG.appendChild(selectedHeadingReadout);
            }
            {
                this.trueAirspeedIndicator = document.createElementNS(Avionics.SVG.NS, "text");
                diffAndSetAttribute(this.trueAirspeedIndicator, "id", "trueAirSpeedIndicator");
                diffAndSetAttribute(this.trueAirspeedIndicator, "x", (this.rotatingCompassX - 10).toFixed(0));
                diffAndSetAttribute(this.trueAirspeedIndicator, "y", (this.rotatingCompassY + 8).toFixed(0));
                diffAndSetAttribute(this.trueAirspeedIndicator, "fill", "#00ff00");
                diffAndSetAttribute(this.trueAirspeedIndicator, "font-size", this.fontSize + '');
                diffAndSetAttribute(this.trueAirspeedIndicator, "text-anchor", "end");
                diffAndSetText(this.trueAirspeedIndicator, "000T");
                this.rootSVG.appendChild(this.trueAirspeedIndicator);
            }
            {
                this.groundSpeedIndicator = document.createElementNS(Avionics.SVG.NS, "text");
                diffAndSetAttribute(this.groundSpeedIndicator, "id", "groundSpeedIndicator");
                diffAndSetAttribute(this.groundSpeedIndicator, "x", (this.rotatingCompassX + 10).toFixed(0));
                diffAndSetAttribute(this.groundSpeedIndicator, "y", (this.rotatingCompassY + 8).toFixed(0));
                diffAndSetAttribute(this.groundSpeedIndicator, "fill", "#00ff00");
                diffAndSetAttribute(this.groundSpeedIndicator, "font-size", this.fontSize + '');
                diffAndSetAttribute(this.groundSpeedIndicator, "text-anchor", "start");
                diffAndSetText(this.groundSpeedIndicator, "000G");
                this.rootSVG.appendChild(this.groundSpeedIndicator);
            }
            {
                this.coupledModeIndicator = document.createElementNS(Avionics.SVG.NS, "g");
                diffAndSetAttribute(this.coupledModeIndicator, "id", "coupledModeIndicator");
                let coupledModeText = document.createElementNS(Avionics.SVG.NS, "text");
                diffAndSetAttribute(coupledModeText, "id", "coupledModeLeftText");
                diffAndSetAttribute(coupledModeText, "x", (this.rotatingCompassX - 5).toFixed(0));
                diffAndSetAttribute(coupledModeText, "y", (this.rotatingCompassY - 5).toFixed(0));
                diffAndSetAttribute(coupledModeText, "fill", "#00ff00");
                diffAndSetAttribute(coupledModeText, "font-size", this.fontSize + '');
                diffAndSetAttribute(coupledModeText, "text-anchor", "end");
                diffAndSetText(coupledModeText, "CPL");
                this.coupledModeIndicator.appendChild(coupledModeText);
                this.coupledModeValue = document.createElementNS(Avionics.SVG.NS, "text");
                diffAndSetAttribute(this.coupledModeValue, "id", "coupledModeValue");
                diffAndSetAttribute(this.coupledModeValue, "x", (this.rotatingCompassX + 5).toFixed(0));
                diffAndSetAttribute(this.coupledModeValue, "y", (this.rotatingCompassY - 5).toFixed(0));
                diffAndSetAttribute(this.coupledModeValue, "fill", "#00ff00");
                diffAndSetAttribute(this.coupledModeValue, "font-size", this.fontSize + '');
                diffAndSetAttribute(this.coupledModeValue, "text-anchor", "start");
                diffAndSetText(this.coupledModeValue, "TCN");
                this.coupledModeIndicator.appendChild(this.coupledModeValue);
                this.rootSVG.appendChild(this.coupledModeIndicator);
            }
            {
                this.currentWaypointIndicator = document.createElementNS(Avionics.SVG.NS, "g");
                diffAndSetAttribute(this.currentWaypointIndicator, "id", "currentWaypointIndicator");
                {
                    let toIndicator = document.createElementNS(Avionics.SVG.NS, "g");
                    diffAndSetAttribute(toIndicator, "id", "currentWaypointToIndicator");
                    let x = this.rotatingCompassX;
                    let y = this.rotatingCompassY - circleRadius + 2.5;
                    let triangle = document.createElementNS(Avionics.SVG.NS, "path");
                    diffAndSetAttribute(triangle, "d", "M " + x + " " + y + " l -4 7 h 8 Z");
                    diffAndSetAttribute(triangle, "stroke", "#00ff00");
                    diffAndSetAttribute(triangle, "stroke-width", "1");
                    diffAndSetAttribute(triangle, "fill", "none");
                    toIndicator.appendChild(triangle);
                    let circle = document.createElementNS(Avionics.SVG.NS, "circle");
                    diffAndSetAttribute(circle, "cx", x + '');
                    diffAndSetAttribute(circle, "cy", (y + 4.5) + '');
                    diffAndSetAttribute(circle, "r", 2 + '');
                    diffAndSetAttribute(circle, "stroke", "#00ff00");
                    diffAndSetAttribute(circle, "stroke-width", "1");
                    diffAndSetAttribute(circle, "fill", "none");
                    toIndicator.appendChild(circle);
                    this.currentWaypointIndicator.appendChild(toIndicator);
                }
                {
                    let fromIndicator = document.createElementNS(Avionics.SVG.NS, "rect");
                    diffAndSetAttribute(fromIndicator, "id", "currentWaypointFromIndicator");
                    diffAndSetAttribute(fromIndicator, "width", "2.5");
                    diffAndSetAttribute(fromIndicator, "height", "10");
                    diffAndSetAttribute(fromIndicator, "x", (this.rotatingCompassX - 1.25) + '');
                    diffAndSetAttribute(fromIndicator, "y", (this.rotatingCompassY + circleRadius - 13) + '');
                    diffAndSetAttribute(fromIndicator, "fill", "none");
                    diffAndSetAttribute(fromIndicator, "stroke", "#00ff00");
                    diffAndSetAttribute(fromIndicator, "stroke-width", "1");
                    this.currentWaypointIndicator.appendChild(fromIndicator);
                }
                diffAndSetAttribute(this.currentWaypointIndicator, "visibility", "hidden");
                this.rootSVG.appendChild(this.currentWaypointIndicator);
            }
            {
                this.currentTacanIndicator = document.createElementNS(Avionics.SVG.NS, "g");
                this.currentTacanIndicator.setAttribute("id", "currentTacanIndicator");
                {
                    let toIndicator = document.createElementNS(Avionics.SVG.NS, "g");
                    toIndicator.setAttribute("id", "currentTacanToIndicator");
                    let x = this.rotatingCompassX;
                    let y = this.rotatingCompassY - circleRadius + 2.5;
                    let triangle = document.createElementNS(Avionics.SVG.NS, "path");
                    triangle.setAttribute("d", "M " + x + " " + y + " l -4 7 h 8 Z");
                    triangle.setAttribute("stroke", "#00ff00");
                    triangle.setAttribute("stroke-width", "1");
                    triangle.setAttribute("fill", "none");
                    toIndicator.appendChild(triangle);
                    let horizontalShape = document.createElementNS(Avionics.SVG.NS, "path");
                    horizontalShape.setAttribute("d", "M " + (x - 2) + " " + (y + 5.5) + " h 4");
                    horizontalShape.setAttribute("stroke", "#00ff00");
                    horizontalShape.setAttribute("stroke-width", "1");
                    horizontalShape.setAttribute("fill", "none");
                    toIndicator.appendChild(horizontalShape);
                    let verticalShape = document.createElementNS(Avionics.SVG.NS, "path");
                    verticalShape.setAttribute("d", "M " + x + " " + (y + 1) + " v 5");
                    verticalShape.setAttribute("stroke", "#00ff00");
                    verticalShape.setAttribute("stroke-width", "1");
                    verticalShape.setAttribute("fill", "none");
                    toIndicator.appendChild(verticalShape);
                    this.currentTacanIndicator.appendChild(toIndicator);
                }
                {
                    let fromIndicator = document.createElementNS(Avionics.SVG.NS, "rect");
                    fromIndicator.setAttribute("id", "currentTacanFromIndicator");
                    fromIndicator.setAttribute("width", "2.5");
                    fromIndicator.setAttribute("height", "10");
                    fromIndicator.setAttribute("x", (this.rotatingCompassX - 1.25) + '');
                    fromIndicator.setAttribute("y", (this.rotatingCompassY + circleRadius - 13) + '');
                    fromIndicator.setAttribute("fill", "#00ff00");
                    this.currentTacanIndicator.appendChild(fromIndicator);
                }
                diffAndSetAttribute(this.currentTacanIndicator, "visibility", "hidden");
                this.rootSVG.appendChild(this.currentTacanIndicator);
            }
            {
                this.tacanGroup = document.createElementNS(Avionics.SVG.NS, "g");
                diffAndSetAttribute(this.tacanGroup, "id", "tacanInformation");
                {
                    let x = posX + 20;
                    let y = posY + 25;
                    this.tacanBearingDistance = document.createElementNS(Avionics.SVG.NS, "text");
                    diffAndSetText(this.tacanBearingDistance, "");
                    diffAndSetAttribute(this.tacanBearingDistance, "x", (x) + '');
                    diffAndSetAttribute(this.tacanBearingDistance, "y", (y) + '');
                    diffAndSetAttribute(this.tacanBearingDistance, "fill", "#00ff00");
                    diffAndSetAttribute(this.tacanBearingDistance, "font-size", this.fontSize + '');
                    diffAndSetAttribute(this.tacanBearingDistance, "text-anchor", "start");
                    this.tacanGroup.appendChild(this.tacanBearingDistance);
                    this.tacanETE = document.createElementNS(Avionics.SVG.NS, "text");
                    diffAndSetText(this.tacanETE, "");
                    diffAndSetAttribute(this.tacanETE, "x", (x) + '');
                    diffAndSetAttribute(this.tacanETE, "y", (y + 7) + '');
                    diffAndSetAttribute(this.tacanETE, "fill", "#00ff00");
                    diffAndSetAttribute(this.tacanETE, "font-size", this.fontSize + '');
                    diffAndSetAttribute(this.tacanETE, "text-anchor", "start");
                    this.tacanGroup.appendChild(this.tacanETE);
                    this.tacanIdentifier = document.createElementNS(Avionics.SVG.NS, "text");
                    diffAndSetText(this.tacanIdentifier, "");
                    diffAndSetAttribute(this.tacanIdentifier, "x", (x) + '');
                    diffAndSetAttribute(this.tacanIdentifier, "y", (y + 14) + '');
                    diffAndSetAttribute(this.tacanIdentifier, "fill", "#00ff00");
                    diffAndSetAttribute(this.tacanIdentifier, "font-size", this.fontSize + '');
                    diffAndSetAttribute(this.tacanIdentifier, "text-anchor", "start");
                    this.tacanGroup.appendChild(this.tacanIdentifier);
                }
                diffAndSetAttribute(this.tacanGroup, "visibility", "hidden");
                this.rootSVG.appendChild(this.tacanGroup);
			}
			{
				this.azimuth_deviation_line = document.createElementNS(Avionics.SVG.NS, "line");
				diffAndSetAttribute(this.azimuth_deviation_line, "x1", this.rotatingCompassX);
				diffAndSetAttribute(this.azimuth_deviation_line, "y1", 0);
				diffAndSetAttribute(this.azimuth_deviation_line, "x2", this.rotatingCompassX);
				diffAndSetAttribute(this.azimuth_deviation_line, "y2", 2 * this.rotatingCompassY);
				diffAndSetAttribute(this.azimuth_deviation_line, "stroke", "#00ff00");
				diffAndSetAttribute(this.azimuth_deviation_line, "stroke-width", "1");
				diffAndSetAttribute(this.currentTacanIndicator, "visibility", "hidden");
				this.rootSVG.appendChild(this.azimuth_deviation_line);				
            }
            {
                this.waypointGroup = document.createElementNS(Avionics.SVG.NS, "g");
                diffAndSetAttribute(this.waypointGroup, "id", "waypointInformation");
                {
                    let x = width - 20;
                    let y = posY + 25;
                    this.waypointBearingDistance = document.createElementNS(Avionics.SVG.NS, "text");
                    diffAndSetText(this.waypointBearingDistance, "---° / --.-");
                    diffAndSetAttribute(this.waypointBearingDistance, "x", (x) + '');
                    diffAndSetAttribute(this.waypointBearingDistance, "y", (y) + '');
                    diffAndSetAttribute(this.waypointBearingDistance, "fill", "#00ff00");
                    diffAndSetAttribute(this.waypointBearingDistance, "font-size", this.fontSize + '');
                    diffAndSetAttribute(this.waypointBearingDistance, "text-anchor", "end");
                    this.waypointGroup.appendChild(this.waypointBearingDistance);
                    this.waypointETE = document.createElementNS(Avionics.SVG.NS, "text");
                    diffAndSetText(this.waypointETE, "-:--");
                    diffAndSetAttribute(this.waypointETE, "x", (x - 10) + '');
                    diffAndSetAttribute(this.waypointETE, "y", (y + 7) + '');
                    diffAndSetAttribute(this.waypointETE, "fill", "#00ff00");
                    diffAndSetAttribute(this.waypointETE, "font-size", this.fontSize + '');
                    diffAndSetAttribute(this.waypointETE, "text-anchor", "end");
                    this.waypointGroup.appendChild(this.waypointETE);
                }
                diffAndSetAttribute(this.waypointGroup, "visibility", "hidden");
                this.rootSVG.appendChild(this.waypointGroup);
            }
        }
        this.appendChild(this.rootSVG);
    }
    update(deltaTime) {
        let compass = SimVar.GetSimVarValue("PLANE HEADING DEGREES MAGNETIC", "Degree");
        let heading = compass;
        let track = SimVar.GetSimVarValue("GPS GROUND MAGNETIC TRACK", "degree");
        let groundSpeed = SimVar.GetSimVarValue("GPS GROUND SPEED", "knots");
        let isNorthUp = SimVar.GetSimVarValue("L:FA18_DDI_HSI_NORTH_UP", "Bool");
        if (isNorthUp)
            compass = 0;
        if (this.rotatingCompass) {
            diffAndSetAttribute(this.rotatingCompass, "transform", "rotate(" + (-compass) + " " + this.rotatingCompassX + " " + this.rotatingCompassY + ")");
        }
        if (this.magneticHeadingGroup) {
            let delta = compass - heading;
            diffAndSetAttribute(this.magneticHeadingGroup, "transform", "rotate(" + (-delta) + " " + this.rotatingCompassX + " " + this.rotatingCompassY + ")");
        }
        if (this.currentTrackIndicator) {
            if (groundSpeed <= 10)
                track = compass;
            let delta = compass - track;
            diffAndSetAttribute(this.currentTrackIndicator, "transform", "rotate(" + (-delta) + " " + this.rotatingCompassX + " " + this.rotatingCompassY + ")");
        }
        if (this.selectedHeadingGroup || this.selectedHeadingValue) {
            let hselValue = SimVar.GetSimVarValue("L:XMLVAR_AS04F_HSI_1_HDG_TK", "degrees");
            if (this.selectedHeadingGroup) {
                let delta = compass - hselValue;
                diffAndSetAttribute(this.selectedHeadingGroup, "transform", "rotate(" + (-delta) + " " + this.rotatingCompassX + " " + this.rotatingCompassY + ")");
            }
            if (this.selectedHeadingValue) {
                diffAndSetText(this.selectedHeadingValue, Utils.leadingZeros(hselValue, 3, 0) + Avionics.Utils.DEGREE_SYMBOL);
            }
        }
        if (this.trueAirspeedIndicator) {
            diffAndSetText(this.trueAirspeedIndicator, Utils.leadingZeros(Simplane.getTrueSpeed(), 3, 0) + "T");
        }
        if (this.groundSpeedIndicator) {
            diffAndSetText(this.groundSpeedIndicator, Utils.leadingZeros(groundSpeed, 3, 0) + "G");
        }
        let navHasTacan = SimVar.GetSimVarValue("NAV HAS TACAN:1", "Bool");
        let tacanMode = SimVar.GetSimVarValue("L:Glasscockpit_TACAN_Mode", "number");
        let tacanBearing, tacanDistance, tacanIdentifier;
        if (navHasTacan && tacanMode != 0) {
            tacanBearing = Avionics.Utils.clampAngle(SimVar.GetSimVarValue("TACAN STATION RADIAL:1", "degree") + 180);
            tacanDistance = SimVar.GetSimVarValue("TACAN STATION DISTANCE:1", "nautical mile");
            tacanIdentifier = SimVar.GetSimVarValue("TACAN STATION IDENT:1", "string");
            if (this.tacanGroup) {
                if (this.tacanBearingDistance && this.tacanETE && this.tacanIdentifier) {
                    diffAndSetAttribute(this.tacanGroup, "visibility", "visible");
                    let ete = Avionics.Utils.computeETEinSeconds(tacanDistance);
                    if (ete == null) {
                        ete = "--:--:--";
                    }
                    else {
                        ete = Utils.SecondsToDisplayDuration(ete, true, true);
                    }
                    diffAndSetText(this.tacanBearingDistance, fastToFixed(tacanBearing, 1) + "°" + (tacanMode == 1 ? (" / " + fastToFixed(tacanDistance, 1)) : ""));
                    diffAndSetText(this.tacanETE, ete);
                    diffAndSetText(this.tacanIdentifier, tacanIdentifier);
                }
            }
        }
        else {
            diffAndSetAttribute(this.tacanGroup, "visibility", "hidden");
        }
        if (this.currentTacanIndicator) {
            if (navHasTacan && tacanMode != 0) {
                this.currentTacanIndicator.setAttribute("visibility", "visible");
                let delta = compass - tacanBearing;
                diffAndSetAttribute(this.currentTacanIndicator, "transform", "rotate(" + (-delta) + " " + this.rotatingCompassX + " " + this.rotatingCompassY + ")");
            }
            else {
                this.currentTacanIndicator.setAttribute("visibility", "hidden");
            }
        }
		if (SimVar.GetSimVarValue("L:Glasscockpit_ILS_Mode", "bool") && SimVar.GetSimVarValue("NAV HAS LOCALIZER:1", "bool")) {
			this.azimuth_deviation_line.setAttribute("visibility", "visible");
			let ilsBearing = Avionics.Utils.clampAngle(SimVar.GetSimVarValue("NAV RADIAL:1", "degree") + 180);
			let scale = 1.65 * this.rotatingCompassX / SimVar.GetSimVarValue("L:DDI_MapZoomRange", "number");
			let delta = SimVar.GetSimVarValue("NAV LOCALIZER:1", "degree") - compass;
			
			let ilsGroundDistance = SimVar.GetSimVarValue("NAV HAS GLIDE SLOPE:1", "bool") && SimVar.GetSimVarValue("NAV GLIDE SLOPE LENGTH:1", "bool") ? SimVar.GetSimVarValue("NAV GLIDE SLOPE LENGTH:1", "kilometers") : SimVar.GetSimVarValue("NAV DME:1", "kilometers");//Math.pow(Math.pow(1.52 * tacanDistance, 2) - Math.pow(SimVar.GetSimVarValue("RADIO HEIGHT", "kilometers"), 2), 0.5);
			let x = -ilsGroundDistance * Math.sin((compass-ilsBearing) * 3.1416 / 180) * scale;
			let y = -ilsGroundDistance * Math.cos((compass-ilsBearing) * 3.1416 / 180) * scale;
			diffAndSetAttribute(this.azimuth_deviation_line, "transform", "translate(" + x + ", " + y + ") rotate(" + delta + " " + (this.rotatingCompassX)+ " " + (this.rotatingCompassY) + ")");
		}
		else {
            this.azimuth_deviation_line.setAttribute("visibility", "hidden");
		}
		
        if (this.instrument && this.instrument.waypointManager.initialized) {
            let currentWaypoint = this.instrument.waypointManager.currentWaypoint;
            if (this.currentWaypointIndicator) {
                if (this.instrument.waypointManager.isCurrentWaypointValid) {
                    diffAndSetAttribute(this.currentWaypointIndicator, "visibility", "visible");
                    let delta = compass - this.instrument.flightPlanManager.getBearingToWaypoint(currentWaypoint, true);
                    diffAndSetAttribute(this.currentWaypointIndicator, "transform", "rotate(" + (-delta) + " " + this.rotatingCompassX + " " + this.rotatingCompassY + ")");
                }
                else {
                    diffAndSetAttribute(this.currentWaypointIndicator, "visibility", "hidden");
                }
            }
            if (this.waypointGroup && this.waypointBearingDistance && this.waypointETE) {
                if (this.instrument.waypointManager.isCurrentWaypointValid) {
                    diffAndSetAttribute(this.waypointGroup, "visibility", "visible");
                    let waypointDistance = this.instrument.flightPlanManager.getDistanceToWaypoint(currentWaypoint);
                    let waypointBearing = this.instrument.flightPlanManager.getBearingToWaypoint(currentWaypoint, true);
                    let ete = Avionics.Utils.computeETEinSeconds(waypointDistance);
                    if (ete == null) {
                        ete = "--:--:--";
                    }
                    else {
                        ete = Utils.SecondsToDisplayDuration(ete, true, true);
                    }
                    waypointDistance = fastToFixed(waypointDistance, 1);
                    waypointBearing = fastToFixed(waypointBearing, 1);
                    diffAndSetText(this.waypointBearingDistance, waypointBearing + "° / " + waypointDistance);
                    diffAndSetText(this.waypointETE, ete);
                }
                else {
                    diffAndSetAttribute(this.waypointGroup, "visibility", "hidden");
                }
            }
        }
        switch (SimVar.GetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number")) {
            case FA18_DDI_Steering_Source.TACAN:
                diffAndSetText(this.coupledModeValue, "TCN");
                break;
            case FA18_DDI_Steering_Source.WYPT:
                diffAndSetText(this.coupledModeValue, "WYPT");
                break;
        }
        let isCoupled = SimVar.GetSimVarValue("L:FA18_IS_STEERING_COUPLED", "Bool");
        if (isCoupled != this.isCoupled) {
            if (this.isCoupled) {
                this.coupledTimer = 10;
            }
            else {
                this.coupledTimer = -1;
            }
            this.isCoupled = isCoupled;
        }
        let blinkOn = false;
        if (this.coupledTimer > 0) {
            this.coupledTimer -= (deltaTime / 1000);
            blinkOn = ((this.coupledTimer % 1) > 0.5);
        }
        if (this.isCoupled || blinkOn) {
            diffAndSetAttribute(this.coupledModeIndicator, "visibility", "visible");
        }
        else {
            diffAndSetAttribute(this.coupledModeIndicator, "visibility", "hidden");
        }
    }
}
customElements.define("fa18-ddi-hs-indicator", FA18_DDI_HSIndicator);
//# sourceMappingURL=FA18_DDI_HSIndicator.js.map