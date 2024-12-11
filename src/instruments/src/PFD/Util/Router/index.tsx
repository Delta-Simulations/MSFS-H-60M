import * as React from 'react'

import { SimVarContext, SimVarUnitsEnum } from '@Hooks/ClassSimVars'

export type RouterProps = {
  pages: Map<number, React.ReactNode>; // <id, component>
  displayIndex: number
}


class Router extends React.Component<RouterProps> {

  static contextType = SimVarContext

  context!: React.ContextType<typeof SimVarContext>

  private readonly routerVariable: string

  constructor(props: RouterProps) {
    super(props)
    this.state = {
      currentPage: Array.from(props.pages.keys())[0] || 0
    }
    this.routerVariable = 'L:UH60_MFD_' + props.displayIndex + '_ROUTER'
  }


  componentDidMount() {
    const { register } = this.context
    register(this.routerVariable, SimVarUnitsEnum.ENUM)
  }

  componentWillUnmount() {
    const { unregister } = this.context
    unregister(this.routerVariable, SimVarUnitsEnum.ENUM)
  }

  render() {
    const { retrieve } = this.context

    const currentPage = retrieve(this.routerVariable, SimVarUnitsEnum.ENUM)
    return (
      <>
        {this.props.pages.get(currentPage as number)}

      </>
    )
  }
}


export default Router