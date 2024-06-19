import React from 'react'
import PartnerChatroomHeader from '@/components/pages/chats/header/PartnerChatroomHeader'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PartnerChatroomHeader />
      {children}
    </>
  )
}
