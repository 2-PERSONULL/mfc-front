'use server'

import { revalidateTag } from 'next/cache'
import { getPartnerIdHeader, getFetchHeader } from '@/utils/getFetchHeader'

export async function getPartnerPost(partnerId?: string) {
  try {
    const header = await getPartnerIdHeader(partnerId)

    if (!header) {
      console.log('session not found')
      return null
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts/list`,
      {
        headers: header,
        next: { tags: ['post'] },
      },
    )

    const data = await response.json()
    console.log(data)
    if (!data.isSuccess) console.log('get post list error:', data)
    return data.result
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function addPartnerPost(imageUrl: string | null, tags: string[]) {
  try {
    const header = await getFetchHeader()

    if (!header) {
      console.log('session not found')
      return null
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts`,
      {
        method: 'POST',
        headers: header,
        body: JSON.stringify({ imageUrl, tags }),
      },
    )

    const data = await response.json()
    if (!data.isSuccess) console.log('add post error:', data)
    revalidateTag('post')
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getPartnerPostDetail(postId: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts/${postId}`,
      {
        headers: { 'Content-Type': 'application/json' },
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
  try {
    const header = await getFetchHeader()

    if (!header) {
      console.log('session not found')
      return null
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts`,
      {
        method: 'DELETE',
        headers: header,
        body: JSON.stringify({ posts: [postId] }),
      },
    )

    const data = await response.json()
    if (!data.isSuccess) console.log('delete post error:', data)
    revalidateTag('post')
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
  try {
    const header = await getFetchHeader()

    if (!header) {
      console.log('session not found')
      return null
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts/${postId}`,
      {
        method: 'PUT',
        headers: header,
        body: JSON.stringify({ imageUrl, tags }),
      },
    )

    const data = await response.json()
    if (!data.isSuccess) console.log('update post error:', data)
    revalidateTag('post')
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}
