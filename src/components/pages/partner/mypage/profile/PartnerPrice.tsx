import React from 'react'
import Image from 'next/image'

export default function PartnerPrice() {
  return (
    <div className="py-8">
      <div className="flex justify-between mb-2">
        <h1 className="text-[18px] font-bold mr-2">가격</h1>
        <Image
          src="/images/pencil-icon.svg"
          alt="edit icon"
          width={21}
          height={21}
        />
      </div>
      <div />
    </div>
  )
}
