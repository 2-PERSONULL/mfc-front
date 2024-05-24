'use client'

import React, { useState } from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
// import SeperatedBeforeAfterButton from '@/components/ui/button/SeperatedBeforeAfterButton'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'

export default function PhoneNumAuthentication({
  clickHandler,
}: {
  clickHandler: (data: string) => void
}) {
  const [error, setError] = useState('')
  const [value, setValue] = useState('')

  const phoneNumberRegex = /^010-?[0-9]{3,4}-?[0-9]{4}$/

  const handleNext = () => {
    if (value.length > 0) {
      clickHandler(value)
    } else {
      setError('**전화번호를 입력해주세요.**')
    }
    if (!phoneNumberRegex.test(value)) {
      setError('**전화번호 형식에 맞게 다시 입력해주세요.**')
    }
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="휴대전화번호를 입력해주세요." />
      <div className="grid  mt-8">
        <input
          type="text"
          placeholder="전화번호를 입력하세요."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input input-bordered w-full rounded-full border-black"
        />
        {error && (
          <p className="text-red-500 font-bold text-xs text-center">{error}</p>
        )}
        <input
          disabled
          type="text"
          placeholder="인증번호를 입력하세요."
          className="mt-5 input input-bordered w-full rounded-full border-black"
        />
      </div>
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        {/* <SeperatedBeforeAfterButton /> */}
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>
    </div>
  )
}
