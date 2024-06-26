import React from 'react'
import SignInLogo from '@/components/pages/auth/signIn/SignInLogo'
import BackArrowButton from '@/components/ui/button/BackArrowButton'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="w-[50px] h-[50px] flex absolute left-2 top-0 bottom-0 items-center justify-center">
        <BackArrowButton confirmExit={false} />
      </nav>
      <SignInLogo />
      {children}
    </>
  )
}
