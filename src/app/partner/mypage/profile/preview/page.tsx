import React from 'react'
import PartnerProfileHeader from '@/components/pages/partner/profile/PartnerProfileHeader'
import PartnerProfileIntroduction from '@/components/pages/partner/profile/PartnerProfileIntroduction'
import PartnerProfileTabs from '@/components/pages/partner/profile/PartnerProfileTabs'

export default function PartnerProfilePreview() {
  return (
    <div>
      <PartnerProfileHeader />
      <PartnerProfileIntroduction />
      <div className="w-full h-[8px] bg-[#f5f5f5] mb-6" />
      <PartnerProfileTabs />
    </div>
  )
}
