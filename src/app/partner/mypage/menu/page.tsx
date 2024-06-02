import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import MyPageMenu from '@/components/pages/partner/mypage/menu/MyPageMenu'

export default function PartnerMyPageMenu() {
  return (
    <div>
      <GoBackHeader title="마이페이지" />
      <MyPageMenu />
    </div>
  )
}
