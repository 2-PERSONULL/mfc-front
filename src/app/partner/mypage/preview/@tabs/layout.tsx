import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-7  px-3 min-h-[90vh] bg-white w-full">{children}</div>
  )
}
