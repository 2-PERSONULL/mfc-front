import React from 'react'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import RoundedInputBox from '@/components/ui/input/RoundedInputBox'

export default function UserName() {
  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="이름을 입력해주세요." />
      <div>
        <RoundedInputBox type="text" placeholder="이름을 입력하세요." />
      </div>
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <StretchedRoundedButton comment="다음으로" />
      </div>
    </div>
  )
}
