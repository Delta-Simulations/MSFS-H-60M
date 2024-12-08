import React from 'react'
import ReactDOM from 'react-dom'
import * as Defaults from './defaults'
import { SimVarProvider } from './simVars'

export * from './simVars'
export * from './CustomImports'
export * from './defaults'
export * from './persistence'
export * from './RateMultiplierKnob'
export * from './hover'
export * from './hooks'

/**
 * Use the given React element to render the instrument using React.
 */
export const render = (Slot: React.ReactElement, useSimVarProvider = true) => {
  if (useSimVarProvider) ReactDOM.render(<SimVarProvider>{Slot}</SimVarProvider>, Defaults.getRenderTarget())
  else {
    ReactDOM.render(<>{Slot}</>, Defaults.getRenderTarget())
  }
}
