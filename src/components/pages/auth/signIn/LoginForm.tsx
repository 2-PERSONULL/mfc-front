'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import KakaoSignInButton from '@/components/pages/auth/signIn/KakaoSignInButton'

interface LoginFormType {
  email: string
  password: string
}

export default function LoginForm() {
  const param = useSearchParams()
  const callbackUrl = param.get('callbackUrl')

  const [payload, setPayload] = useState<LoginFormType>({
    email: '',
    password: '',
  })

  const logInSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!payload.email && !payload.password) {
      // return alert('아이디와 비밀번호를 입력해주세요.')
      console.log('아이디와 비밀번호를 입력해주세요.')
      // 수정 필요
      return null
    }

    signIn('credentials', {
      email: payload.email,
      password: payload.password,
      redirect: true,
      callbackUrl: callbackUrl || '/user',
    })
    return null
  }

  const onChangePayload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="relative flex flex-col items-center h-svh">
      <div className="absolute flex flex-col items-center top-1/3">
        <form className="flex flex-col items-center" onSubmit={logInSubmit}>
          <input
            name="email"
            type="email"
            onChange={onChangePayload}
            placeholder="이메일"
            className="border px-2 py-2 rounded-lg mb-4"
          />
          <input
            name="password"
            type="password"
            onChange={onChangePayload}
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
  )
}
