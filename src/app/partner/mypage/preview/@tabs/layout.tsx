import React from 'react'

import PartnerProfileHeader from '@/components/pages/partner/profile/PartnerProfileHeader'
import PartnerProfilePreviewTabs from '@/components/pages/partner/mypage/preview/PartnerProfilePreviewTabs'
import PartnerProfileTopInfo from '@/components/pages/partner/profile/PartnerProfileTopInfo'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PartnerProfileHeader />
      <main className="mt-[50px] w-full relative z-[20]">
        <PartnerProfileTopInfo />
        <PartnerProfilePreviewTabs />
        <div className="p-7 min-h-[90vh] bg-white w-full">{children}</div>
      </main>
    </>
  )
}
