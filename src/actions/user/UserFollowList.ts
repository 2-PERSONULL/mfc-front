'use server'

import { getFetchHeader } from '@/utils/getFetchHeader'

const getFollowList = async (page: number, size: number, sort: string) => {
  const header = await getFetchHeader()
  if (!header) {
    return null
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/follow/list?page=${page}&size=${size}&sort=${sort}`,
      {
        method: 'GET',
        headers: {
          UUID: header?.UUID,
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await response.json()
    return data.result
  } catch (error) {
    return null
  }
}

export default getFollowList
