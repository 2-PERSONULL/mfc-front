import React from 'react'

import TitleHeader from '@/components/layouts/TitleHeader'
import HeaderInfo from '@/components/pages/partner/mypage/HeaderInfo'
import PartnerPostList from '@/components/pages/partner/mypage/PartnerPostList'
import BottomNav from '@/components/layouts/BottomNav'

export default function PartnerMyPage() {
  return (
    <div className="h-screen">
      <TitleHeader title="MY PAGE" menu="/partner/mypage/menu" />
      <HeaderInfo />
      <PartnerPostList />
      <BottomNav />
    </div>
  )
}
