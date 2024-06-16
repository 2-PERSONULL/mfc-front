'use server'

import { revalidateTag } from 'next/cache'
import { getFetchHeader } from '@/utils/getFetchHeader'

export async function getCashBalance() {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment-service/cash/balance`,
    {
      headers: {
        uuid: header.UUID,
        Authorization: `${header.Authorization}`,
        'Content-Type': 'application/json',
      },
      next: { tags: ['cash-balance'] },
    },
  )
  const data = await response.json()

  if (data.isSuccess) {
    return data.result
  }
  console.log('Failed to get cash balance', data)
}

// 캐시 충전 api
export async function chargeCash(
  amount: number,
  paymentId: string,
  paymentDate: string,
  paymentStatus: string,
) {
  console.log(amount, paymentId, paymentDate, paymentStatus)
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment-service/cash/charge`,
    {
      method: 'PUT',
      headers: {
        uuid: header.UUID,
        Authorization: `${header.Authorization}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        paymentId,
        paymentDate,
        paymentStatus,
      }),
    },
  )
  const data = await response.json()
  if (data.isSuccess) {
    revalidateTag('cash-balance')
    console.log(data)
  } else {
    console.log('Failed to charge cash', data)
  }
}

export async function checkPayment(value: number, paymentId: string) {
  // 1. 포트원 결제내역 단건 조회 api 호출
  const paymentResponse = await fetch(
    `https://api.portone.io/payments/${paymentId}`,
    {
      headers: {
        Authorization: `PortOne ${process.env.PORTONE_API_SECRET}`,
      },
    },
  )

  console.log(paymentId)
  if (!paymentResponse.ok)
    throw new Error(`signinResponse: ${paymentResponse.statusText}`)

  const { amount, status, paidAt } = await paymentResponse.json()

  // 2. 고객사 내부 주문 데이터의 가격과 실제 지불된 금액을 비교합니다.
  if (value === amount.total) {
    // 충전 내역 전송 api 호출
    chargeCash(amount.total, paymentId, paidAt, status)
    return 200
    // switch (status) {
    //   case 'VIRTUAL_ACCOUNT_ISSUED': {
    //     // 가상 계좌가 발급된 상태입니다.
    //     console.log('가상 계좌가 발급된 상태입니다.')
    //     // method에 들어 있는 계좌 정보를 이용해 원하는 로직을 구성하세요.
    //     return('VIRTUAL_ACCOUNT_ISSUED');
    //   }
    //   case 'PAID': {
    //     // 모든 금액을 지불했습니다! 완료 시 원하는 로직을 구성하세요.
    //     console.log(
    //       '모든 금액을 지불했습니다! 완료 시 원하는 로직을 구성하세요.',
    //     )
    //     break
    //   }

    //   default:
    //   // do nothing
    // }
  }
  // 결제 금액이 불일치하여 위/변조 시도가 의심됩니다.
  console.log('결제 금액이 불일치하여 위/변조 시도가 의심됩니다.')
  return 400
}
