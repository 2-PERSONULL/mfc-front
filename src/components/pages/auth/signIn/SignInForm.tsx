'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'

interface LoginFormType {
  email: string
  password: string
}

export default function SignInForm() {
  const param = useSearchParams()
  const callbackUrl = param.get('callbackUrl')

  const [payload, setPayload] = useState<LoginFormType>({
    email: '',
    password: '',
  })
  const [isVisible, setIsVisible] = useState<boolean>(false)

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
    <form onSubmit={logInSubmit} className="bg-white w-full">
      <div className="flex items-center justify-start w-full mb-2">
        <Image
          className="absolute pl-6"
          src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/person-black.svg"
          alt="sigin-email"
          priority
          width={0}
          height={0}
          style={{ width: 'auto', height: 'auto' }}
        />
        <input
          name="email"
          type="email"
          onChange={onChangePayload}
          placeholder="이메일"
          maxLength={20}
          className="border border-gray-500 rounded-full text-md w-full pl-14 py-3"
        />
      </div>
      <div className="flex items-center justify-start w-full">
        <Image
          className="absolute pl-6"
          src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/lock.svg"
          alt="sigin-password"
          priority
          width={0}
          height={0}
          style={{ width: 'auto', height: 'auto' }}
        />
        <input
          name="password"
          type={isVisible ? 'text' : 'password'}
          onChange={onChangePayload}
          placeholder="비밀번호"
          maxLength={20}
          className="border border-gray-500 rounded-full text-md w-full pl-14 py-3"
        />
        <button
          type="button"
          className="absolute left-[80%] text-xs"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? '보임' : '안보임'}
          {/* 
          aws 접속이 되지 않는 문제로 아이콘 적용 못함
          추후에 눈모양 아이콘으로 수정할 예정 
          */}
        </button>
      </div>
      <button
        type="submit"
        className="mt-6 bg-black text-white font-bold w-full rounded-full py-3"
      >
        로그인
      </button>
    </form>
  )
}
