import React from 'react'
import PartnerChatTimeAndLeadTimeBox from '@/components/pages/partner/profile/PartnerChatTimeAndLeadTimeBox'
import PartnerSnsBox from '@/components/pages/partner/profile/PartnerSnsBox'
import PartnerCareerBox from '@/components/pages/partner/profile/PartnerCareerBox'
import PartnerMainStyleBox from '@/components/pages/partner/profile/PartnerMainStyleBox'

export default function page() {
  return (
    <>
      <PartnerChatTimeAndLeadTimeBox />
      <PartnerSnsBox />
      <PartnerCareerBox />
      <PartnerMainStyleBox />
    </>
  )
}
