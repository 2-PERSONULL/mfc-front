'use server'

import { getFetchHeader } from '@/utils/getFetchHeader'

// 요청서 목록 조회
export async function getChatList(page?: number, pageSize?: number) {
  console.log(page, pageSize)
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/requests/partner-requests`,
      {
        headers: {
          uuid: header.UUID,
          'Content-Type': 'application/json',
        },
      },
    )

    const data = await response.json()
    if (data.isSuccess) {
      return data.result
    }
    console.log(data)
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}

// 요청서 상세 조회
export async function getRequestDetail(historyId: string) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/requests/${historyId}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    const data = await response.json()
    if (data.isSuccess) {
      return data.result
    }
    console.log(data)
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}

// 요청서에 대한 수락, 거절 처리
export async function actionCoordinate(historyId: string, status: string) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/requests/${status}/${historyId}`,
    {
      headers: header,
    },
  )

  const data = await response.json()
  return data
}
