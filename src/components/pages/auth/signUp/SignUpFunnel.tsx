'use client'

import React, { useState } from 'react'
import UserId from '@/components/pages/auth/signUp/id/UserId'
import UserName from '@/components/pages/auth/signUp/name/UserName'
import UserPassword from '@/components/pages/auth/signUp/password/UserPassword'
import PhoneNumAuthentication from '@/components/pages/auth/signUp/phoneNumAuthentication/PhoneNumAuhentication'
import TermsOfUseAccept from '@/components/pages/auth/signUp/termsOfUse/TermsOfUseAccept'
import UserNickname from '@/components/pages/auth/signUp/nickname/UserNickname'
import PreferredStyle from '@/components/pages/auth/signUp/preferredStyle/PreferredStyle'
import ChooseRole from '@/components/pages/auth/signUp/role/ChooseRole'

export default function SignUpFunnel() {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    birth: '',
    gender: '',
    nickname: '',
    favoriteStyles: [],
    role: '',
  })
  const [step, setStep] = useState<
    | 'TermsOfUseAccept'
    | 'UserName'
    | 'UserId'
    | 'PhoneNumAuthentication'
    | 'UserPassword'
    | 'UserNickname'
    | 'PreferredStyle'
    | 'ChooseRole'
  >('TermsOfUseAccept')

  console.log(registerData)
  return (
    <main>
      {step === 'TermsOfUseAccept' && (
        <TermsOfUseAccept clickHandler={() => setStep('UserName')} />
      )}
      {step === 'UserName' && (
        <UserName
          clickHandler={(data: string) => {
            setRegisterData((prev) => ({ ...prev, name: data }))
            setStep('UserId')
          }}
        />
      )}
      {step === 'UserId' && (
        <UserId
          clickHandler={(data: string) => {
            setRegisterData((prev) => ({ ...prev, email: data }))
            setStep('PhoneNumAuthentication')
          }}
        />
      )}
      {step === 'PhoneNumAuthentication' && <PhoneNumAuthentication />}
      {step === 'UserPassword' && <UserPassword />}
      {step === 'UserNickname' && <UserNickname />}
      {step === 'PreferredStyle' && <PreferredStyle />}
      {step === 'ChooseRole' && <ChooseRole />}
    </main>
  )
}
