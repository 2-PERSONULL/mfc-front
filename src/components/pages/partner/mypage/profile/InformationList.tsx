import React from 'react'
import PartnerIntroduction from '@/components/pages/partner/mypage/profile/PartnerIntroduction'
import PartnerChatTime from '@/components/pages/partner/mypage/profile/PartnerChatTime'
import PartnerLeadTime from '@/components/pages/partner/mypage/profile/PartnerLeadTime'
import PartnerSns from '@/components/pages/partner/mypage/profile/PartnerSns'
import PartnerCareer from '@/components/pages/partner/mypage/profile/PartnerCareer'
import PartnerMainStyle from '@/components/pages/partner/mypage/profile/PartnerMainStyle'
import PartnerPrice from './PartnerPrice'

export default function InformationList() {
  // 프로필 정보 fetch
  const profile = {
    introduction: '빈티지 코디에 자신있습니다!',
    chatTime: '',
    leadTime: '',
    sns: '',
    career: '',
    mainStyle: '',
    price: '',
  }

  return (
    <div className="px-6 mb-[50px]">
      <PartnerIntroduction data={profile.introduction} />
      <PartnerChatTime chatTime={profile.chatTime} />
      <PartnerLeadTime />
      <PartnerSns />
      <PartnerCareer />
      <PartnerMainStyle />
      <PartnerPrice />
    </div>
  )
}
