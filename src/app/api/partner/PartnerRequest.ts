'use server'

import getFetchHeader from '@/utils/getFetchHeader'

export default async function ActionCoordinate(
  historyId: number,
  status: string,
) {
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
