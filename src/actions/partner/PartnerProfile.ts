'use server'

import { getServerSession } from 'next-auth'
import { getPartnerIdHeader } from '@/utils/getFetchHeader'
import { options } from '@/app/api/auth/[...nextauth]/options'

const basicImage =
  'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/profile/default-profile.svg'

// 파트너 프로필 기본 정보(nickname, email, profileImage)
export async function getPartnerProfileBasic(partnerCode?: string) {
  const header = await getPartnerIdHeader(partnerCode)

  if (!header) {
    console.log('session not found')
    return null
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/profile`,
    {
      headers: header,
      next: { tags: ['profile-image'] },
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    if (!data.result.profileImage) {
      data.result.profileImage = basicImage
    }
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

// 파트너 주요 스타일
export async function getFavoriteStyle(partnerCode?: string) {
  const session = await getServerSession(options)
  if (partnerCode && !session) return null

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/members/favoritstyle`,
    {
      headers: {
        'Content-Type': 'application/json',
        getUUID: `${partnerCode || session?.user.uuid}`,
      },
      next: { tags: ['favorite-style'] },
    },
  )

  const data = await response.json()

  if (data.isSuccess) {
    return data.result.favoriteStyles
  }
  console.log('get favorite-style error', data)
  return null
}
