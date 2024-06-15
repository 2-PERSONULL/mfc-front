import React from 'react'
import Image from 'next/image'

export default function UserInfo() {
  const basicImage =
    'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/profile/default-profile.svg'
  return (
    <section className="w-full bg-white py-3 flex gap-5 border-gray-300 border-t border-b px-6">
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
        <p>유저 이름</p>
      </div>
    </section>
  )
}
