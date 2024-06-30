'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function PartnerProfilePreviewTabs() {
  const pathName = usePathname()

  const isCurrentTab = (tab: string) => {
    if (tab === '') return pathName === `/partner/mypage`
    return pathName === `/partner/mypage/${tab}`
  }

  return (
    <div className="sticky top-[0px] bg-white z-[20] flex w-full justify-around text-[16px] font-semibold py-5">
      <Link
        replace
        href="/partner/mypage"
        className={`${isCurrentTab('') ? 'border-b-2 border-b-black' : 'text-[#A2A5B1]'} pb-1`}
      >
        Lookbook
      </Link>

      <Link
        replace
        href="/partner/mypage/information"
        className={`${isCurrentTab('information') ? 'border-b-2 border-b-black' : 'text-[#A2A5B1]'} pb-1`}
      >
        Information
      </Link>

      <Link
        replace
        href="/partner/mypage/review"
        className={`${isCurrentTab('review') ? 'border-b-2 border-b-black' : 'text-[#A2A5B1]'} pb-1`}
      >
        Review
      </Link>
    </div>
  )
}
