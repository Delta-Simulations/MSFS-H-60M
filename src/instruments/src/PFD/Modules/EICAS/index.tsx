import * as React from 'react'
import refImage from './ref/eicas_ref.png'

type EicasProps = {}

class EICAS extends React.Component<EicasProps> {

  render() {
    return (
      <div><img alt="ref" src={refImage} />EICAS</div>
    )
  }
}

export default EICAS