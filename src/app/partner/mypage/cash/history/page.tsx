import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import PartnerCashHistory from '@/components/pages/partner/mypage/cash/PartnerCashHistory'

export default function PartnerCashHistoryPage() {
  return (
    <div>
      <GoBackHeader title="이용내역조회" />
      <PartnerCashHistory />
    </div>
  )
}
