import React from 'react'
import ChatForm from '@/components/pages/chats/ChatForm'
import Message from '@/components/pages/chats/Message'
import { getChatMessages } from '@/actions/chat/ChatMessage'

const FETCH_COUNT = 20

export default async function PartnerChatRoom({
  params,
}: {
  params: { roomId: string }
}) {
  // 채팅 룸 아이디로 상대방 정보 가져오기(프로필 이미지, 닉네임)

  // 이전 채팅 메시지 조회
  const chatList = await getChatMessages(params.roomId, 0, FETCH_COUNT)
  chatList.shift()

  return (
    <main className="flex flex-col h-[100dvh] pb-[80px] pt-[90px]">
      <Message initData={chatList} size={FETCH_COUNT} />
      <ChatForm />
    </main>
  )
}
