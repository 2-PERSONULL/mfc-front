import React from 'react'
import Image from 'next/image'

export default function ChangeRole() {
  const role = 'partner'
  return (
    <div className="flex border border-gray-200 rounded-[6px] mx-5 mt-3 h-[70px] items-center px-4">
      <Image
        src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/change-role.svg"
        alt="logout"
        width={24}
        height={24}
        className="mr-4"
      />
      <p> {role === 'partner' ? '고객으로' : '파트너로'} 전환</p>
    </div>
  )
}
