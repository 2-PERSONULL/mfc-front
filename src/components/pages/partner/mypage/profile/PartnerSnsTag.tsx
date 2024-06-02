import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PartnerSnsType } from '@/types/partnerProfileTypes'

export default function PartnerSnsTag({ sns }: { sns: PartnerSnsType }) {
  return (
    <Link
      href={sns.snsUrl}
      target="_blank"
      className="w-auto h-[32px] flex gap-2 items-center justify-center bg-gray-100 rounded-full py-5 px-3 mr-[8px] mb-[5px]"
    >
      <Image
        src={`/icons/${sns.type}.svg`}
        alt="edit icon"
        width={21}
        height={21}
      />
      <p className="text-[14px] text-gray-600 font-semibold mr-[5px]">
        {sns.type}
      </p>
    </Link>
  )
}
