import React from 'react'
import ChatForm from '@/components/pages/chats/ChatForm'
import Message from '@/components/pages/chats/Message'
import getUserProfile from '@/actions/partner/PartnerChats'
import PartnerChatroomHeader from '@/components/pages/chats/header/PartnerChatroomHeader'
import { getRequestDetail } from '@/actions/partner/PartnerRequest'
import {
  enterChatRoom,
  getChatMessages,
  leaveChatRoom,
} from '@/actions/chat/ChatMessage'

const FETCH_COUNT = 20

export default async function PartnerChatRoom({
  params,
  searchParams,
}: {
  params: { roomId: string }
  searchParams?: { [key: string]: string | undefined }
}) {
  await leaveChatRoom(params.roomId)
  await enterChatRoom(params.roomId)
  // 이전 채팅 메시지 조회
  const { chats, last } = await getChatMessages(params.roomId, 0, FETCH_COUNT)
  chats.shift()

  console.log(chats)

  // 상대방 정보 가져오기(프로필 이미지, 닉네임)
  const userId = searchParams?.userId || ''
  const { nickname, profileImage } = await getUserProfile(userId)

  const requestId = searchParams?.requestId || ''
  const requestDetail = await getRequestDetail(requestId)

  return (
    <>
      <PartnerChatroomHeader
        nickname={nickname}
        userId={userId}
        requestDetail={requestDetail}
      />
      <main className="flex flex-col h-[100dvh] pb-[80px]">
        <Message
          initData={chats}
          isLast={last}
          size={FETCH_COUNT}
          profileImage={profileImage}
        />
        <ChatForm />
      </main>
    </>
  )
}
