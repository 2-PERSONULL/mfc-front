import React from 'react'
import { getPartnerProfile } from '@/app/api/partner/PartnerProfile'

export default async function PartnerProfileIntroduction() {
  const { description } = await getPartnerProfile()
  return <div className="p-8 text-[16px] font-semibold">{description}</div>
}
