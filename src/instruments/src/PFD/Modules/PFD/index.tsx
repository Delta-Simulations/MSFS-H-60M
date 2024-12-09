import * as React from 'react'

import refImage from './ref/pfd_ref.png'

type PFDProps = {}

class PFD extends React.Component<PFDProps> {

  render() {
    return (
      <div><img alt="ref" src={refImage} />PFD</div>

    )
  }
}

export default PFD