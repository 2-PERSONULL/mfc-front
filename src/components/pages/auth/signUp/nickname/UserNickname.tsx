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
  const [alert, setAlert] = useState(false)
  const [value, setValue] = useState('')

  const handleNext = () => {
    if (value.length > 0) {
      clickHandler(value)
    } else {
      setAlert(true)
    }
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="활동명을 입력해주세요." />
      <div className="mt-8">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="활동명을 입력하세요."
          className="input input-bordered w-full rounded-full border-black"
        />
      </div>
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        {alert && (
          <p className="text-red-500 font-bold text-xs text-center">
            **닉네임을 입력해주세요.**
          </p>
        )}
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>
    </div>
  )
}
