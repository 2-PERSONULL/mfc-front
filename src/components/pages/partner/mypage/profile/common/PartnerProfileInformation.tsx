import React from 'react'
import { revalidateTag } from 'next/cache'
import PartnerIntroduction from '@/components/pages/partner/mypage/profile/PartnerIntroduction'
import PartnerChatTime from '@/components/pages/partner/mypage/profile/PartnerChatTime'
import PartnerLeadTime from '@/components/pages/partner/mypage/profile/PartnerLeadTime'
import { auth } from '@/auth'
import getFetchHeader from '@/utils/getFetchHeader'

export default async function PartnerProfileInformation() {
  const { description, startTime, endTime, averageDate } =
    await getPartnerProfile()

  return (
    <div>
      <PartnerIntroduction
        data={description}
        updateIntroduction={updateIntroduction}
      />
      <PartnerChatTime
        startChatTime={startTime}
        endChatTime={endTime}
        updateChatTime={updateChatTime}
      />
      <PartnerLeadTime leadTime={averageDate} updateLeadTime={updateLeadTime} />
    </div>
  )
}

async function getPartnerProfile() {
  const session = await auth()
  if (!session) return

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/${session.user.uuid}`,
    {
      headers: await getFetchHeader(),
      next: { tags: ['profile'] },
    },
  )

  if (!response.ok) return null

  const data = await response.json()

  return data.result
}

async function updateIntroduction(description: string) {
  'use server'

  const session = await auth()
  if (!session) return

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/description`,
    {
      method: 'PUT',
      headers: await getFetchHeader(),
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

async function updateChatTime(startTime: number, endTime: number) {
  'use server'

  const session = await auth()
  if (!session) return

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/chattime`,
    {
      method: 'PUT',
      headers: await getFetchHeader(),
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

async function updateLeadTime(averageDate: number) {
  'use server'

  const session = await auth()
  if (!session) return

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/averageDate`,
    {
      method: 'PUT',
      headers: await getFetchHeader(),
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
