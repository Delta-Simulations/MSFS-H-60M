class FA18_DDI_HUD extends FA18_DDI_Page {
    constructor() {
        super(...arguments);
        this.vVectorMinX = -17;
        this.vVectorMaxX = 17;
        this.vVectorMinY = -8;
        this.vVectorMaxY = 6;
        this._hudPeakGValue = 0;
        this.projectionOffset = 0;
        this._drawn = false;
        this.clutterLevel = -1;
        this.isCoupled = false;
        this.coupledTimer = -1;
		this.prevDistance = 0;
		this.prevVelocity = 0;
		this.hitsCounter = 0;
		this.missesCounter = 0;

		// DISTANCE TIME ANGLE VEL
		this.ballistics = [
			[0,0,0,1036],
			[263.30,0.28,0.07,862],
			[510.87,0.6,0.17,702],
			[759.07,1,0.30,554],
			[1001.69,1.5,0.47,429],
			[1255.03,2.15,0.74,331],
			[1499.09,2.98,1.12,286],
			[1752.79,3.92,1.65,255],
			[2000,5,2.4,230],
		];
		
		
    }
    get templateID() { return "FA18_DDI_HUD"; }
    show() {
		
		try {
			
			super.show();
			FA18_DDI_HUD.DEBUG_INSTANCE = this;
			if (!this._drawn) {
				this._waterLineElement = this.ddi.getChildById("hud-waterline");
				this._hudMainElement = this.ddi.getElementsByClassName("hud-display")[0];
				diffAndSetAttribute(this._hudMainElement, "main_hud", (this.ddi.instrumentIndex == 4) ? "True" : "False");
				if (this.ddi.instrumentIndex == 5)
					this._hudMainElement.style.opacity = 0;
				this._hudAirspeedElement = this.ddi.getChildById("hud-airspeed");
				this._hudVerticalSpeedElement = this.ddi.getChildById("hud-vertical-speed");
				this._hudAltitudeLargeElement = this.ddi.getChildById("hud-altitude-large");
				this._hudAltitudeSmallElement = this.ddi.getChildById("hud-altitude-small");
				this._hudAltitudeModeElement = this.ddi.getChildById("hud-altitude-mode");
				this._hudAOAElement = this.ddi.getChildById("hud-aoa-value");
				this._hudMachLabel = this.ddi.getChildById("hud-mach-label");
				this._hudMachElement = this.ddi.getChildById("hud-mach-value");
				this._hudCurrentGLabel = this.ddi.getChildById("hud-current-g-label");
				this._hudCurrentGElement = this.ddi.getChildById("hud-current-g-value");
				this._hudPeakGElement = this.ddi.getChildById("hud-peak-g-value");
				this._hudCplModeElement = this.ddi.getChildById("hud-cpl-mode");
				this._hudSteeringDataElement = this.ddi.getChildById("hud-steering-data");
				this._headingElement = this.ddi.getChildById("heading-tape-group");
				this._headingCursorElement = this.ddi.getChildById("heading-cursor");
				this._headingClipElement = this.ddi.getChildById("heading-clip");
				this._headingSteeringBugElement = this.ddi.getChildById("heading-steering-bug");
				this._horizonElement = this.ddi.getChildById("hud-horizon-group");
				this._horizonContainerElement = this.ddi.getChildById("hud-horizon-container-group");
				this._horizonClipElement = this.ddi.getChildById("hud-horizon-clip");
				this._eBracketElement = this.ddi.getChildById("e-bracket-group");
				this._bankCursorElement = this.ddi.getChildById("bank-cursor");
				this._bankElement = this.ddi.getChildById("bank-tape-group");
				this._velocityElement = this.ddi.getChildById("velocity-vector-group");
				this._ghostVelocityElement = this.ddi.getChildById("ghost-velocity-vector-group");
				this._energyCaret = this.ddi.getChildById("energy-caret");
				this._altitudeWarningElement = this.ddi.getChildById("hud-altitude-warning");
				for (let i = -3; i < 39; i++) {
					let text = document.createElementNS(Avionics.SVG.NS, "text");
					let s = ((i + 36) % 36).toFixed(0) + "0";
					let Xspacing = 125;
					let yBottom = 225;
					s = s.padStart(3, "0");
					diffAndSetText(text, s);
					diffAndSetAttribute(text, "x", (500 + i * Xspacing).toFixed(0));
					diffAndSetAttribute(text, "y", (yBottom - 25) + "");
					diffAndSetAttribute(text, "font-size", "40");
					diffAndSetAttribute(text, "font-weight", "regular");
					diffAndSetAttribute(text, "text-anchor", "middle");
					diffAndSetAttribute(text, "fill", "#00ff00");
					diffAndSetAttribute(text, "clip-path", "url(#heading-clip)");
					this._headingElement.appendChild(text);
					let lineL = document.createElementNS(Avionics.SVG.NS, "line");
					diffAndSetAttribute(lineL, "x1", (500 + i * Xspacing).toFixed(0));
					diffAndSetAttribute(lineL, "y1", (yBottom - 20) + '');
					diffAndSetAttribute(lineL, "x2", (500 + i * Xspacing).toFixed(0));
					diffAndSetAttribute(lineL, "y2", (yBottom) + '');
					diffAndSetAttribute(lineL, "stroke", "#00ff00");
					diffAndSetAttribute(lineL, "stroke-width", "4");
					diffAndSetAttribute(lineL, "clip-path", "url(#heading-clip)");
					this._headingElement.appendChild(lineL);
					let lineS = document.createElementNS(Avionics.SVG.NS, "line");
					diffAndSetAttribute(lineS, "x1", (500 + i * Xspacing + Xspacing / 2).toFixed(0));
					diffAndSetAttribute(lineS, "y1", (yBottom - 10) + '');
					diffAndSetAttribute(lineS, "x2", (500 + i * Xspacing + Xspacing / 2).toFixed(0));
					diffAndSetAttribute(lineS, "y2", (yBottom) + '');
					diffAndSetAttribute(lineS, "stroke", "#00ff00");
					diffAndSetAttribute(lineS, "stroke-width", "4");
					diffAndSetAttribute(lineS, "clip-path", "url(#heading-clip)");
					this._headingElement.appendChild(lineS);
				}
				for (let i = -17; i < 18; i++) {
					let h = 20;
					if (i === 0) {
						h = 35;
					}
					else if (i < 0) {
						h = -20;
					}
					let y = 500 - FA18_DDI_HUD.YPERDEGREE * 5 * i;
					let path = document.createElementNS(Avionics.SVG.NS, "g");
					if (i === 0) {
						let p1 = "0 " + y.toFixed(0);
						let p2 = "450 " + y.toFixed(0);
						let p3 = "550 " + y.toFixed(0);
						let p4 = "1000 " + y.toFixed(0);
						let d1 = "M" + p1 + " L" + p2 + " M" + p3 + " L" + p4;
						let path1 = document.createElementNS(Avionics.SVG.NS, "path");
						diffAndSetAttribute(path1, "d", d1);
						diffAndSetAttribute(path1, "stroke", "#00ff00");
						diffAndSetAttribute(path1, "stroke-width", "4");
						diffAndSetAttribute(path1, "fill", "none");
						diffAndSetAttribute(path1, "clip-path", "url(#hud-horizon-clip)");
						this._horizonZeroElement = path1;
						path.appendChild(path1);
					}
					else {
						let p1 = "420 " + (y + h).toFixed(0);
						let p2 = "420 " + y.toFixed(0);
						let p3 = "470 " + (y + h / 5).toFixed(0);
						let p4 = "530 " + (y + h / 5).toFixed(0);
						let p5 = "580 " + y.toFixed(0);
						let p6 = "580 " + (y + h).toFixed(0);
						let d1 = "M" + p1 + " L" + p2;
						let d2 = "M" + p2 + " L" + p3;
						let d3 = "M" + p4 + " L" + p5;
						let d4 = "M" + p5 + " L" + p6;
						let path1 = document.createElementNS(Avionics.SVG.NS, "path");
						let path2 = document.createElementNS(Avionics.SVG.NS, "path");
						let path3 = document.createElementNS(Avionics.SVG.NS, "path");
						let path4 = document.createElementNS(Avionics.SVG.NS, "path");
						diffAndSetAttribute(path1, "d", d1);
						diffAndSetAttribute(path2, "d", d2);
						diffAndSetAttribute(path3, "d", d3);
						diffAndSetAttribute(path4, "d", d4);
						diffAndSetAttribute(path1, "stroke", "#00ff00");
						diffAndSetAttribute(path1, "stroke-width", "4");
						diffAndSetAttribute(path1, "fill", "none");
						diffAndSetAttribute(path1, "clip-path", "url(#hud-horizon-clip)");
						diffAndSetAttribute(path2, "stroke", "#00ff00");
						diffAndSetAttribute(path2, "stroke-width", "4");
						diffAndSetAttribute(path2, "fill", "none");
						diffAndSetAttribute(path2, "clip-path", "url(#hud-horizon-clip)");
						diffAndSetAttribute(path3, "stroke", "#00ff00");
						diffAndSetAttribute(path3, "stroke-width", "4");
						diffAndSetAttribute(path3, "fill", "none");
						diffAndSetAttribute(path3, "clip-path", "url(#hud-horizon-clip)");
						diffAndSetAttribute(path4, "stroke", "#00ff00");
						diffAndSetAttribute(path4, "stroke-width", "4");
						diffAndSetAttribute(path4, "fill", "none");
						diffAndSetAttribute(path4, "clip-path", "url(#hud-horizon-clip)");
						if (i < 0) {
							diffAndSetAttribute(path2, "stroke-dasharray", "7, 7");
							diffAndSetAttribute(path3, "stroke-dasharray", "7, 7");
						}
						path.appendChild(path1);
						path.appendChild(path2);
						path.appendChild(path3);
						path.appendChild(path4);
					}
					diffAndSetAttribute(path, "id", "attitude-line-" + (i < 0 ? "minus-" : "") + Math.abs(i * 5).toFixed(0));
					this._horizonElement.appendChild(path);
					if (i != 0) {
						let textPosition = 0;
						if (i > 0) {
							textPosition = 20;
						}
						let textL = document.createElementNS(Avionics.SVG.NS, "text");
						diffAndSetText(textL, Math.abs(i * 5).toFixed(0));
						diffAndSetAttribute(textL, "id", "attitude-textl-" + (i < 0 ? "minus-" : "") + Math.abs(i * 5).toFixed(0));
						diffAndSetAttribute(textL, "x", "390");
						diffAndSetAttribute(textL, "y", (y + textPosition).toFixed(0));
						diffAndSetAttribute(textL, "font-size", "40");
						diffAndSetAttribute(textL, "font-weight", "bold");
						diffAndSetAttribute(textL, "text-anchor", "middle");
						diffAndSetAttribute(textL, "fill", "#00ff00");
						diffAndSetAttribute(textL, "clip-path", "url(#hud-horizon-clip)");
						this._horizonElement.appendChild(textL);
						let textR = document.createElementNS(Avionics.SVG.NS, "text");
						diffAndSetText(textR, Math.abs(i * 5).toFixed(0));
						diffAndSetAttribute(textR, "id", "attitude-textr-" + (i < 0 ? "minus-" : "") + Math.abs(i * 5).toFixed(0));
						diffAndSetAttribute(textR, "x", "610");
						diffAndSetAttribute(textR, "y", (y + textPosition).toFixed(0));
						diffAndSetAttribute(textR, "font-size", "40");
						diffAndSetAttribute(textR, "font-weight", "bold");
						diffAndSetAttribute(textR, "text-anchor", "middle");
						diffAndSetAttribute(textR, "fill", "#00ff00");
						diffAndSetAttribute(textR, "clip-path", "url(#hud-horizon-clip)");
						this._horizonElement.appendChild(textR);
					}
				}
			
				SimVar.SetSimVarValue("L:RADAR_SWAP_INTERVAL", "meters", 2.2);
				SimVar.SetSimVarValue("L:RADAR_SWAP_WIDTH", "meters", 80);
				SimVar.SetSimVarValue("L:RADAR_SWAP_HEIGHT", "meters", 80);
				SimVar.SetSimVarValue("L:RADAR_SCAN_RADIUS", "meters", 1.852 * 10000);
				SimVar.SetSimVarValue("L:RADAR_SKIP_GROUND", "meters", 1);
				SimVar.SetSimVarValue("L:RADAR_SKIP_AIR", "meters", 0);
				this.GACQ_CIRCLE = document.getElementById("GACQ_CIRCLE");
				this.GUNPIPE = document.getElementById("GUNPIPE");
				this.GUNPIPE_RANGE_LIMIT = document.getElementById("GUNPIPE_RANGE_LIMIT");
				this.GUNPIPE_RANGE_ARC = document.getElementById("GUNPIPE_RANGE_ARC");
				this.GUNPIPE_RANGE_LINE = document.getElementById("GUNPIPE_RANGE_LINE");
				this.HUD_LOCKED_DATA = document.getElementById("HUD_LOCKED_DATA");
				this.HUD_LOCKED_VELOCITY = document.getElementById("HUD_LOCKED_VELOCITY");
				this.HUD_LOCKED_DISTANCE = document.getElementById("HUD_LOCKED_DISTANCE");
				this.GUNPIPE_SHOOT_ARC = document.getElementById("GUNPIPE_SHOOT_ARC");
				this.GUNPIPE_SHOOT_LABEL = document.getElementById("GUNPIPE_SHOOT_LABEL");
				this.HUD_COMBAT_INFO = document.getElementById("HUD_COMBAT_INFO");
				
				this.marks = document.getElementsByClassName("HUD_TARGET_MARK");
				this.distanceLabels = document.getElementsByClassName("HUD_TARGET_DISTANCE");
				this.circles = document.getElementsByClassName("HUD_TARGET_CIRCLE");
				this.rhombuses = document.getElementsByClassName("HUD_TARGET_RHOMBUS");		

				this._elevation_deviation_bar = document.getElementById("elevation_deviation_bar");
				this._azimuth_deviation_bar = document.getElementById("azimuth_deviation_bar");

				if (this.ddi.instrumentIndex === 5) {
					this._hudMainElement.classList.add("HMD");
				}	

				this._drawn = true;
			}
			
			this.ddi.onButtonPressed[18] = () => {
				this.ddi.showPage(FA18_DDI_Page_Type.MenuTactical);
			};
		
		} catch(e) {
			//let debug_el = this.querySelector('#debug');
			//debug_el.innerHTML += " Ex: "+e;
		}
		
    }
    update(deltaTime) {
		
		try {
			
			super.update(deltaTime);
			
			let xyz = SimVar.GetGameVarValue("CAMERA POS IN PLANE", "xyz");
			let camUserPos = new Vec3(xyz.x, xyz.y, xyz.z);
			SimVar.SetSimVarValue("L:CAMERA_POS_IN_PLANE_X", "meters", SimVar.GetSimVarValue("L:CAMERA_POS_IN_PLANE_X", "meters") + 0.75 * (camUserPos.x - SimVar.GetSimVarValue("L:CAMERA_POS_IN_PLANE_X", "meters")));
			SimVar.SetSimVarValue("L:CAMERA_POS_IN_PLANE_Y", "meters", SimVar.GetSimVarValue("L:CAMERA_POS_IN_PLANE_Y", "meters") + 0.75 * (camUserPos.y - SimVar.GetSimVarValue("L:CAMERA_POS_IN_PLANE_Y", "meters")));
			SimVar.SetSimVarValue("L:CAMERA_POS_IN_PLANE_Z", "meters", SimVar.GetSimVarValue("L:CAMERA_POS_IN_PLANE_Z", "meters") + 0.75 * (camUserPos.z - SimVar.GetSimVarValue("L:CAMERA_POS_IN_PLANE_Z", "meters")));
			
			let airspeed = Simplane.getIndicatedSpeed();
			let verticalSpeed = Simplane.getVerticalSpeed();
			let bank = Simplane.getBank();
			this._cagedVelocityVector = SimVar.GetSimVarValue("L:XMLVAR_HUD_Push_VelocityVector_Cage", "Bool");
			if (this.coupledTimer >= 0) {
				this.coupledTimer -= (deltaTime / 1000);
			}

			this.updateProjection(deltaTime);
			this.updateClutterLevel();
			this.updateHudWithGearPosition();
			diffAndSetText(this._hudAirspeedElement, airspeed.toFixed(0));
			diffAndSetText(this._hudVerticalSpeedElement, verticalSpeed.toFixed(0));
			let altitude;
			if (SimVar.GetSimVarValue("L:XMLVAR_AS04F_HUD_Alt_Selector", "number") == 1) {
				altitude = SimVar.GetSimVarValue("RADIO HEIGHT", "feet");
				if (altitude > 5000) {
					altitude = Simplane.getAltitude();
					diffAndSetText(this._hudAltitudeModeElement, "B");
					diffAndSetAttribute(this._hudAltitudeModeElement, "state", "blink");
				}
				else {
					diffAndSetText(this._hudAltitudeModeElement, "R");
					diffAndSetAttribute(this._hudAltitudeModeElement, "state", "");
				}
			}
			else {
				altitude = Simplane.getAltitude();
				diffAndSetText(this._hudAltitudeModeElement, "");
			}
			let formatedAltitude = Avionics.Utils.computeThousandsAltitude(altitude);
			diffAndSetText(this._hudAltitudeLargeElement, formatedAltitude);
			diffAndSetText(this._hudAltitudeSmallElement, (Math.abs(altitude) % 1000).toFixed(0).padStart(3, "0"));
			let heading = Simplane.getHeadingMagnetic();
			diffAndSetAttribute(this._headingElement, "transform", "translate(" + (-heading * 12.5) + ", 0)");
			diffAndSetAttribute(this._headingClipElement, "transform", "translate(" + (heading * 12.5) + ", 0)");
			let aoa = Simplane.getAngleOfAttack("degree");
			let mach = Simplane.getMachSpeed();
			let pitch = Simplane.getPitch();
			let g = Simplane.getGForce();
			this._hudPeakGValue = Utils.Clamp(this._hudPeakGValue, g, 99);
			diffAndSetText(this._hudCurrentGElement, g.toFixed(1));
			diffAndSetText(this._hudPeakGElement, this._hudPeakGValue.toFixed(1));
			diffAndSetText(this._hudAOAElement, aoa.toFixed(1));
			diffAndSetText(this._hudMachElement, mach.toFixed(2));
			this.updateLeftInfosVisibility();
			this.updateSteeringInfos(heading);
			if (this.ddi.instrumentIndex != 5) { this.updateSituation(pitch, aoa, bank); }
			let acceleration = SimVar.GetSimVarValue("ACCELERATION BODY Z", "feet per second squared");
			diffAndSetAttribute(this._energyCaret, "transform", "translate(0, " + (-acceleration * 4).toFixed(1) + ")");
			diffAndSetAttribute(this._energyCaret, "visibility", (this.clutterLevel == 0 && this._gearPosition >= 50) ? "visible" : "hidden");
			this.isAltitudeBelowThreshold();
			
			this.updateTargetDesignation(deltaTime);
			
			if (this.ddi.instrumentIndex == 5) {
				var brightness = SimVar.GetSimVarValue("L:HUDEMIS", "percent");
				if (brightness > 0)
					brightness *= Math.min(1, Math.max(0, (SimVar.GetSimVarValue("L:HMD POSITION", "percent")-50 + Math.abs(SimVar.GetSimVarValue("L:HMD YAW", "percent")-50)) / 5));
				
				diffAndSetStyle(this._hudMainElement, StyleProperty.opacity, brightness);
			}
		
		} catch(e) {
			//let debug_el = this.querySelector('#debug');
			//debug_el.innerHTML += " Ex: "+e;
		}
		
    }
    isAltitudeBelowThreshold() {
        diffAndSetStyle(this._altitudeWarningElement, StyleProperty.display, SimVar.GetSimVarValue("L:FA18_Alert_Triggered", "boolean") ? "block" : "none");
    }
    updateClutterLevel() {
		
		try {
			
			let clutterLevel = SimVar.GetSimVarValue("L:XMLVAR_AS04F_HUD_Symbology_Reject", "number");
			if (clutterLevel != this.clutterLevel) {
				this.clutterLevel = clutterLevel;
				if (clutterLevel == 2) {
					diffAndSetAttribute(this._headingElement, "visibility", "hidden");
					diffAndSetAttribute(this._headingCursorElement, "visibility", "hidden");
				}
				else {
					diffAndSetAttribute(this._headingCursorElement, "visibility", "visible");
					diffAndSetAttribute(this._headingElement, "visibility", "visible");
				}
				if (clutterLevel == 0) {
					diffAndSetAttribute(this._bankCursorElement, "visibility", "visible");
					diffAndSetAttribute(this._bankElement, "visibility", "visible");
					diffAndSetStyle(this._hudAirspeedElement, StyleProperty.border, "4px solid #00FF00");
					diffAndSetStyle(this._hudAltitudeLargeElement.parentElement, StyleProperty.border, "4px solid #00FF00");
				}
				else {
					this._hudPeakGValue = 0;
					diffAndSetAttribute(this._bankCursorElement, "visibility", "hidden");
					diffAndSetAttribute(this._bankElement, "visibility", "hidden");
					diffAndSetStyle(this._hudAirspeedElement, StyleProperty.border, "none");
					diffAndSetStyle(this._hudAltitudeLargeElement.parentElement, StyleProperty.border, "none");
				}
			}
			
		} catch(e) {
			//let debug_el = this.querySelector('#debug');
			//debug_el.innerHTML += " Ex: "+e;
		}
		
    }
    updateLeftInfosVisibility() {
		
		try {
			
			let visibility = "visible";
			if (this.clutterLevel != 0 || this._gearPosition >= 50)
				visibility = "hidden";
			diffAndSetStyle(this._hudMachLabel, StyleProperty.visibility, visibility);
			diffAndSetStyle(this._hudMachElement, StyleProperty.visibility, visibility);
			diffAndSetStyle(this._hudCurrentGLabel, StyleProperty.visibility, visibility);
			diffAndSetStyle(this._hudCurrentGElement, StyleProperty.visibility, visibility);
			diffAndSetStyle(this._hudPeakGElement, StyleProperty.visibility, visibility);
			diffAndSetStyle(this._hudPeakGElement, StyleProperty.visibility, (this._hudPeakGValue < 4) ? "hidden" : visibility);
		
		} catch(e) {
			//let debug_el = this.querySelector('#debug');
			//debug_el.innerHTML += " Ex: "+e;
		}
		
    }
    updateHudWithGearPosition() {
		
		try {
			
			let gearPosition = Simplane.getGearPosition();
			if (gearPosition != this._gearPosition) {
				this._gearPosition = gearPosition;
				if (this._gearPosition < 50) {
					diffAndSetAttribute(this._horizonZeroElement, "d", "M370 535 L370 500 L450 500 M550 500 L630 500 L630 535");
					diffAndSetAttribute(this._horizonZeroElement, "clip-path", "url(#hud-horizon-clip)");
					diffAndSetAttribute(this._waterLineElement, "visibility", "hidden");
					diffAndSetAttribute(this._eBracketElement, "visibility", "hidden");
				}
				else {
					diffAndSetAttribute(this._horizonZeroElement, "d", "M0 500 L450 500 M550 500 L1000 500");
					diffAndSetAttribute(this._horizonZeroElement, "clip-path", "");
					diffAndSetAttribute(this._waterLineElement, "visibility", "visible");
					diffAndSetAttribute(this._eBracketElement, "visibility", "visible");
				}
			}

		} catch(e) {
			//let debug_el = this.querySelector('#debug');
			//debug_el.innerHTML += " Ex: "+e;
		}
    }
    updateSituation(pitch, aoa, bank) {
		
		try {

			let vBodyX = SimVar.GetSimVarValue("VELOCITY BODY X", "feet per second");
			let vBodyY = SimVar.GetSimVarValue("VELOCITY BODY Y", "feet per second");
			let vBodyZ = SimVar.GetSimVarValue("VELOCITY BODY Z", "feet per second");
			let vVectorX = (vBodyX != 0) ? Math.atan(vBodyX / vBodyZ) * Avionics.Utils.RAD2DEG : 0;
			let vVectorY = (vBodyY != 0) ? Math.atan(vBodyY / vBodyZ) * Avionics.Utils.RAD2DEG : 0;
			let blink = false;
			if (SimVar.GetSimVarValue("SIM ON GROUND", "Bool") && Simplane.getGroundSpeed() < 80) {
				vVectorX = 0;
				vVectorY = pitch;
			}
			else {
				let minY = this.vVectorMinY + this.projectionOffset / FA18_DDI_HUD.YPERDEGREE;
				let maxY = this.vVectorMaxY + this.projectionOffset / FA18_DDI_HUD.YPERDEGREE;
				blink = (vVectorX < this.vVectorMinX || vVectorX > this.vVectorMaxX || vVectorY < minY || vVectorY > maxY);
				vVectorX = Utils.Clamp(vVectorX, this.vVectorMinX, this.vVectorMaxX);
				vVectorY = Utils.Clamp(vVectorY, minY, maxY);
			}
			diffAndSetAttribute(this._horizonContainerElement, "transform", "rotate(" + bank.toFixed(1) + " 500 " + (500 + this.projectionOffset) + ")");
			diffAndSetAttribute(this._waterLineElement, "transform", "translate(0, " + (this.projectionOffset) + ")");
			if (this._cagedVelocityVector) {
				diffAndSetAttribute(this._velocityElement, "transform", "translate(0," + (-vVectorY * FA18_DDI_HUD.YPERDEGREE + this.projectionOffset).toFixed(1) + ")");
				diffAndSetAttribute(this._horizonElement, "transform", "translate(0, " + (-pitch * FA18_DDI_HUD.YPERDEGREE + this.projectionOffset).toFixed(1) + ")");
				diffAndSetAttribute(this._horizonClipElement, "transform", "translate(0, " + (pitch * FA18_DDI_HUD.YPERDEGREE + -this.projectionOffset).toFixed(1) + ")");
				if (Math.abs(vVectorX) > 2) {
					diffAndSetAttribute(this._ghostVelocityElement, "transform", "translate(" + (vVectorX * 12.5).toFixed(0) + ", " + (-vVectorY * FA18_DDI_HUD.YPERDEGREE + this.projectionOffset).toFixed(1) + ")");
					diffAndSetAttribute(this._ghostVelocityElement, "visibility", "visible");
				}
				else {
					diffAndSetAttribute(this._ghostVelocityElement, "visibility", "hidden");
				}
				diffAndSetAttribute(this._ghostVelocityElement, "state", (blink) ? "blink" : "");
				diffAndSetAttribute(this._velocityElement, "state", "");
			}
			else {
				diffAndSetAttribute(this._velocityElement, "transform", "translate(" + (vVectorX * 12.5).toFixed(0) + ", " + (-vVectorY * FA18_DDI_HUD.YPERDEGREE + this.projectionOffset).toFixed(1) + ")");
				diffAndSetAttribute(this._horizonElement, "transform", "translate(" + (vVectorX * 12.5).toFixed(0) + ", " + (-pitch * FA18_DDI_HUD.YPERDEGREE + this.projectionOffset).toFixed(1) + ")");
				diffAndSetAttribute(this._horizonClipElement, "transform", "translate(" + (vVectorX * 12.5).toFixed(0) + ", " + (pitch * FA18_DDI_HUD.YPERDEGREE + -this.projectionOffset).toFixed(1) + ")");
				diffAndSetAttribute(this._velocityElement, "state", (blink) ? "blink" : "");
				diffAndSetAttribute(this._ghostVelocityElement, "visibility", "hidden");
			}
			let aoaDiff = 0;
			if (aoa < 7.4)
				aoaDiff = aoa - 7.4;
			else if (aoa > 8.8)
				aoaDiff = aoa - 8.8;
			diffAndSetAttribute(this._eBracketElement, "transform", "translate(0, " + ((-vVectorY + aoaDiff) * FA18_DDI_HUD.YPERDEGREE + this.projectionOffset) + ")");
			if (Math.abs(bank) > 45) {
				diffAndSetAttribute(this._bankCursorElement, "transform", "rotate(" + (Math.sign(bank) * 45) + " 500 500)");
				diffAndSetAttribute(this._bankCursorElement, "state", "blink");
			}
			else {
				diffAndSetAttribute(this._bankCursorElement, "transform", "rotate(" + (bank).toFixed(1) + " 500 500)");
				diffAndSetAttribute(this._bankCursorElement, "state", "");
			}
			
			// ILS
			if (SimVar.GetSimVarValue("L:Glasscockpit_ILS_Mode", "bool") && SimVar.GetSimVarValue("L:FA18_DDI_ILS_GUIDANCE", "bool") && SimVar.GetSimVarValue("NAV HAS GLIDE SLOPE:1", "bool") && 
					SimVar.GetSimVarValue("NAV GSI:1", "number") != 0 && SimVar.GetSimVarValue("NAV GSI:1", "number") > -119 && SimVar.GetSimVarValue("NAV GSI:1", "number") < 119) {
				diffAndSetAttribute(this._elevation_deviation_bar, "transform", "translate(0, " + (SimVar.GetSimVarValue("NAV GSI:1", "number")/2/1.19) + ")");
				diffAndSetAttribute(this._elevation_deviation_bar, "visibility", "visible");
			}
			else {
				diffAndSetAttribute(this._elevation_deviation_bar, "visibility", "hidden");
			}
			
			if (SimVar.GetSimVarValue("L:Glasscockpit_ILS_Mode", "bool") && SimVar.GetSimVarValue("L:FA18_DDI_ILS_GUIDANCE", "bool") && SimVar.GetSimVarValue("NAV HAS LOCALIZER:1", "bool") &&
					SimVar.GetSimVarValue("NAV CDI:1", "number") != 0 && SimVar.GetSimVarValue("NAV CDI:1", "number") > -127 && SimVar.GetSimVarValue("NAV CDI:1", "number") < 127) {
				diffAndSetAttribute(this._azimuth_deviation_bar, "transform", "translate(" + (SimVar.GetSimVarValue("NAV CDI:1", "number")/2/1.27) + ", 0)");
				diffAndSetAttribute(this._azimuth_deviation_bar, "visibility", "visible");
			}
			else {
				diffAndSetAttribute(this._azimuth_deviation_bar, "visibility", "hidden");
			}
		
		} catch(e) {
			//let debug_el = this.querySelector('#debug');
			//debug_el.innerHTML += " Ex: "+e;
		}
		
    }
    computeSteeringTranslation(planeHeading, steeringBearing) {
		
        let steeringError = Avionics.Utils.diffAngle(planeHeading, steeringBearing);
        let translationBase = 0;
        if (Math.abs(steeringError) <= 5) {
            translationBase = steeringError;
        }
        else if (Math.abs(steeringError) > 30) {
            translationBase = 15 * Math.sign(steeringError);
        }
        else {
            translationBase = 0.4 * steeringError + (Math.sign(steeringError) * 3);
        }
        return translationBase * 12.5;
    }
    updateSteeringInfos(planeHeading) {
        let steeringMode = SimVar.GetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number");
        let visible = false;
        switch (steeringMode) {
            case FA18_DDI_Steering_Source.TACAN:
                let tacanMode = SimVar.GetSimVarValue("L:Glasscockpit_TACAN_Mode", "number");
                if (SimVar.GetSimVarValue("NAV HAS TACAN:1", "Bool") && tacanMode != 0) {
                    let distance = SimVar.GetSimVarValue("TACAN STATION DISTANCE:1", "nautical mile");
                    let tacanIdentifier = SimVar.GetSimVarValue("TACAN STATION IDENT:1", "string");
                    let bearing = Avionics.Utils.clampAngle(SimVar.GetSimVarValue("TACAN STATION RADIAL:1", "degree") + 180);
                    diffAndSetText(this._hudSteeringDataElement, (tacanMode == 1 ? fastToFixed(distance, 1) : "") + " " + tacanIdentifier);
                    diffAndSetAttribute(this._headingSteeringBugElement, "transform", "translate(" + fastToFixed(this.computeSteeringTranslation(planeHeading, bearing), 1) + ", 0)");
                    visible = true;
                }
                diffAndSetText(this._hudCplModeElement, "CPL TCN");
                break;
            case FA18_DDI_Steering_Source.WYPT:
                if (this.ddi.waypointManager.initialized && this.ddi.waypointManager.isCurrentWaypointValid) {
                    let distance = this.ddi.flightPlanManager.getDistanceToWaypoint(this.ddi.waypointManager.currentWaypoint);
                    let bearing = this.ddi.flightPlanManager.getBearingToWaypoint(this.ddi.waypointManager.currentWaypoint, true);
                    diffAndSetAttribute(this._headingSteeringBugElement, "transform", "translate(" + fastToFixed(this.computeSteeringTranslation(planeHeading, bearing), 1) + ", 0)");
                    diffAndSetText(this._hudSteeringDataElement, fastToFixed(distance, 1) + " W" + this.ddi.waypointManager.currentWaypointNumber);
                    visible = true;
                }
                diffAndSetText(this._hudCplModeElement, "CPL WYPT");
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
        if (this.isCoupled || this.coupledTimer > 0) {
            diffAndSetStyle(this._hudCplModeElement, StyleProperty.visibility, "visible");
        }
        else {
            diffAndSetStyle(this._hudCplModeElement, StyleProperty.visibility, "hidden");
        }
        diffAndSetAttribute(this._hudCplModeElement, "state", (this.coupledTimer > 0) ? "blink" : "");
        diffAndSetStyle(this._hudSteeringDataElement, StyleProperty.visibility, ((this.clutterLevel != 2) && visible) ? "visible" : "hidden");
        diffAndSetAttribute(this._headingSteeringBugElement, "visibility", ((this.clutterLevel != 2) && visible) ? "visible" : "hidden");
    }

	updateTargetDesignation(deltaTime) {
		
		try {
				
			let lockedFound = 0;
			let lockedShoot = 0;
			let GACQactive = SimVar.GetSimVarValue("L:RADAR_GACQ_ACTIVE", "meters") == 1 && SimVar.GetSimVarValue("A:LIGHT TAXI ON", "bool");
			
			diffAndSetAttribute(this.GACQ_CIRCLE, "display", GACQactive && SimVar.GetSimVarValue("L:RADAR_TARGET_LOCKED", "meters") == 0 ? "block" : "none");
			diffAndSetAttribute(this.HUD_COMBAT_INFO, "display", GACQactive ? "block" : "none");
			diffAndSetAttribute(this.GUNPIPE, "display", GACQactive && SimVar.GetSimVarValue("L:RADAR_TARGET_LOCKED", "meters") != 0 ? "block" : "none");
			
			for (var id = 0; id < this.marks.length; id++) {
				var name = SimVar.GetSimVarValue("L:RADAR_TARGET_"+id+"_ID", "meters");
				
				if (SimVar.GetSimVarValue("A:LIGHT TAXI ON", "bool") && name != 0 && !isNaN(name)) {
					var heading = -SimVar.GetSimVarValue("L:RADAR_TARGET_"+id+"_HEADING", "meters") * 180 / 3.1416;
					var pitch = SimVar.GetSimVarValue("L:RADAR_TARGET_"+id+"_PITCH", "meters") * 180 / 3.1416;
					
					// COMPENSATE HEAD TRACKING
					if (this.ddi.instrumentIndex === 5) {
						var hmdHeading = (SimVar.GetSimVarValue("L:HMD YAW", "percent")-50)/50*180;
						heading = (heading - hmdHeading) / 2;
						pitch = (pitch + (SimVar.GetSimVarValue("L:HMD POSITION", "percent")-50)/50*90) / 2 - 
							SimVar.GetSimVarValue("L:HMD INITIAL PITCH", "degrees") * Math.abs(Math.sin(hmdHeading/180*3.1416) / 4);
					}
					
					heading *=  1000 / 18;
					pitch *=  1000 / 18;
					
					// OUTSIDE OF HUD OR NOT LOCKED
					if (heading < -500 || heading > 500 || pitch < -500 || pitch > 500 || GACQactive && 
							(SimVar.GetSimVarValue("L:RADAR_TARGET_LOCKED", "meters") == 0 || SimVar.GetSimVarValue("L:RADAR_TARGET_LOCKED", "meters") != name)) {
						
						diffAndSetAttribute(this.marks[id], "display", "none");

						// LOCK TARGET_
						if (this.ddi.instrumentIndex !== 5 && GACQactive && SimVar.GetSimVarValue("L:RADAR_TARGET_LOCKED", "meters") == 0 && Math.pow(Math.pow(heading, 2) + Math.pow(pitch, 2), 0.5) < 430) {
							SimVar.SetSimVarValue("L:RADAR_TARGET_LOCKED", "meters", name);
							SimVar.SetSimVarValue("L:RADAR_TARGET_LOCKED_RADIUS", "meters", Math.pow(Math.pow(heading, 2) + Math.pow(pitch, 2), 0.5));
							lockedFound = 1;
						}
					} else {
						let x3 = heading + 500;
						let y3 = pitch + 280;
						
						diffAndSetAttribute(this.marks[id], "transform", "translate("+ x3 + ", "+ y3 + ")");
						diffAndSetAttribute(this.marks[id], "display", "block");
						
						diffAndSetAttribute(this.circles[id], "display", SimVar.GetSimVarValue("L:RADAR_GACQ_ACTIVE", "meters") == 0 ? "block" : "none");

						if (this.ddi.instrumentIndex !== 5 && GACQactive && SimVar.GetSimVarValue("L:RADAR_TARGET_LOCKED", "meters") == name) {
							let compensation = Math.pow(1 + SimVar.GetSimVarValue("A:VELOCITY BODY Z", "meters per second") / this.ballistics[0][3], 0.5) / Math.pow(SimVar.GetSimVarValue("A:AMBIENT DENSITY", "kilograms") / 1.25, 0.5);
							let rangeLimit = Math.min(11500/3.23, 1000 * compensation);
							
							lockedFound = 1;

							diffAndSetAttribute(this.rhombuses[id], "display", "block");
							diffAndSetAttribute(this.distanceLabels[id], "display", "none");

							this.prevVelocity = (SimVar.GetSimVarValue("L:RADAR_TARGET_"+id+"_RANGE", "meters") - this.prevDistance) + (1 - deltaTime/1000) * this.prevVelocity;
							diffAndSetText(this.HUD_LOCKED_VELOCITY, (this.prevVelocity > 0 ? "+" : "") + Math.round(this.prevVelocity * 3.23 / 10) * 10 + "V");
							diffAndSetText(this.HUD_LOCKED_DISTANCE, Math.round(SimVar.GetSimVarValue("L:RADAR_TARGET_"+id+"_RANGE", "meters") * 3.28 / 100)*100 + " FT");
							this.prevDistance = SimVar.GetSimVarValue("L:RADAR_TARGET_"+id+"_RANGE", "meters");
							
							let gunRange = Math.min(11500, this.prevDistance * 3.23) / 12000 * 360;
							
							let pipeAngle = this.getBallisticsAngle(this.prevDistance, compensation);
							
							var heading2 = heading + SimVar.GetSimVarValue("L:RADAR_TARGET_BALLISTIC_HEADING", "meters") * 180 / 3.1416 * 1000 / 18;
							var pitch2 = pitch - SimVar.GetSimVarValue("L:RADAR_TARGET_BALLISTIC_PITCH", "meters") * 180 / 3.1416 * 1000 / 18;						
						
							let x4 = 500 + (pipeAngle.x) * 1000 / 18 + heading2;
							let y4 = 500 + (pipeAngle.y) * 1000 / 18 + pitch2;
							diffAndSetAttribute(this.GUNPIPE, "transform", "translate("+ x4 + ", "+ y4 + ") rotate(-90)");
							diffAndSetAttribute(this.GUNPIPE_RANGE_LIMIT, "transform", "rotate(" + 3.23 * rangeLimit / 12000 * 360 + ")");
							diffAndSetAttribute(this.GUNPIPE_RANGE_LINE, "transform", "rotate("+ gunRange + ")");
							
							let arc = this.drawArc(76, gunRange);
							diffAndSetAttribute(this.GUNPIPE_RANGE_ARC, "d", arc);
							
							// SHOOT!
							let gunpipeScale = 10 - 9 * Math.pow(this.prevDistance/rangeLimit, 0.25);
						
							if (this.prevDistance < rangeLimit && Math.abs(x3 - x4) < 20 * gunpipeScale && Math.abs(y3 - y4) < 20 * gunpipeScale) {
								let counter = SimVar.GetSimVarValue("L:RADAR_TARGET_SHOOT", "meters");
								let lastCounter = counter;

								if (SimVar.GetSimVarValue("A:BRAKE LEFT POSITION", "bool")) {
									lockedShoot = 1;
									
									let shoot = this.drawArc(150, Math.min(1, counter) * 359.99);
									diffAndSetAttribute(this.GUNPIPE_SHOOT_ARC, "d", shoot);
									diffAndSetAttribute(this.GUNPIPE_SHOOT_ARC, "display", "block");
									diffAndSetAttribute(this.GUNPIPE_SHOOT_ARC, "stroke", counter < 1 ? "#00ff00" : "#ffff00");
									
									counter += deltaTime/1000 * gunpipeScale;
									
									if (lastCounter < 1 && counter >= 1)
										this.hitsCounter++;
								} else {
									counter = 0.001;
								}
								
								SimVar.SetSimVarValue("L:RADAR_TARGET_SHOOT", "meters", Math.min(1, counter));
								diffAndSetAttribute(this.GUNPIPE_SHOOT_LABEL, "display", "block");
								//diffAndSetText(this.HUD_COMBAT_INFO, "ENGAGE BRAKES TO SHOOT");
							}
							
						} else {
							diffAndSetAttribute(this.rhombuses[id], "display", "none");
							diffAndSetAttribute(this.distanceLabels[id], "display", "block");
							diffAndSetText(this.distanceLabels[id], '\xa0\xa0\xa0\xa0\xa0\xa0' + (SimVar.GetSimVarValue("L:RADAR_TARGET_"+id+"_RANGE", "meters")/1852).toFixed(1));
						}
					}
					
				} else {
					diffAndSetAttribute(this.marks[id], "display", "none");
				}
			}
			
			if (this.ddi.instrumentIndex !== 5) {
				// LOCKED
				if (lockedFound == 1 && SimVar.GetSimVarValue("L:RADAR_TARGET_LOCKED", "meters") != 0) {
					diffAndSetAttribute(this.HUD_LOCKED_DATA, "display", "block");
					diffAndSetAttribute(this.GUNPIPE, "display", "block");
				}
				// RELEASE LOCK
				else if (lockedFound == 0 && SimVar.GetSimVarValue("L:RADAR_TARGET_LOCKED", "meters") != 0)
					SimVar.SetSimVarValue("L:RADAR_TARGET_LOCKED", "meters", 0);
				// UNLOCKED
				else {
					diffAndSetAttribute(this.HUD_LOCKED_DATA, "display", "none");
					diffAndSetAttribute(this.GUNPIPE, "display", "none");
				}
				
				 // SHOOT
				if (lockedShoot == 0 && SimVar.GetSimVarValue("L:RADAR_TARGET_SHOOT", "meters") != 0) {
					SimVar.SetSimVarValue("L:RADAR_TARGET_SHOOT", "meters", 0);
					diffAndSetAttribute(this.GUNPIPE_SHOOT_ARC, "display", "none");
					diffAndSetAttribute(this.GUNPIPE_SHOOT_LABEL, "display", "none");
					diffAndSetText(this.HUD_COMBAT_INFO, "HITS: " + this.hitsCounter + " / MISSES: " + this.missesCounter);
					
					if (SimVar.GetSimVarValue("L:RADAR_TARGET_SHOOT", "meters") > 0.01 && SimVar.GetSimVarValue("L:RADAR_TARGET_SHOOT", "meters") < 1)
						this.missesCounter++;
				}
			}
			
		} catch(e) {
			//let debug_el = this.querySelector('#debug');
			//debug_el.innerHTML += " Ex: "+e;
		}
			
	}
	
	drawArc(radius, degree) {
		return "M "+radius+" 0 A "+radius+" "+radius+" 0 " + (degree > 180 ? 1 : 0) + " 1 " + radius*Math.cos(3.1416 / 180 * degree) + " " + (radius*Math.sin(3.1416 / 180 * degree));
	}
	
	getBallisticsAngle(range, compensation) {
		
		// effective 500m/s
		let angle = 0;
		let time = 0;
		let velocity = 0;
		
		range = Math.min(2000, range / compensation);
		
		for(let i = 0; i < this.ballistics.length - 1; i++) {
			if (range > this.ballistics[i][0] && range <= this.ballistics[i+1][0]) {
				let mod = (range - this.ballistics[i][0])/(this.ballistics[i+1][0] - this.ballistics[i][0]);
				time = this.ballistics[i][1] + (this.ballistics[i+1][1] - this.ballistics[i][1]) * mod;
				angle = this.ballistics[i][2] + (this.ballistics[i+1][2] - this.ballistics[i][2]) * mod;
				velocity = this.ballistics[i][3] + (this.ballistics[i+1][3] - this.ballistics[i][3]) * mod;
				break;
			}
		}
		
		let x = -angle * Math.sin(SimVar.GetSimVarValue("A:PLANE BANK DEGREES", "radians"));// - SimVar.GetSimVarValue("A:ROTATION VELOCITY BODY Y", "degrees per second") * time;
		let y = angle * Math.cos(SimVar.GetSimVarValue("A:PLANE BANK DEGREES", "radians"));// - SimVar.GetSimVarValue("A:ROTATION VELOCITY BODY X", "degrees per second") * time;
		
		SimVar.SetSimVarValue("L:RADAR_TARGET_BALLISTIC_TIME", "meters", time);
		
		return {x:x, y:y};
	}

    updateProjection(_deltaTime) {
        this.projectionOffset = FA18_DDI_HUD.PROJECTION_OFFSET;
    }
}
FA18_DDI_HUD.YPERDEGREE = 53;
FA18_DDI_HUD.PROJECTION_OFFSET = -215;
customElements.define("fa18-ddi-hud", FA18_DDI_HUD);
//# sourceMappingURL=FA18_DDI_HUD.js.map