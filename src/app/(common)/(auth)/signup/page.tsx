import React from 'react'
import UserBirthAndGender from '@/components/pages/auth/signUp/birthAndGender/UserBirthAndGender'
// import UserPassword from '@/components/pages/auth/signUp/password/UserPassword'
// import TermsOfUseAccept from '@/components/pages/auth/signUp/termsOfUse/TermsOfUseAccept'
// import UserName from '@/components/pages/auth/signUp/name/UserName'
// import UserId from '@/components/pages/auth/signUp/id/UserId'
// import PhoneNumAuhentication from '@/components/pages/auth/signUp/phoneNumAuthentication/PhoneNumAuhentication'

export default function SignUp() {
  return (
    <div>
      {/* SignUpFunnel이 들어갈 자리 */}
      {/* <TermsOfUseAccept /> */}
      {/* <UserName /> */}
      {/* <UserId /> */}
      {/* <PhoneNumAuhentication /> */}
      {/* <UserPassword /> */}
      <UserBirthAndGender />
    </div>
  )
}
