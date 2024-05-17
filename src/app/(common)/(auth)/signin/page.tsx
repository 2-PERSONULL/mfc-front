import React from 'react'
import KakaoSignInButton from '@/components/pages/auth/KakaoSignInButton'
import { signIn } from '@/auth'

export default function SignIn({
  searchParams,
}: {
  searchParams: { [key: string]: number }
}) {
  const { callbackUrl } = searchParams
  return (
    <div>
      <form
        className="flex flex-col"
        action={async (formData) => {
          'use server'

          await signIn('credentials', formData, {
            callbackUrl: callbackUrl ? `${callbackUrl}` : '/user',
          })
        }}
      >
        <div className="flex gap-2">
          <p>이메일</p>
          <input name="email" type="email" className="border" />
        </div>
        <div className="flex gap-2">
          <p>비밀번호</p>
          <input name="password" type="password" className="border" />
        </div>
        <button
          type="submit"
          className="bg-blue-400 text-black font-bold mx-5 my-5 py-2 px-4 rounded-xl"
        >
          로그인
        </button>
      </form>
      <KakaoSignInButton />
    </div>
  )
}
