import React from 'react'
import { PartnerCareerFetchType } from '@/types/partnerProfileTypes'
import { getCareer } from '@/actions/partner/PartnerProfile'
import { formatCareerPeriod } from '@/utils/formatTime'

export default async function PartnerCareerBox({
  partnerId,
}: {
  partnerId: string
}) {
  const careers = await getCareer(partnerId)

  return (
    <section className="mb-10">
      <h1 className="text-[16px] font-semibold mb-1">경력</h1>
      <ul>
        {careers.map((career: PartnerCareerFetchType, idx: number) => (
          <li
            key={career.careerId}
            className={`${idx === careers.length - 1 ? '' : 'border-b border-b-gray-300 mb-4'} relative`}
          >
            <h1 className="text-[15px] font-semibold">{career.title}</h1>
            <p className="text-[12px] text-gray-600 mt-1">
              {formatCareerPeriod(career.startDate, career.finishDate)}
            </p>
            <p className="text-[13px] text-gray-400 mt-1">
              {career.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
