import React from 'react'
import PartnerProfileHeader from '@/components/pages/partner/profile/PartnerProfileHeader'
import PartnerProfilePreviewTabs from '@/components/pages/partner/mypage/preview/PartnerProfilePreviewTabs'
import PartnerProfileTopInfo from '@/components/pages/partner/profile/PartnerProfileTopInfo'
import BottomNav from '@/components/layouts/BottomNav'

export default function layout({ tabs }: { tabs: React.ReactNode }) {
  return (
    <>
      <PartnerProfileHeader />
      <main className="mt-[50px] w-full bg-white ">
        <PartnerProfileTopInfo />
        <PartnerProfilePreviewTabs />
        {tabs}
      </main>
      <BottomNav />
    </>
  )
}
