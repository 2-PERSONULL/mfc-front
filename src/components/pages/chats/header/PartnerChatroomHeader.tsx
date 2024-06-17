'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import BackArrowButton from '@/components/ui/button/BackArrowButton'
import ChatRoomMenu from '@/components/pages/chats/ChatRoomMenu'
import ConfirmModal from '@/components/pages/chats/confirm/ConfirmModal'

export default function PartnerChatroomHeader() {
  // 요청 진행 상태에 따라 확정 제안 버튼 숨기기 처리 필요

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false)

  return (
    <>
      <ChatRoomMenu isModalOpen={isMenuOpen} setIsModalOpen={setIsMenuOpen} />
      <ConfirmModal
        isModalOpen={isConfirmOpen}
        setIsModalOpen={setIsConfirmOpen}
      />
      <header className="absoulte top-0 h-[100px] w-full bg-white z-10 shadow-sm py-3 px-3 mb-2">
        <div className="flex mb-3 justify-between">
          <div className="flex gap-4">
            <BackArrowButton />
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
