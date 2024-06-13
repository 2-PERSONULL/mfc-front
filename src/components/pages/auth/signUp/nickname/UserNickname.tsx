'use client'

import React, { useState } from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import FormInput from '@/components/ui/input/FormInput'
import useToast from '@/stores/toast'
// import SeperatedBeforeAfterButton from '@/components/ui/button/SeperatedBeforeAfterButton'

export default function UserNickname({
  clickHandler,
}: {
  clickHandler: (data: string) => void
}) {
  const { showToast } = useToast()
  const [value, setValue] = useState('')
  const [isNicknameValid, setIsNicknameValid] = useState(false)

  const handleNext = (e: React.FormEvent) => {
    if (value.length < 2) {
      e.preventDefault()
      showToast({
        content: '활동명은 최소 2자 이상 입력해주세요.',
        type: 'warning',
      })
    } else if (!isNicknameValid) {
      e.preventDefault()
      showToast({
        content: '닉네임 중복 확인을 진행해주세요.',
        type: 'warning',
      })
    } else {
      clickHandler(value)
    }
  }

  const handleNicknameDoubleCheck = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (value.length < 2) {
      e.preventDefault()
      showToast({
        content: '활동명은 최소 2자 이상 입력해주세요.',
        type: 'warning',
      })
    } else {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/members/nickname/${value}`,
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
        showToast({
          content: '사용 가능한 활동명입니다.',
          type: 'success',
        })
      } else {
        setIsNicknameValid(false)
        showToast({
          content: '이미 사용중인 활동명입니다.',
          type: 'warning',
        })
      }
    }
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="활동명을 입력해주세요." />
      <p className="font-bold text-gray-400">(최소 2자 ~ 최대 20자)</p>
      <div className="flex items-center justify-end mt-8">
        <FormInput
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="활동명을 입력하세요."
        />
        <button
          type="button"
          onClick={handleNicknameDoubleCheck}
          className="absolute rounded-full bg-none px-5 py-1"
        >
          <p className="text-black font-bold">확인</p>
        </button>
      </div>
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>
    </div>
  )
}
