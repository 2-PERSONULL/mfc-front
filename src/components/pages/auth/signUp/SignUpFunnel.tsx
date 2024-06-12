'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import UserId from '@/components/pages/auth/signUp/id/UserId'
import UserName from '@/components/pages/auth/signUp/name/UserName'
import UserPassword from '@/components/pages/auth/signUp/password/UserPassword'
import PhoneNumAuthentication from '@/components/pages/auth/signUp/phoneNumAuthentication/PhoneNumAuhentication'
import TermsOfUseAccept from '@/components/pages/auth/signUp/termsOfUse/TermsOfUseAccept'
import UserNickname from '@/components/pages/auth/signUp/nickname/UserNickname'
import PreferredStyle from '@/components/pages/auth/signUp/preferredStyle/PreferredStyle'
import ChooseRole from '@/components/pages/auth/signUp/role/ChooseRole'
import UserBirthAndGender from '@/components/pages/auth/signUp/birthAndGender/UserBirthAndGender'
import { SignUpType } from '@/types/signupTypes'
import ProgressBar from '@/components/ui/progress/ProgressBar'

export default function SignUpFunnel({
  submit,
}: {
  submit: (data: SignUpType) => void
}) {
  const router = useRouter()
  const [registerData, setRegisterData] = useState<SignUpType>({
    name: '',
    email: '',
    phone: '',
    password: '',
    birth: '',
    gender: 0,
    nickname: '',
    favoriteStyles: [] as number[],
    role: '',
  })
  const [step, setStep] = useState<
    | 'TermsOfUseAccept'
    | 'UserName'
    | 'UserId'
    | 'PhoneNumAuthentication'
    | 'UserPassword'
    | 'UserBirthAndGender'
    | 'UserNickname'
    | 'PreferredStyle'
    | 'ChooseRole'
  >('TermsOfUseAccept')

  const handleProgressBar = () => {
    switch (step) {
      case 'UserName':
        return '10'
      case 'UserId':
        return '23'
      case 'PhoneNumAuthentication':
        return '36'
      case 'UserPassword':
        return '49'
      case 'UserBirthAndGender':
        return '62'
      case 'UserNickname':
        return '75'
      case 'PreferredStyle':
        return '88'
      case 'ChooseRole':
        return '100'
      default:
        return '0'
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    submit(registerData)
    router.push('/signin')
  }

  return (
    <form onSubmit={handleSubmit}>
      <ProgressBar
        className="progress w-full absolute top-10"
        value={Number(handleProgressBar(), 10)}
      />
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
      {step === 'PhoneNumAuthentication' && (
        <PhoneNumAuthentication
          clickHandler={(data: string) => {
            setRegisterData((prev) => ({ ...prev, phone: data }))
            setStep('UserPassword')
          }}
        />
      )}
      {step === 'UserPassword' && (
        <UserPassword
          clickHandler={(data: string) => {
            setRegisterData((prev) => ({ ...prev, password: data }))
            setStep('UserBirthAndGender')
          }}
        />
      )}
      {step === 'UserBirthAndGender' && (
        <UserBirthAndGender
          clickHandler={(data: { birth: string; gender: number }) => {
            setRegisterData((prev) => ({
              ...prev,
              birth: data.birth,
              gender: data.gender,
            }))
            setStep('UserNickname')
          }}
        />
      )}
      {step === 'UserNickname' && (
        <UserNickname
          clickHandler={(data: string) => {
            setRegisterData((prev) => ({ ...prev, nickname: data }))
            setStep('PreferredStyle')
          }}
        />
      )}
      {step === 'PreferredStyle' && (
        <PreferredStyle
          clickHandler={(data: number[]) => {
            setRegisterData((prev) => ({ ...prev, favoriteStyles: data }))
            setStep('ChooseRole')
          }}
        />
      )}
      {step === 'ChooseRole' && (
        <ChooseRole
          clickHandler={(data: string) => {
            setRegisterData((prev) => ({ ...prev, role: data }))
          }}
        />
      )}
    </form>
  )
}
