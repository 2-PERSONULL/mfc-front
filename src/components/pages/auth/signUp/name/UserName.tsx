'use client'

import React, { useState } from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import useToast from '@/stores/toast'

export default function UserName({
  clickHandler,
  onKeyDown,
}: {
  clickHandler: (data: string) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}) {
  const { showToast } = useToast()
  const [value, setValue] = useState('')
  const nameRegex = /^[가-힣a-zA-Z\s]{2,10}$/

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.length > 1 && value.length <= 10 && nameRegex.test(value)) {
      clickHandler(value)
    } else {
      if (!(value.length > 1 && value.length <= 10)) {
        showToast({
          content: '최소 2자 이상 10자 이하로 입력해주세요.',
          type: 'warning',
        })
      }
      if (!nameRegex.test(value)) {
        showToast({
          content: '이름은 한글, 영문 대소문자만 입력 가능합니다.',
          type: 'error',
        })
      }
    }
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="이름을 입력해주세요." />
      <div className="mt-8">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="이름을 입력하세요."
          onKeyDown={onKeyDown}
          className="form-input"
        />
      </div>
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>
    </div>
  )
}
