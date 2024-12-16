import * as SolidJS from 'solid-js'
import { render } from 'solid-js/web'

const mountNode = document.getElementById('MSFS_REACT_MOUNT') as HTMLElement

export const GetRenderTarget = (): HTMLElement => mountNode

export function MSFSRender(element: SolidJS.JSXElement): void {
  render(() => element, GetRenderTarget())
}
