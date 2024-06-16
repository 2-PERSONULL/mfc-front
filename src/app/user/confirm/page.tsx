import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import ConfirmPayment from '@/components/pages/user/payments/ConfirmPayment'
import { getCashBalance } from '@/actions/user/Payments'

// 파트너의 확정 제안 결제 페이지
export default async function UserConfirmPage({
  searchParams,
}: {
  searchParams: {
    confirmId: number
    amount: number
    roomId: number
  }
}) {
  const { balance } = await getCashBalance()
  const { confirmId, amount, roomId } = searchParams

  return (
    <div>
      <GoBackHeader title="결제" />
      <ConfirmPayment
        confirmId={confirmId}
        amount={amount}
        roomId={roomId}
        cashBalance={balance}
      />
    </div>
  )
}
