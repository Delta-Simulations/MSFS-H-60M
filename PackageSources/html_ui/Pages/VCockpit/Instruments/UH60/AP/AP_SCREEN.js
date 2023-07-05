function toggleVar(simvar, read, element) {
    if (SimVar.GetSimVarValue(simvar, read) == 1) {
        document.getElementById(element).style.visibility= 'visible' ;
    } else {
        document.getElementById(element).style.visibility= 'hidden' ;
    }    
}


class ap extends BaseInstrument {
    constructor() {
        super();
    }
    get isInteractive() { return true; }
    get templateID() { return "ap_script"; }
    connectedCallback() {
        super.connectedCallback();
        this.m_apSimCanvas = this.querySelector('ap-sim-canvas');
        this.m_apSimCanvas.m_apModuleName = this.urlConfig.apModule;
        this.m_apSimCanvas.m_apGaugeName = this.urlConfig.apGauge;
        this.m_apSimCanvas.m_apGUid = this.getAttribute("Guid");
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    onInteractionEvent(_args) {
    }
    Update() {
		
		var mainFrame = this.querySelector("#HMD");
		
		try {
			if (SimVar.GetSimVarValue("L:ALT_VS_HDG_NAV", "number") == 0) {
                var APHDG = SimVar.GetSimVarValue("AUTOPILOT HEADING LOCK DIR", "Degrees");
                var APVS = SimVar.GetSimVarValue("AUTOPILOT VERTICAL HOLD VAR", "Feet/minute");
                var HDG = document.getElementById("HDG");
                APHDG = ('000' + APHDG.toFixed(0)).substr(-3);
                var VS = document.getElementById("VS");
                HDG.textContent = APHDG + "°";
                VS.textContent = APVS;

                document.getElementById("HDG_text").style.visibility= 'visible' ;
                document.getElementById("NAV_text").style.visibility= 'hidden' ;
                document.getElementById("HDG").style.visibility= 'visible' ;
                document.getElementById("NAV").style.visibility= 'hidden' ;

                document.getElementById("ALT_text").style.visibility= 'hidden' ;
                document.getElementById("VS_text").style.visibility= 'visible' ;
                document.getElementById("ALT").style.visibility= 'hidden' ;
                document.getElementById("VS").style.visibility= 'visible' ;
            }
            else if (SimVar.GetSimVarValue("L:ALT_VS_HDG_NAV", "number") == 1) {
                var APNAV = SimVar.GetSimVarValue("NAV STANDBY FREQUENCY:1", "MHz");
                var APALT = SimVar.GetSimVarValue("AUTOPILOT ALTITUDE LOCK VAR", "Feet");
                var NAV = document.getElementById("NAV");
                var ALT = document.getElementById("ALT");
                NAV.textContent = APNAV.toFixed(3);
                ALT.textContent = APALT.toFixed(0);

                document.getElementById("HDG_text").style.visibility= 'hidden' ;
                document.getElementById("NAV_text").style.visibility= 'visible' ;
                document.getElementById("HDG").style.visibility= 'hidden' ;
                document.getElementById("NAV").style.visibility= 'visible' ;

                document.getElementById("ALT_text").style.visibility= 'visible' ;
                document.getElementById("VS_text").style.visibility= 'hidden' ;
                document.getElementById("ALT").style.visibility= 'visible' ;
                document.getElementById("VS").style.visibility= 'hidden' ;
            }
            toggleVar("A:AUTOPILOT HEADING LOCK", "Bool", "HDG_text2")

            toggleVar("A:AUTOPILOT FLIGHT DIRECTOR ACTIVE", "Bool", "FD_text")

            toggleVar("A:AUTOPILOT ALTITUDE LOCK", "Bool", "ALT_text2")

            toggleVar("A:AUTOPILOT NAV1 LOCK", "Bool", "NAV_text2")

            toggleVar("A:AUTOPILOT VERTICAL HOLD", "Bool", "VS_text2")

            toggleVar("A:AUTOPILOT BACKCOURSE HOLD", "Bool", "BC_text")

            toggleVar("A:AUTOPILOT MASTER", "Bool", "AP_text")

            //toggleVar("A:AUTOPILOT HEADING LOCK", "Bool", "HDG_text2")

		} catch(e) {
			let debug_el = this.querySelector('#debug');
			debug_el.innerHTML += " Ex: "+e;
		}
        
    }

}
registerInstrument("ap-instrument", ap);