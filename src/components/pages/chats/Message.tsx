'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import useChat from '@/hooks/useChat'
import { formatChatTime } from '@/utils/formatTime'

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
      className="p-[10px] bg-[#F5F5F5] overflow-y-auto no-scrollbar flex-grow"
    >
      {realTimeMessage.map((message) =>
        message.sender === userName ? (
          <div className="flex justify-end mb-3 gap-1" key={message.id}>
            <div className="flex items-end text-xs text-[#959595]">
              {formatChatTime(message.createdAt)}
            </div>
            <div className="bg-[#FFFFFF] py-3 px-4 leading-5 rounded-bl-xl rounded-br-xl rounded-tl-xl sm:max-w-[350px] max-w-[260px]">
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
          <div className="flex gap-1 mb-3" key={message.id}>
            <div>
              <Image
                src="/images/profile.png"
                width={40}
                height={40}
                alt="profile image"
                className="object-cover rounded-full mr-1"
              />
            </div>
            <div className="bg-[#FFFFFF] py-3 px-4 leading-5 rounded-bl-xl rounded-br-xl rounded-tr-xl sm:max-w-[330px] max-w-[260px]">
              {message.msg}
            </div>
            <div className="flex items-end text-xs text-[#959595]">
              {formatChatTime(message.createdAt)}
            </div>
          </div>
        ),
      )}
    </div>
  )
}
