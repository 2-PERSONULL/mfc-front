'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { leaveChatRoom } from '@/actions/chat/ChatMessage'
import BackArrowIcon from '@/components/ui/icons/BackArrowIcon'
import ChatRoomMenu from '@/components/pages/chats/ChatRoomMenu'

export default function UserChatroomHeader({ nickname }: { nickname: string }) {
  // 리뷰 작성 및 유저 액션 버튼 추가 필요

  const router = useRouter()
  const { roomId } = useParams<{ roomId: string }>()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const leaveHandler = async () => {
    await leaveChatRoom(roomId)
    router.back()
  }

  return (
    <>
      <ChatRoomMenu isModalOpen={isMenuOpen} setIsModalOpen={setIsMenuOpen} />

      <header className="fixed top-0 h-[fit] w-full bg-white z-10 shadow-sm py-3 px-3 mb-2">
        <div className="flex justify-between">
          <div className="flex gap-4 mb-2">
            <button type="button" onClick={leaveHandler}>
              <BackArrowIcon />
            </button>
            <span className="font-semibold text-[18px]">{nickname}</span>
          </div>
          <button type="button" onClick={() => setIsMenuOpen(true)}>
            <Image
              src="/icons/more-vertical.svg"
              alt="menu-icon"
              width="24"
              height="24"
            />
          </button>
        </div>
      </header>
    </>
  )
}
