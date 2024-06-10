'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'
import useToast from '@/stores/toast'

interface LoginFormType {
  email: string
  password: string
}

export default function SignInForm() {
  const param = useSearchParams()
  const callbackUrl = param.get('callbackUrl')
  const { showToast } = useToast()

  const [payload, setPayload] = useState<LoginFormType>({
    email: '',
    password: '',
  })
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const logInSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!payload.email || !payload.password) {
      showToast({
        content: '이메일 또는 비밀번호를 입력해주세요.',
        type: 'warning',
      })
      return null
    }
    signIn('credentials', {
      email: payload.email,
      password: payload.password,
      redirect: false,
    }).then((result) => {
      if (result && result.error === 'CredentialsSignin') {
        e.preventDefault()
        showToast({
          content: '이메일 또는 비밀번호가 일치하지 않습니다.',
          type: 'error',
        })
      } else if (localStorage.getItem('role')) {
        window.location.href = callbackUrl || '/user'
      } else {
        window.location.href = '/selectrole'
      }
    })
    return null
  }

  const onChangePayload = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          {isVisible ? (
            <Image
              src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/eye.svg"
              alt="비밀번호 보이기"
              width={0}
              height={0}
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
          ) : (
            <Image
              src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/eye-off.svg"
              alt="비밀번호 가리기"
              width={0}
              height={0}
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
          )}
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
