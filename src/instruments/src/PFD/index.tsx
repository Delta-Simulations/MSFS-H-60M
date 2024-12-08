import React, { Component } from 'react'
import { render, getDisplayIndex } from '../Hooks'
import { SimVarContext, ClassSimVarProvider } from '../Hooks/ClassSimVars'

import ClassCircuitPower from '../Common/circuit'
import './style.scss'

class PFD extends Component {
  private readonly displayControls: string
  static contextType = SimVarContext

  context!: React.ContextType<typeof SimVarContext>

  constructor(props: PFD) {
    super(props)

    const DisplayID = getDisplayIndex()
    this.displayControls = `L:H60_MFD_${DisplayID}_MODE`
  }

  componentDidMount() {
    const { register } = this.context

    register(this.displayControls, 'enum', 16, false)
    register('L:ADDITIONSVIS', 'enum', 16, false)
  }

  render() {
    const DisplayID = getDisplayIndex()
    const { retrieve, update } = this.context

    const displayControls = retrieve(this.displayControls, 'enum')

    return (
      <ClassCircuitPower localVar={`H60_MFD_${DisplayID}_PWR`}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            width: '1024px',
            height: '768px',
            color: 'white'
          }}
        >
          Hello Display Type: {displayControls}
        </div>
      </ClassCircuitPower>
    )
  }
}

render(
  <ClassSimVarProvider>
    <PFD />
  </ClassSimVarProvider>,
  false
)
