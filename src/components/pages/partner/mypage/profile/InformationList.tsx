import React from 'react'
import PartnerIntroduction from '@/components/pages/partner/mypage/profile/PartnerIntroduction'
import PartnerChatTime from '@/components/pages/partner/mypage/profile/PartnerChatTime'
import PartnerLeadTime from '@/components/pages/partner/mypage/profile/PartnerLeadTime'
import PartnerSns from '@/components/pages/partner/mypage/profile/PartnerSns'
import PartnerCareer from '@/components/pages/partner/mypage/profile/PartnerCareer'
import PartnerMainStyle from '@/components/pages/partner/mypage/profile/PartnerMainStyle'
import PartnerPrice from './PartnerPrice'
import { PartnerSnsType } from '@/types/partnerProfileTypes'

export default function InformationList() {
  // 프로필 정보 fetch
  const profile = {
    introduction: '빈티지 코디에 자신있습니다!',
    chatTime: '',
    leadTime: 1,
  }

  const snsList: PartnerSnsType[] = [
    {
      id: 1,
      name: 'instagram',
      url: 'https://www.instagram.com',
      icon: 'instagram',
    },
    {
      id: 2,
      name: 'facebook',
      url: 'https://www.facebook.com',
      icon: 'facebook',
    },
  ]

  return (
    <div className="px-6 mb-[50px]">
      <PartnerIntroduction data={profile.introduction} />
      <PartnerChatTime chatTime={profile.chatTime} />
      <PartnerLeadTime leadTime={profile.leadTime} />
      <PartnerSns snsList={snsList} />
      <PartnerCareer />
      <PartnerMainStyle />
      <PartnerPrice />
    </div>
  )
}
