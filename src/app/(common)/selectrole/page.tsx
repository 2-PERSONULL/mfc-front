import React from 'react'
import LicenseInfo from '@/components/common/LicenseInfo'
import SignInLogo from '@/components/pages/auth/signIn/SignInLogo'
import RoleSelectButton from '@/components/pages/role/RoleSelectButton'

export default function SelectRole() {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col items-center px-6">
      <SignInLogo />
      <RoleSelectButton />
      <div className="my-[103px]" />
      <LicenseInfo />
    </div>
  )
}
