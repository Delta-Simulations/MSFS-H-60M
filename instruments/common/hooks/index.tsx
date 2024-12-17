import * as SolidJS from 'solid-js'
import { render } from 'solid-js/web'
import { SimVarProvider } from '@hooks/simvars'

const mountNode = document.getElementById('MSFS_REACT_MOUNT') as HTMLElement

export const GetRenderTarget = (): HTMLElement => mountNode

export function MSFSRender(element: SolidJS.JSXElement): void {
  render(() =>
      element
    , GetRenderTarget())
}

// Wrapping this render content in the SimVarProvider throws a context tree error, for now we can simply wrap the arguments to this function in the provider