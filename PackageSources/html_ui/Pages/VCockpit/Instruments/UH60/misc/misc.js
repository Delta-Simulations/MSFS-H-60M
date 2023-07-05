
Include.addScript("/JS/dataStorage.js");


class misc_class extends BaseInstrument {

    constructor() {
        super();
        this.VERSION = "v.46e";
        this.version_init_done = false;

        // Constants
        this.MS_TO_KT = 1.94384; // speed conversion consts
        this.MS_TO_KPH = 3.6;    // meter per second to kilometer per hour
        this.M_TO_F = 3.28084;   // meter to foot
        this.MS_TO_FPM = 196.85; // meter per second to foot per minute
        this.RAD_TO_DEG = 57.295; // Radians to degrees

        this.curTime = 0.0;
        this.bNeedUpdate = false;
        this._isConnected = false;
		this.lastCheck = 0;

        // 'Global' vars used by multiple instruments
        this.time_s = null;
        this.vertical_speed_ms = 0;
        this.airspeed_ms = 0;
        this.altitude_m = 0;

        // Netto vars
        this.netto_ms = 0;
		this.needle_value_ms = 0;
		this.canopyState = 0;
		this.ejectState = 0;
		
		this.winchReleased = 0;
		this.winchAirspeed = 0;
		this.winchAltitude = 0;
		this.lastWinchTowState = 0;
		
		this.lastOnGorundState = 0;
		this.lastLandingQuality = 0;
    }

    get templateID() {
        return "misc_script";
    } // ID of <script> tag in misc.html

    connectedCallback() {
        super.connectedCallback();

        let parent = this;
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    Update() {
		let x=0;
		this.time_s = SimVar.GetSimVarValue("E:ABSOLUTE TIME", "seconds");
        let debug_el = document.getElementById("misc_debug");
		debug_el.innerHTML = "";

        try { x=4;this.quality_update(); } catch (e) { debug_el.innerHTML += " Ex"+x+": "+e; }

		this.te_previous_time_s = this.time_s;

		let xyz = SimVar.GetGameVarValue("CAMERA POS IN PLANE", "xyz");
		let camUserPos = new Vec3(xyz.x, xyz.y, xyz.z);
		SimVar.SetSimVarValue("L:CAMERA_POS_IN_PLANE_X", "meters", SimVar.GetSimVarValue("L:CAMERA_POS_IN_PLANE_X", "meters") + 0.75 * (camUserPos.x - SimVar.GetSimVarValue("L:CAMERA_POS_IN_PLANE_X", "meters")));
		SimVar.SetSimVarValue("L:CAMERA_POS_IN_PLANE_Y", "meters", SimVar.GetSimVarValue("L:CAMERA_POS_IN_PLANE_Y", "meters") + 0.75 * (camUserPos.y - SimVar.GetSimVarValue("L:CAMERA_POS_IN_PLANE_Y", "meters")));
		SimVar.SetSimVarValue("L:CAMERA_POS_IN_PLANE_Z", "meters", SimVar.GetSimVarValue("L:CAMERA_POS_IN_PLANE_Z", "meters") + 0.75 * (camUserPos.z - SimVar.GetSimVarValue("L:CAMERA_POS_IN_PLANE_Z", "meters")));
		
    }


    delta_deg(A,B) {
        let diff = B-A;
        if (diff < -180) {
            return diff + 360;
        } else if (diff > 180) {
            return diff - 360;
        }
        return diff;
    }

	
	quality_update() {
        this.airspeed_ms = SimVar.GetSimVarValue("A:AIRSPEED TRUE", "m/s");
		
		// WINCH RELEASE
		let interval = 5;
		let newWinchTowState = SimVar.GetSimVarValue("A:WATER RUDDER HANDLE POSITION", "percent");
		
		if (newWinchTowState == 50) {
			this.winchReleased = this.time_s;
			this.winchAirspeed = SimVar.GetSimVarValue("A:AIRSPEED INDICATED", "meters per second");
			this.winchAltitude = SimVar.GetSimVarValue("A:ALTITUDE", "meters");
		}
		else if (this.winchAirspeed != 0 && this.time_s - this.winchReleased > interval && newWinchTowState == 0 ) {
			if (SimVar.GetSimVarValue("A:AIRSPEED INDICATED", "knots") > 50 && SimVar.GetSimVarValue("A:AIRSPEED INDICATED", "meters per second") > this.winchAirspeed * 0.75 && this.winchAltitude < SimVar.GetSimVarValue("A:ALTITUDE", "meters") + 3 * interval)
				SimVar.SetSimVarValue("L:THUMB_ANIM", "meters", 150);
			else
				SimVar.SetSimVarValue("L:THUMB_ANIM", "meters", -150);
			
			this.winchAirspeed = 0;
			this.winchAltitude = 0;
		}
		
		// WINCH CONNECT
		if (this.lastWinchTowState != newWinchTowState && newWinchTowState > 0) {
				SimVar.SetSimVarValue("L:THUMB_ANIM", "meters", 150);
		}
		this.lastWinchTowState = newWinchTowState;
		
		// LANDING TEST
		let newSimOnGround = SimVar.GetSimVarValue("A:SIM ON GROUND", "percent");
		if (this.lastOnGorundState != newSimOnGround && newSimOnGround != 0) {
			let acceleration = Math.abs(SimVar.GetSimVarValue("A:VELOCITY BODY Y", "m/s")) * this.airspeed_ms * (101 - SimVar.GetSimVarValue("A:GEAR POSITION", "percent"));
			if (acceleration > this.lastLandingQuality)
				this.lastLandingQuality = acceleration;
		}
		else if (SimVar.GetSimVarValue("A:GPS GROUND SPEED", "m/s") < 0.1 && this.lastLandingQuality != 0) {
			if (this.lastLandingQuality <= 25)
				SimVar.SetSimVarValue("L:THUMB_ANIM", "meters", 150);
			else
				SimVar.SetSimVarValue("L:THUMB_ANIM", "meters", -150);
			
			this.lastLandingQuality = 0;
		}
		
		this.lastOnGorundState = newSimOnGround;
		
		// THUMB ANIM
		let thumbState = SimVar.GetSimVarValue("L:THUMB_ANIM", "meters");
		if (thumbState != 0) {
			let time_delta_s = this.time_s - this.te_previous_time_s;
			SimVar.SetSimVarValue("L:THUMB_ANIM", "meters", thumbState > 0 ? Math.max(0, thumbState - 75 * time_delta_s) : Math.min(0, thumbState + 75 * time_delta_s));
		}
	}
	

	
}

registerInstrument("misc-element", misc_class);
