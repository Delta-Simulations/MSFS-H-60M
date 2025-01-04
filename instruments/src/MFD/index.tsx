import { MSFSRender } from '@hooks'
import { SimVarProvider } from '@hooks/simvars'
import './index.scss'
import Router from './Util/Router/Router'
import { useDisplayIndex } from '@hooks'
import { createSignal, createEffect } from 'solid-js'

function MFD() {
  const display_id = useDisplayIndex()

  const [router_simvar, set_router_simvar] = createSignal<string>('')

  createEffect(() => {
    set_router_simvar(`L:H60_MFD_${display_id()}_MODE`)
  })

  return (
    <div style={{ color: 'white' }}>
      <Router var={router_simvar()} />
    </div>
  )
}

MSFSRender(
  <SimVarProvider>
    <MFD />
  </SimVarProvider>
)
