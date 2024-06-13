'use server'

import { getFetchHeader } from '@/utils/getFetchHeader'

export default async function getMemberName() {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth-service/members/name`,
      {
        headers: header,
      },
    )

    const result = await response.json()

    return result.result.name
  } catch (error) {
    console.log(error)
    return null
  }
}
