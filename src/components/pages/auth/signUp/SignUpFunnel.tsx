'use client'

import React, { useState } from 'react'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
import UserId from '@/components/pages/auth/signUp/id/UserId'
import UserName from '@/components/pages/auth/signUp/name/UserName'
import UserPassword from '@/components/pages/auth/signUp/password/UserPassword'
import PhoneNumAuthentication from '@/components/pages/auth/signUp/phoneNumAuthentication/PhoneNumAuhentication'
import TermsOfUseAccept from '@/components/pages/auth/signUp/termsOfUse/TermsOfUseAccept'
import UserNickname from '@/components/pages/auth/signUp/nickname/UserNickname'
import PreferredStyle from '@/components/pages/auth/signUp/preferredStyle/PreferredStyle'
import ChooseRole from '@/components/pages/auth/signUp/role/ChooseRole'
import UserBirthAndGender from '@/components/pages/auth/signUp/birthAndGender/UserBirthAndGender'

// const UserNameSchema = z.object({
//   name: z.string().min(1, 'Name is required'),
// })

// const UserIdSchema = z.object({
//   email: z.string().email('Invalid email address'),
// })

// const PhoneNumSchema = z.object({
//   phone: z.string().min(10, 'Phone number is required'),
// })

// const UserPasswordSchema = z.object({
//   password: z.string().min(6, 'Password must be at least 6 characters long'),
// })

// const UserBirthAndGenderSchema = z.object({
//   birth: z.string().min(1, 'Birth date is required'),
//   gender: z.number(),
// })

// const UserNicknameSchema = z.object({
//   nickname: z.string().min(1, 'Nickname is required'),
// })

// const PreferredStyleSchema = z.object({
//   favoriteStyles: z.array(z.number()).min(1, 'At least one style is required'),
// })

// const ChooseRoleSchema = z.object({
//   role: z.string().min(1, 'Role is required'),
// })

export default function SignUpFunnel() {
  const [registerData, setRegisterData] = useState({
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

  console.log(registerData)

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

  // const handleValidation = (
  //   data: any,
  //   schema: z.ZodSchema<any>,
  //   nextStep: typeof step,
  // ) => {
  //   try {
  //     schema.parse(data)
  //     setRegisterData((prev) => ({ ...prev, ...data }))
  //     setStep(nextStep)
  //   } catch (error) {
  //     if (error instanceof z.ZodError) {
  //       console.error(error.errors)
  //       // 여기서 에러 메시지를 UI에 표시할 수 있습니다.
  //     }
  //   }
  // }
  return (
    <main>
      <progress
        className="progress w-full absolute top-10"
        value={handleProgressBar()}
        max="100"
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
            setStep('ChooseRole')
          }}
        />
      )}
    </main>
  )
}
