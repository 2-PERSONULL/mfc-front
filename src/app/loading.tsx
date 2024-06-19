import React from 'react'
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="absolute right-1/2 bottom-1/2 translate-x-[50%]  translate-y-[50%]">
      <Image
        src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/mfc-logo.svg"
        alt="logo"
        width={150}
        height={150}
      />
    </div>
  )
}
