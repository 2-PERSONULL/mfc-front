import React from 'react'
import PaymentProcess from '@/components/pages/user/payments/PaymentProcess'

export default function PaymentConfirmPage({
  params,
}: {
  params: { paymentId: string; value: string; callback: string }
}) {
  const { paymentId, value, callback } = params
  return (
    <PaymentProcess paymentId={paymentId} value={value} callback={callback} />
  )
}
