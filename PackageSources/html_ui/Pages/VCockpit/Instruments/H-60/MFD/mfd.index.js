'use strict';
/* global BaseInstrument */
/* global registerInstrument */

class _MachInstrument_MFD extends BaseInstrument {
    constructor() {
        super();
        let lastTime = this._lastTime;
        this.getDeltaTime = () => {
            const nowTime = Date.now();
            const deltaTime = nowTime - lastTime;
            lastTime = nowTime;
            return deltaTime;
        };
    }

    get templateID() {
        return 'MFD';
    }

    get isInteractive() {
        return true;
    }

    get IsGlassCockpit() {
        return true;
    }

    connectedCallback() {
        super.connectedCallback();
        Include.addScript("/Pages/VCockpit/Instruments/H-60/MFD/mfd.js");
    }

    Update() {
        super.Update();
        this.dispatchEvent(new CustomEvent("update", { detail: this.getDeltaTime() }));
    }

    onInteractionEvent(event) {
        const eventName = String(event);
        this.dispatchEvent(new CustomEvent(eventName));
        this.dispatchEvent(new CustomEvent("*", { detail: eventName }));
    }
}

registerInstrument("h-60-mfd", _MachInstrument_MFD);
