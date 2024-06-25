import React from 'react'
import { getCashBalance } from '@/actions/user/Payments'

import CashCharge from '@/components/pages/user/payments/CashCharge'

export default async function UserCashChargePage() {
  const { balance } = await getCashBalance()
  return <CashCharge cashBalance={balance} />
}
