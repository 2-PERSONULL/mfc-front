'use client'

import React, { useState } from 'react'
import partnerProfileTabs from '@/libs/partnerProfileData'
import PartnerLookbookTab from '@/components/pages/partner/profile/PartnerLookbookTab'
import PartnerInformationTab from '@/components/pages/partner/profile/PartnerInformationTab'
import PartnerReviewTab from '@/components/pages/partner/profile/PartnerReviewTab'

export default function PartnerProfileTabs() {
  const [activeTab, setActiveTab] = useState('information')
  const tabs = partnerProfileTabs

  const activeTabContent = () => {
    switch (activeTab) {
      case 'lookbook':
        return <PartnerLookbookTab />
      case 'information':
        return <PartnerInformationTab />
      case 'review':
        return <PartnerReviewTab />
      default:
        return <div>Not Found</div>
    }
  }

  return (
    <div>
      <div className="flex w-full justify-around text-[16px] font-semibold">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`${activeTab === tab.id ? 'border-b-2 border-b-black' : 'text-[#A2A5B1]'} pb-1`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {activeTabContent()}
    </div>
  )
}
