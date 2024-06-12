import React from 'react'
import SignUpFunnel from '@/components/pages/auth/signUp/SignUpFunnel'
import { SignUpType } from '@/types/signupTypes'

export default async function SignUp() {
  const handleSignUp = async (data: SignUpType) => {
    'use server'

    try {
      const signUpResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/auth/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      )
      // 회원가입 성공 & 실패 여부 toast 추가 필요
      const signUpResult = await signUpResponse.json()
      if (signUpResult.isSuccess) {
        return signUpResult
      }
      console.log(signUpResult)
      return null // or appropriate value
    } catch (error) {
      return error
    }
  }

  return (
    <div>
      <SignUpFunnel submit={handleSignUp} />
    </div>
  )
}
