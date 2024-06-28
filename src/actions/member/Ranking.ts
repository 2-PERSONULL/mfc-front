'use server'

// 파트너 랭킹 조회
export default async function getPartnerRanking() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/ranking`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-cache',
      },
    )

    const data = await response.json()
    if (!data.isSuccess) {
      console.log('err', data)
      return []
    }
    return data.result.partners
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getPartnerPostRanking() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts/ranking`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-cache',
      },
    )

    const data = await response.json()
    if (!data.isSuccess) {
      console.log('err', data)
      return []
    }
    return data.result.posts
  } catch (error) {
    console.log(error)
    return null
  }
}
