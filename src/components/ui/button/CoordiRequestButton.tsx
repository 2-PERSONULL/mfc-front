'use client'

import React from 'react'
import Link from 'next/link'

export default function CoordiRequestButton({
  partnerId,
}: {
  partnerId?: string
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white h-[100px] flex justify-center pt-5">
      <Link
        href={`/user/coordinator/${partnerId}/reqcoordi`}
        className="w-[80vw] bg-black h-[60px] rounded-full"
      >
        <div className="h-full flex justify-center items-center">
          <span className="text-[17px] text-white font-semibold ">
            코디 예약하기
          </span>
        </div>
      </Link>
    </div>
  )
}
