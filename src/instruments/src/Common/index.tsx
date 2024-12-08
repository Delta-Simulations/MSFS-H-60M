import React, { FC } from 'react'
import ReactDOM from 'react-dom'

type GroupProps = {
  x: number
  y: number
  children: React.ReactNode
}

export const SvgGroup: FC<GroupProps> = ({ x, y, children }) => <g transform={`translate(${x}, ${y})`}>{children}</g>
