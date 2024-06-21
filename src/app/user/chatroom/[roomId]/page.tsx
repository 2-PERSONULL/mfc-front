import React from 'react'
import ChatForm from '@/components/pages/chats/ChatForm'
import Message from '@/components/pages/chats/Message'
import { getChatMessages } from '@/actions/chat/ChatMessage'

const FETCH_COUNT = 20

export default async function UserChatRoom({
  params,
}: {
  params: { roomId: string }
}) {
  // 이전 채팅 메시지 조회
  const chatList = await getChatMessages(params.roomId, 0, FETCH_COUNT)

  return (
    <main className="flex flex-col">
      <Message initData={chatList} size={FETCH_COUNT} />
      <ChatForm />
    </main>
  )
}
