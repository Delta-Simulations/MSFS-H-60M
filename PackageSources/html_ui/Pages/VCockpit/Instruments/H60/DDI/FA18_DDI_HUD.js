
 
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
}



 
FA18_DDI_HUD.YPERDEGREE = 53;
FA18_DDI_HUD.PROJECTION_OFFSET = -215;
customElements.define("fa18-ddi-hud", FA18_DDI_HUD);