import { getFetchHeader } from '@/utils/getFetchHeader'

const getPostsFollwedPartners = async () => {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts/followed`,
      {
        method: 'GET',
        headers: {
          UUID: header.UUID,
          Authorization: `${header.Authorization}`,
        },
        cache: 'no-cache',
      },
    )
    const data = await response.json()
    return data.result
  } catch (error) {
    return error
  }
}

const getPartnerPostBasedOnStyle = async () => {
  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts/styles`,
      {
        method: 'GET',
        headers: {
          UUID: header.UUID,
          Authorization: `${header.Authorization}`,
        },
        cache: 'no-cache',
      },
    )
    const data = await response.json()
    return data.result
  } catch (error) {
    return error
  }
}

export { getPostsFollwedPartners, getPartnerPostBasedOnStyle }
