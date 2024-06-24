import React from 'react'
import TitleHeader from '@/components/layouts/TitleHeader'
import ChatListTabs from '@/components/pages/chats/list/ChatListTabs'
import BottomNav from '@/components/layouts/BottomNav'

export default function layout({ tabs }: { tabs: React.ReactNode }) {
  return (
    <>
      <TitleHeader title="채팅" />
      <ChatListTabs userRole="partner" />
      {tabs}
      <BottomNav />
    </>
  )
}
