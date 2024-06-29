'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import Image from 'next/image'

export default function ErrorPage() {
  const router = useRouter()
  return (
    <div className="bg-white w-full h-screen justify-center items-center flex flex-col">
      <Image src="/icons/mfc-2.svg" alt="404" width={100} height={100} />
      <p className="font-Pretendard font-bold text-[20px] mt-[30px] text-center">
        예상치 못한 오류가 발생했습니다.
        <br />
      </p>

      <div className="mt-[30px] justify-center flex">
        <button
          type="button"
          onClick={() => router.back()}
          className="text-white px-[50px] py-[20px] bg-[#000000] text-[15px] rounded-lg font-Pretendard"
        >
          이전으로 돌아가기
        </button>
      </div>
    </div>
  )
}
