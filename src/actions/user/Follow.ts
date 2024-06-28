'use server'

import { revalidateTag } from 'next/cache'
import { getFetchHeader } from '@/utils/getFetchHeader'

export async function getFollowStatus(partnerId?: string) {
  if (!partnerId) return null

  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/follow`,
      {
        headers: {
          UUID: header.UUID,
          partnerId,
          'Content-Type': 'application/json',
        },
        next: { tags: ['follow'] },
      },
    )

    const res = await response.json()
    if (!res.isSuccess) console.log('get follow status error:', res)
    return res.result
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function updateFollow(partnerId: string, method: string) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/follow`,
      {
        method,
        headers: header,
        body: JSON.stringify({ partnerId }),
      },
    )

    const data = await response.json()

    if (data.isSuccess) {
      revalidateTag('follow')
    } else console.log('Failed to update follow', data)
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}
