class FA18ACC_DDI_WaypointManager extends FA18_DDI_WaypointManager {
    constructor(ddi) {
        super(ddi);
        this.insertAfterWaypointIndex = undefined;
    }
    get MAX_SEQUENCES() { return 3; }
    ;
    init() {
        super.init();
        if (this.isMaster) {
            this.registerWatcher("L:FA18_DDI_SET_WAYPOINT_LAT", { condition : (v => { return v != -1; }), callback: this.onWaypointLatSet.bind(this) });
            this.registerWatcher("L:FA18_DDI_SET_WAYPOINT_LONG", { condition : (v => { return v != -1; }), callback: this.onWaypointLongSet.bind(this) });
            this.registerWatcher("L:FA18_DDI_SET_WAYPOINT_ELEV", { callback: this.onWaypointElevationSet.bind(this) });
            this.registerWatcher("L:FA18_DDI_INSERT_WAYPOINT", { callback: this.onWaypointInsert.bind(this) });
            this.registerWatcher("L:FA18_DDI_DELETE_WAYPOINT", { callback: this.onWaypointDelete.bind(this) });
        }
    }
    forceReloadOtherDdi() {
        for (let i = 1; i <= 4; i++) {
            if (i !== this.ddi.instrumentIndex)
                SimVar.SetSimVarValue("L:FA18_DDI_" + i + "_FORCE_RELOAD", "number", 1);
        }
    }
    onWaypointLatSet(newLat) {
        this.onWaypointEditLatLonAltSet(newLat, null, null);
    }
    onWaypointLongSet(newLong) {
        this.onWaypointEditLatLonAltSet(null, newLong, null);
    }
    onWaypointElevationSet(altitude) {
        this.onWaypointEditLatLonAltSet(null, null, altitude);
    }
    async onWaypointEditLatLonAltSet(newLatitude, newLongitude, newAltitude) {
        if (this.isMaster) {
            let waypointDataBaseIndex = SimVar.GetSimVarValue("L:FA18_DDI_CURRENT_WAYPOINT_INDEX_DB", "number");
            let wp = this.ddi.flightPlanManager.getWaypoint(waypointDataBaseIndex, this.flightPlanDataBaseIndex);
            await this._privateSwitchToFlightPlan(this.flightPlanDataBaseIndex);
            await this.ddi.flightPlanManager.asyncSetWaypointLatLonAlt(waypointDataBaseIndex, (newLatitude && !isNaN(newLatitude)) ? newLatitude : wp.infos.coordinates.lat, (newLongitude && !isNaN(newLongitude)) ? newLongitude : wp.infos.coordinates.long, (newAltitude && !isNaN(newAltitude)) ? newAltitude : wp.infos.coordinates.alt, false);
            for (let i = 0; i < this.flightPlanDataBaseIndex; i++) {
                let waypoints = this.ddi.flightPlanManager.getWaypoints(i);
                for (let j = 0; j < waypoints.length; j++) {
                    if (waypoints[j].ident === wp.ident) {
                        let otherCoord = waypoints[j].infos.coordinates;
                        if (otherCoord.lat !== wp.infos.coordinates.lat || otherCoord.long !== wp.infos.coordinates.long || otherCoord.alt !== wp.infos.coordinates.alt) {
                            await this._privateSwitchToFlightPlan(i);
                            await this.ddi.flightPlanManager.asyncSetWaypointLatLonAlt(j, wp.infos.lat, wp.infos.long, wp.infos.coordinates.alt, false);
                        }
                    }
                }
            }
            await this._privateSwitchToFlightPlan(this.flightPlanDataBaseIndex);
            await this.ddi.flightPlanManager.asyncActivateDirectToFromLatLonAlt(wp.infos.coordinates.lat, wp.infos.coordinates.long, wp.infos.coordinates.alt);
            this.forceReloadOtherDdi();
        }
    }
    async onWaypointInsert(waypointNumber) {
        if (this.isMaster) {
            if (this.currentSequence.waypointsNumbers.includes(waypointNumber)) {
                this.insertAfterWaypointIndex = this.currentSequence.waypointsNumbers.indexOf(waypointNumber) + 1;
            }
            else {
                if (this.ddi.flightPlanManager.getWaypointsCount(this.currentSequence.sequenceNumber) == this.currentSequence.MAX_WAYPOINTS_PER_SEQUENCE) {
                    await this.currentSequence.deleteWaypoint(0);
                    if (!isNaN(this.insertAfterWaypointIndex)) {
                        this.insertAfterWaypointIndex -= 1;
                    }
                }
                let wp = this.ddi.flightPlanManager.getWaypoint(waypointNumber, this.flightPlanDataBaseIndex);
                if (!isNaN(this.insertAfterWaypointIndex)) {
                    await this.currentSequence.addWaypoint(wp, this.insertAfterWaypointIndex);
                }
                else {
                    await this.currentSequence.addWaypoint(wp, this.ddi.flightPlanManager.getWaypointsCount(this.currentSequence.sequenceNumber));
                }
                await this._privateSwitchToFlightPlan(this.flightPlanDataBaseIndex);
                this.insertAfterWaypointIndex = undefined;
                this.forceReloadOtherDdi();
            }
        }
    }
    async onWaypointDelete(waypointNumber) {
        if (this.isMaster) {
            if (this.currentSequence.waypointsNumbers.includes(waypointNumber)) {
                let index = this.currentSequence.waypointsNumbers.indexOf(waypointNumber);
                await this.currentSequence.deleteWaypoint(index);
                await this._privateSwitchToFlightPlan(this.flightPlanDataBaseIndex);
                this.forceReloadOtherDdi();
            }
        }
    }
}
//# sourceMappingURL=FA18ACC_DDI_WaypointManager.js.map