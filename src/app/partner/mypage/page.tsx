import React from 'react'

import TitleHeader from '@/components/layouts/TitleHeader'
import HeaderInfo from '@/components/pages/partnerMyPage/HeaderInfo'
import PartnerPostList from '@/components/pages/partnerMyPage/PartnerPostList'
import Modal from '@/components/common/Modal'

export default function PartnerMyPage() {
  return (
    <div className="h-screen">
      <Modal />
      <TitleHeader title="MY PAGE" />
      <HeaderInfo />
      <PartnerPostList />
    </div>
  )
}
