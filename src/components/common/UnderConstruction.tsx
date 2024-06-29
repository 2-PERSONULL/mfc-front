'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function UnderConstruction() {
  const router = useRouter()
  return (
    <div className="bg-white w-full h-[90dvh] justify-center items-center flex flex-col">
      <Image src="/icons/mfc-2.svg" alt="404" width={100} height={100} />
      <p className="font-Pretendard font-bold text-[20px] mt-[30px] text-center">
        페이지 준비 중
      </p>
      <p className="font-Pretendard text-[#969696] text-[15px] mt-[15px] text-center">
        더 나은 서비스를 위해
        <br />
        페이지를 준비하고 있습니다.
        <br />
        곧 만나뵙겠습니다!
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
