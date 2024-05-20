import React from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import RoundedInputBox from '@/components/ui/input/RoundedInputBox'
import SeperatedBeforeAfterButton from '@/components/ui/button/SeperatedBeforeAfterButton'

export default function PhoneNumAuhentication() {
  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="휴대전화번호를 입력해주세요." />
      <RoundedInputBox type="text" placeholder="전화번호를 입력하세요." />
      <br />
      <RoundedInputBox type="text" placeholder="인증번호를 입력하세요." />
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <SeperatedBeforeAfterButton />
      </div>
    </div>
  )
}
