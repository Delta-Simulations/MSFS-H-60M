import { render } from 'solid-js/web'

import { MSFSRender } from '@hooks'
import { useSimVar, SimVarUnitsEnum, SimVarProvider } from '@hooks/simvars'

function HelloAce() {
  const [altitude, setAltitude] = useSimVar('PLANE ALTITUDE', SimVarUnitsEnum.FOOT)
  return (
    <div style={{ color: 'white' }}>Hello from solidJS {altitude()}</div>
  )
}

MSFSRender(<SimVarProvider><HelloAce /></SimVarProvider>)
