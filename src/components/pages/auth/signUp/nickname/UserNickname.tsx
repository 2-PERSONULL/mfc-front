'use client'

import React, { useState } from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import useToast from '@/stores/toast'
import { nicknameDoubleCheck } from '@/actions/member/Auth'

export default function UserNickname({
  clickHandler,
  onKeyDown,
}: {
  clickHandler: (data: string) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}) {
  const { showToast } = useToast()
  const [value, setValue] = useState('')
  const [isNicknameValid, setIsNicknameValid] = useState(false)

  const nicknameRegex = /^[가-힣a-zA-Z0-9_-]{2,20}$/

  const handleNext = (e: React.FormEvent) => {
    if (value.length < 2 || value.length > 20) {
      e.preventDefault()
      showToast({
        content: '활동명은 최소 2자 이상, 최대 20자 이하로 입력해주세요.',
        type: 'warning',
      })
    } else if (!nicknameRegex.test(value)) {
      e.preventDefault()
      showToast({
        content:
          '활동명은 알파벳 대소문자, 숫자, 언더스코어(_) 및 하이픈(-)만 포함해야 합니다.',
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
    if (value.length < 2 || value.length > 20) {
      e.preventDefault()
      showToast({
        content: '활동명은 최소 2자 이상, 최대 20자 이하로 입력해주세요.',
        type: 'warning',
      })
    } else if (!nicknameRegex.test(value)) {
      e.preventDefault()
      showToast({
        content:
          '활동명은 알파벳 대소문자, 숫자, 언더스코어(_) 및 하이픈(-)만 포함해야 합니다.',
        type: 'warning',
      })
    } else {
      const data = await nicknameDoubleCheck(value)
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
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="활동명을 입력하세요."
          onKeyDown={onKeyDown}
          className="form-input"
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
