'use server'

import { revalidateTag } from 'next/cache'
import { getFetchHeader } from '@/utils/getFetchHeader'

interface ConfirmProps {
  userId: string
  options: 0
  totalPrice: number
  dueDate: string
  requestId: string
}

// 확정 제안서 작성
export default async function addConfirm(confirmProps: ConfirmProps) {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return null
  }
  const requestBody = { ...confirmProps, partnerId: header.UUID }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/trade`,
    {
      method: 'POST',
      headers: {
        'Partner-UUID': header.UUID,
        Authorization: header.Authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    },
  )
  const data = await response.json()

  if (data.isSuccess) {
    revalidateTag('request-status')

    return data
  }

  console.log('add confirm error', data)
  return data
}

// 요청서 상태 가져오기
export async function getRequestStatus(requestId: string, partnerId?: string) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/requests/${requestId}/status/${partnerId || header.UUID}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        next: { tags: ['request-status'] },
      },
    )

    const data = await response.json()
    if (data.isSuccess) {
      return data.result
    }
    console.log('get request status error', data)
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}
