import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import ProfileImage from '@/components/pages/partner/mypage/profile/ProfileImage'
import PartnerSns from '@/components/pages/partner/mypage/profile/PartnerSns'
import PartnerCareer from '@/components/pages/partner/mypage/profile/career/PartnerCareer'
import PartnerMainStyle from '@/components/pages/partner/mypage/profile/PartnerMainStyle'
import PartnerPrice from '@/components/pages/partner/mypage/profile/PartnerPrice'
import PartnerProfileInformation from '@/components/pages/partner/mypage/profile/PartnerProfileInformation'
import {
  getPartnerProfileImage,
  updatePartnerProfileImage,
  getSnsData,
  updateSnsData,
} from '@/app/api/partner/PartnerProfile'

export default async function PartnerMyPageProfile() {
  const snsList = await getSnsData()
  const profileImage = await getPartnerProfileImage()

  return (
    <div>
      <GoBackHeader title="프로필 관리" />
      <ProfileImage
        profileImage={profileImage}
        updatePartnerProfileImage={updatePartnerProfileImage}
      />
      <div className="px-6 mb-[50px]">
        <PartnerProfileInformation />
        <PartnerSns snsList={snsList} updateSnsData={updateSnsData} />
        <PartnerCareer />
        <PartnerMainStyle />
        <PartnerPrice />
      </div>
    </div>
  )
}
