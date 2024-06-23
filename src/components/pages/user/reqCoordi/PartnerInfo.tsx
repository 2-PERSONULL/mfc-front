import React from 'react'
import CircleProfile from '@/components/ui/avatar/CircleProfile'
import { getPartnerProfileBasic } from '@/actions/partner/PartnerProfile'

export default async function PartnerInfo({
  partnerId,
}: {
  partnerId: string
}) {
  const partnerData = await getPartnerProfileBasic(partnerId)
  return (
    <section className="w-full bg-white py-8 flex flex-row gap-5">
      <CircleProfile size={78} imageUrl={partnerData.profileImage} />
      <div className="flex flex-col justify-center">
        <p className="text-lg font-semibold">{partnerData.nickname}</p>
      </div>
    </section>
  )
}
