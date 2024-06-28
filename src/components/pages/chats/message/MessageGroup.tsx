import React from 'react'
import Image from 'next/image'
import { formatChatTime } from '@/utils/formatTime'
import CircleProfile from '@/components/ui/avatar/CircleProfile'
import ChatImage from '@/components/pages/chats/ChatImage'
import ChatCardMessage from '@/components/pages/chats/ChatCardMessage'
import { CardMessageType, MessageType } from '@/types/chatTypes'

export default function MessageGroup({
  messageList,
  uuid,
  roomId,
  profileImage,
}: {
  messageList: MessageType[]
  uuid: string
  roomId: string
  profileImage: string
}) {
  return (
    <>
      {messageList.map((message, index) => {
        if (message.type === 'system') return
        const isOwnMessage = message.sender === uuid && message.type !== 'card'
        const isFirstOwnMessage =
          isOwnMessage &&
          (index === 0 || messageList[index - 1].sender !== uuid)

        return isOwnMessage ? (
          <div
            className={`flex justify-end mb-3 gap-1 text-[15px] ${isFirstOwnMessage ? 'mt-6' : ''}`} // 자신의 첫 번째 메시지에는 상단 마진 추가
            key={message.id}
          >
            <div className="flex items-end text-xs text-[#959595]">
              {formatChatTime(message.createdAt)}
            </div>
            {message.type === 'image' && <ChatImage imageUrl={message.msg} />}
            {message.type === 'msg' && (
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
            )}
          </div>
        ) : (
          <div
            className={`flex gap-1 mb-3 ${messageList[index - 1]?.sender === uuid ? 'mt-6' : ''}`} // 이전 메시지가 자신의 메시지인 경우 상단 마진 추가
            key={message.id}
          >
            {/* 메시지 타입에 따른 프로필 이미지 구분 */}
            {message.type === 'card' ? (
              <CircleProfile size={40} imageUrl="/icons/reminder.svg" />
            ) : (
              <CircleProfile size={40} imageUrl={profileImage} />
            )}
            {message.type === 'card' && (
              <ChatCardMessage
                roomId={roomId}
                card={message.msg as unknown as CardMessageType}
              />
            )}
            {message.type === 'image' && (
              <Image src={message.msg} width={200} height={200} alt="image" />
            )}
            {message.type === 'msg' && (
              <div className="bg-[#f1f1f1] py-3 px-4 leading-5 rounded-[40px] sm:max-w-[330px] max-w-[260px] text-[15px]">
                {message.msg}
              </div>
            )}

            <div className="flex items-end text-xs text-[#959595]">
              {formatChatTime(message.createdAt)}
            </div>
          </div>
        )
      })}
    </>
  )
}
