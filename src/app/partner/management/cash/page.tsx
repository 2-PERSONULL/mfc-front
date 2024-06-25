import React from 'react'
import PartnerCashBalanceBox from '@/components/pages/partner/mypage/cash/PartnerCashBalanceBox'
import PartnerCashMenu from '@/components/pages/partner/mypage/cash/PartnerCashMenu'
import { getCashBalance } from '@/actions/user/Payments'

export default async function PartnerCashManagement() {
  const { balance } = await getCashBalance()
  return (
    <>
      <PartnerCashBalanceBox balance={balance} />
      <PartnerCashMenu />
    </>
  )
}
