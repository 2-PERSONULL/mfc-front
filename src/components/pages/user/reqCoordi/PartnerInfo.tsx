import React from 'react'
import Image from 'next/image'

export default function PartnerInfo() {
  const basicImage =
    'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/profile/default-profile.svg'
  return (
    <div className="w-ful bg-white py-3 flex gap-5 border-gray-400 border-t px-6">
      <Image
        src={basicImage}
        alt="empty profile image"
        width={0}
        height={0}
        style={{ width: 'auto', height: 'auto' }}
        priority
        className="rounded-full border"
      />
      <div className="flex flex-col justify-center">
        <p>파트너 명</p>
      </div>
    </div>
  )
}
