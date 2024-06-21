'use client'

import React from 'react'
import Image from 'next/image'
import { signOut } from 'next-auth/react'

export default function Logout() {
  return (
    <section className="border flex border-gray-200 rounded-[6px] mx-5 mt-3 h-[70px] px-4">
      <button
        type="button"
        onClick={() => signOut({ callbackUrl: '/' })}
        className="flex items-center justify-around"
      >
        <Image
          src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/exit.svg"
          alt="logout"
          width={24}
          height={24}
          className="mr-4"
        />
        <p>로그아웃</p>
      </button>
    </section>
  )
}
