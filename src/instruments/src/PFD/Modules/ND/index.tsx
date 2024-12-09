import * as React from 'react'
import refImage from './ref/nd_ref.png'

type NDProps = {}

class ND extends React.Component<NDProps> {

  render() {
    return (
      <div><img alt="ref" src={refImage} />ND</div>
    )
  }
}

export default ND