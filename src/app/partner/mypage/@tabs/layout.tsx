import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="pt-7 pb-[9rem] px-3 bg-white w-full min-h-[90vh]">
      {children}
    </section>
  )
}
