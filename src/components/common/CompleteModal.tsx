import React from 'react'

export default function CompleteModal({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed z-[200] top-0 left-0 w-full h-full bg-[#424242] bg-opacity-60">
      <div className="w-full h-full flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  )
}
