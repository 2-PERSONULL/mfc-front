import React from 'react'
import PartnerProfileHeader from '@/components/pages/partner/profile/PartnerProfileHeader'
import PartnerProfileTopInfo from '@/components/pages/partner/profile/PartnerProfileTopInfo'
import CoordiRequestButton from '@/components/ui/button/CoordiRequestButton'
import PartnerProfileTabs from '@/components/ui/tabs/PartnerProfileTabs'

export default function layout({
  tabs,
  params,
}: {
  tabs: React.ReactNode
  params: { partnerId: string }
}) {
  const { partnerId } = params
  return (
    <>
      <PartnerProfileHeader partnerId={partnerId} />
      <main className="mt-[50px] w-full bg-white ">
        <PartnerProfileTopInfo partnerId={partnerId} />
        <PartnerProfileTabs partnerId={partnerId} />
        {tabs}
        <CoordiRequestButton partnerId={partnerId} />
      </main>
    </>
  )
}
