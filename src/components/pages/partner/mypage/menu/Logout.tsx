import React from 'react'
import Image from 'next/image'

export default function Logout() {
  return (
    <div className="flex border border-gray-200 rounded-[6px] mx-5 mt-3 h-[70px] items-center px-4">
      <Image
        src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/exit.svg"
        alt="logout"
        width={24}
        height={24}
        className="mr-4"
      />
      <p>로그아웃</p>
    </div>
  )
}
