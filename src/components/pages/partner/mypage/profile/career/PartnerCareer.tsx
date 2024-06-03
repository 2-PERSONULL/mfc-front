import React from 'react'

import PartnerCareerDashboard from '@/components/pages/partner/mypage/profile/career/PartnerCareerDashboard'
import PartnerCareerEditor from '@/components/pages/partner/mypage/profile/career/PartnerCareerEditor'
import PartnerProfileEditButton from '@/components/ui/button/PartnerProfileEditButton'
import { getCareer } from '@/app/api/partner/PartnerProfile'

export default async function PartnerCareer() {
  const careers = await getCareer()

  return (
    <div className="border-b border-b-gray-200 pt-8">
      <div className="flex justify-between mb-2">
        <h1 className="text-[18px] font-bold mr-2">경력</h1>
        <PartnerProfileEditButton content={<PartnerCareerEditor />} />
      </div>
      <PartnerCareerDashboard careers={careers} />
    </div>
  )
}
