import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import CoordinatingPayment from '@/components/pages/user/payments/CoordinatingPayment'

// 파트너의 확정 제안 결제 페이지
export default function UserConfirmPage({
  searchParams,
}: {
  searchParams: {
    [confirmId: string]: number
  }
}) {
  const { confirmId, amount } = searchParams

  return (
    <div>
      <GoBackHeader title="결제" />
      <CoordinatingPayment confirmId={confirmId} amount={amount} />
    </div>
  )
}
