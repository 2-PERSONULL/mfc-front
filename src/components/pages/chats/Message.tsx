'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import useChat from '@/hooks/useChat'
import useClientSession from '@/hooks/useClientSession'
import { MessageType } from '@/types/chatTypes'
import useObserver from '@/hooks/useObserver'
import { getChatMessages } from '@/actions/chat/ChatMessage'
import MessageGroup from '@/components/pages/chats/message/MessageGroup'

export default function Message({
  initData,
  isLast,
  size,
  profileImage,
}: {
  initData: MessageType[]
  isLast: boolean
  size: number
  profileImage: string
}) {
  const { realTimeMessage } = useChat()
  const [fetchedMessages, setFetchedMessages] =
    useState<MessageType[]>(initData)
  const [offset, setOffset] = useState(1)
  const { uuid } = useClientSession()
  const { roomId } = useParams<{ roomId: string }>()
  const [isLastData, setIsLastData] = useState(isLast)
  const [scrollHeight, setScrollHeight] = useState(0)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }

  // 실시간 메시지가 추가되면 스크롤을 맨 아래로 이동
  useEffect(() => {
    scrollToBottom()
  }, [realTimeMessage])

  useEffect(() => {
    if (!scrollRef) return
    if (scrollRef.current) {
      const scrollTop = scrollRef.current.scrollHeight - scrollHeight
      scrollRef.current.scrollTop = scrollTop
      setScrollHeight(scrollRef.current.scrollHeight)
    }
  }, [fetchedMessages])

  const loadMoreChats = async () => {
    const { chats, last } = await getChatMessages(roomId, offset, size)

    setIsLastData(last)
    setFetchedMessages((prevMessages) => [...chats, ...prevMessages])
    setOffset((prevOffset) => prevOffset + 1)
  }

  const observerRef = useObserver({
    onIntersect: loadMoreChats,
    enabled: !isLastData,
  })

  return (
    <div
      ref={scrollRef}
      className="px-[10px] bg-white overflow-y-auto no-scrollbar flex-grow pt-[80px]"
    >
      <div ref={observerRef} />
      {/* 이전 채팅 메시지 */}
      <MessageGroup
        messageList={fetchedMessages}
        uuid={uuid}
        roomId={roomId}
        profileImage={profileImage}
      />
      {/* 실시간 메시지 */}
      <MessageGroup
        messageList={realTimeMessage}
        uuid={uuid}
        roomId={roomId}
        profileImage={profileImage}
      />
    </div>
  )
}
