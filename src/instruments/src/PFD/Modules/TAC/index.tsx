import * as React from 'react'
import refImage from './ref/tac_ref.png'

type TACProps = {}

class TAC extends React.Component<TACProps> {

  render() {
    return (
      <div><img alt="ref" src={refImage} />TAC</div>
    )
  }
}

export default TAC