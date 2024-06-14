import React from 'react'
import PartnerProfileHeader from '@/components/pages/partner/profile/PartnerProfileHeader'
import PartnerProfileIntroduction from '@/components/pages/partner/profile/PartnerProfileIntroduction'
import PartnerProfilePreviewTabs from '@/components/pages/partner/mypage/preview/PartnerProfilePreviewTabs'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PartnerProfileHeader />
      <PartnerProfileIntroduction />
      <div className="w-full h-[8px] bg-[#f5f5f5] mb-6" />
      <PartnerProfilePreviewTabs />
      <div className="p-7">{children}</div>
    </>
  )
}
