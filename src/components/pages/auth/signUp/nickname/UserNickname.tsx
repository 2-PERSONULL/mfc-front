'use client'

import React, { useState } from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
// import SeperatedBeforeAfterButton from '@/components/ui/button/SeperatedBeforeAfterButton'

export default function UserNickname({
  clickHandler,
}: {
  clickHandler: (data: string) => void
}) {
  const [error, setError] = useState(false)
  const [value, setValue] = useState('')

  const handleNext = () => {
    if (value.length > 1) {
      clickHandler(value)
    } else {
      setError(true)
    }
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="활동명을 입력해주세요." />
      <p className="font-bold text-gray-400">(최소 2자 ~ 최대 20자)</p>
      <div className="mt-8">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="활동명을 입력하세요."
          className="input input-bordered w-full rounded-full border-black"
        />
        {error && (
          <p className="text-red-500 font-bold text-xs text-center">
            **조건에 맞게 닉네임을 입력해주세요.**
          </p>
        )}
      </div>
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>
    </div>
  )
}
