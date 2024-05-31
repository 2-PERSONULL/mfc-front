'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
// import KakaoSignInButton from '@/components/pages/auth/signIn/KakaoSignInButton'
import Image from 'next/image'
import Link from 'next/link'

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
    <div className="bg-white min-h-screen w-full flex flex-col items-center px-5">
      <div className="flex flex-col items-center gap-1 bg-white w-full mb-14">
        <Image
          src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/logo/signInLogo.svg"
          alt="signInLogo"
          width={0}
          height={0}
          style={{ width: 'auto', height: 'auto' }}
        />
        <span className="font-black text-xl">LOGIN</span>
      </div>
      <form onSubmit={logInSubmit} className="bg-white w-full">
        <div className="flex items-center justify-start w-full mb-1">
          <Image
            className="absolute pl-6"
            src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/person-black.svg"
            alt="sigin-email"
            width={0}
            height={0}
            style={{ width: 'auto', height: 'auto' }}
          />
          <input
            name="email"
            type="email"
            onChange={onChangePayload}
            placeholder="이메일"
            className="border border-gray-500 rounded-full text-md w-full pl-14 py-3"
          />
        </div>
        <div className="flex items-center justify-start w-full">
          <Image
            className="absolute pl-6"
            src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/lock.svg"
            alt="sigin-email"
            width={0}
            height={0}
            style={{ width: 'auto', height: 'auto' }}
          />
          <input
            name="password"
            type="password"
            onChange={onChangePayload}
            placeholder="비밀번호"
            className="border border-gray-500 rounded-full text-md w-full pl-14 py-3"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-black text-white font-bold w-full rounded-full py-3"
        >
          로그인
        </button>
      </form>
      <div className="italic flex flex-col items-center justify-center mt-3">
        <p className="text-xs font-semibold text-rose-600 py-1">
          Forget Password
        </p>
        <div className="flex flex-row items-center gap-2">
          <p className="not-italic text-sm">Don&rsquo;t hand an account yet?</p>
          <Link href="/signup" className="text-xs font-bold text-rose-600">
            Sign UP
          </Link>
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={() => signIn('kakao')}
          className="bg-yellow-400 text-black font-bold mx-5 py-2 px-4 rounded-xl"
        >
          카카오 로그인
        </button>
      </div>
      {/* <KakaoSignInButton /> */}
    </div>
  )
}
