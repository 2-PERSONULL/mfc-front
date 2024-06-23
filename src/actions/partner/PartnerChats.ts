'use server'

const basicImage =
  'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/profile/default-profile.svg'

export default async function getUserProfile(userId: string) {
  if (!userId) return null

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/users/profile`,
    {
      headers: {
        userId,
        'Content-Type': 'application/json',
      },
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    if (!data.result.profileImage) {
      data.result.profileImage = basicImage
    }
    return data.result
  }
  console.log('get user profile error:', data)
  return null
}
