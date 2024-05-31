'use server'

import { revalidateTag } from 'next/cache'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { PartnerSnsType } from '@/types/partnerProfileTypes'

const partnerCode = '4667920240531032544835'

export async function getPartnerProfileImage() {
  const session = await getServerSession(options)

  if (!session) return

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/members`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${session.user.accessToken}`,
        UUID: `${session.user.uuid}`,
        Role: 'PARTNER',
      },
      next: { tags: ['profile-image'] },
    },
  )

  const data = await response.json()
  if (response.status === 200) {
    return data.result.profileImage
  }

  console.log('error:', data)
  return null
}

export async function updatePartnerProfileImage(image: string) {
  const session = await getServerSession(options)
  if (!session) return

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/profileimage`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${session.user.accessToken}`,
        UUID: `${session.user.uuid}`,
        Role: 'PARTNER',
      },
      body: JSON.stringify({ profileImage: image }),
    },
  )

  const data = await response.json()

  if (response.status === 200) {
    console.log(data)
  } else console.log('error:', data)
}

export async function getSnsData() {
  const session = await getServerSession(options)
  if (!session) return

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/sns/${partnerCode}`,
    {
      headers: { 'Content-Type': 'application/json' },
      next: { tags: ['sns'] },
    },
  )

  if (response.status === 200) {
    const data = await response.json()
    return data.result.sns
  }

  console.log('error:', response)
  return null
}

export async function updateSnsData(snsList: PartnerSnsType[]) {
  const session = await getServerSession(options)
  if (!session) return

  const requestData = snsList.map(({ id, ...rest }) => rest)

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/sns`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${session.user.accessToken}`,
        UUID: `${session.user.uuid}`,
        Role: 'PARTNER',
      },
      body: JSON.stringify({ sns: requestData }),
    },
  )

  const data = await response.json()
  if (response.ok) {
    revalidateTag('sns')
    console.log(data)
  } else {
    console.log(data.message)
  }
}

export async function getPartnerProfile() {
  const session = await getServerSession(options)
  if (!session) return

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/${partnerCode}`,
    {
      headers: {
        Authorization: `${session?.user.accessToken}`,
        UUID: `${session?.user.uuid}`,
        Role: 'PARTNER',
        'Content-Type': 'application/json',
      },
      next: { tags: ['profile'] },
    },
  )

  if (!response.ok) return null

  const data = await response.json()

  return data.result
}

export async function updateIntroduction(description: string) {
  const session = await getServerSession(options)
  if (!session) return

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/description`,
    {
      method: 'PUT',
      headers: {
        Authorization: `${session?.user.accessToken}`,
        UUID: `${session?.user.uuid}`,
        Role: 'PARTNER',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    },
  )

  const data = await response.json()
  if (data.code === 200) {
    revalidateTag('profile')
  } else {
    console.log('description update error', data)
  }
}

export async function updateChatTime(startTime: number, endTime: number) {
  const session = await getServerSession(options)
  if (!session) return

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/chattime`,
    {
      method: 'PUT',
      headers: {
        Authorization: `${session?.user.accessToken}`,
        UUID: `${session?.user.uuid}`,
        Role: 'PARTNER',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ startTime, endTime }),
    },
  )

  const data = await response.json()
  if (data.code === 200) {
    revalidateTag('profile')
  } else {
    console.log('chat update error', data)
  }
}

export async function updateLeadTime(averageDate: number) {
  const session = await getServerSession(options)
  if (!session) return

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/averageDate`,
    {
      method: 'PUT',
      headers: {
        Authorization: `${session?.user.accessToken}`,
        UUID: `${session?.user.uuid}`,
        Role: 'PARTNER',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ averageDate }),
    },
  )

  const data = await response.json()
  if (data.code === 200) {
    revalidateTag('profile')
  } else {
    console.log('leadTime update error', data)
  }
}

export async function getCareer() {
  const session = await getServerSession(options)
  if (!session) return

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/sns/${session?.user.uuid}`,
    {
      headers: { 'Content-Type': 'application/json' },
      next: { tags: ['career'] },
    },
  )

  if (response.status === 200) {
    const data = await response.json()
    return data.result.careers
  }
  return null
}
