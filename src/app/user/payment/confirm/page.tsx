import React, { Suspense } from 'react'
import PaymentProcess from '@/components/pages/user/payments/PaymentProcess'

export default function PaymentConfirmPage() {
  return (
    <Suspense>
      <PaymentProcess />
    </Suspense>
  )
}
