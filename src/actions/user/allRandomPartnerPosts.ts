export default async function getRandomPartnersPosts() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sns-service/posts/random`,
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
