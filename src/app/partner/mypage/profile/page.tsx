import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import ProfileImage from '@/components/pages/partner/mypage/profile/ProfileImage'
import InformationList from '@/components/pages/partner/mypage/profile/InformationList'

export default function PartnerMyPageProfile() {
  return (
    <div>
      <GoBackHeader title="프로필 관리" />
      <ProfileImage />
      <InformationList />
    </div>
  )
}
