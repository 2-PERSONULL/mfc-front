import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
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
    <div>
      <GoBackHeader title="정산 계좌 관리" />
      <AccountManagement
        bankList={bankList}
        bankHoler={bankHoler}
        bankInfo={bankCode || { code: '', name: '' }}
        bankAccountInfo={account}
      />
    </div>
  )
}
