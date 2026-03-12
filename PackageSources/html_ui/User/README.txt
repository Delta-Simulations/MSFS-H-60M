    switch (type) {
      case "FMS_WP": iconUrl = "/Images/MFD/FMS_Waypoint.svg"; textColor = "magenta"; break;
      case "Other_WP": iconUrl = "/Images/MFD/Base_WP.svg"; break;
      case "FMS_VOR": iconUrl = "/Images/MFD/VOR.svg"; break;
      case "FMS_VORTAC": iconUrl = "/Images/MFD/VORTAC.svg"; break;
      case "FMS_TACAN": iconUrl = "/Images/MFD/TACAN.svg"; break;
      case "FMS_NDB": iconUrl = "/Images/MFD/NDB.svg"; break;
      case "FMS_AIRPORT": iconUrl = "/Images/MFD/AIRPORT.svg"; break;
      case "FMS_INTERSECTION": iconUrl = "/Images/MFD/INTERSECTION.svg"; break;
      case "user_point": iconUrl = "/Images/MFD/INTERSECTION.svg"; break;
      case "RendezVous_Point": iconUrl = "/Images/MFD/10012500001811000000.svg"; break;
      case "Downed_Pilot": iconUrl = "/Images/MFD/10012500001803000000.svg"; break;
      case "Civ_Vehicle": iconUrl = "/Images/MFD/10041500001604030000.svg"; textColor = "rgb(255,161,255)"; break;

      case "Friendly_Helipad": iconUrl = "/Images/MFD/10032000001213050000.svg"; textColor = "blue"; break;
      case "Friendly_Medical_Center": iconUrl = "/Images/MFD/10034000001313000000.svg"; textColor = "blue"; break;

      case "Hostile_Missile_Launcher": iconUrl = "/Images/MFD/10061500001110000000.svg"; textColor = "red"; break;
      case "Hostile_Radar_Site": iconUrl = "/Images/MFD/10061000001504000000.svg"; textColor = "red"; break;
    }

    return { iconUrl, textColor };
  };