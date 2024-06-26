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

  // const defaultProps: CircularProgressBarProps = {
  //   percent: 0,
  //   colorSlice: '#424242',
  //   colorCircle: '#ededed',
  //   round: false,
  //   opacity: 1,
  //   number: false,
  //   size: '100px',
  //   speed: 1,
  //   cut: 0,
  //   rotation: 0,
  //   unit: '%',
  //   textPosition: 'center',
  //   fontSize: '20px',
  //   fontColor: '#000',
  //   fill: 'transparent',
  //   fontWeight: 900,
  //   stroke: 10,
  //   strokeBottom: 10,
  //   strokeDasharray: '1000',
  //   linearGradient: [],
  //   animationOff: false,
  //   styles: {},
  // }

  const CircularProgressBar: FC<CircularProgressBarProps>
  export default function CircularProgressBar(props: CircularProgressBarProps)
}
