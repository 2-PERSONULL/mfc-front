'use client'

import React, { useState } from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'

export default function UserId({
  clickHandler,
}: {
  clickHandler: (data: string) => void
}) {
  const [error, setError] = useState('')
  const [value, setValue] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false)

  const emailRegex = /^[a-zA-Z0-9]+@[a-z.]+\.[a-z]{2,}$/

  const handleNext = () => {
    if (value.length === 0) {
      setError('**이메일을 입력하세요.**')
    } else if (!emailRegex.test(value)) {
      setError('**이메일 형식에 맞게 다시 입력해주세요.**')
    } else if (!isEmailValid) {
      setError('**이미 사용중인 이메일입니다.**')
    } else {
      setError('')
      clickHandler(value)
    }
  }

  const handleIdDoubleCheck = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/auth/email/${value}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    const data = await response.json()
    if (data.result) {
      setIsEmailValid(true)
      setError('**사용 가능한 이메일입니다.**')
    } else {
      setIsEmailValid(false)
      setError('**이미 사용중인 이메일입니다.**')
    }
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="아이디를 입력해주세요." />
      <div className="flex items-center justify-end mt-8">
        <input
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="이메일을 입력하세요."
          className="input input-bordered w-full rounded-full border-black"
        />
        <button
          type="button"
          onClick={handleIdDoubleCheck}
          className="absolute rounded-full bg-none px-5 py-1"
        >
          <p className="text-black font-bold">확인</p>
        </button>
      </div>
      {isEmailValid && error ? (
        <p className="text-blue-500 font-bold text-xs text-center">{error}</p>
      ) : (
        <p className="text-red-500 font-bold text-xs text-center">{error}</p>
      )}
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>
    </div>
  )
}
