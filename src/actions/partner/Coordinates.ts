'use server'

import { revalidateTag } from 'next/cache'
import { getFetchHeader } from '@/utils/getFetchHeader'
import StyleGuideInfo from '@/types/styleGuideTypes'

export default async function submitStyleGuide(
  guideList: StyleGuideInfo[],
  requestId: string,
  method: string,
) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  // guideList에 모두 requestID를 추가
  const updatedGuideList = guideList.map((guide) => ({
    ...guide,
    requestId,
  }))

  console.log(updatedGuideList)

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/coordinates`,
      {
        method,
        headers: {
          'Partner-UUID': header.UUID,
          Authorization: header.Authorization,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedGuideList),
      },
    )

    const data = await response.json()
    if (!data.isSuccess) console.log('submit style error:', data)
    revalidateTag('user-chatList')
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getStyleGuide(requestId: string) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/coordinates/request/${requestId}`,
      {
        next: { tags: ['style-guide'] },
      },
    )

    const data = await response.json()

    if (!data.isSuccess) console.log('get style error:', data)
    return data.result
  } catch (error) {
    console.log(error)
    return null
  }
}
