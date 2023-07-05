var FA18_DDI_Page_Type;
(function (FA18_DDI_Page_Type) {
    FA18_DDI_Page_Type[FA18_DDI_Page_Type["NotImplemented"] = 0] = "NotImplemented";
    FA18_DDI_Page_Type[FA18_DDI_Page_Type["ADI"] = 1] = "ADI";
    FA18_DDI_Page_Type[FA18_DDI_Page_Type["HUD"] = 2] = "HUD";
    FA18_DDI_Page_Type[FA18_DDI_Page_Type["FPAS"] = 3] = "FPAS";
    FA18_DDI_Page_Type[FA18_DDI_Page_Type["Checklist"] = 4] = "Checklist";
    FA18_DDI_Page_Type[FA18_DDI_Page_Type["Engine"] = 5] = "Engine";
    FA18_DDI_Page_Type[FA18_DDI_Page_Type["Fuel"] = 6] = "Fuel";
    FA18_DDI_Page_Type[FA18_DDI_Page_Type["HSI"] = 7] = "HSI";
    FA18_DDI_Page_Type[FA18_DDI_Page_Type["HSIAircraftData"] = 8] = "HSIAircraftData";
    FA18_DDI_Page_Type[FA18_DDI_Page_Type["HSITacanData"] = 9] = "HSITacanData";
    FA18_DDI_Page_Type[FA18_DDI_Page_Type["HSIWaypointData"] = 10] = "HSIWaypointData";
    FA18_DDI_Page_Type[FA18_DDI_Page_Type["MenuTactical"] = 11] = "MenuTactical";
    FA18_DDI_Page_Type[FA18_DDI_Page_Type["MenuSupport"] = 12] = "MenuSupport";
    FA18_DDI_Page_Type[FA18_DDI_Page_Type["RDR"] = 13] = "RDR";
})(FA18_DDI_Page_Type || (FA18_DDI_Page_Type = {}));
var FA18_DDI_Steering_Source;
(function (FA18_DDI_Steering_Source) {
    FA18_DDI_Steering_Source[FA18_DDI_Steering_Source["None"] = 0] = "None";
    FA18_DDI_Steering_Source[FA18_DDI_Steering_Source["WYPT"] = 1] = "WYPT";
    FA18_DDI_Steering_Source[FA18_DDI_Steering_Source["TACAN"] = 2] = "TACAN";
})(FA18_DDI_Steering_Source || (FA18_DDI_Steering_Source = {}));
class FA18_DDI extends NavSystem {
    constructor() {
        super();
        this.secondsTimer = 0;
        this.timeAtBingoTriggered = 0;
        this.pages = new Map();
        this.onButtonPressed = [];
        FA18_DDI.DEBUG_INSTANCE = this;
        this.map = new FA18_DDI_Map();
        this.map.setGPS(this);
        this.waypointManager = new FA18_DDI_WaypointManager(this);
    }
    get templateID() { return "AS04F_DDI"; }
    get instrumentAlias() { return "AS04F_DDI"; }
    getCurrentDDIPage() {
        return this.pages.get(this.currentPageType);
    }
    get notImplementedPage() {
        return this.pages.get(FA18_DDI_Page_Type.NotImplemented);
    }
    connectedCallback() {
        super.connectedCallback();
        this.warnings = new Cabin_Warnings();
        this.addIndependentElementContainer(new NavSystemElementContainer("Warnings", "Warnings", this.warnings));
    }
    Init() {
        super.Init();
        this.waypointManager.init();
        this.pages.set(FA18_DDI_Page_Type.NotImplemented, document.querySelector("fa18-ddi-not-implemented"));
        this.pages.set(FA18_DDI_Page_Type.ADI, document.querySelector("fa18-ddi-adi"));
        this.pages.set(FA18_DDI_Page_Type.HUD, document.querySelector("fa18-ddi-hud"));
        this.pages.set(FA18_DDI_Page_Type.Engine, document.querySelector("fa18-ddi-engine"));
        this.pages.set(FA18_DDI_Page_Type.Fuel, document.querySelector("fa18-ddi-fuel"));
        this.pages.set(FA18_DDI_Page_Type.MenuTactical, document.querySelector("fa18-ddi-menu-tactical"));
        this.pages.set(FA18_DDI_Page_Type.RDR, document.querySelector("fa18-ddi-rdr"));
        this.pages.forEach((page) => {
            if (page)
                page.init(this);
            else
                console.error("One of the element of pages array is null");
        });
        if (this.instrumentIndex === 1) {
            let hsiStartupPage = SimVar.GetSimVarValue("L:FA18_DDI_START_PAGE_1", "number");
            if (hsiStartupPage > 0) {
                this.showPage(hsiStartupPage);
            }
            else {
                this.showPage(FA18_DDI_Page_Type.ADI);
            }
        }
        else if (this.instrumentIndex === 2) {
            let hsiStartupPage = SimVar.GetSimVarValue("L:FA18_DDI_START_PAGE_2", "number");
            if (hsiStartupPage > 0) {
                this.showPage(hsiStartupPage);
            }
            else {
                this.showPage(FA18_DDI_Page_Type.MenuTactical);
            }
        }
        else if (this.instrumentIndex === 3) {
            this.showPage(FA18_DDI_Page_Type.HSI);
        }
        else if (this.instrumentIndex === 4 || this.instrumentIndex === 5) {
            this.showPage(FA18_DDI_Page_Type.HUD);
        }
    }
    steeringControlLoop() {
        if (this.instrumentIndex === 2) {
            if (SimVar.GetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number") == FA18_DDI_Steering_Source.TACAN) {
                if (!(SimVar.GetSimVarValue("NAV HAS TACAN:1", "Bool") && SimVar.GetSimVarValue("L:Glasscockpit_TACAN_Mode", "number") != 0)) {
                    SimVar.SetSimVarValue("L:FA18_DDI_STEERING_SOURCE", "number", FA18_DDI_Steering_Source.None);
                }
            }
        }
    }
    onUpdate(_deltaTime) {
        super.onUpdate(_deltaTime);
        this.steeringControlLoop();
        this.waypointManager.update(_deltaTime);
        let page = this.getCurrentDDIPage();
        if (page) {
            if (this.currentPageType === FA18_DDI_Page_Type.HSI) {
                this.map.onUpdate(_deltaTime);
            }
            page.update(this.deltaTime);
        }
        {
            this.warningLandingGear();
        }
        this.secondsSinceTakeOff();
        this.diveRecovery();
        this.isBingoTriggered();
    }
    onEvent(_event) {
        if (_event.indexOf("BTN_") !== -1) {
            let buttonIndex = parseInt(_event.replace("BTN_", ""));
            if (this.onButtonPressed[buttonIndex]) {
                this.onButtonPressed[buttonIndex]();
            }
        }
    }
    setPageButton(buttonIndex, pageType) {
        this.onButtonPressed[buttonIndex] = () => {
            this.showPage(pageType);
        };
    }
    showPage(page) {
        this.onButtonPressed = [];
        this.pages.forEach((page) => {
            if (page)
                page.style.display = "none";
            else
                console.error("One of the element of pages array is null");
        });
        if (page === FA18_DDI_Page_Type.NotImplemented && this.currentPageType != FA18_DDI_Page_Type.NotImplemented) {
            this.notImplementedPage.previousPage = this.currentPageType;
        }
        this.currentPageType = page;
        let currentPage = this.getCurrentDDIPage();
        if (currentPage) {
            currentPage.show();
        }
        else {
            console.error("Page '" + FA18_DDI_Page_Type[page] + "' can not be displayed ==> not existing in the pages array");
        }
    }
    warningLandingGear() {
        if (SimVar.GetSimVarValue("GEAR HANDLE POSITION", "Bool") == false &&
            SimVar.GetSimVarValue("AIRSPEED TRUE", "knots") < 175 &&
            SimVar.GetSimVarValue("INDICATED ALTITUDE", "feet") < 7500 &&
            SimVar.GetSimVarValue("VERTICAL SPEED", "feet per minute") < -250) {
            SimVar.SetSimVarValue("L:FA18_Warning_Landing_Gear", "Bool", true);
        }
        else {
            SimVar.SetSimVarValue("L:FA18_Warning_Landing_Gear", "Bool", false);
        }
    }
    secondsSinceTakeOff() {
        if (SimVar.GetSimVarValue("SIM ON GROUND", "Bool") == 0) {
            if (this.secondsTimer == 0) {
                this.timeAtTakeOff = Date.now();
                this.secondsTimer = this.timeAtTakeOff;
            }
            else {
                this.secondsTimer = Date.now() - this.timeAtTakeOff;
            }
        }
        else {
            this.secondsTimer = 0;
        }
        SimVar.SetSimVarValue("L:FA_18_TIME_SINCE_TAKE_OFF", "number", this.secondsTimer / 1000);
    }
    diveRecovery() {
        let altitude = SimVar.GetSimVarValue("RADIO HEIGHT", "feet");
        let verticalSpeed = SimVar.GetSimVarValue("VERTICAL SPEED", "feet per second");
        if (altitude / Math.abs(verticalSpeed) < 5 && verticalSpeed < 0) {
            SimVar.SetSimVarValue("L:FA18_DIVE_RECOVERY", "Bool", true);
        }
        else {
            SimVar.SetSimVarValue("L:FA18_DIVE_RECOVERY", "Bool", false);
        }
    }
    isBingoTriggered() {
        let fuel = SimVar.GetSimVarValue("FUEL WEIGHT PER GALLON", "Pounds");
        let bingo = SimVar.GetSimVarValue("L:FA18_Fuel_Bingo", "number");
        if (fuel < bingo && (Date.now() - this.timeAtBingoTriggered) / 1000 > 30) {
            SimVar.SetSimVarValue("L:FA18_BINGO_TRIGGERED", "Bool", true);
            this.timeAtBingoTriggered = Date.now();
        }
        else {
            SimVar.SetSimVarValue("L:FA18_BINGO_TRIGGERED", "Bool", false);
        }
    }
}
//# sourceMappingURL=FA18_DDI.js.map