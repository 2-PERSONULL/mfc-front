import React from 'react'
import ChatForm from '@/components/pages/chats/ChatForm'
import Message from '@/components/pages/chats/Message'
import {
  enterChatRoom,
  leaveChatRoom,
  getChatMessages,
} from '@/actions/chat/ChatMessage'
import UserChatroomHeader from '@/components/pages/chats/header/UserChatroomHeader'
import { getPartnerProfileBasic } from '@/actions/partner/PartnerProfile'

const FETCH_COUNT = 20

export default async function UserChatRoom({
  params,
  searchParams,
}: {
  params: { roomId: string }
  searchParams?: { [key: string]: string | undefined }
}) {
  // 채팅방 입장 알림
  await leaveChatRoom(params.roomId)
  await enterChatRoom(params.roomId)
  // 이전 채팅 메시지 조회
  const chatList = await getChatMessages(params.roomId, 0, FETCH_COUNT)
  chatList.shift()

  // 상대방 정보 가져오기(프로필 이미지, 닉네임)
  const partnerId = searchParams?.partnerId || ''
  const { nickname, profileImage } = await getPartnerProfileBasic(partnerId)

  return (
    <>
      <UserChatroomHeader nickname={nickname} />
      <main className="flex flex-col h-[100dvh] pb-[80px]">
        <Message
          initData={chatList}
          size={FETCH_COUNT}
          profileImage={profileImage}
        />
        <ChatForm />
      </main>
    </>
  )
}
