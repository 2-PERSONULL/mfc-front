import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import ProfileImage from '@/components/pages/partner/mypage/profile/ProfileImage'
import PartnerSns from '@/components/pages/partner/mypage/profile/PartnerSns'
import PartnerCareer from '@/components/pages/partner/mypage/profile/career/PartnerCareer'
import PartnerMainStyle from '@/components/pages/partner/mypage/profile/PartnerMainStyle'
import PartnerPrice from '@/components/pages/partner/mypage/profile/PartnerPrice'
import PartnerIntroduction from '@/components/pages/partner/mypage/profile/PartnerIntroduction'
import PartnerChatTime from '@/components/pages/partner/mypage/profile/PartnerChatTime'
import PartnerLeadTime from '@/components/pages/partner/mypage/profile/PartnerLeadTime'
import { getPartnerProfile, getSnsData } from '@/app/api/partner/PartnerProfile'

export default async function PartnerMyPageProfile() {
  const { description, startTime, endTime, averageDate } =
    await getPartnerProfile()
  const snsList = await getSnsData()

  return (
    <div>
      <GoBackHeader title="프로필 관리" />
      <ProfileImage />
      <div className="px-6 mb-[50px]">
        <PartnerIntroduction data={description} />
        <PartnerChatTime startChatTime={startTime} endChatTime={endTime} />
        <PartnerLeadTime leadTime={averageDate} />
        <PartnerSns snsList={snsList} />
        <PartnerCareer />
        <PartnerMainStyle />
        <PartnerPrice />
      </div>
    </div>
  )
}