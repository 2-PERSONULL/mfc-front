'use server'

import { revalidateTag } from 'next/cache'
import { getFetchHeader } from '@/utils/getFetchHeader'

// 파트너가 제출한 코디네이팅을 확정
export default async function confirmTrade(requestId: string) {
  console.log(requestId)
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/trade/user/${requestId}`,
      {
        method: 'PUT',
        headers: {
          'User-UUID': header.UUID,
          Authorization: header.Authorization,
          'Content-Type': 'application/json',
        },
      },
    )

    const data = await response.json()
    if (!data.isSuccess) console.log('confirm trade error:', data)
    revalidateTag('request-status')
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}
