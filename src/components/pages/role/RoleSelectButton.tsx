'use client'

import Link from 'next/link'
import React from 'react'

export default function RoleSelectButton() {
  const handleUserClick = () => {
    localStorage.setItem('role', 'USER')
  }

  const handlePartnerClick = () => {
    localStorage.setItem('role', 'PARTNER')
  }
  return (
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
  )
}
