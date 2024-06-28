'use client'

import React, { useState } from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import useToast from '@/stores/toast'

export default function UserPassword({
  clickHandler,
  onKeyDown,
}: {
  clickHandler: (data: string) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}) {
  const { showToast } = useToast()
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/

  const isValidPs = password === '' || passwordRegex.test(password)
  const isSamePs = checkPassword === '' || password === checkPassword

  const handleNext = () => {
    if (
      password.length === 0 ||
      checkPassword.length === 0 ||
      !isValidPs ||
      !isSamePs
    ) {
      showToast({
        content: '입력 칸을 확인 후 다시 입력하세요.',
        type: 'warning',
      })
    } else {
      clickHandler(password)
    }
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="비밀번호를 입력해주세요." />
      <div className="grid mt-8 gap-5">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
          onKeyDown={onKeyDown}
          placeholder="대소문자 / 숫자 / 특수문자 / 8~20자 이내"
        />
        {!isValidPs && (
          <p className="text-red-500 font-bold text-xs text-start pl-5 -mt-4">
            부적합한 비밀번호입니다.
          </p>
        )}
        <input
          type="password"
          value={checkPassword}
          className="form-input"
          onKeyDown={onKeyDown}
          onChange={(e) => setCheckPassword(e.target.value)}
          placeholder="비밀번호를 한번 더 입력해주세요."
        />
        {!isSamePs && (
          <p className="text-red-500 font-bold text-xs text-start pl-5 -mt-4">
            동일한 비밀번호를 입력해주세요.
          </p>
        )}
      </div>
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>
    </div>
  )
}
