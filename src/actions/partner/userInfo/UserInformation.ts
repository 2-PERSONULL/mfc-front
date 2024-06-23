'use server'

import { getFetchHeader } from '@/utils/getFetchHeader'

const getClothesSize = async (userId: string) => {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/users/size`,
      {
        method: 'GET',
        headers: {
          userId,
          Authorization: `${header.Authorization}`,
        },
        cache: 'no-cache',
      },
    )
    const data = await response.json()
    if (data.isSuccess) {
      return data.result
    }
    return null
  } catch (error) {
    console.error('Failed to get clothes size', error)
  }
}

const getBodyInfo = async (userId: string) => {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/users/bodyType`,
      {
        method: 'GET',
        headers: {
          userId,
          Authorization: `${header.Authorization}`,
        },
        cache: 'no-cache',
      },
    )
    const data = await response.json()
    if (data.isSuccess) {
      return data.result
    }
  } catch (error) {
    console.error('Failed to get body info', error)
  }
}

export { getClothesSize, getBodyInfo }
