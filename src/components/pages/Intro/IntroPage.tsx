'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function IntroPage() {
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    const timer = setTimeout(() => {
      const role = localStorage.getItem('role')
        ? localStorage.getItem('role')
        : 'user'
      if (session) {
        router.replace(`/${role}`)
      }
      router.replace('/user')
    }, 1000)

    return () => clearTimeout(timer) // 컴포넌트가 언마운트되면 타이머를 취소합니다.
  }, [router])

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
