import { render } from 'solid-js/web'

import { MSFSRender } from '@hooks'

function HelloAce() {
  return (
    <div style={{ color: 'white' }}>Hello ace</div>
  )
}

MSFSRender(<HelloAce />)
