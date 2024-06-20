import React from 'react'
import SignInLogo from '@/components/pages/auth/signIn/SignInLogo'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SignInLogo title="LOGIN" />
      {children}
    </>
  )
}
