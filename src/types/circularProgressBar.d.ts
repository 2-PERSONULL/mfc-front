// @tomickigrzegorz__react-circular-progress-bar.d.ts
declare module '@tomickigrzegorz/react-circular-progress-bar' {
  import { FC, ReactNode } from 'react'

  interface CircularProgressBarProps {
    id?: number
    percent: number
    colorSlice?: string
    colorCircle?: string
    round?: boolean
    opacity?: number
    number?: boolean
    size?: string
    speed?: number
    cut?: number
    rotation?: number
    unit?: string
    textPosition?: string
    fontSize?: string
    fontColor?: string
    fill?: string
    fontWeight?: number
    stroke?: number
    strokeBottom?: number
    strokeDasharray?: string
    linearGradient?: string[]
    animationOff?: boolean
    styles?: React.CSSProperties
    children?: ReactNode
  }

  const CircularProgressBar: FC<CircularProgressBarProps>
  export default CircularProgressBar
}
