'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CommonHeader() {
  let role = null
  if (typeof window !== 'undefined') {
    role = localStorage.getItem('role')
  }
  return (
    <header className="px-5 py-[15px] bg-white">
      <div className="flex-1 flex flex-row items-center">
        <Link
          href={role === 'partner' ? '/partner' : '/user'}
          className="flex-1"
        >
          <Image src="/icons/mfc-2.svg" alt="logo" width={55} height={55} />
        </Link>
        <div className="flex gap-3 items-center">
          <Image
            src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/search-icon.svg"
            alt="explore"
            width={23}
            height={23}
          />
          <Image
            src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/notification.svg"
            alt="alert"
            width={25}
            height={25}
          />
        </div>
      </div>
    </header>
  )
}
