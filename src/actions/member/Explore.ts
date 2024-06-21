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
    const data: BaseResponseType = await response.json()
    return data.result
  } catch (error) {
    console.log(error)
    return null
  }
}

export default getStyleList
