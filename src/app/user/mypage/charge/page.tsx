import React from 'react'
import { getCashBalance } from '@/actions/user/Payments'

import CashCharge from '@/components/pages/user/payments/CashCharge'

export default async function UserCashChargePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined }
}) {
  const { balance } = await getCashBalance()

  // 유저 결제관리에서 온 경우 충전 완료 후 결제 관리로 이동
  const callbackUrl = searchParams?.callbackUrl

  return <CashCharge cashBalance={balance} callbackUrl={callbackUrl} />
}
