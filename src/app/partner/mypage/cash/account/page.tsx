import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import AccountManagement from '@/components/pages/partner/mypage/cash/AccountManagement'
import { getBankCodeList } from '@/actions/partner/Account'

export default async function PartnerAccountPage() {
  const bankList = await getBankCodeList()

  return (
    <div>
      <GoBackHeader title="정산 계좌 관리" />
      <AccountManagement bankList={bankList} />
    </div>
  )
}
