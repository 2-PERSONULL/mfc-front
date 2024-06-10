'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import chatTabs from '@/libs/chatData'

export default function ChatListTabs() {
  const pathName = usePathname()
  const tabs = chatTabs

  const isCurrentTab = (tab: string) => {
    if (tab === '') return pathName === `/partner/chats`
    return pathName === `/partner/chats/${tab}`
  }

  return (
    <div className="w-full sticky top-[60px] z-[200] bg-white px-3">
      <div className="flex w-full text-[16px] py-6 justify-evenly bg-white">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            replace
            href={tab.url}
            className={`w-full text-center border-b-[3px] ${isCurrentTab(tab.value) ? 'border-b-black font-semibold' : 'border-b-gray-200 text-[#A2A5B1]'} `}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
