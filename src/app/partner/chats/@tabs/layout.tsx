import React from 'react'
import BottomNav from '@/components/layouts/BottomNav'
import TitleHeader from '@/components/layouts/TitleHeader'
import ChatListTabs from '@/components/pages/chats/list/ChatListTabs'

export default function PartnerChatListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <TitleHeader title="채팅" menu="/partner/mypage/menu" />
      <ChatListTabs userRole="partner" />
      {children}
      <BottomNav />
    </>
  )
}
