import React from 'react'
import { getPartnerProfile } from '@/actions/partner/PartnerProfile'
import { formatTime } from '@/utils/formatTime'

export default async function PartnerChatTimeAndLeadTimeBox({
  partnerCode,
}: {
  partnerCode: string
}) {
  const { startTime, endTime, averageDate, averagePrice } =
    await getPartnerProfile(partnerCode)

  const getLeadTime = () => {
    if (averageDate === null) return ''
    if (averageDate === 0) return '당일 가능'
    return `${averageDate}일`
  }

  return (
    <>
      <section className="mb-8">
        <h1 className="text-[16px] font-semibold mb-1">채팅 가능시간</h1>
        <p className="text-[15px] text-gray-700">
          {startTime ? `${formatTime(startTime)} ~ ${formatTime(endTime)}` : ''}
        </p>
      </section>

      <section className="mb-8">
        <h1 className="text-[16px] font-semibold mb-1">평균 코디 소요기간</h1>
        <p className="text-[15px] text-gray-700">{getLeadTime()}</p>
      </section>

      <section className="mb-8">
        <h1 className="text-[16px] font-semibold mb-1">코디 평균가</h1>
        <p className="text-[15px] text-gray-700">{averagePrice}</p>
      </section>
    </>
  )
}
