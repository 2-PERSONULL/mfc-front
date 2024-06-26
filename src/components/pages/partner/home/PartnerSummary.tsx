import React from 'react'

export default function PartnerSummary() {
  return (
    <div className="py-5 px-4 justify-between rounded-[24px] bg-white flex flex-col gap-3">
      <div>
        <p className="text-[18px] font-semibold">활동 요약</p>
        <p className="text-gray-600 text-[14px]">
          요청내역을 확인하고, 수락여부를 알려주세요
        </p>
      </div>

      <div className="flex justify-around w-full h-full tracking-tight">
        <div className="flex flex-col items-center">
          <p className="text-[1.6rem] font-bold">24</p>
          <span className="text-[12px] text-gray-500">전체</span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[1.6rem] font-bold">2,234</h1>
          <span className="text-[12px] text-gray-500">미응답 요청</span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[1.6rem] font-bold">4.5</h1>
          <span className="text-[12px] text-gray-500">제출 예정</span>
        </div>
      </div>
    </div>
  )
}
