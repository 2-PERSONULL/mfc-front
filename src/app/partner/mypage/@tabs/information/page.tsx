import React from 'react'
import PartnerChatTimeAndLeadTimeBox from '@/components/pages/partner/profile/PartnerChatTimeAndLeadTimeBox'
import PartnerSnsBox from '@/components/pages/partner/profile/PartnerSnsBox'
import PartnerCareerBox from '@/components/pages/partner/profile/PartnerCareerBox'
import PartnerMainStyleBox from '@/components/pages/partner/profile/PartnerMainStyleBox'

export default function page() {
  return (
    <div className="px-4">
      <PartnerChatTimeAndLeadTimeBox />
      <PartnerSnsBox />
      <PartnerCareerBox />
      <PartnerMainStyleBox />
    </div>
  )
}
