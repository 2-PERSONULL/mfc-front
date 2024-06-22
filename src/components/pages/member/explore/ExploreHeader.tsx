import React from 'react'
import Image from 'next/image'

export default function ExploreHeader() {
  return (
    <header className="px-5 py-[15px] bg-white border border-b">
      <Image
        src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/logo/signInLogo.svg"
        alt="logo"
        width={55}
        height={55}
      />
    </header>
  )
}
