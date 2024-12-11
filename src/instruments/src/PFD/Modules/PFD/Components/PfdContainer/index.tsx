/**
 *
 * __________________________________________________________
 * | #FlightControls      #Autopilot                         |
 * |                                                         |
 * | #Airspeed             #Attitude       #Altimeter  #VS   |
 * |                                                         |
 * |                                                         |
 * |                                                         |
 * |                                                         |
 * |                                                         |
 * |                                                         |
 * | #Engine                #HSI          #RadarAlt          |
 * |                                                         |
 * |                                      #MessageBank       |
 * |_________________________________________________________|
 */

import * as React from 'react'

import { SimVarContext } from '@Hooks/ClassSimVars'

type PfdContainerProps = {
  pfdComponents: {
    airspeedIndicator: React.ReactNode
    attitudeIndicator: React.ReactNode
    altimeterIndicator: React.ReactNode
    verticalSpeedIndicator: React.ReactNode
    horizontalSituationIndicator: React.ReactNode
    autopilotIndicator: React.ReactNode
    engineIndicator: React.ReactNode
    flightControlIndicator: React.ReactNode
    radarAltIndicator: React.ReactNode
    messageBankIndicator: React.ReactNode
  }
}

class PfdContainer extends React.Component<PfdContainerProps> {
  static contextType = SimVarContext

}

export default PfdContainer