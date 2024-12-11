import * as React from 'react'
import { render, getDisplayIndex } from '@Hooks'
import { SimVarContext, ClassSimVarProvider, SimVarUnitsEnum } from '@Hooks/ClassSimVars'

import ClassCircuitPower from '@Common/circuit'
import { PFD, JVMF, EICAS, TAC, ND } from './Modules'
import Router from './Util/Router'
import GlobalText from './Components/GlobalText'

import './style.scss'


class MFD extends React.Component {
  static contextType = SimVarContext

  context!: React.ContextType<typeof SimVarContext>

  private readonly displayIndex: number

  private readonly Pages: Map<number, React.ReactNode>

  constructor(props: MFD) {
    super(props)

    this.Pages = new Map([
      [0, <PFD /> as React.ReactNode],
      [1, <ND /> as React.ReactNode],
      [2, <EICAS /> as React.ReactNode],
      [3, <TAC /> as React.ReactNode],
      [4, <JVMF /> as React.ReactNode]
    ])
    this.displayIndex = getDisplayIndex()
  }

  componentDidMount() {
    const { register } = this.context

    register('L:ADDITIONSVIS', SimVarUnitsEnum.ENUM)
  }

  render() {
    return (
      <ClassCircuitPower localVar={`H60_MFD_${this.displayIndex}_PWR`}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            width: '1024px',
            height: '768px',
            color: 'white'
          }}
        >
          <GlobalText text1="PFD" text2="ND" text3="EICAS" text4="" text5="TAC" text6="JVMF">
            <Router pages={this.Pages} displayIndex={this.displayIndex} />
          </GlobalText>

        </div>
      </ClassCircuitPower>
    )
  }
}

render(
  <ClassSimVarProvider>
    <MFD />
  </ClassSimVarProvider>,
  false
)
