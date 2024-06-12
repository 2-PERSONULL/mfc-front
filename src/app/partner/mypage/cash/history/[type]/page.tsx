import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import PartnerCashHistory from '@/components/pages/partner/mypage/cash/PartnerCashHistory'

export default function PartnerCashHistoryPage({
  params,
}: {
  params: { type: string }
}) {
  const { type } = params
  return (
    <div>
      <GoBackHeader
        title={`${type === 'add' ? '적립 내역 조회' : '환전 내역 조회'}`}
      />
      <PartnerCashHistory />
    </div>
  )
}
