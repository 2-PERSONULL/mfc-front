'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Modal from '@/components/common/Modal'
import StyleGuideEditor from '@/components/pages/partner/styleGuide/StyleGuideEditor'
import getChatRoomId from '@/actions/chat/Chatroom'

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
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [roomNumber, setRoomNumber] = useState<string>('')
  const [unreadMessage, setUnreadMessage] = useState<number>(0)
  const availableStatus = ['CONFIRMED', 'CLOSING']

  useEffect(() => {
    if (status === 'NONERESPONSE') return

    const getRoomId = async () => {
      const { roomId, unreadCount } = await getChatRoomId(requestId, partnerId)
      setUnreadMessage(unreadCount)
      setRoomNumber(roomId)
    }

    getRoomId()
  }, [status])

  return (
    <>
      {isModalOpen && (
        <Modal
          title="스타일 가이드 작성"
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
            {availableStatus.includes(status) && (
              <button
                onClick={() => setIsModalOpen(true)}
                type="button"
                className="flex justify-center items-center border-r basis-1/3 h-full"
              >
                코디
              </button>
            )}

            {/* 채팅 버튼 */}
            <Link
              href={`/partner/chatroom/${roomNumber}?userId=${userId}&requestId=${requestId}`}
              className="flex justify-center items-center basis-1/3 h-full"
            >
              <div className="relative">
                <Image
                  src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/square-chat.svg"
                  alt="chat"
                  width={23}
                  height={23}
                />
                {/* 안 읽음 표시 추가 */}
                {unreadMessage > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full h-4 w-4" />
                )}
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
