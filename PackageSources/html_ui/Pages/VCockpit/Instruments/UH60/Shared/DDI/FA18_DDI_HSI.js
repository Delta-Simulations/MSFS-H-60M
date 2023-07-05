class FA18_DDI_HSI extends FA18_DDI_Page {
    constructor() {
        super(...arguments);
        this.isModeMenuActive = false;
        this.modeMenuTimer = -1;
    }
    init(ddi) {
        super.init(ddi);
        this.ddi.map.init(this);
        SimVar.SetSimVarValue("L:FA18_DDI_HSI_BING_MAP_SHOWN", "Bool", true);
        this._hsi = this.ddi.getChildById("Compass");
        this._hsi.setInstrument(this.ddi);
        this.scaleValue = this.ddi.getChildById("HsiScaleButton");
        diffAndSetText(this.scaleValue, "SCL/" + this.ddi.map.getDisplayRange());
        this.currentWaypointNumberValue = this.ddi.getChildById("HsiCurrentWaypointIndex");
        this.sequenceNumber = this.ddi.getChildById("HsiSequenceNumber");
        this.label1 = this.getElementsByClassName("sk-label-1")[0];
        this.label2 = this.getElementsByClassName("sk-label-2")[0];
        this.label3 = this.getElementsByClassName("sk-label-3")[0];
        this.label4 = this.getElementsByClassName("sk-label-4")[0];
        this.label5 = this.getElementsByClassName("sk-label-5")[0];
        this.label11 = this.getElementsByClassName("sk-label-11")[0];
        this.updateWaypointIndex();
        this.updateSequenceNumber();
    }
    show() {
        super.show();
        for (let i of [1, 2, 6, 7, 9, 10, 14, 16, 17, 20]) {
            this.ddi.setPageButton(i, FA18_DDI_Page_Type.NotImplemented);
        }
        this.ddi.onButtonPressed[8] = () => {
            this.ddi.map.decZoom();
            diffAndSetText(this.scaleValue, "SCL/" + this.ddi.map.getDisplayRange());
        };
        this.ddi.onButtonPressed[11] = () => {
            if (this.ddi.waypointManager.initialized && this.ddi.waypointManager.isCurrentWaypointValid) {
                if (SimVar.GetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number") === FA18_DDI_Steering_Source.WYPT)
                    SimVar.SetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number", FA18_DDI_Steering_Source.None);
                else
                    SimVar.SetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number", FA18_DDI_Steering_Source.WYPT);
            }
        };
        this.ddi.onButtonPressed[12] = () => {
            this.ddi.waypointManager.switchToNextWaypoint();
        };
        this.ddi.onButtonPressed[13] = () => {
            this.ddi.waypointManager.switchToPreviousWaypoint();
        };
        this.ddi.onButtonPressed[15] = () => {
            this.ddi.waypointManager.toggleSequences();
        };
        this.ddi.setPageButton(18, FA18_DDI_Page_Type.MenuTactical);
        this.switchToRootMenu();
    }
    switchToRootMenu() {
        this.isModeMenuActive = false;
        diffAndSetText(this.label1, "A C L");
        diffAndSetText(this.label2, "V E C");
        diffAndSetText(this.label3, "M O D E");
        diffAndSetText(this.label4, "I L S");
        diffAndSetText(this.label5, "T C N");
        this.ddi.onButtonPressed[3] = () => {
            this.switchToModeMenu();
        };
        
		//this.ddi.setPageButton(4, FA18_DDI_Page_Type.NotImplemented);
		
		this.ddi.onButtonPressed[4] = () => {
			if (SimVar.GetSimVarValue("L:FA18_DDI_ILS_GUIDANCE", "bool"))
				SimVar.SetSimVarValue("L:FA18_DDI_ILS_GUIDANCE", "bool", false)
			else if (SimVar.GetSimVarValue("L:Glasscockpit_ILS_Mode", "number") != 0 && (SimVar.GetSimVarValue("NAV HAS GLIDE SLOPE:1", "bool") || SimVar.GetSimVarValue("NAV HAS LOCALIZER:1", "bool")))
				SimVar.SetSimVarValue("L:FA18_DDI_ILS_GUIDANCE", "bool", true)	
        };
        
		this.ddi.onButtonPressed[5] = () => {
            if (SimVar.GetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number") === FA18_DDI_Steering_Source.TACAN)
                SimVar.SetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number", FA18_DDI_Steering_Source.None);
            else if ((SimVar.GetSimVarValue("NAV HAS TACAN:1", "Bool") && SimVar.GetSimVarValue("L:Glasscockpit_TACAN_Mode", "number") != 0))
                SimVar.SetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number", FA18_DDI_Steering_Source.TACAN);
        };
    }
    switchToModeMenu() {
        this.isModeMenuActive = true;
        this.modeMenuTimer = 10;
        diffAndSetText(this.label1, "S L E W");
        diffAndSetText(this.label2, "D C T R");
        diffAndSetText(this.label3, "M A P");
        diffAndSetText(this.label4, "N U P");
        diffAndSetText(this.label5, "T U P");
        this.ddi.onButtonPressed[3] = () => {
            SimVar.SetSimVarValue("L:FA18_DDI_HSI_BING_MAP_SHOWN", "Bool", !SimVar.GetSimVarValue("L:FA18_DDI_HSI_BING_MAP_SHOWN", "number"));
            this.modeMenuTimer = 10;
        };
        this.ddi.onButtonPressed[4] = () => {
            SimVar.SetSimVarValue("L:FA18_DDI_HSI_NORTH_UP", "Bool", true);
            this.modeMenuTimer = 10;
        };
        this.ddi.onButtonPressed[5] = () => {
            SimVar.SetSimVarValue("L:FA18_DDI_HSI_NORTH_UP", "Bool", false);
            this.modeMenuTimer = 10;
        };
    }
    update(deltaTime) {
        super.update(deltaTime);
        if (this.modeMenuTimer > 0) {
            this.modeMenuTimer -= (deltaTime / 1000);
        }
        else {
            if (this.isModeMenuActive)
                this.switchToRootMenu();
        }
        let bingMapShown = SimVar.GetSimVarValue("L:FA18_DDI_HSI_BING_MAP_SHOWN", "Bool");
        if (bingMapShown) {
            this.ddi.map.showBingMap();
        }
        else {
            this.ddi.map.hideBingMap();
        }
        this.ddi.map.instrument.rotateWithPlane(!SimVar.GetSimVarValue("L:FA18_DDI_HSI_NORTH_UP", "Bool"));
        if (this.label3) {
            if (this.isModeMenuActive && bingMapShown)
                this.label3.classList.add("sk-label-highlight");
            else
                this.label3.classList.remove("sk-label-highlight");
        }

        if (this.label4) {
            if (!this.isModeMenuActive && SimVar.GetSimVarValue("L:Glasscockpit_ILS_Mode", "number") != 0 && SimVar.GetSimVarValue("L:FA18_DDI_ILS_GUIDANCE", "bool"))
                this.label4.classList.add("sk-label-highlight");
            else
                this.label4.classList.remove("sk-label-highlight");
        }

        let steeringSource = SimVar.GetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number");
        if (this.label5) {
            if (!this.isModeMenuActive && steeringSource === FA18_DDI_Steering_Source.TACAN)
                this.label5.classList.add("sk-label-highlight");
            else
                this.label5.classList.remove("sk-label-highlight");
        }
        if (this.label11) {
            if (steeringSource === FA18_DDI_Steering_Source.WYPT)
                this.label11.classList.add("sk-label-highlight");
            else
                this.label11.classList.remove("sk-label-highlight");
        }
        this.updateSequenceNumber();
        this.updateWaypointIndex();
        if (this._hsi) {
            this._hsi.update(deltaTime);
        }
    }
    updateWaypointIndex() {
        if (this.ddi.waypointManager.initialized) {
            if (this.currentWaypointNumberValue)
                diffAndSetText(this.currentWaypointNumberValue, this.ddi.waypointManager.currentWaypointNumber + '');
            if (this.ddi.map) {
                if (this.ddi.waypointManager.isCurrentSequenceActive) {
                    if (!this.ddi.map.isFlightPlanShown)
                        this.ddi.map.showFlightPlan();
                }
                else {
                    if (this.ddi.map.isFlightPlanShown)
                        this.ddi.map.hideFlightPlan();
                }
                this.ddi.map.shownWaypointIndex = this.ddi.waypointManager.currentWaypointIndex;
            }
        }
    }
    updateSequenceNumber() {
        if (this.sequenceNumber) {
            if (this.ddi.waypointManager.initialized) {
                diffAndSetText(this.sequenceNumber, "S E Q " + this.ddi.waypointManager.currentSequenceNumber);
                if (this.ddi.waypointManager.isCurrentSequenceActive) {
                    this.sequenceNumber.classList.add("sk-label-highlight");
                }
                else {
                    this.sequenceNumber.classList.remove("sk-label-highlight");
                }
            }
        }
    }
}
//# sourceMappingURL=FA18_DDI_HSI.js.map