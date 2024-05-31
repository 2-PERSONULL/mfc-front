import React from 'react'
import PartnerIntroduction from '@/components/pages/partner/mypage/profile/PartnerIntroduction'
import PartnerChatTime from '@/components/pages/partner/mypage/profile/PartnerChatTime'
import PartnerLeadTime from '@/components/pages/partner/mypage/profile/PartnerLeadTime'
import {
  getPartnerProfile,
  updateIntroduction,
  updateChatTime,
  updateLeadTime,
} from '@/app/api/partner/PartnerProfile'

export default async function PartnerProfileInformation() {
  const { description, startTime, endTime, averageDate } =
    await getPartnerProfile()

  return (
    <div>
      <PartnerIntroduction
        data={description}
        updateIntroduction={updateIntroduction}
      />
      <PartnerChatTime
        startChatTime={startTime}
        endChatTime={endTime}
        updateChatTime={updateChatTime}
      />
      <PartnerLeadTime leadTime={averageDate} updateLeadTime={updateLeadTime} />
    </div>
  )
}
