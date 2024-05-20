import React from 'react'
import TermsOfUseForm from '@/components/pages/auth/signUp/termsOfUse/TermsOfUseForm'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'
import SignUpTitle from '@/components/pages/auth/signUp/SignUpTitle'

export default function TermsOfUseAccept() {
  return (
    <div className="flex flex-col max-h-screen h-screen max-w-full px-6 pt-28 content-around">
      <SignUpTitle comment="서비스 이용약관에 동의해주세요." />
      <TermsOfUseForm />
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <StretchedRoundedButton comment="다음으로" />
      </div>
    </div>
  )
}
