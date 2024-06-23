'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import ChatRoomMenu from '@/components/pages/chats/ChatRoomMenu'
import ConfirmModal from '@/components/pages/chats/confirm/ConfirmModal'
import BackArrowIcon from '@/components/ui/icons/BackArrowIcon'
import { leaveChatRoom } from '@/actions/chat/ChatMessage'
import { UserRequestDetailType } from '@/types/requestType'

export default function PartnerChatroomHeader({
  nickname,
  userId,
  requestDetail,
}: {
  nickname: string
  userId: string
  requestDetail: UserRequestDetailType
}) {
  // 요청 진행 상태에 따라 확정 제안 버튼 숨기기 처리 필요

  const { roomId } = useParams<{ roomId: string }>()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false)
  const { status } = requestDetail.partner

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
        userId={userId}
        requestId={requestDetail.requestId}
      />
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

        {status === 'RESPONSEACCEPT' && (
          <div className="w-full flex">
            <button
              type="button"
              onClick={() => setIsConfirmOpen(true)}
              className="border border-black w-full h-[35px] rounded-md"
            >
              확정제안
            </button>
          </div>
        )}
      </header>
    </>
  )
}
