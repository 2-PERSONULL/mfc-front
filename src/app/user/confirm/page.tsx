import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import ConfirmPayment from '@/components/pages/user/payments/ConfirmPayment'
import { getCashBalance } from '@/actions/user/Payments'

// 파트너의 확정 제안 결제 페이지
export default async function UserConfirmPage({
  searchParams,
}: {
  searchParams: {
    requestId: string
    amount: number
    roomId: number
    partnerId: string
  }
}) {
  const { balance } = await getCashBalance()
  const { requestId, amount, roomId, partnerId } = searchParams

  return (
    <div>
      <GoBackHeader title="결제" />
      <ConfirmPayment
        roomId={roomId}
        amount={amount}
        requestId={requestId}
        cashBalance={balance}
        partnerId={partnerId}
      />
    </div>
  )
}
