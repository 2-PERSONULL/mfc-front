'use server'

import { getFetchHeader } from '@/utils/getFetchHeader'

const getLikeList = async (page: number, size: number, sort: string) => {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return null
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/bookmark/list?page=${page}&size=${size}&sort=${sort}'`,
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
    console.log(error)
  }
}

export default getLikeList
