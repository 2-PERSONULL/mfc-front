import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import AccountManagement from '@/components/pages/partner/mypage/cash/AccountManagement'

export default function page() {
  return (
    <div>
      <GoBackHeader title="정산 계좌 관리" />
      <AccountManagement />
    </div>
  )
}
