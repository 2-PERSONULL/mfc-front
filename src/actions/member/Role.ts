'use server'

import { getFetchHeader } from '@/utils/getFetchHeader'

// 회원 전환
export default async function changeMemberRole(role: string) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/members/change`,
      {
        method: 'PUT',
        headers: {
          Authorization: header.Authorization,
          UUID: header.UUID,
          'Content-Type': 'application/json',
          Role: role,
        },
      },
    )

    const data = await response.json()
    if (data.isSuccess) return data.result
    console.log('change role error:', data)
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}
