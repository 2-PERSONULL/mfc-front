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

  const emailRegex = /^[a-zA-Z0-9]+@[a-z.]+\.[a-z]{2,}$/

  const handleNext = () => {
    if (value.length === 0) {
      setError('**이메일을 입력하세요.**')
    } else if (!emailRegex.test(value)) {
      setError('**이메일 형식에 맞게 다시 입력해주세요.**')
    } else {
      setError('')
      clickHandler(value)
    }
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="아이디를 입력해주세요." />
      <div className="mt-8">
        <input
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="이메일을 입력하세요."
          className="input input-bordered w-full rounded-full border-black"
        />
        {error && (
          <p className="text-red-500 font-bold text-xs text-center">{error}</p>
        )}
      </div>
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>
    </div>
  )
}
