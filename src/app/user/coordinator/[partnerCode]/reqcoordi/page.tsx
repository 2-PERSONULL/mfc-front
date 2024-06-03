'use client'

import React, { useState } from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import { Calendar } from '@/components/ui/calendar'

export default function UserCoordinatingRequest() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className="w-full min-h-dvh">
      <GoBackHeader title="코디 예약" />
      <div className="w-ful bg-white py-3 flex gap-2 border border-gray-400 px-6">
        <div className="px-5 py-5 border border-black w-fit rounded-full">
          asd
        </div>
        <div className="flex flex-col justify-center">
          <p>파트너 명</p>
          <p className="text-xs">평점</p>
          <p className="text-xs">횟수</p>
        </div>
      </div>
      <div className="w-full bg-white py-4 border border-gray-400 px-6 grid gap-2">
        <p>내 코디 요청서</p>
        <button
          type="button"
          className="border border-black rounded-full py-3 bg-gray-300 border-none text-black"
        >
          요청서 선택
        </button>
      </div>
      <div className="bg-white py-4 border border-gray-400 px-6 grid gap-2">
        <p>날짜지정</p>
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </div>
    </div>
  )
}
