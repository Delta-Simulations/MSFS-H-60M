import React, { FC, ReactNode } from 'react'
import { useSimVar } from '@Hooks'
import { SimVarContext, SimVarUnitsEnum } from '@Hooks/ClassSimVars'

/**
 * @param {string} localVar - Local Variable name (without the L:) i.e. "CIRCUIT_3_STATE"
 * @param {boolean?} inverse - Invert the functionality of the circuit
 */
interface CircuitPowerProps {
  localVar: string
  inverse?: boolean
  children: React.ReactNode
}

export const CircuitPower: FC<CircuitPowerProps> = ({ localVar, inverse = false, children }): null | JSX.Element => {
  const [isOn] = useSimVar(`L:${localVar}`, 'bool')
  if (inverse) {
    if (isOn) return null
    else return <div>{children}</div>
  } else {
    if (!isOn) return null
    else return <div>{children}</div>
  }
}

class ClassCircuitPower extends React.Component<CircuitPowerProps> {
  static contextType = SimVarContext
  context!: React.ContextType<typeof SimVarContext>

  componentDidMount() {
    const { localVar, inverse = false, children } = this.props
    const { register } = this.context

    register(`L:${localVar}`, SimVarUnitsEnum.BOOL)
  }

  render() {
    const { localVar, inverse = false, children } = this.props
    const { retrieve } = this.context

    const isOn = retrieve(`L:${localVar}`, SimVarUnitsEnum.BOOL)

    if (inverse) {
      if (isOn) return null
      else return <div>{children}</div>
    } else {
      if (!isOn) return null
      else return <div>{children}</div>
    }
  }
}

export default ClassCircuitPower
