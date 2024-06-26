import React, { ReactNode } from 'react'
import BackArrowButton from '@/components/ui/button/BackArrowButton'

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="w-[50px] h-[50px] flex absolute left-2 top-0 bottom-0 items-center justify-center">
        <BackArrowButton confirmExit={false} />
      </nav>
      {children}
    </>
  )
}
