import React from 'react'
import ChatForm from '@/components/pages/chats/ChatForm'
import Message from '@/components/pages/chats/Message'

export default function UserChatRoom() {
  return (
    <main className="flex flex-col">
      <Message />
      <ChatForm />
    </main>
  )
}
