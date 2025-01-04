import * as SolidJS from 'solid-js'
import { render } from 'solid-js/web'
import { SimVarProvider } from '@hooks/simvars'

const mountNode = document.getElementById('MSFS_REACT_MOUNT') as HTMLElement

export const GetRenderTarget = (): HTMLElement => mountNode

export function MSFSRender(element: SolidJS.JSXElement): void {
  render(() => element, GetRenderTarget())
}
// Wrapping this MSFSRender function in the SimVarProvider throws a context tree error, for now we can simply wrap the arguments to this function in the provider
// example:
// MSFSRender(<SimVarContext><Display/></SimVarContext>)

export const useDisplayIndex = () => {
  const [display_index, set_display_index] = SolidJS.createSignal(0)

  const update_display_index = () => {
    const url = document.getElementsByTagName('pfd_element')[0]?.getAttribute('url')
    set_display_index(url ? Number.parseInt(url.substring(url.length - 1), 10) : 0)
  }

  const observer = new MutationObserver(update_display_index)
  const target = document.getElementsByTagName('pfd-element')[0]

  if (target) {
    observer.observe(target, { attributes: true })
    update_display_index()
  }

  SolidJS.onCleanup(() => {
    observer.disconnect()
  })

  return display_index
}
