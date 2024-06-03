'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PartnerProfileTabs({
  partnerCode,
}: {
  partnerCode: string
}) {
  const id = partnerCode
  const pathName = usePathname()

  const isCurrentTab = (tab: string) => {
    if (tab === '') return pathName === `/user/coordinator/${id}`
    return pathName === `/user/coordinator/${id}/${tab}`
  }

  return (
    <div className="flex w-full justify-around text-[16px] font-semibold">
      <Link
        href={`/user/coordinator/${id}`}
        className={`${isCurrentTab('') ? 'border-b-2 border-b-black' : 'text-[#A2A5B1]'} pb-1`}
      >
        Lookbook
      </Link>
      <Link
        href={`/user/coordinator/${id}/information`}
        className={`${isCurrentTab('information') ? 'border-b-2 border-b-black' : 'text-[#A2A5B1]'} pb-1`}
      >
        Information
      </Link>
      <Link
        href={`/user/coordinator/${id}/review`}
        className={`${isCurrentTab('review') ? 'border-b-2 border-b-black' : 'text-[#A2A5B1]'} pb-1`}
      >
        Review
      </Link>
    </div>
  )
}
