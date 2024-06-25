import React from 'react'
import Image from 'next/image'

export default function DeadlineReminder() {
  return (
    <div className="py-5 px-4 rounded-[24px] bg-white">
      <div className="flex gap-3">
        <Image
          src="/icons/notice.svg"
          alt="arrow-icon"
          width={60}
          height={60}
        />
        <div>
          <p className="text-[18px] font-semibold">코디 제출 알림</p>
          <p className="text-gray-600 text-[14px]">
            코디 제출 마감일이 다가오고 있어요 <br />
            기한내에 스타일 가이드를 제출해주세요
          </p>
        </div>
      </div>
    </div>
  )
}
