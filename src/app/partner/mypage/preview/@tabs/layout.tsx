import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return <div className="p-7 min-h-[90dvh]  bg-white w-full">{children}</div>
}
