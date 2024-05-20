import React from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import RoundedInputBox from '@/components/ui/input/RoundedInputBox'
import SeperatedBeforeAfterButton from '@/components/ui/button/SeperatedBeforeAfterButton'

export default function UserPassword() {
  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="비밀번호를 입력해주세요." />
      <RoundedInputBox
        type="password"
        placeholder="대소문자 / 숫자 / 특수문자 / 8~20자 이내"
      />
      <br />
      <RoundedInputBox
        type="password"
        placeholder="비밀번호를 한번 더 입력해주세요."
      />
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <SeperatedBeforeAfterButton />
      </div>
    </div>
  )
}
