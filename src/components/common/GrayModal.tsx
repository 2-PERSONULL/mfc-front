import React from 'react'

export default function GrayModal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-0 left-0 z-[300] w-full h-full bg-[#747474] bg-opacity-50 flex items-center justify-center">
      {children}
    </div>
  )
}
