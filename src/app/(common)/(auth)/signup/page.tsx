import React from 'react'
// import { signIn } from 'next-auth/react'
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
      const signUpResult = await signUpResponse.json()
      if (signUpResult.isSuccess) {
        console.log('회원가입 성공')
        return signUpResult
      }
      console.log('회원가입 실패')
      return null // or appropriate value
    } catch (error) {
      console.log(error)
      return null
    }
  }

  return (
    <div>
      <SignUpFunnel submit={handleSignUp} />
    </div>
  )
}
