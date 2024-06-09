'use client'

import React from 'react'
import Link from 'next/link'
import LicenseInfo from '@/components/common/LicenseInfo'
import SignInLogo from '@/components/pages/auth/signIn/SignInLogo'

export default function SelectRole() {
  const handleUserClick = () => {
    localStorage.setItem('role', 'USER')
  }

  const handlePartnerClick = () => {
    localStorage.setItem('role', 'PARTNER')
  }
  return (
    <div className="bg-white min-h-screen w-full flex flex-col items-center px-6">
      <SignInLogo />
      <div className="flex flex-col items-center justify-center w-full gap-3 text-center text-white">
        <Link
          href="/user"
          className="bg-black rounded-full text-md w-full py-3"
          onClick={handleUserClick}
        >
          <p>사용자로 시작</p>
        </Link>
        <Link
          href="/partner"
          className="bg-black rounded-full text-md w-full py-3"
          onClick={handlePartnerClick}
        >
          <p>파트너로 시작</p>
        </Link>
      </div>
      <LicenseInfo />
    </div>
  )
}
