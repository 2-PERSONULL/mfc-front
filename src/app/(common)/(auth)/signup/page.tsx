import React from 'react'
import SignUpFunnel from '@/components/pages/auth/signUp/SignUpFunnel'
import { SignUpType } from '@/types/signupTypes'
import { postSignUp } from '@/actions/member/Auth'

export default async function SignUp() {
  const handleSignUp = async (data: SignUpType) => {
    'use server'

    await postSignUp(data)
  }

  return (
    <main>
      <SignUpFunnel submit={handleSignUp} />
    </main>
  )
}
