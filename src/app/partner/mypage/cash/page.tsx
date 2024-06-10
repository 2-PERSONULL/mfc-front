import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import PartnerCashBalanceBox from '@/components/pages/partner/mypage/cash/PartnerCashBalanceBox'
import PartnerCashMenu from '@/components/pages/partner/mypage/cash/PartnerCashMenu'

export default function PartnerCashManagement() {
  return (
    <div>
      <GoBackHeader title="정산 관리" />
      <PartnerCashBalanceBox />
      <PartnerCashMenu />
    </div>
  )
}
