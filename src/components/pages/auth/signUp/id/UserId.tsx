'use client'

import React, { useState } from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import useToast from '@/stores/toast'
import { emailDoubleCheck } from '@/actions/member/Auth'
import { BaseResponseType } from '@/types/baseResponseType'

export default function UserId({
  clickHandler,
  onKeyDown,
}: {
  clickHandler: (data: string) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}) {
  const { showToast } = useToast()
  const [value, setValue] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isDoubleCheck, setIsDoubleCheck] = useState(false)

  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    // e.stopPropagation()
    if (value.length === 0) {
      showToast({
        content: '이메일을 입력해주세요.',
        type: 'warning',
      })
    }
    if (!emailRegex.test(value)) {
      showToast({
        content: '이메일 형식에 맞게 다시 입력해주세요.',
        type: 'warning',
      })
    }
    if (!isDoubleCheck && !isEmailValid) {
      showToast({
        content: '아이디 중복 검사를 진행해주세요.',
        type: 'warning',
      })
    } else {
      clickHandler(value)
    }
  }

  const handleIdDoubleCheck = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (!emailRegex.test(value)) {
      e.preventDefault()
      showToast({
        content: '이메일 형식에 맞게 다시 입력해주세요.',
        type: 'warning',
      })
    }
    const data: BaseResponseType = await emailDoubleCheck(value)
    if (!data.result) {
      setIsEmailValid(false)
      setIsDoubleCheck(false)
      showToast({
        content: '사용할 수 없는 이메일입니다.',
        type: 'error',
      })
    } else if (data.result) {
      setIsEmailValid(true)
      setIsDoubleCheck(true)
      showToast({
        content: '사용 가능한 이메일입니다.',
        type: 'success',
      })
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
          onKeyDown={onKeyDown}
          className="form-input"
        />
        <button
          type="button"
          onClick={handleIdDoubleCheck}
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
