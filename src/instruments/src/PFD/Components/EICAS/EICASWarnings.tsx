import React from "react";
import "../../style.scss";
import { useSimVar } from "../../../Hooks/simVars";

export const EICASWarnings = () => {
  // Warning vars
  const [A1Wing1Leak] = useSimVar("L:A1WING1LEAK", "bool");
  const [A1Wing2Leak] = useSimVar("L:A1WING2LEAK", "bool");
  const [ApuFire] = useSimVar("APU ON FIRE DETECTED", "bool");
  const [Batt1OverTemp] = useSimVar("L:BATT1OVERTEMP", "bool");
  const [Batt2OverTemp] = useSimVar("L:BATT2OVERTEMP", "bool");
  const [Batt12Off] = useSimVar("L:BATT12OFF", "bool");
  const [BattDischarge] = useSimVar("L:BATTDISCHARGE", "bool");
  const [CabinAlt] = useSimVar("L:CABINALT", "Feet");
  const [CrgAftSmoke] = useSimVar("L:CRGAFTSMOKE", "bool");
  const [CrgFwdSmoke] = useSimVar("L:CRGFWDSMOKE", "bool");
  const [FwdCargoDoor] = useSimVar("L:FWDCRGDOOR", "bool");
  const [AftCargoDoor] = useSimVar("L:AFTCRGDOOR", "bool");
  const [AftPaxDoor] = useSimVar("L:AFTPAXDOOR", "bool");
  const [FwdPaxDoor] = useSimVar("L:FWDPAXDOOR", "bool");
  const [AftSrvDoor] = useSimVar("L:AFTSRVDOOR", "bool");
  const [FwdSrvDoor] = useSimVar("L:FWDSRVDOOR", "bool");
  const [ElecEmergency] = useSimVar("L:ELECEMERGENCY", "bool");
  const [ElevNmlModeFail] = useSimVar("L:ELEVNMLMODEFAIL", "bool");
  const [Eng1Fire] = useSimVar("ENG ON FIRE:1", "bool");
  const [Eng2Fire] = useSimVar("ENG ON FIRE:2", "bool");
  const [Eng1LlowOilPress] = useSimVar("L:ENG1LOWOILPRESS", "bool");
  const [Eng2LlowOilPress] = useSimVar("L:ENG2LOWOILPRESS", "bool");
  const [Eng1RevDeployed] = useSimVar("L:ENG1REVDEP", "bool");
  const [Eng2RevDeployed] = useSimVar("L:ENG2REVDEP", "bool");
  const [Fuel1Low] = useSimVar("L:FUEL1LOW", "bool");
  const [Fuel2Low] = useSimVar("L:FUEL2LOW", "bool");
  const [SpoilersFail] = useSimVar("L:SPOILERSFAIL", "bool");
  const [Hyd1Overheat] = useSimVar("L:HYD1OVERHEAT", "bool");
  const [Hyd2Overheat] = useSimVar("L:HYD2OVERHEAT", "bool");
  const [Hyd3Overheat] = useSimVar("L:HYD3OVERHEAT", "bool");
  const [LavSmoke] = useSimVar("L:LavSmoke", "bool");
  const [LgBayFire] = useSimVar("L:LGBAYFIRE", "bool");
  const [LgLvrDisag] = useSimVar("L:LGLVRDISAG", "bool");
  const [TakeoffConfig] = useSimVar("L:TAKEOFFCONFIG", "bool");
  const [RuddervNmlModeFail] = useSimVar("L:RUDDERNMLMODEFAIL", "bool");
  const [SplNmlModeFail] = useSimVar("L:SPLNMLMODEFAIL", "bool");
  // Caution Vars

  // Advisory Vars

  // Status Vars
  const [ADSBOff] = useSimVar("L:ADSBOFF", "bool");
  const [NAIValve1] = useSimVar("L:NAIENG1", "bool");
  const [NAIValve2] = useSimVar("L:NAIENG2", "bool");
  const [NAIValveW] = useSimVar("L:NAIWING", "bool");
  const [APUFSoV] = useSimVar("L:APUFSOV", "bool");
  const [APUShutDown] = useSimVar("L:APUSHUTDOWN", "bool");
  const [AutolandOff] = useSimVar("L:AUTOLANDOFF", "bool");
  const [APUBleedValve] = useSimVar("BLEED AIR APU", "bool");

  // console.log(TotalErrors);

  const Warning = [
    A1Wing1Leak ? null : "A-1 WING 1 LEAK",
    A1Wing2Leak ? "A-1 WING 2 LEAK" : null,
    ApuFire ? "APU FIRE" : null,
    Batt1OverTemp ? "BATT 1 OVERTEMP" : null,
    Batt2OverTemp ? "BATT 2 OVERTEMP" : null,
    Batt12Off ? "BATT 1-2 OFF" : null,
    BattDischarge ? "BATT DISCHARGING" : null,
    CabinAlt ? "CABIN ALTITUDE HI" : null,
    CrgAftSmoke ? "CRG AFT SMOKE" : null,
    CrgFwdSmoke ? "CRG FWD SMOKE" : null,
    FwdCargoDoor ? "DOOR CRG FWD OPEN" : null,
    AftCargoDoor ? "DOOR CRG AFT OPEN" : null,
    AftPaxDoor ? "DOOR PAX AFT OPEN" : null,
    FwdPaxDoor ? "DOOR PAX FWD OPEN" : null,
    AftSrvDoor ? "DOOR SERV AFT OPEN" : null,
    FwdSrvDoor ? "DOOR SERV FWD OPEN" : null,
    ElecEmergency ? ">ELEC EMERGENCY" : null,
    ElevNmlModeFail ? "ELEV NML MODE FAIL" : null,
    Eng1Fire ? "ENG 1 FIRE" : null,
    Eng2Fire ? "ENG 2 FIRE" : null,
    Eng1LlowOilPress ? "ENG 1 OIL LO PRESS" : null,
    Eng2LlowOilPress ? "ENG 2 OUL LO PRESS" : null,
    Eng1RevDeployed ? "ENG 1 REV DEPLOYED" : null,
    Eng2RevDeployed ? "ENG 2 REV DEPLOYED" : null,
    Fuel1Low ? "FUEL 1 LOW LEVEL" : null,
    Fuel2Low ? "FUEL 2 LOW LEVEL" : null,
    SpoilersFail ? "GROUND SPOILERS FAIL" : null,
    Hyd1Overheat ? "HYD 1 OVERHEAT" : null,
    Hyd2Overheat ? "HYD 2 OVERHEAT" : null,
    Hyd3Overheat ? "HYD 3 OVERHEAT" : null,
    LavSmoke ? "LAV SMOKE" : null,
    LgBayFire ? "LG BAY FIRE" : null,
    LgLvrDisag ? "LG LEVER DISAG" : null,
    TakeoffConfig ? "NO TAKEOFF CONFIG" : null,
    RuddervNmlModeFail ? "RUDDER NML MODE FAIL" : null,
    SplNmlModeFail ? "SPOILER NML MODE FAIL" : null,
  ];

  // const Caution = [];
  // const Advisory = [];
  const Status = [
    ADSBOff ? "ADS-B NOT ON" : null,
    NAIValve1 ? "A-I ENG 1 VLV OPEN" : null,
    NAIValve2 ? "A-I ENG 2 VLV OPEN" : null,
    NAIValveW ? "A-I WING VLV OPEN" : null,
    APUFSoV ? "APU FUEL SOV CLOSED" : null,
    APUShutDown ? "APU SHUTTING DOWN" : null,
  ];
  // var indexAPUBleed = Status.indexOf("BLEED APU VLV OPEN");
  // APUBleedValve ? Status.unshift("BLEED APU VLV OPEN") : null;
  // // Status.splice(indexAPUBleed, 1);

  // var indexAutoLandOff = Status.indexOf("AUTOLAND OFF");
  // AutolandOff ? Status.unshift("AUTOLAND OFF") : null;
  // Status.splice(indexAutoLandOff, 1);

  // console.log(Status);
  return (
    <g className="EICASHover">
      <div className="EicasWarnings">
        {Warning.map((Warning) => (
          <ul>
            <li className="Warning">{Warning}</li>
          </ul>
        ))}
        {/* {Caution.map((Caution) => (
            <li className="Caution">{Caution}</li>
          ))}
          {Advisory.map((Advisory) => (
            <li className="Advisory">{Advisory}</li>
          ))} */}
        {Status.map((Status) => (
          <ul>
            <li className="Status">{Status}</li>
          </ul>
        ))}

        <br />
        <br />
      </div>
      <div className="bottomBlocker" />
    </g>
  );
};