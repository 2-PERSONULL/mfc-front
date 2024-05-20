import React from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import RoundedInputBox from '@/components/ui/input/RoundedInputBox'
import SeperatedBeforeAfterButton from '@/components/ui/button/SeperatedBeforeAfterButton'

export default function UserName() {
  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="아이디를 입력해주세요." />
      <div>
        <RoundedInputBox type="email" placeholder="이메일을 입력하세요." />
      </div>
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <SeperatedBeforeAfterButton />
      </div>
    </div>
  )
}
