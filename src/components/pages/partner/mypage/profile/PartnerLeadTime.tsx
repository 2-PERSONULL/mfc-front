import React from 'react'
import Image from 'next/image'

export default function PartnerLeadTime() {
  return (
    <div className="border-b border-b-gray-200 py-8">
      <div className="flex justify-between mb-2">
        <h1 className="text-[18px] font-bold mr-2">평균 코디 소요기간</h1>
        <Image
          src="/images/pencil-icon.svg"
          alt="edit icon"
          width={21}
          height={21}
        />
      </div>
      <p className="text-[14px]">3일</p>
    </div>
  )
}
