import React from 'react'
import { revalidateTag } from 'next/cache'
import PartnerIntroduction from '@/components/pages/partner/mypage/profile/PartnerIntroduction'
import PartnerChatTime from '@/components/pages/partner/mypage/profile/PartnerChatTime'
import PartnerLeadTime from '@/components/pages/partner/mypage/profile/PartnerLeadTime'
import PartnerSns from '@/components/pages/partner/mypage/profile/PartnerSns'
import PartnerCareer from '@/components/pages/partner/mypage/profile/PartnerCareer'
import PartnerMainStyle from '@/components/pages/partner/mypage/profile/PartnerMainStyle'
import PartnerPrice from './PartnerPrice'
import { auth } from '@/auth'
import { PartnerSnsType } from '@/types/partnerProfileTypes'

async function getSnsData(uuid: string | unknown) {
  if (!uuid) return

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/sns/${uuid}`,
    {
      headers: { 'Content-Type': 'application/json' },
      next: { tags: ['sns'] },
    },
  )

  if (!response.ok) return null
  const data = await response.json()

  return data.result.sns
}

async function updateSnsData(snsList: PartnerSnsType[]) {
  'use server'

  const session = await auth()
  if (!session) return
  // snsList에서 id는 빼줘
  const requestData = snsList.map(({ id, ...rest }) => rest)

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/partners/sns`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.user.accessToken}`,
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

export default async function InformationList() {
  const session = await auth()
  const snsList = await getSnsData(session?.user.uuid)

  // 프로필 정보 fetch
  const profile = {
    introduction: '빈티지 코디에 자신있습니다!',
    chatTime: '',
    leadTime: 1,
  }

  return (
    <div className="px-6 mb-[50px]">
      <PartnerIntroduction data={profile.introduction} />
      <PartnerChatTime chatTime={profile.chatTime} />
      <PartnerLeadTime leadTime={profile.leadTime} />
      <PartnerSns snsList={snsList} updateSnsData={updateSnsData} />
      <PartnerCareer />
      <PartnerMainStyle />
      <PartnerPrice />
    </div>
  )
}
