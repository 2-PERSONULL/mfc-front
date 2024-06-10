'use client'

import React, { useEffect, useRef } from 'react'
import useChat from '@/hooks/useChat'
import { formatChatTime } from '@/utils/formatTime'
import CircleProfile from '@/components/ui/avatar/CircleProfile'

export default function Message() {
  const userName = 'jinny'
  const { realTimeMessage } = useChat()
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    if (scrollRef.current) {
      console.log(scrollRef.current.scrollTop, scrollRef.current.scrollHeight)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }

  // 새로운 메시지가 추가될 때마다 스크롤을 맨 아래로 내림
  useEffect(() => {
    scrollToBottom()
  }, [realTimeMessage])

  return (
    <div
      ref={scrollRef}
      className="p-[10px] bg-white overflow-y-auto no-scrollbar flex-grow mt-[100px]"
    >
      {realTimeMessage.map((message, index) => {
        const isOwnMessage = message.sender === userName
        const isFirstOwnMessage =
          isOwnMessage &&
          (index === 0 || realTimeMessage[index - 1].sender !== userName)

        return isOwnMessage ? (
          <div
            className={`flex justify-end mb-3 gap-1 text-[15px] ${isFirstOwnMessage ? 'mt-6' : ''}`} // 자신의 첫 번째 메시지에는 상단 마진 추가
            key={message.id}
          >
            <div className="flex items-end text-xs text-[#959595]">
              {formatChatTime(message.createdAt)}
            </div>
            <div className="bg-[#FDF5D3] py-3 px-4 leading-5 rounded-[40px] sm:max-w-[350px] max-w-[260px]">
              {message.msg.length > 500
                ? `${message.msg.substring(0, 500)}...`
                : message.msg}
              {message.msg.length > 500 && (
                <button
                  type="button"
                  className="w-full my-2 py-2 border border-gray-300 rounded-md text-gray-500"
                >
                  전체보기
                </button>
              )}
            </div>
          </div>
        ) : (
          <div
            className={`flex gap-1 mb-3 ${realTimeMessage[index - 1]?.sender === userName ? 'mt-6' : ''}`} // 이전 메시지가 자신의 메시지인 경우 상단 마진 추가
            key={message.id}
          >
            <CircleProfile size={40} imageUrl={null} />
            <div className="bg-[#f1f1f1] py-3 px-4 leading-5 rounded-[40px] sm:max-w-[330px] max-w-[260px] text-[15px]">
              {message.msg}
            </div>
            <div className="flex items-end text-xs text-[#959595]">
              {formatChatTime(message.createdAt)}
            </div>
          </div>
        )
      })}
    </div>
  )
}
