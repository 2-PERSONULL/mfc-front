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
  const [error, setError] = useState('')
  const [value, setValue] = useState('')
  const [isNicknameValid, setIsNicknameValid] = useState(false)

  const handleNext = () => {
    if (value.length < 2) {
      setError('**활동명은 최소 2자 이상 입력해주세요.**')
    } else if (!isNicknameValid) {
      setError('**이미 사용중인 활동명입니다.**')
    } else {
      clickHandler(value)
    }
  }

  const handleNicknameDoubleCheck = async () => {
    if (value.length < 2) {
      setError('**활동명은 최소 2자 이상 입력해주세요.**')
    } else {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/auth/nickname/${value}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      const data = await response.json()
      if (data.result) {
        setIsNicknameValid(true)
        setError('**사용 가능한 활동명입니다.**')
      } else {
        setIsNicknameValid(false)
        setError('**이미 사용중인 활동명입니다.**')
      }
    }
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="활동명을 입력해주세요." />
      <p className="font-bold text-gray-400">(최소 2자 ~ 최대 20자)</p>
      <div className="flex items-center justify-end mt-8">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="활동명을 입력하세요."
          className="input input-bordered w-full rounded-full border-black"
        />
        <button
          type="button"
          onClick={handleNicknameDoubleCheck}
          className="absolute rounded-full bg-none px-5 py-1"
        >
          <p className="text-black font-bold">확인</p>
        </button>
      </div>
      {isNicknameValid && error ? (
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
