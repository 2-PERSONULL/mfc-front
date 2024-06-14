'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import checkPayment from '@/actions/user/Payments'
import LoadingModal from '@/components/common/LoadingModal'

function Page() {
  const router = useRouter()
  const [payStatus, setPayStatus] = useState<number | null>(null)
  const searchParams = useSearchParams()
  const paymentId = searchParams.get('paymentId')
  const value = searchParams.get('value')

  // 주문 데이터의 가격과 실제 지불된 금액을 비교합니다.
  useEffect(() => {
    const authPayment = async () => {
      const result = await checkPayment(Number(value), paymentId || '')
      setPayStatus(result)
    }

    authPayment()
  }, [value, paymentId])

  useEffect(() => {
    if (payStatus === null) return
    router.replace(`/payment/result?status=${payStatus}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payStatus])

  return <LoadingModal message={`결제 진행중 입니다\n 잠시만 기다려주세요`} />
}

export default Page
