'use server'

import { BaseResponseType } from '@/types/baseResponseType'

const getStyleList = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/styles`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await response.json()
    return data.result
  } catch (error) {
    console.log(error)
    return null
  }
}

const getPartnerPostsByCategory = async (
  page: number,
  size: number,
  sort: string,
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts/explore?page=${page}&size=${size}&sort=${sort}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-cache',
      },
    )
    const data = await response.json()
    return data.result
  } catch (error) {
    console.log(error)
  }
}

const getPartnerPostsDetail = async (postId: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts/${postId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data: BaseResponseType = await response.json()
    return data.result
  } catch (error) {
    console.log(error)
  }
}

export { getStyleList, getPartnerPostsByCategory, getPartnerPostsDetail }
