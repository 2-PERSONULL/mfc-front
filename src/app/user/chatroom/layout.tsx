import React from 'react'
import UserChatroomHeader from '@/components/pages/chats/header/UserChatroomHeader'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UserChatroomHeader />
      {children}
    </>
  )
}
