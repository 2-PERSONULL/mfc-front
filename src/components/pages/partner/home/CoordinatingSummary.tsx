import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getChatList } from '@/actions/partner/PartnerRequest'
import { PartnerChatListType } from '@/types/requestType'
import { formatRequestDate } from '@/utils/formatTime'

export default async function CoordinatingSummary() {
  const initialData = await getChatList()

  const nonResponse = initialData.filter(
    (data: PartnerChatListType) => data.status === 'NONERESPONSE',
  )
  const toBeSubmitted = initialData.filter(
    (data: PartnerChatListType) => data.status === 'CONFIRMED',
  )

  const nonResponseData = nonResponse[nonResponse.length - 1]

  return (
    <div className="py-5 px-4 justify-between rounded-[24px] bg-white flex flex-col gap-5">
      <div>
        <p className="text-[18px] font-semibold">코디 매칭 현황</p>
        <p className="text-gray-600 text-[14px]">
          요청내역을 확인하고, 수락여부를 알려주세요
        </p>
      </div>

      <div className="flex justify-around w-full h-full tracking-tight">
        <div className="flex flex-col items-center">
          <p className="text-[1.6rem] font-bold">
            {nonResponse.length + toBeSubmitted.length}
          </p>
          <span className="text-[12px] text-gray-500">전체</span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[1.6rem] font-bold">{nonResponse.length}</h1>
          <span className="text-[12px] text-gray-500">미응답 요청</span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[1.6rem] font-bold">{toBeSubmitted.length}</h1>
          <span className="text-[12px] text-gray-500">제출 예정</span>
        </div>
      </div>

      {/* 미응답 요청 바로가기 */}
      {nonResponseData && (
        <Link
          href={`partner/reqcoordi/${nonResponseData.requestId}?status=nonresponse`}
          className="bg-gray-100 rounded-[14px]"
        >
          <div className="flex justify-between items-center px-4 py-3">
            <div className="flex gap-3">
              <Image
                src="/icons/mail.svg"
                alt="arrow-icon"
                width={60}
                height={60}
              />
              <div>
                <p className="text-[15px] font-semibold mb-1">
                  미응답 요청 바로가기
                </p>
                <p className="text-[14px] text-gray-600">
                  {nonResponseData.title}
                </p>
                <p className="text-[14px] text-gray-600">
                  코디기한{' '}
                  <span className="text-[13px]">
                    {formatRequestDate(nonResponseData.deadline)}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="/icons/list-arrow.svg"
                alt="arrow-icon"
                className="w-4 h-4"
              />
            </div>
          </div>
        </Link>
      )}
    </div>
  )
}
