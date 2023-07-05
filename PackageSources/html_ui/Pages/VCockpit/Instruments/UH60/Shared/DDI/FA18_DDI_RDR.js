class FA18_DDI_RDR extends FA18_DDI_Page {
    constructor() {
        super(...arguments);
        this.vVectorMinX = -17;
        this.vVectorMaxX = 17;
        this.vVectorMinY = -8;
        this.vVectorMaxY = 6;
        this._rdrPeakGValue = 0;
        this.projectionOffset = 0;
        this.clutterLevel = -1;
        this.isCoupled = false;
        this.coupledTimer = -1;
		this.swapDirection = 1;
		this.swapPosition = 0;
		this._drawn = false;
    }
    get templateID() { return "FA18_DDI_RDR"; }
    show() {
        super.show();
        FA18_DDI_RDR.DEBUG_INSTANCE = this;

		if (!this._drawn) {
			this.radar_symbology = this.ddi.getChildById("radar_symbology");
			this.swap_line = this.ddi.getChildById("SWAP_x5F_INDICATOR");
			this.RDRCurrentScanRange = this.ddi.getChildById("RDRCurrentScanRange");
			this.RDRWidth = this.ddi.getChildById("RDRWidth");
			
			//updateRadar(0);
			
			this._drawn = true;
		}

		this.ddi.onButtonPressed[7] = () => {
			SimVar.SetSimVarValue("A:LIGHT TAXI", "bool", !SimVar.GetSimVarValue("A:LIGHT TAXI", "bool"));
		};
		
		this.ddi.onButtonPressed[8] = () => {
			SimVar.SetSimVarValue("L:RADAR_ERASE_PRESSED", "bool", 1);
		};

		this.ddi.onButtonPressed[11] = () => {
			SimVar.SetSimVarValue("L:RADAR_RANGE_DECREASE_PRESSED", "bool", 1);
		};

		this.ddi.onButtonPressed[12] = () => {
			SimVar.SetSimVarValue("L:RADAR_RANGE_INCREASE_PRESSED", "bool", 1);
		};

		this.ddi.onButtonPressed[18] = () => {
			this.ddi.showPage(FA18_DDI_Page_Type.MenuTactical);
		};

		this.ddi.onButtonPressed[19] = () => {
			SimVar.SetSimVarValue("L:RADAR_WIDTH_PRESSED", "bool", 1);
		};
		
		this.ddi.onButtonPressed[20] = () => {
			SimVar.SetSimVarValue("L:RADAR_MODE_PRESSED", "bool", 1);
		};
		
    }
    update(deltaTime) {
        super.update(deltaTime);
		

		try {
			if(SimVar.GetSimVarValue("L:RADAR_ERASE_PRESSED", "bool")) {
				SimVar.SetSimVarValue("L:RADAR_ERASE_PRESSED", "bool", 0);
				for (var id = 0; id < 20; id++) {
					SimVar.SetSimVarValue("L:RADAR_TARGET_"+id+"_ID", "meters", 0);
				}
				this.updateRadar(deltaTime);
			}
			
			if (SimVar.GetSimVarValue("L:RADAR_RANGE_DECREASE_PRESSED", "bool")) {
				SimVar.SetSimVarValue("L:RADAR_RANGE_DECREASE_PRESSED", "bool", 0);
				this.changeScanRange(2);
			};

			if (SimVar.GetSimVarValue("L:RADAR_RANGE_INCREASE_PRESSED", "bool")) {
				SimVar.SetSimVarValue("L:RADAR_RANGE_INCREASE_PRESSED", "bool", 0);
				this.changeScanRange(0.5);
			};


			if (SimVar.GetSimVarValue("L:RADAR_WIDTH_PRESSED", "bool")) {
				SimVar.SetSimVarValue("L:RADAR_WIDTH_PRESSED", "bool", 0);
				this.changeScanWidth();
			};
			
			if (SimVar.GetSimVarValue("L:RADAR_MODE_PRESSED", "bool")) {
				SimVar.SetSimVarValue("L:RADAR_MODE_PRESSED", "bool", 0);
				this.changeMode();
			};

			if (SimVar.GetSimVarValue("A:LIGHT TAXI ON", "bool"))
				this.updateRadar(deltaTime);
			
			diffAndSetText(this.RDRCurrentScanRange, Math.round(SimVar.GetSimVarValue("L:RADAR_SCAN_RADIUS", "meters") / 1852));
			diffAndSetText(this.RDRWidth, Math.round(SimVar.GetSimVarValue("L:RADAR_SWAP_WIDTH", "meters")) + "°");
			
		} catch(e) {
			let debug_el = this.ddi.getChildById('RDR_DEBUG');
			debug_el.innerHTML += " Ex: "+e;
		}
    }
	
	changeMode() {
		let GACQactive = SimVar.GetSimVarValue("L:RADAR_GACQ_ACTIVE", "meters");
		
		if (GACQactive == 1) {
			SimVar.SetSimVarValue("L:RADAR_SWAP_INTERVAL", "meters", 2.2);
			SimVar.SetSimVarValue("L:RADAR_SWAP_WIDTH", "meters", 80);
			SimVar.SetSimVarValue("L:RADAR_SWAP_HEIGHT", "meters", 80);
			SimVar.SetSimVarValue("L:RADAR_SCAN_RADIUS", "meters", 1.852 * 10000);			
			SimVar.SetSimVarValue("L:RADAR_GACQ_ACTIVE", "meters", 0);
		}
		else {
			SimVar.SetSimVarValue("L:RADAR_SWAP_INTERVAL", "meters", 0.5);
			SimVar.SetSimVarValue("L:RADAR_SWAP_WIDTH", "meters", 20);
			SimVar.SetSimVarValue("L:RADAR_SWAP_HEIGHT", "meters", 20);
			SimVar.SetSimVarValue("L:RADAR_SCAN_RADIUS", "meters", 1.852 * 5000);
			SimVar.SetSimVarValue("L:RADAR_GACQ_ACTIVE", "meters", 1);
		}
		
	}
	
	changeScanRange(step) {
		let index = SimVar.GetSimVarValue("L:RADAR_GACQ_ACTIVE", "meters") ? -10 : step * Math.round(SimVar.GetSimVarValue("L:RADAR_SCAN_RADIUS", "meters") / 1852);
		
		SimVar.SetSimVarValue("L:RADAR_SCAN_RADIUS", "meters", Math.max(5, Math.min(40, index)) * 1852);
	}
	
	changeScanWidth() {
		let widthOptions = [20, 40, 60, 80, 140];
		let currentWidth = Math.round(SimVar.GetSimVarValue("L:RADAR_SWAP_WIDTH", "meters"));
		let currentIndex = 0;
		
		for (let i = 0; i < widthOptions.length; i++) {
			if (currentWidth == widthOptions[i]) {
				currentIndex = i;
				break;
			}
		}
			
		currentIndex++;
		
		if (SimVar.GetSimVarValue("L:RADAR_GACQ_ACTIVE", "meters") || currentIndex >= widthOptions.length)
			currentIndex = 0;
		
		SimVar.SetSimVarValue("L:RADAR_SWAP_WIDTH", "meters", widthOptions[currentIndex]);
		SimVar.SetSimVarValue("L:RADAR_SWAP_HEIGHT", "meters", widthOptions[currentIndex]);
	}
	
	updateRadar(deltaTime) {
		let scale = 778.55 / SimVar.GetSimVarValue("L:RADAR_SCAN_RADIUS", "meters");
		let currentWidth = Math.round(SimVar.GetSimVarValue("L:RADAR_SWAP_WIDTH", "meters")) / 140;
		let sweepEnd = false;
		
		let interval = Math.max(0.5, 4 * currentWidth);
		if (interval != SimVar.SetSimVarValue("L:RADAR_SWAP_INTERVAL", "meters"))
			SimVar.SetSimVarValue("L:RADAR_SWAP_INTERVAL", "meters", interval);

		if (this.swapPosition <= 50 - currentWidth * 50) {
			if (this.swapDirection == -1) {
				this.swapDirection = 50 - currentWidth * 50;
				sweepEnd = true;
			}
			
			this.swapDirection = 1;
		}
		else if (this.swapPosition >= 50 + currentWidth * 50) {
			if (this.swapDirection == 1) {
				this.swapDirection = 50 + currentWidth * 50;
				sweepEnd = true;
			}

			this.swapDirection = -1;
		}
		
		if (sweepEnd) {
			
			for (var id = 0; id < 20; id++) {
				
				var mark = this.ddi.getChildById("RADAR_x5F_MARK_x5F_"+id)
				
				var name = SimVar.GetSimVarValue("L:RADAR_TARGET_"+id+"_ID", "meters").toFixed(0);
				
				var heading = SimVar.GetSimVarValue("L:RADAR_TARGET_"+id+"_HEADING", "meters");
				var pitch = SimVar.GetSimVarValue("L:RADAR_TARGET_"+id+"_PITCH", "meters") - SimVar.GetSimVarValue("A:PLANE PITCH DEGREES", "radians");

				if (name != "0" && name != "" && heading < 1.57 && heading > -1.57) {
					//var distanceLabel = document.getElementById("TARGET_x5F_DISTANCE_x5F_"+id);
					//var nameLabel = document.getElementById("TARGET_x5F_NAME_x5F_"+id);
					var range = scale * SimVar.GetSimVarValue("L:RADAR_TARGET_"+id+"_RANGE", "meters") * Math.cos(pitch);
					//distanceLabel.textContent = range + "m";
					//nameLabel.textContent = "#" + name;
					
					let x3 = -range * Math.sin(heading);
					let y3 = -range * Math.cos(heading);
					
					//let x3 = Math.max(-380,Math.min(380, range * Math.sin(heading)));
					//let y3 = Math.max(-760,Math.min(0, -range * Math.cos(heading)));
					
					if (x3 < -380 || x3 > 380 || y3 > -10 || y3 < -760 ) {
						mark.style.display = "none";
					} else {
						mark.style.display = "block";
						mark.style.transform = "translate("+ x3 + "px, "+ y3 + "px)";
					}
				} else {
					mark.style.display = "none";
				}
			}
		}

		this.swapPosition = Math.min(100, Math.max(0, this.swapPosition + this.swapDirection * deltaTime / 20));
		this.swap_line.style.transform = "translate("+7.78*this.swapPosition+"px, 0)";
	}
	
    updateProjection(_deltaTime) {
        //this.projectionOffset = FA18_DDI_RDR.PROJECTION_OFFSET;
    }
}
//FA18_DDI_RDR.YPERDEGREE = 53;
//FA18_DDI_RDR.PROJECTION_OFFSET = -215;
customElements.define("fa18-ddi-rdr", FA18_DDI_RDR);
//# sourceMappingURL=FA18_DDI_RDR.js.map