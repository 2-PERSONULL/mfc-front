import React from 'react'
import { signIn } from 'next-auth/react'
import KakaoSignInButton from '@/components/pages/auth/signIn/KakaoSignInButton'

export default function SignIn() {
  return (
    <main>
      <div className="relative flex flex-col items-center h-svh">
        <div className="absolute flex flex-col items-center top-1/3">
          <form
            className="flex flex-col items-center"
            onSubmit={async () => {
              'use server'

              await signIn('credentials')
            }}
          >
            <input
              name="email"
              type="email"
              placeholder="이메일"
              className="border px-2 py-2 rounded-lg mb-4"
            />
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              className="border px-2 py-2 rounded-lg"
            />
            <button
              type="submit"
              className="bg-blue-400 text-black font-bold w-full mx-5 my-5 py-2 px-4 rounded-xl"
            >
              로그인
            </button>
          </form>
          <KakaoSignInButton />
        </div>
      </div>
    </main>
  )
}
