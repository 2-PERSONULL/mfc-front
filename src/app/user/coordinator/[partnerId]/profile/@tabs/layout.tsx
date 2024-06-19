import React from 'react'
import PartnerProfileHeader from '@/components/pages/partner/profile/PartnerProfileHeader'
import PartnerProfileTopInfo from '@/components/pages/partner/profile/PartnerProfileTopInfo'
import CoordiRequestButton from '@/components/ui/button/CoordiRequestButton'
import PartnerProfileTabs from '@/components/ui/tabs/PartnerProfileTabs'

export default function layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { partnerId: string }
}) {
  const { partnerId } = params

  return (
    <>
      <PartnerProfileHeader partnerId={partnerId} />
      <main className="mt-[50px] w-full relative z-[20]">
        <PartnerProfileTopInfo partnerId={partnerId} />
        <PartnerProfileTabs partnerId={partnerId} />
        <div className="py-7 px-3 min-h-[90vh] bg-white w-full">{children}</div>
        <CoordiRequestButton partnerId={partnerId} />
      </main>
    </>
  )
}
