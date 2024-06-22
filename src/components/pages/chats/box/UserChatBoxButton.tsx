'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Modal from '@/components/common/Modal'
import StyleGuideEditor from '@/components/pages/partner/styleGuide/StyleGuideEditor'
import getChatRoomId from '@/actions/chat/Chatroom'

export default function UserChatBoxButton({
  status,
  requestId,
  partnerId,
}: {
  status: string
  requestId: string
  partnerId: string
}) {
  const [roomNumber, setRoomNumber] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (status === 'NONERESPONSE') return

    const getRoomId = async () => {
      const { roomId, unreadCount } = await getChatRoomId(requestId, partnerId)
      console.log(unreadCount)
      setRoomNumber(roomId)
    }

    getRoomId()
  }, [status])

  return (
    <>
      {isModalOpen && (
        <Modal
          title="스타일 가이드 조회"
          closeModal={() => setIsModalOpen(false)}
        >
          <StyleGuideEditor
            requestId={requestId}
            closeModal={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
      <div className="h-[50px] w-full border-t">
        {status === 'NONERESPONSE' ? (
          <div className="h-full flex items-center justify-center">
            <button
              type="button"
              onClick={() => router.push(`/partner/reqcoordi/${requestId}`)}
            >
              요청 상세보기
            </button>
          </div>
        ) : (
          <div className="h-full flex items-center justify-around">
            <button
              type="button"
              className="flex justify-center items-center border-r basis-1/3 h-full"
            >
              요청 상세보기
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="flex justify-center items-center border-r basis-1/3 h-full"
            >
              코디
            </button>
            <Link
              href={`/user/chatroom/${roomNumber}?partnerId=${partnerId}`}
              className="flex justify-center items-center basis-1/3 h-full"
            >
              <Image
                src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/square-chat.svg"
                alt="chat"
                width={23}
                height={23}
              />
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
