'use client'

import React from 'react'
import Link from 'next/link'

export default function CoordiRequestButton({
  partnerId,
}: {
  partnerId?: string
}) {
  return (
    <section className="fixed bottom-0 left-0 right-0 h-[100px] flex justify-center pt-5">
      <Link
        href={`/user/coordinator/${partnerId}/reqcoordi`}
        className="w-[90%] bg-black h-[60px] rounded-full"
      >
        <div className="h-full flex justify-center items-center">
          <span className="text-[17px] text-white font-semibold ">
            코디 예약하기
          </span>
        </div>
      </Link>
    </section>
  )
}
