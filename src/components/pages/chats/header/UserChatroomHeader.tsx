'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import BackArrowButton from '@/components/ui/button/BackArrowButton'
import ChatRoomMenu from '@/components/pages/chats/ChatRoomMenu'

export default function UserChatroomHeader() {
  // 리뷰 작성 및 유저 액션 버튼 추가 필요

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <>
      <ChatRoomMenu isModalOpen={isMenuOpen} setIsModalOpen={setIsMenuOpen} />

      <header className="absoulte top-0 h-[fit] w-full bg-white z-10 shadow-sm py-3 px-3">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <BackArrowButton />
            <span className="font-semibold text-[18px]">Coordi.KIM</span>
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
