import React from 'react'
import { getPartnerProfile } from '@/actions/partner/PartnerProfile'

export default async function PartnerProfileIntroduction({
  partnerCode,
}: {
  partnerCode: string
}) {
  const { description } = await getPartnerProfile(partnerCode)
  return <div className="p-8 text-[16px] font-semibold">{description}</div>
}
