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
import ProfileProgress from '@/components/pages/partner/mypage/profile/PartnerProfileProgress'
import PartnerProfilePreviewButton from '@/components/pages/partner/mypage/profile/PartnerProfilePreviewButton'
import {
  getPartnerProfile,
  getSnsData,
  getPartnerProfileBasic,
} from '@/app/api/partner/PartnerProfile'
import PartnerNickname from '@/components/pages/partner/mypage/profile/PartnerNickname'
import getPartnerCode from '@/utils/getPartnerCode'

export default async function PartnerMyPageProfile() {
  const partnerCode = await getPartnerCode()
  const { description, startTime, endTime, averageDate, averagePrice } =
    await getPartnerProfile(partnerCode)
  const { nickname, email, profileImage } = await getPartnerProfileBasic()
  const snsList = await getSnsData(partnerCode)
  const progress = 40

  return (
    <div>
      <GoBackHeader title="프로필 관리" />
      <ProfileProgress progress={progress} />
      <div className="flex">
        <ProfileImage profileImage={profileImage} />
        <PartnerNickname nickName={nickname} email={email} />
      </div>
      <PartnerProfilePreviewButton partnerCode={partnerCode} />
      <div className="px-6 mb-[50px]">
        <PartnerIntroduction data={description} />
        <PartnerChatTime startChatTime={startTime} endChatTime={endTime} />
        <PartnerLeadTime leadTime={averageDate} />
        <PartnerSns snsList={snsList} />
        <PartnerCareer partnerCode={partnerCode} />
        <PartnerMainStyle />
        <PartnerPrice averagePrice={averagePrice} />
      </div>
    </div>
  )
}
