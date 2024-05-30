import React from 'react'
import SignUpFunnel from '@/components/pages/auth/signUp/SignUpFunnel'
import { SignUpType } from '@/types/signupTypes'

export default async function SignUp() {
  const handleSubmit = async (data: SignUpType) => {
    'use server'

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/auth/signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )

    const result = await response.json()
    if (result.isSuccess) {
      console.log('회원가입 성공')
    }
  }

  return (
    <div>
      <SignUpFunnel submit={handleSubmit} />
    </div>
  )
}
