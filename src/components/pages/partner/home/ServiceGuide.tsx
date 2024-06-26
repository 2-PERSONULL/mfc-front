import React from 'react'
import Image from 'next/image'

export default function ServiceGuide() {
  return (
    <div className="py-5 px-4 rounded-[24px] bg-white">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 relative">
          <Image
            src="/icons/caution.svg"
            alt="arrow-icon"
            width={60}
            height={60}
          />
          <p className="text-[18px] font-semibold">페널티 안내</p>
          <p className="absolute right-3">누적 0회</p>
        </div>
        <p className="text-gray-600 text-[14px]">
          코디 제안 확정 후, 기간 내 코디 제출을 하지 않으면 페널티가 적용돼요.
          페널티가 3회 누적되면 파트너 활동이 제한될 수 있어요.
        </p>
      </div>
    </div>
  )
}
