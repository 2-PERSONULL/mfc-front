import React from 'react'

const LoadingText = ({
  message,
  color,
}: {
  message?: string
  color?: string
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <span
        className={`loading loading-dots loading-lg ${color ? `bg-${color}` : 'bg-white'}`}
      />
      {message && (
        <p
          className={`text-[14px] mt-2 ${color ? `text-${color}` : 'text-white'} `}
        >
          {message}
        </p>
      )}
    </div>
  )
}

export default LoadingText
