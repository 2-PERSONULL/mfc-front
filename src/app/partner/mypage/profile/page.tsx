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
  getFavoriteStyle,
  getCareer,
} from '@/actions/partner/PartnerProfile'
import getStyleCategory from '@/actions/partner/Common'
import PartnerNickname from '@/components/pages/partner/mypage/profile/PartnerNickname'

export default async function PartnerMyPageProfile() {
  const styleList = await getStyleCategory()
  const favoritStyle = await getFavoriteStyle()

  const { description, startTime, endTime, averageDate, averagePrice } =
    await getPartnerProfile()
  const { nickname, profileImage } = await getPartnerProfileBasic()
  const snsList = await getSnsData()
  const careers = await getCareer()

  // 프로필이미지, 소개, 채팅시간, 리드타임, SNS, 경력, 주력스타일, 가격
  const fields = [
    profileImage,
    description,
    startTime && endTime,
    averageDate,
    snsList.length > 0,
    careers.length > 0,
    favoritStyle.length > 0,
    averagePrice,
  ]
  const completedFields = fields.filter(Boolean).length
  const totalFields = fields.length
  const progressPercent = Math.round((completedFields / totalFields) * 100)

  return (
    <div>
      <GoBackHeader title="프로필 관리" />
      <ProfileProgress progressPercent={progressPercent} />
      <div className="flex">
        <ProfileImage profileImage={profileImage} />
        <PartnerNickname nickName={nickname} />
      </div>
      <PartnerProfilePreviewButton />
      <div className="px-6 mb-[50px]">
        <PartnerIntroduction data={description} />
        <PartnerChatTime startChatTime={startTime} endChatTime={endTime} />
        <PartnerLeadTime leadTime={averageDate} />
        <PartnerSns snsList={snsList} />
        <PartnerCareer careers={careers} />
        <PartnerMainStyle styleList={styleList} favoritStyle={favoritStyle} />
        <PartnerPrice averagePrice={averagePrice} />
      </div>
    </div>
  )
}
