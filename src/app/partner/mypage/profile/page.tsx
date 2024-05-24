import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import ProfileImage from '@/components/pages/partner/mypage/profile/ProfileImage'

export default function PartnerMyPageProfile() {
  return (
    <div>
      <GoBackHeader title="프로필 관리" />
      <ProfileImage />
    </div>
  )
}
