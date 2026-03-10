import React, { FC, ReactNode } from 'react';
import { useSimVar } from '../Hooks/simVars';

// Function to create radial lines for use in instruments like the compass rose or radar altimeter circles
type RadialLine = {
  x1: number
  y1: number
  x2: number
  y2: number
  angle: number
}

export function createRadialLines({
  cx = 0,
  cy = 0,
  radius = 100,
  count = 36,
  length = 10,
  startAngle = 0,
  endAngle = 360
}: {
  cx?: number
  cy?: number
  radius?: number
  count?: number
  length?: number
  startAngle?: number
  endAngle?: number
}): RadialLine[] {

  const lines: RadialLine[] = []

  const step = (endAngle - startAngle) / count

  for (let i = 0; i < count; i++) {
    const angle = (startAngle + i * step) * (Math.PI / 180)

    const x1 = cx + Math.cos(angle) * radius
    const y1 = cy + Math.sin(angle) * radius

    const x2 = cx + Math.cos(angle) * (radius - length)
    const y2 = cy + Math.sin(angle) * (radius - length)

    lines.push({
      x1,
      y1,
      x2,
      y2,
      angle
    })
  }

  return lines
}