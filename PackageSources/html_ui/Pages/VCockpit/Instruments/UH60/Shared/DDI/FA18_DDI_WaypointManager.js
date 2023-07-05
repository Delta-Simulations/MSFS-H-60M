class FA18_DDI_WaypointManager {
    constructor(ddi) {
        this.MAX_WAYPOINTS = 60;
        this.sequences = [];
        this._initialized = false;
        this.initCompleteCalled = false;
        this.frameCount = 0;
        this.initTimer = 100;
        this._currentWaypointIndex = 0;
        this.currentFlightPlanIndex = 0;
        this.ddi = ddi;
    }
    get MAX_SEQUENCES() { return 1; }
    ;
    get initialized() { return this._initialized; }
    get isMaster() { return this.ddi.instrumentIndex === 2; }
    get flightPlanDataBaseIndex() { return this.MAX_SEQUENCES + 1; }
    get currentWaypointIndex() {
        return this._currentWaypointIndex;
    }
    get currentWaypointNumber() {
        if (this.isCurrentSequenceActive) {
            return (this._currentWaypointIndex < this.currentSequenceWaypointsNumbers.length) ? this.currentSequenceWaypointsNumbers[this._currentWaypointIndex] : this._currentWaypointIndex;
        }
        else {
            return this._currentWaypointIndex;
        }
    }
    get currentWaypoint() {
        if (this.ddi.flightPlanManager.getWaypointsCount(this.currentFlightPlanIndex) > 0)
            return this.ddi.flightPlanManager.getWaypoint(this._currentWaypointIndex, this.currentFlightPlanIndex);
        return this.ddi.flightPlanManager.getWaypoint(this._currentWaypointIndex, this.flightPlanDataBaseIndex);
    }
    get isCurrentWaypointValid() {
        return (this.currentWaypoint && (this.currentWaypoint.infos.lat !== 0 || this.currentWaypoint.infos.long !== 0 || this.currentWaypoint.infos.coordinates.alt !== 0));
    }
    get currentSequence() { return this._currentSequence; }
    get currentSequenceNumber() { return this.currentSequence.sequenceNumber; }
    get isCurrentSequenceActive() { return this.currentSequence.isActive; }
    get currentSequenceWaypointsNumbers() { return this.currentSequence.waypointsNumbers; }
    init() {
        this.watchers = new Map();
        for (let i = 1; i <= this.MAX_SEQUENCES; i++) {
            this.sequences.push(new FA18_DDI_WaypointSequence(this.ddi, this, i));
        }
        if (this.sequences.length > 0)
            this._currentSequence = this.sequences[0];
        this.currentFlightPlanIndex = this.flightPlanDataBaseIndex;
        this.registerWatcher("L:FA18_DDI_" + this.ddi.instrumentIndex + "_FORCE_RELOAD", {
            callback: this.onForceReload.bind(this),
            condition: (v) => { return v != 0; },
            resetValue: 0
        }, 0);
        if (this.isMaster) {
            SimVar.SetSimVarValue("L:FA18_WaypointManager_Initialized", "boolean", false);
            SimVar.SetSimVarValue("L:MAP_SHOWN_FLIGHTPLAN_INDEX", "number", this.currentFlightPlanIndex);
            SimVar.SetSimVarValue("L:VFR_MAP_SHOWN_FLIGHTPLAN_INDEX", "number", 0);
            SimVar.SetSimVarValue("L:FA18_DDI_CURRENT_SEQUENCE", "number", this.currentSequenceNumber);
            SimVar.SetSimVarValue("L:FA18_DDI_CURRENT_WAYPOINT_INDEX", "number", this.currentWaypointIndex);
            this.ddi.flightPlanManager.onCurrentGameFlightLoaded(() => {
                this.ddi.flightPlanManager.updateFlightPlan(() => {
                    this.createNecessaryFlightPlans().then(() => {
                        this.initSequences().then(() => {
                            this.initDataBaseFlightPlan().then(() => {
                                SimVar.SetSimVarValue("L:FA18_WaypointManager_Initialized", "boolean", true);
                            });
                        });
                    });
                });
            });
        }
    }
    registerWatcher(_watchedSimVar, watcher, _initValue = -1) {
        if (!watcher.condition) {
            watcher.condition = (v => { return v >= 0; });
        }
        if (watcher.resetValue === undefined || watcher.resetValue === null) {
            watcher.resetValue = -1;
        }
        this.watchers.set(_watchedSimVar, watcher);
        SimVar.SetSimVarValue(_watchedSimVar, "number", (typeof watcher.resetValue === "number") ? watcher.resetValue : _initValue);
    }
    async initSequences() {
        if (this.isMaster) {
            for (let i = 0; i < this.sequences.length; i++) {
                await this.sequences[i].init();
            }
            if (this.currentSequence)
                await this.currentSequence.loadWaypointsToSequence();
        }
    }
    async createNecessaryFlightPlans() {
        if (this.isMaster) {
            await this.ddi.flightPlanManager.asyncCreateNewFlightPlansUntilIndex(this.flightPlanDataBaseIndex);
        }
    }
    async initDataBaseFlightPlan() {
        if (this.isMaster) {
            if (await this._privateSwitchToFlightPlan(0)) {
                await this.ddi.flightPlanManager.asyncCopyCurrentFlightPlanInto(this.flightPlanDataBaseIndex);
                await this._privateSwitchToFlightPlan(this.flightPlanDataBaseIndex);
                for (let i = this.ddi.flightPlanManager.getWaypointsCount(); i < this.MAX_WAYPOINTS; i++) {
                    await this.ddi.flightPlanManager.asyncAddCustomWaypoint("U_" + i, i, 0, 0, false);
                }
                await this.activeFlightPlan(this.flightPlanDataBaseIndex);
                this._currentWaypointIndex = 0;
                if (this.isCurrentWaypointValid)
                    await this.ddi.flightPlanManager.asyncActivateDirectToFromLatLonAlt(this.currentWaypoint.infos.coordinates.lat, this.currentWaypoint.infos.coordinates.long, this.currentWaypoint.infos.coordinates.alt);
            }
        }
    }
    async _privateSwitchToFlightPlan(flightPlanIndex) {
        if (this.isMaster) {
            if (this.ddi.flightPlanManager.getCurrentFlightPlanIndex() != flightPlanIndex)
                return await this.ddi.flightPlanManager.asyncSetCurrentFlightPlanIndex(flightPlanIndex);
            return true;
        }
        return false;
    }
    async onInitComplete() {
        this.initCompleteCalled = true;
        await this.updateAllFlightPlans();
        await this.ddi.flightPlanManager.asyncUpdateCurrentFlightPlanIndex();
    }
    checkInit() {
        if (!this.initialized && !this.initCompleteCalled) {
            if (SimVar.GetSimVarValue("L:FA18_WaypointManager_Initialized", "boolean")) {
                this.onInitComplete().then(() => {
                    this._initialized = true;
                });
            }
        }
    }
    getDataBaseWaypointIndexByIdent(ident) {
        return this.ddi.flightPlanManager.getWaypoints(this.flightPlanDataBaseIndex).findIndex((wp) => {
            return wp.ident === ident;
        });
    }
    watch() {
        this.watchers.forEach((watcher, watchedSimVar) => {
            if (watcher.condition && watcher.resetValue !== undefined && watcher.resetValue !== null) {
                let value = SimVar.GetSimVarValue(watchedSimVar, "number");
                if (watcher.condition(value)) {
                    SimVar.SetSimVarValue(watchedSimVar, "number", (typeof watcher.resetValue === "number") ? watcher.resetValue : watcher.resetValue(value));
                    if (watcher.callback) {
                        watcher.callback(value);
                    }
                }
            }
        });
    }
    updateCurrentSequence() {
        let number = SimVar.GetSimVarValue("L:FA18_DDI_CURRENT_SEQUENCE", "number");
        let isActive = (SimVar.GetSimVarValue("L:MAP_SHOWN_FLIGHTPLAN_INDEX", "number") == number);
        if (this.currentSequenceNumber != number) {
            this._currentSequence = this.sequences[this.getSequenceIndex(number)];
        }
        if (this.isCurrentSequenceActive != isActive) {
            this.currentSequence.isActive = isActive;
        }
    }
    updateCurrentWaypointIndex() {
        let index = SimVar.GetSimVarValue("L:FA18_DDI_CURRENT_WAYPOINT_INDEX", "number");
        if (this.currentWaypointIndex != index) {
            this._currentWaypointIndex = index;
        }
    }
    update(deltaTime) {
        if (!this.initialized) {
            if (this.initTimer < 0) {
                this.checkInit();
            }
            else {
                this.initTimer -= deltaTime;
            }
        }
        else {
            this.watch();
            this.updateCurrentSequence();
            this.updateCurrentWaypointIndex();
            this.frameCount++;
            if (this.frameCount > 100) {
                this.frameCount = 0;
                this.updateAllFlightPlans().then(() => {
                });
            }
        }
    }
    async updateAllFlightPlans() {
        await this.ddi.flightPlanManager.asyncUpdateFlightPlanByIndex(0);
        await this.ddi.flightPlanManager.asyncUpdateFlightPlanByIndex(this.flightPlanDataBaseIndex);
        for (let i = 0; i < this.sequences.length; i++) {
            await this.sequences[i].update();
        }
    }
    onForceReload() {
        this.updateAllFlightPlans();
    }
    sendCurrentWaypointIndexInfos() {
        SimVar.SetSimVarValue("L:FA18_DDI_CURRENT_WAYPOINT_INDEX", "number", this.currentWaypointIndex);
        SimVar.SetSimVarValue("L:FA18_DDI_CURRENT_WAYPOINT_INDEX_DB", "number", this.getDataBaseWaypointIndexByIdent(this.currentWaypoint.ident));
        if (this.isCurrentWaypointValid)
            this.ddi.flightPlanManager.activateDirectToFromLatLonAlt(this.currentWaypoint.infos.coordinates.lat, this.currentWaypoint.infos.coordinates.long, this.currentWaypoint.infos.coordinates.alt);
    }
    switchToNextWaypoint() {
        if (this.initialized) {
            this._currentWaypointIndex++;
            if (this._currentWaypointIndex >= this.ddi.flightPlanManager.getWaypointsCount(this.currentFlightPlanIndex))
                this._currentWaypointIndex = 0;
            this.sendCurrentWaypointIndexInfos();
        }
    }
    switchToPreviousWaypoint() {
        if (this.initialized) {
            this._currentWaypointIndex--;
            let lastWaypointIndex = Math.max(this.ddi.flightPlanManager.getWaypointsCount(this.currentFlightPlanIndex) - 1, 0);
            if (this._currentWaypointIndex < 0 || this._currentWaypointIndex > lastWaypointIndex) {
                this._currentWaypointIndex = lastWaypointIndex;
            }
            this.sendCurrentWaypointIndexInfos();
        }
    }
    getSequenceIndex(sequenceNumber) {
        for (let i = 0; i < this.sequences.length; i++) {
            if (this.sequences[i].sequenceNumber === sequenceNumber) {
                return i;
            }
        }
        return -1;
    }
    toggleSequences() {
        if (this.isCurrentSequenceActive) {
            let nextIndex = (this.getSequenceIndex(this.currentSequenceNumber) + 1) % this.sequences.length;
            this.currentSequence.isActive = false;
            this._currentSequence = this.sequences[nextIndex];
            this.currentFlightPlanIndex = this.flightPlanDataBaseIndex;
        }
        else {
            this.currentSequence.isActive = true;
            this.currentFlightPlanIndex = this.currentSequenceNumber;
        }
        SimVar.SetSimVarValue("L:VFR_MAP_SHOWN_FLIGHTPLAN_INDEX", "number", this.currentFlightPlanIndex === this.flightPlanDataBaseIndex ? 0 : this.currentFlightPlanIndex);
        SimVar.SetSimVarValue("L:MAP_SHOWN_FLIGHTPLAN_INDEX", "number", this.currentFlightPlanIndex);
        SimVar.SetSimVarValue("L:FA18_DDI_CURRENT_SEQUENCE", "number", this.currentSequenceNumber);
    }
    async activeFlightPlan(flightPlanIndex) {
        if (this.ddi.flightPlanManager.getWaypointsCount(flightPlanIndex) > 0)
            await this.ddi.flightPlanManager.asyncActiveFlightPlanByIndex(flightPlanIndex);
    }
}
class FA18_DDI_WaypointSequence {
    constructor(ddi, manager, sequenceNumber) {
        this.MAX_WAYPOINTS_PER_SEQUENCE = 15;
        this._sequenceNumber = -1;
        this.isActive = false;
        this._waypointsNumbers = [];
        this.ddi = ddi;
        this.manager = manager;
        this._sequenceNumber = sequenceNumber;
    }
    get sequenceNumber() { return this._sequenceNumber; }
    get waypointsNumbers() { return this._waypointsNumbers; }
    async init() {
        await this.reset();
    }
    async reset() {
        if (this.manager.isMaster) {
            if (await this.manager._privateSwitchToFlightPlan(this.sequenceNumber)) {
                await this.ddi.flightPlanManager.asyncClearFlightPlan();
            }
        }
    }
    async loadWaypointsToSequence() {
        if (this.manager.isMaster) {
            await this.ddi.flightPlanManager.asyncUpdateFlightPlanByIndex(0);
            let waypoints = this.ddi.flightPlanManager.getWaypoints(0);
            for (let i = 0; i < waypoints.length && i < this.MAX_WAYPOINTS_PER_SEQUENCE; i++) {
                await this.addWaypointWithoutUpdate(waypoints[i], i);
            }
        }
    }
    async addWaypointWithoutUpdate(wp, index) {
        if (this.manager.isMaster) {
            if (await this.manager._privateSwitchToFlightPlan(this.sequenceNumber)) {
                await this.ddi.flightPlanManager.asyncUpdateFlightPlanByIndex(this.sequenceNumber);
                if (this.ddi.flightPlanManager.getWaypointsCount(this.sequenceNumber) < this.MAX_WAYPOINTS_PER_SEQUENCE) {
                    if (wp.icao.startsWith("U ")) {
                        await this.ddi.flightPlanManager.asyncAddCustomWaypoint(wp.ident, index, wp.infos.coordinates.lat, wp.infos.coordinates.long, false);
                    }
                    else {
                        await this.ddi.flightPlanManager.asyncAddWaypoint(wp.icao, index, false);
                    }
                    await this.ddi.flightPlanManager.asyncSetWaypointLatLonAlt(index, wp.infos.coordinates.lat, wp.infos.coordinates.long, wp.infos.coordinates.alt, false);
                }
            }
        }
    }
    async addWaypoint(wp, index) {
        await this.addWaypointWithoutUpdate(wp, index);
        await this.update();
    }
    async deleteWaypoint(index) {
        if (this.manager.isMaster) {
            if (this.ddi.flightPlanManager.getWaypointsCount(this.sequenceNumber) > 0) {
                if (await this.manager._privateSwitchToFlightPlan(this.sequenceNumber)) {
                    await this.ddi.flightPlanManager.asyncRemoveWaypoint(index, false);
                    await this.update();
                }
            }
        }
    }
    async update() {
        await this.ddi.flightPlanManager.asyncUpdateFlightPlanByIndex(this.sequenceNumber);
        this._waypointsNumbers = [];
        for (let i = 0; i < this.ddi.flightPlanManager.getWaypointsCount(this.sequenceNumber); i++) {
            let number = this.manager.getDataBaseWaypointIndexByIdent(this.ddi.flightPlanManager.getWaypoint(i, this.sequenceNumber).ident);
            if (number != -1) {
                this._waypointsNumbers.push(number);
            }
        }
    }
}
//# sourceMappingURL=FA18_DDI_WaypointManager.js.map