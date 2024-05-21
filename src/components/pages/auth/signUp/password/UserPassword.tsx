'use client'

import React, { useState } from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
// import SeperatedBeforeAfterButton from '@/components/ui/button/SeperatedBeforeAfterButton'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'

export default function UserPassword({
  clickHandler,
}: {
  clickHandler: (data: string) => void
}) {
  const [alert, setAlert] = useState(false)
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/

  const isValidPs = password === '' || passwordRegex.test(password)
  const isSamePs = checkPassword === '' || password === checkPassword

  const handleNext = () => {
    if (
      password.length > 0 &&
      checkPassword.length > 0 &&
      isValidPs &&
      isSamePs
    ) {
      clickHandler(password)
    } else {
      setAlert(true)
    }
  }

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="비밀번호를 입력해주세요." />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="대소문자 / 숫자 / 특수문자 / 8~20자 이내"
        className="input input-bordered w-full rounded-full border-black text-sm"
      />
      {!isValidPs && (
        <p className="mt-1 text-red-500 font-bold text-xs text-center">
          **부적합한 비밀번호입니다.**
        </p>
      )}
      <br />
      <input
        type="password"
        value={checkPassword}
        onChange={(e) => setCheckPassword(e.target.value)}
        placeholder="비밀번호를 한번 더 입력해주세요."
        className="input input-bordered w-full rounded-full border-black text-sm"
      />
      {!isSamePs && (
        <p className="mt-1 text-red-500 font-bold text-xs text-center">
          **동일한 비밀번호를 입력해주세요.**
        </p>
      )}
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        {/* <SeperatedBeforeAfterButton /> */}
        {alert && (
          <p className="text-red-500 font-bold text-xs text-center">
            **입력 칸을 확인 후 다시 입력하세요.**
          </p>
        )}
        <StretchedRoundedButton comment="다음으로" clickHandler={handleNext} />
      </div>
    </div>
  )
}
