import CheckAce from '../../../Common/CheckAce'

type FlightPlanStruct = {
  ident: string
  type: WaypointTypeEnum
  icao: string
  distance: number
  cumulativeDistance: number
  latitude: number
  longitude: number
  bearing: number
}

enum WaypointTypeEnum {
  NONE,
  AIRPORT,
  INTERSECTION,
  VOR,
  NDB,
  USER,
  ATC
}

function FetchFlightPlan(): FlightPlanStruct[] {
  if (!CheckAce()) {
    let waypoints = new SimVar.SimVarBatch('C:fs9gps:FlightPlanWaypointsNumber', 'C:fs9gps:FlightPlanWaypointIndex')
    waypoints.add('C:fs9gps:FlightPlanWaypointICAO', 'string', 'string')
    waypoints.add('C:fs9gps:FlightPlanWaypointIdent', 'string', 'string')
    waypoints.add('C:fs9gps:FlightPlanWaypointType', 'number', 'number')
    waypoints.add('C:fs9gps:FlightPlanWaypointDistance', 'nautical miles', 'number')
    waypoints.add('C:fs9gps:FlightPlanWaypointDistanceTotal', 'nautical miles', 'number')
    waypoints.add('C:fs9gps:FlightPlanWaypointLatitude', 'degrees', 'number')
    waypoints.add('C:fs9gps:FlightPlanWaypointLongitude', 'degrees', 'number')
    waypoints.add('C:fs9gps:FlightPlanWaypointMagneticHeading', 'degrees', 'number')

    let waypointArray: FlightPlanStruct[] = []
    SimVar.GetSimVarArrayValues(waypoints, function(fpWaypoint) {
      for (let i = 0; i < fpWaypoint.length; i++) {
        console.log('Ident', fpWaypoint[i][1])
        console.log('Type', fpWaypoint[i][2])
        console.log('ICAO', fpWaypoint[i][0])
        console.log('Distance In Float', fpWaypoint[i][3])
        console.log('Cumulative Distance Float', fpWaypoint[i][4])
        console.log('Latitude', fpWaypoint[i][5])
        console.log('Longitude', fpWaypoint[i][6])
        console.log('Bearing', fpWaypoint[i][7])

        waypointArray.push({
          ident: fpWaypoint[i][1],
          type: fpWaypoint[i][2],
          icao: fpWaypoint[i][0],
          distance: fpWaypoint[i][3],
          cumulativeDistance: fpWaypoint[i][4],
          latitude: fpWaypoint[i][5],
          longitude: fpWaypoint[i][6],
          bearing: fpWaypoint[i][7]
        })
      }
    })
    return waypointArray
  } else {
    return []
  }
}
