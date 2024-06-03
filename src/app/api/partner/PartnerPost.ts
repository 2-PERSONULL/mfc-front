'use server'

import getFetchHeader from '@/utils/getFetchHeader'

export async function addPartnerPost(imageUrl: string | null, tags: string[]) {
  try {
    const header = await getFetchHeader()

    if (!header) {
      console.log('session not found')
      return null
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts`,
      {
        method: 'POST',
        headers: header,
        body: JSON.stringify({ imageUrl, tags }),
      },
    )

    const data = await response.json()
    if (!data.isSuccess) console.log('add post error:', data)
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getPartnerPost(partnerCode: string) {
  try {
    const header = await getFetchHeader()

    if (!header) {
      console.log('session not found')
      return null
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts/list/${partnerCode}`,
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )

    const data = await response.json()
    if (!data.isSuccess) console.log('get post list error:', data)
    return data.result
  } catch (error) {
    console.log(error)
    return null
  }
}
