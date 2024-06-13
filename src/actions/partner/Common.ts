'use server'

// 파트너 프로필 기본 정보(nickname, email, profileImage)
export default async function getStyleCategory() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/styles`,
    {
      headers: { 'Content-Type': 'application/json' },
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    return data.result.styles
  }

  console.log('get style category error:', data)
  return null
}
