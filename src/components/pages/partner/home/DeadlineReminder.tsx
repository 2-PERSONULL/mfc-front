import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PartnerChatListType } from '@/types/requestType'
import { formatRequestDate } from '@/utils/formatTime'

export default function DeadlineReminder({
  toBeSubmitted,
}: {
  toBeSubmitted: PartnerChatListType[]
}) {
  return (
    <>
      <section className="py-5 px-4 rounded-[24px] bg-white">
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
      </section>

      {toBeSubmitted.map((data) => (
        <Link
          key={data.requestId}
          href={`/partner/styleguide/${data.requestId}?type=new&status=CONFIRMED`}
          className="flex bg-red-100 rounded-[24px] py-5 px-4 bg-gradient-to-b from-white to-red-100 gap-3"
        >
          <span className="w-3 h-3 rounded-full bg-red-500 mt-2" />

          <div>
            <p className="text-[17px] font-semibold">
              스타일 가이드 제출 바로가기
            </p>
            <p className="text-[14px] text-gray-600">{data.title}</p>
            <p className="text-[14px] text-gray-600">
              코디기한{' '}
              <span className="text-[13px]">
                {formatRequestDate(data.deadline)}
              </span>
            </p>
          </div>
        </Link>
      ))}
    </>
  )
}
