'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PartnerProfilePreviewButton() {
  return (
    <div className="px-6 mt-7">
      <Link
        href="/partner/mypage/preview"
        className="mt-2 w-full h-[65px] bg-[#F5F5F5] rounded-md text-left pl-3 pr-3 flex items-center justify-between"
      >
        <span className="font-semibold text-gray-500">미리보기</span>
        <Image
          src="https://assets.cdn.soomgo.com/icons/icon-mypage-list-arrow.svg"
          alt="arrow-icon"
          width={24}
          height={24}
        />
      </Link>
    </div>
  )
}
