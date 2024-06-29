import React from 'react'
import SignUpFunnel from '@/components/pages/auth/signUp/SignUpFunnel'
import { SignUpType } from '@/types/signupTypes'
import { postSignUp } from '@/actions/member/Auth'
import { getStyleList } from '@/actions/member/Explore'

export default async function SignUp() {
  const styleData = await getStyleList()
  const handleSignUp = async (data: SignUpType) => {
    'use server'

    await postSignUp(data)
  }

  return (
    <main>
      <SignUpFunnel submit={handleSignUp} styleData={styleData.styles} />
    </main>
  )
}
