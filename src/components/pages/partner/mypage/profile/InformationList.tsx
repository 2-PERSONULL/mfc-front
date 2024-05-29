import React from 'react'
import { revalidateTag } from 'next/cache'
import PartnerSns from '@/components/pages/partner/mypage/profile/PartnerSns'
import PartnerCareer from '@/components/pages/partner/mypage/profile/career/PartnerCareer'
import PartnerMainStyle from '@/components/pages/partner/mypage/profile/PartnerMainStyle'
import PartnerPrice from './PartnerPrice'
import { auth } from '@/auth'
import { PartnerSnsType } from '@/types/partnerProfileTypes'
import PartnerProfileInformation from './common/PartnerProfileInformation'

export default async function InformationList() {
  const session = await auth()
  const snsList = await getSnsData(session?.user.uuid)

  return (
    <div className="px-6 mb-[50px]">
      <PartnerProfileInformation />
      <PartnerSns snsList={snsList} updateSnsData={updateSnsData} />
      <PartnerCareer />
      <PartnerMainStyle />
      <PartnerPrice />
    </div>
  )
}

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
