import React from 'react'
import AccountManagement from '@/components/pages/partner/mypage/cash/AccountManagement'
import { getBankCodeList, getAccountInfo } from '@/actions/partner/Account'
import getMemberName from '@/actions/member/Account'

export default async function PartnerAccountPage() {
  const bankList = await getBankCodeList()
  const bankHoler = await getMemberName()
  const { bank, account } = await getAccountInfo()
  const bankCode = bankList.find(
    (item: { code: string; name: string }) => item.code === bank,
  )

  return (
    <AccountManagement
      bankList={bankList}
      bankHoler={bankHoler}
      bankInfo={bankCode || { code: '', name: '' }}
      bankAccountInfo={account}
    />
  )
}
