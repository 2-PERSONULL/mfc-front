import React from 'react'
import ChatForm from '@/components/pages/chats/ChatForm'
import Message from '@/components/pages/chats/Message'

export default function PartnerChatRoom() {
  // 채팅 룸 아이디로 상대방 정보 가져오기(프로필 이미지, 닉네임)

  return (
    <main className="flex flex-col">
      <Message />
      <ChatForm />
    </main>
  )
}
