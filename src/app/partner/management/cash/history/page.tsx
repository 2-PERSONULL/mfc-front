import React from 'react'
import PartnerCashHistory from '@/components/pages/partner/mypage/cash/PartnerCashHistory'
import { getPaymentHistory } from '@/actions/user/Payments'
import { PaymentHistoryType } from '@/types/cashType'

export default async function PartnerCashHistoryPage() {
  const searchDate = new Date().toISOString().substring(0, 7)
  const paymentHistory = await getPaymentHistory(
    'SETTLEMENT_COMPLETED',
    searchDate,
    0,
  )

  const transformData = (data: PaymentHistoryType[]) => {
    return data.map((item) => ({
      amount: item.amount,
      paymentStatus: 'SETTLEMENT',
      paymentDate: item.createdAt,
    }))
  }

  return (
    <PartnerCashHistory
      settlementHistory={transformData(paymentHistory.content)}
      isLast={paymentHistory.last}
    />
  )
}
