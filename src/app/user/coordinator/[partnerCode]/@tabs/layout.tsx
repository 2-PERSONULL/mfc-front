import React from 'react'
import PartnerProfileHeader from '@/components/pages/partner/profile/PartnerProfileHeader'
import PartnerProfileIntroduction from '@/components/pages/partner/profile/PartnerProfileIntroduction'
import PartnerProfileTabs from '@/components/ui/tabs/PartnerProfileTabs'
import CoordiRequestButton from '@/components/ui/button/CoordiRequestButton'

export default function layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { partnerCode: string }
}) {
  const { partnerCode } = params

  return (
    <>
      <PartnerProfileHeader />
      <PartnerProfileIntroduction partnerCode={partnerCode} />
      <div className="w-full h-[8px] bg-[#f5f5f5] mb-6" />
      <PartnerProfileTabs partnerCode={partnerCode} />
      {children}
      <div className="h-[100px] bg-white" />
      <CoordiRequestButton partnerCode={partnerCode} />
    </>
  )
}
