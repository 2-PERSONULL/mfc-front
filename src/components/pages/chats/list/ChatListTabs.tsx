'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import chatTabs from '@/libs/chatData'

export default function ChatListTabs({ userRole }: { userRole: string }) {
  const pathName = usePathname()
  const tabs = chatTabs

  const isCurrentTab = (tab: string) => {
    if (tab === '') return pathName === `/${userRole}/chats`
    return pathName === `/${userRole}/chats/${tab}`
  }

  return (
    <nav className="w-full sticky top-[50px] z-[100] bg-white mb-2">
      <ul className="flex w-full text-[16px] py-[1.5rem] justify-evenly bg-white">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`w-full text-center border-b-[3px] py-[1rem] ${isCurrentTab(tab.value) ? 'border-b-black font-semibold' : 'border-b-gray-200 text-[#A2A5B1]'} `}
          >
            <Link replace href={`/${userRole}${tab.url}`}>
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
