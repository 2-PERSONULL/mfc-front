'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function CoordiRequestButton({
  partnerCode,
}: {
  partnerCode: string
}) {
  const router = useRouter()
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white h-[100px] flex justify-center pt-5">
      <button
        type="button"
        onClick={() =>
          router.push(`/user/coordinator/${partnerCode}/reqcoordi`)
        }
        className="w-[80vw] bg-black text-white font-semibold text-[17px] h-[60px] rounded-full"
      >
        코디 예약하기
      </button>
    </div>
  )
}
