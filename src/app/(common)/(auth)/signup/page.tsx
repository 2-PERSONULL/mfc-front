import React from 'react'
import SignUpFunnel from '@/components/pages/auth/signUp/SignUpFunnel'
import { SignUpType } from '@/types/signupTypes'
import SignUpSchema from '@/schema/signUpSchema'

export default async function SignUp() {
  const handleSignUp = async (data: SignUpType) => {
    'use server'

    try {
      const validationResult = await SignUpSchema.safeParseAsync(data)
      if (!validationResult.success) {
        return { isSuccess: false, message: validationResult.error.message }
      }
      const signUpResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth-service/auth/signup`,
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
        return signUpResult
      }
      console.log(signUpResult)
      return null
    } catch (error) {
      return error
    }
  }

  return (
    <main>
      <SignUpFunnel submit={handleSignUp} />
    </main>
  )
}
