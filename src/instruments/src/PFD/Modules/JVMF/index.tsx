import * as React from 'react'
import refImage from './ref/jvmf_ref.png'

type JVMFProps = {}

class JVMS extends React.Component<JVMFProps> {

  render() {
    return (
      <div><img alt="ref" src={refImage} />JVMS</div>
    )
  }
}

export default JVMS