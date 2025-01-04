import { useSimVar, SimVarUnitsEnum } from '@hooks/simvars'
import { type Component, createEffect, createSignal, type JSX, onMount, Show, useContext } from 'solid-js'
import PFD from '../../Pages/PFD'
import ND from '../../Pages/ND'
import EICAS from '../../Pages/EICAS'
import TAC from '../../Pages/TAC'
import JVMF from '../../Pages/JVMF'
import { useDisplayIndex } from '@hooks/index'

type RouterProps = {
  var: string
}

const Router: Component<RouterProps> = (props: RouterProps) => {
  const [page, set_page] = useSimVar(props.var, SimVarUnitsEnum.ENUM)
  const [rendered_page, set_rendered_page] = createSignal<JSX.Element>()

  createEffect(() => {
    switch (page()) {
      case 0:
        set_rendered_page(<PFD />)
        break
      case 1:
        set_rendered_page(<ND />)
        break
      case 2:
        set_rendered_page(<EICAS />)
        break
      case 3:
        set_rendered_page(<TAC />)
        break
      case 4:
        set_rendered_page(<JVMF />)
        break

      default:
        set_rendered_page(<div>Page not found</div>)
    }
  })

  return (
    <div>
      <div>{rendered_page()}</div>
    </div>
  )
}

export default Router
