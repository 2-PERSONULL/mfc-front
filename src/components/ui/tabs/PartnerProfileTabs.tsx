'use client'

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function PartnerProfileTabs({
  partnerCode,
}: {
  partnerCode: string
}) {
  const router = useRouter()
  const id = partnerCode
  const pathName = usePathname()

  const isCurrentTab = (tab: string) => {
    if (tab === '') return pathName === `/user/coordinator/${id}`
    return pathName === `/user/coordinator/${id}/${tab}`
  }

  return (
    <div className="flex w-full justify-around text-[16px] font-semibold">
      <button
        type="button"
        onClick={() => router.replace(`/user/coordinator/${id}`)}
        className={`${isCurrentTab('') ? 'border-b-2 border-b-black' : 'text-[#A2A5B1]'} pb-1`}
      >
        Lookbook
      </button>

      <button
        type="button"
        onClick={() => router.replace(`/user/coordinator/${id}/information`)}
        className={`${isCurrentTab('information') ? 'border-b-2 border-b-black' : 'text-[#A2A5B1]'} pb-1`}
      >
        Information
      </button>

      <button
        type="button"
        onClick={() => router.replace(`/user/coordinator/${id}/review`)}
        className={`${isCurrentTab('review') ? 'border-b-2 border-b-black' : 'text-[#A2A5B1]'} pb-1`}
      >
        Review
      </button>
    </div>
  )
}
