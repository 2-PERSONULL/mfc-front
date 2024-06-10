import React from 'react'
import ChatForm from '@/components/pages/chats/ChatForm'
import Message from '@/components/pages/chats/Message'
import ChatRoomHeader from '@/components/pages/chats/ChatRoomHeader'

export default function PartnerChatRoom() {
  return (
    <div className="flex flex-col h-[100dvh]">
      <ChatRoomHeader />
      <Message />
      <ChatForm />
    </div>
  )
}
