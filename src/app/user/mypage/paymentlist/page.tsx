import React from 'react'
import {
  getCashBalance,
  getChargeHistory,
  getPaymentHistory,
} from '@/actions/user/Payments'
import UserBalanceBox from '@/components/pages/user/payments/UserBalanceBox'
import UserCashHistory from '@/components/pages/user/payments/UserCashHistory'
import { PaymentHistoryType } from '@/types/cashType'

export default async function UserPaymentListPage() {
  const searchDate = new Date().toISOString().substring(0, 7)
  const { balance } = await getCashBalance()
  const chargeHistory = await getChargeHistory()
  const paymentHistory = await getPaymentHistory(
    'PAYMENT_COMPLETED',
    searchDate,
    0,
  )

  const transformData = (data: PaymentHistoryType[]) => {
    return data.map((item) => ({
      amount: item.amount,
      paymentStatus: 'CONFIRM',
      paymentDate: item.createdAt,
    }))
  }

  return (
    <>
      <UserBalanceBox balance={balance} />
      <UserCashHistory
        chargeHistory={chargeHistory}
        paymentHistory={transformData(paymentHistory.content)}
        isLast={paymentHistory.last}
      />
    </>
  )
}
