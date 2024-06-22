'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Modal from '@/components/common/Modal'
import StyleGuideEditor from '@/components/pages/partner/styleGuide/StyleGuideEditor'
import getChatRoomId from '@/actions/chat/Chatroom'
import { enterChatRoom } from '@/actions/chat/ChatMessage'

export default function PartnerChatBoxButton({
  status,
  userId,
  requestId,
  partnerId,
}: {
  status: string
  userId: string
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

  const enterRoomHandler = async () => {
    await enterChatRoom(roomNumber)
    router.push(
      `/partner/chatroom/${roomNumber}?userId=${userId}&requestId=${requestId}`,
    )
  }

  return (
    <>
      {isModalOpen && (
        <Modal
          title="스타일 가이드 작성"
          closeModal={() => setIsModalOpen(false)}
        >
          <StyleGuideEditor userId={userId} requestId={requestId} />
        </Modal>
      )}
      <div className="h-[50px] w-full border-t">
        {status === 'NONERESPONSE' ? (
          <div className="h-full flex items-center justify-center">
            <button
              type="button"
              onClick={() =>
                router.push(
                  `/partner/reqcoordi/${requestId}?status=nonresponse`,
                )
              }
            >
              요청 상세보기
            </button>
          </div>
        ) : (
          <div className="h-full flex items-center justify-around">
            <button
              type="button"
              onClick={() =>
                router.push(`/partner/reqcoordi/${requestId}?status=accept`)
              }
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
            <button
              type="button"
              onClick={enterRoomHandler}
              className="flex justify-center items-center basis-1/3 h-full"
            >
              <Image
                src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/square-chat.svg"
                alt="chat"
                width={23}
                height={23}
              />
            </button>
          </div>
        )}
      </div>
    </>
  )
}
