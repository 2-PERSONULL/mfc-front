import React from 'react'
import Image from 'next/image'

export default function StyleGuideTitle() {
  return (
    <div className="flex items-center gap-4 pt-2 pb-3 mb-4 pl-1">
      <Image src="/icons/arrive.svg" alt="icon" width={60} height={60} />
      <div>
        <p className="font-semibold text-[20px] text-gray-600">
          스타일 가이드가 도착했어요!
        </p>

        <span className="text-[14px] text-gray-500">
          가이드를 확인하고 확정을 진행해주세요
        </span>
        <span className="block text-[12px] text-gray-400 leading-3">
          5일이 지나면 자동으로 확정이 돼요
        </span>
      </div>
    </div>
  )
}
