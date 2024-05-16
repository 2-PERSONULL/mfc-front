import React from 'react'
import ChatForm from '@/components/pages/chats/ChatForm'
import Message from '@/components/pages/chats/Message'

export default function PartnerChatRoom() {
  return (
    <div className="flex flex-col h-screen">
      <Message />
      <ChatForm />
    </div>
  )
}
