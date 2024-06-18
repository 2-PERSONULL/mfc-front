import React from 'react'

import PartnerProfileHeader from '@/components/pages/partner/profile/PartnerProfileHeader'
import PartnerProfilePreviewTabs from '@/components/pages/partner/mypage/preview/PartnerProfilePreviewTabs'
import PartnerProfileTopInfo from '@/components/pages/partner/profile/PartnerProfileTopInfo'

export default function layout({ tabs }: { tabs: React.ReactNode }) {
  return (
    <>
      <PartnerProfileHeader />
      <main className="mt-[50px] bg-white h-[100dvh] w-full relative">
        <PartnerProfileTopInfo />
        <PartnerProfilePreviewTabs />
        {tabs}
      </main>
    </>
  )
}
