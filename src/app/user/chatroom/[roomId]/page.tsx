import React from 'react'
import ChatForm from '@/components/pages/chats/ChatForm'
import Message from '@/components/pages/chats/Message'
import UserChatroomHeader from '@/components/pages/chats/header/UserChatroomHeader'

export default function PartnerChatRoom() {
  return (
    <div className="flex flex-col h-[100dvh]">
      <UserChatroomHeader />
      <Message />
      <ChatForm />
    </div>
  )
}
