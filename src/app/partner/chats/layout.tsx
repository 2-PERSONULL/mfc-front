import React from 'react'
import BottomNav from '@/components/layouts/BottomNav'
import TitleHeader from '@/components/layouts/TitleHeader'
import ChatListTabs from '@/components/pages/chats/list/ChatListTabs'

export default function layout({ tabs }: { tabs: React.ReactNode }) {
  return (
    <>
      <TitleHeader title="채팅" />
      <main>
        <ChatListTabs userRole="partner" />
        {tabs}
      </main>
      <BottomNav />
    </>
  )
}
