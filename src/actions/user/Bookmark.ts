'use server'

import { revalidateTag } from 'next/cache'
import { getFetchHeader } from '@/utils/getFetchHeader'

// 포스팅 좋아요 여부 조회
export async function getLikeStatus(postId: number) {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/bookmark/${postId}`,
      {
        headers: {
          UUID: header.UUID,
          'Content-Type': 'application/json',
        },
        next: { tags: ['like'] },
      },
    )

    const res = await response.json()

    if (res.isSuccess) {
      return res.result
    }
    console.log('get like status error:', res)
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function updateLikeStatus(postId: number, method: string) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/bookmark/${postId}`,
      {
        method,
        headers: header,
      },
    )

    const data = await response.json()
    if (data.isSuccess) {
      revalidateTag('like')
    }
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}
