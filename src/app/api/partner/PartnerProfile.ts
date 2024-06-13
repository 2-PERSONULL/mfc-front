'use server'

import { getFetchHeader, getPartnerIdHeader } from '@/utils/getFetchHeader'

// 파트너 프로필 기본 정보(nickname, email, profileImage)
export async function getPartnerProfileBasic() {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/members`,
    {
      headers: header,
      next: { tags: ['profile-image'] },
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    return data.result
  }

  console.log('get partner basic error:', data)
  return null
}

// 파트너 sns 정보
export async function getSnsData(partnerCode?: string) {
  const header = await getPartnerIdHeader(partnerCode)
  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/sns`,
      {
        headers: header,
        next: { tags: ['sns'] },
      },
    )

    const data = await response.json()
    if (data.isSuccess) {
      return data.result.sns
    }
    console.log('error:', response)
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}

// 파트너 프로필 정보(description, startTime, endTime, averageDate, averagePrice)
export async function getPartnerProfile(partnerCode?: string) {
  const header = await getPartnerIdHeader(partnerCode)

  if (!header) {
    console.log('session not found')
    return null
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners`,
    {
      headers: header,
      next: { tags: ['profile'] },
    },
  )

  const data = await response.json()

  if (data.isSuccess) {
    return data.result
  }
  console.log('get partner profile error:', data)
  return null
}

// 파트너 경력 정보
export async function getCareer(partnerCode?: string) {
  const header = await getPartnerIdHeader(partnerCode)
  if (!header) {
    console.log('session not found')
    return null
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/career`,
    {
      headers: header,
      next: { tags: ['career'] },
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    return data.result.careers
  }
  console.log('get career error', data)
  return null
}
