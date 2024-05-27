import React from 'react'
import Image from 'next/image'
import { PartnerSnsType } from '@/types/partnerProfileTypes'

export default function PartnerSnsTag({ sns }: { sns: PartnerSnsType }) {
  return (
    <li className="w-auto h-[32px] flex items-center justify-center bg-gray-100 rounded-full py-5 px-3 mr-[8px] mb-[5px]">
      <Image
        src={`/icons/${sns.name}.svg`}
        alt="edit icon"
        width={21}
        height={21}
        className="mr-[5px]"
      />
      <p className="text-[14px] text-gray-600 font-semibold mr-[5px]">
        {sns.name}
      </p>
    </li>
  )
}
