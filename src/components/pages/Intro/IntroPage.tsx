'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Session } from 'next-auth'

export default function IntroPage({ session }: { session: Session }) {
  const router = useRouter()

  useEffect(() => {
    const role = localStorage.getItem('role')?.toLowerCase()

    if (session) {
      router.replace(`/${role}`)
    } else router.replace('/user')
  }, [])

  return (
    <div>
      <div className="absolute right-1/2 bottom-1/2 translate-x-[50%]  translate-y-[50%]">
        <Image
          src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/mfc-logo.svg"
          alt="logo"
          width={150}
          height={150}
        />
      </div>
      <div className="absolute bottom-10 right-1/2 translate-x-[50%] text-[12px] text-[#8E9195] text-center">
        <p>©2024 MYFASHION COORDINATOR</p>
        <p>ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  )
}
