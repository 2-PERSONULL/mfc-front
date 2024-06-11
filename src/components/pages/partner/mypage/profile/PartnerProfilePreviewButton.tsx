'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function PartnerProfilePreviewButton({
  partnerCode,
}: {
  partnerCode: string
}) {
  const router = useRouter()

  return (
    <div className="px-6 mt-7">
      <button
        type="button"
        onClick={() => router.push(`/user/coordinator/${partnerCode}/profile`)}
        className="mt-2 w-full h-[65px] bg-[#F5F5F5] rounded-md text-left pl-3 pr-3 flex items-center justify-between"
      >
        <span className="font-semibold text-gray-500">미리보기</span>
        <Image
          src="https://assets.cdn.soomgo.com/icons/icon-mypage-list-arrow.svg"
          alt="arrow-icon"
          width={24}
          height={24}
        />
      </button>
    </div>
  )
}
