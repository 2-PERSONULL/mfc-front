import React from 'react'
import { auth } from '@/auth'

import PartnerCareerDashboard from '@/components/pages/partner/mypage/profile/career/PartnerCareerDashboard'
import PartnerCareerEditor from '@/components/pages/partner/mypage/profile/career/PartnerCareerEditor'
import PartnerProfileEditButton from '@/components/ui/button/PartnerProfileEditButton'

async function getCareer() {
  const session = await auth()
  if (!session) {
    console.log("session doesn't exist")
    return
  }
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

export default async function PartnerCareer() {
  const careers = await getCareer()
  console.log(careers)

  return (
    <div className="border-b border-b-gray-200 py-8">
      <div className="flex justify-between mb-2">
        <h1 className="text-[18px] font-bold mr-2">경력</h1>
        <PartnerProfileEditButton content={<PartnerCareerEditor />} />
      </div>
      <PartnerCareerDashboard />
    </div>
  )
}
