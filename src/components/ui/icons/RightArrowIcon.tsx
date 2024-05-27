import React from 'react'

interface RightArrowProps {
  width?: number
  height?: number
  color?: string
  rotate?: string
}

const RightArrowIcon: React.FC<RightArrowProps> = ({
  width,
  height,
  color,
  rotate,
}) => {
  return (
    <svg
      width={width || 13}
      height={height || 13}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color || 'black'}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.72732 9.0001L0.351538 16.3758L1.20014 17.2244L9.42438 9.0001L1.20014 0.775795L0.351538 1.6244L7.72732 9.0001Z"
      />
    </svg>
  )
}

RightArrowIcon.defaultProps = {
  width: 13,
  height: 13,
  color: 'black',
  rotate: '0',
}

export default RightArrowIcon
