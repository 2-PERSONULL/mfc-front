import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import PartnerExchangeCash from '@/components/pages/partner/mypage/cash/PartnerExchangeCash'

export default function PartnerCashExchangePage() {
  return (
    <div>
      <GoBackHeader title="캐시 환전" />
      <PartnerExchangeCash />
    </div>
  )
}
