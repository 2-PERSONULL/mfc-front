'use server'

import { getPartnerIdHeader } from '@/utils/getFetchHeader'

export default async function getPartnerSummary(partnerId?: string) {
  const header = await getPartnerIdHeader(partnerId)

  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/batch-service/batch/partners/summary`,
      {
        headers: header,
        cache: 'no-cache',
      },
    )

    const data = await response.json()
    if (!data.isSuccess) {
      console.log('getPartnerSummary failed')
      console.log(data)
      return {
        followerCnt: 0,
        coordinateCnt: 0,
        averageStar: 0,
      }
    }
    return data.result
  } catch (error) {
    console.log(error)
    return null
  }
}
