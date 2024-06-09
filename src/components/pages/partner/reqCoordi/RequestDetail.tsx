'use client'

import React from 'react'
import ActionCoordinate from '@/app/api/partner/PartnerRequest'

export default function RequestDetail({ historyId }: { historyId: number }) {
  const actionHandler = async (action: string) => {
    const result = await ActionCoordinate(historyId, action)

    console.log(result)
  }
  return (
    <div className="w-full">
      <div className="p-3">요청상세 {historyId}</div>

      <div className="fixed bottom-0 h-[100px] w-full flex items-center bg-white gap-2 px-2 pb-[10px]">
        <button
          type="button"
          onClick={() => actionHandler('reject')}
          className="bg-gray-200 font-semibold text-[17px] h-[60px] rounded-full w-full"
        >
          거절
        </button>
        <button
          type="button"
          onClick={() => actionHandler('accept')}
          className="bg-black font-semibold text-white text-[17px] h-[60px] rounded-full w-full"
        >
          수락
        </button>
      </div>
    </div>
  )
}
