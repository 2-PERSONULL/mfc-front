'use server'

import { getFetchHeader } from '@/utils/getFetchHeader'
import StyleGuideInfo from '@/types/styleGuideTypes'

export default async function submitStyleGuide(
  guideList: StyleGuideInfo[],
  requestId: string,
) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  // guideList에 모두 requestID를 추가
  const updatedGuideList = guideList.map((guide) => ({
    ...guide,
    requestHistoryId: requestId,
  }))

  console.log(guideList)

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/coordinates`,
      {
        method: 'POST',
        headers: header,
        body: JSON.stringify(updatedGuideList),
      },
    )

    const data = await response.json()
    if (!data.isSuccess) console.log('submit style error:', data)
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
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/coordinates/${requestId}`,
      {
        cache: 'no-cache',
      },
    )

    const data = await response.json()
    console.log(data)
    if (!data.isSuccess) console.log('submit style error:', data)
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}
