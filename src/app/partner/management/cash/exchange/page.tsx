import React from 'react'
import PartnerExchangeCash from '@/components/pages/partner/mypage/cash/PartnerExchangeCash'
import { getCashBalance } from '@/actions/user/Payments'
import { getBankCodeList, getAccountInfo } from '@/actions/partner/Account'

export default async function PartnerCashExchangePage() {
  const { balance } = await getCashBalance()
  const { bank, account } = await getAccountInfo()
  const bankList = await getBankCodeList()
  const bankCode = bankList.find(
    (item: { code: string; name: string }) => item.code === bank,
  )

  return (
    <PartnerExchangeCash
      balance={balance}
      bank={bankCode.name}
      accountNumber={account}
    />
  )
}
