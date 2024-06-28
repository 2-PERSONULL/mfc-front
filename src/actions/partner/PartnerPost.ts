'use server'

import { revalidateTag } from 'next/cache'
import { getPartnerIdHeader, getFetchHeader } from '@/utils/getFetchHeader'

export async function getPartnerPost(
  partnerId?: string,
  page?: number,
  size?: number,
) {
  const header = await getPartnerIdHeader(partnerId)

  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts/list?page=${page}&size=${size}`,
      {
        headers: {
          UUID: header.partnerId,
          'Content-Type': 'application/json',
        },
        next: { tags: ['postList'] },
      },
    )

    const data = await response.json()

    if (!data.isSuccess) console.log('get post list error:', data)
    return data.result
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function addPartnerPost(imageUrl: string | null, tags: string[]) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts`,
      {
        method: 'POST',
        headers: header,
        body: JSON.stringify({ imageUrl, tags }),
      },
    )

    const data = await response.json()
    revalidateTag('postList')
    if (!data.isSuccess) console.log('add post error:', data)

    return data
  } catch (error) {
    console.log(error)
  }
}

export async function getPartnerPostDetail(postId: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts/${postId}`,
      {
        headers: { 'Content-Type': 'application/json' },
        next: { tags: ['postDetail'] },
      },
    )

    const data = await response.json()

    if (!data.isSuccess) console.log('get post detail error:', data)
    return data.result
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function deletePartnerPost(postId: number) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts`,
      {
        method: 'DELETE',
        headers: header,
        body: JSON.stringify({ posts: [postId] }),
      },
    )

    const data = await response.json()
    if (data.isSuccess) {
      revalidateTag('postList')
    }

    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function updatePartnerPost(
  postId: number,
  imageUrl: string | null,
  tags: string[],
) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts/${postId}`,
      {
        method: 'PUT',
        headers: header,
        body: JSON.stringify({ imageUrl, tags }),
      },
    )

    const data = await response.json()
    revalidateTag('postList')
    revalidateTag('postDetail')
    if (!data.isSuccess) console.log('update post error:', data)

    return null
  } catch (error) {
    console.log(error)
    return null
  }
}
