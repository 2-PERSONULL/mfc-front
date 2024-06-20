'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import ChatRoomMenu from '@/components/pages/chats/ChatRoomMenu'
import ConfirmModal from '@/components/pages/chats/confirm/ConfirmModal'
import BackArrowIcon from '@/components/ui/icons/BackArrowIcon'
import { leaveChatRoom } from '@/actions/chat/ChatMessage'

export default function PartnerChatroomHeader() {
  // 요청 진행 상태에 따라 확정 제안 버튼 숨기기 처리 필요

  const { roomId } = useParams<{ roomId: string }>()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false)

  const leaveHandler = async () => {
    await leaveChatRoom(roomId)
    router.back()
  }

  return (
    <>
      <ChatRoomMenu isModalOpen={isMenuOpen} setIsModalOpen={setIsMenuOpen} />
      <ConfirmModal
        isModalOpen={isConfirmOpen}
        setIsModalOpen={setIsConfirmOpen}
      />
      <header className="fixed top-0 h-[100px] w-full bg-white z-10 shadow-sm py-3 px-3 mb-2">
        <div className="flex mb-3 justify-between">
          <div className="flex gap-4">
            <button type="button" onClick={leaveHandler}>
              <BackArrowIcon />
            </button>
            <span className="font-semibold text-[18px]">패션테러no1.</span>
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
        <div className="w-full flex">
          <button
            type="button"
            onClick={() => setIsConfirmOpen(true)}
            className="border border-black w-full h-[35px] rounded-md"
          >
            확정제안
          </button>
        </div>
      </header>
    </>
  )
}
