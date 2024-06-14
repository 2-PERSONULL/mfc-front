import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import ConfirmPayment from '@/components/pages/user/payments/ConfirmPayment'

// 파트너의 확정 제안 결제 페이지
export default function UserConfirmPage({
  searchParams,
}: {
  searchParams: {
    [confirmId: string]: number
  }
}) {
  const { confirmId, amount, roomId } = searchParams

  return (
    <div>
      <GoBackHeader title="결제" />
      <ConfirmPayment confirmId={confirmId} amount={amount} roomId={roomId} />
    </div>
  )
}
