import React from 'react'

import TitleHeader from '@/components/layouts/TitleHeader'
import HeaderInfo from '@/components/pages/partnerMyPage/HeaderInfo'
import PartnerPostList from '@/components/pages/partnerMyPage/PartnerPostList'
import BottomNav from '@/components/layouts/BottomNav'

export default function PartnerMyPage() {
  return (
    <div className="h-screen">
      <TitleHeader title="MY PAGE" />
      <HeaderInfo />
      <PartnerPostList />
      <BottomNav />
    </div>
  )
}
