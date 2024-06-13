import React from 'react'
import { PartnerSnsType } from '@/types/partnerProfileTypes'
import PartnerSnsTag from '@/components/pages/partner/mypage/profile/PartnerSnsTag'
import { getSnsData } from '@/actions/partner/PartnerProfile'

export default async function PartnerSnsBox({
  partnerId,
}: {
  partnerId: string
}) {
  const snsList = await getSnsData(partnerId)

  return (
    <section className="mb-10">
      <h1 className="text-[16px] font-semibold mb-1">SNS</h1>
      <ul className="flex flex-wrap w-full h-auto">
        {snsList.map((sns: PartnerSnsType) => (
          <li key={sns.id}>
            <PartnerSnsTag sns={sns} />
          </li>
        ))}
      </ul>
    </section>
  )
}
