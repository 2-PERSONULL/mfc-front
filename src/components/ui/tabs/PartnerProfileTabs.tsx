'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function PartnerProfileTabs({
  partnerCode,
}: {
  partnerCode: string
}) {
  const id = partnerCode
  const pathName = usePathname()

  const isCurrentTab = (tab: string) => {
    if (tab === '') return pathName === `/user/coordinator/${id}/profile`
    return pathName === `/user/coordinator/${id}/profile/${tab}`
  }

  return (
    <div className="flex w-full justify-around text-[16px] font-semibold">
      <Link
        replace
        href={`/user/coordinator/${id}/profile`}
        className={`${isCurrentTab('') ? 'border-b-2 border-b-black' : 'text-[#A2A5B1]'} pb-1`}
      >
        Lookbook
      </Link>

      <Link
        replace
        href={`/user/coordinator/${id}/profile/information`}
        className={`${isCurrentTab('information') ? 'border-b-2 border-b-black' : 'text-[#A2A5B1]'} pb-1`}
      >
        Information
      </Link>

      <Link
        replace
        href={`/user/coordinator/${id}/profile/review`}
        className={`${isCurrentTab('review') ? 'border-b-2 border-b-black' : 'text-[#A2A5B1]'} pb-1`}
      >
        Review
      </Link>
    </div>
  )
}
