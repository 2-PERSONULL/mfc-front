'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useChatStore from '@/stores/chat'

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
  const isSubmit = status === 'COORDINATE_RECEIVED' || status === 'CLOSED'
  const availableStatus = ['CONFIRMED', 'COORDINATE_RECEIVED', 'CLOSED']
  const { roomId, unreadCount, fetchRoomId } = useChatStore()

  useEffect(() => {
    if (status !== 'NONERESPONSE') {
      fetchRoomId(requestId, partnerId)
    }
  }, [status])

  return (
    <div className="h-[50px] w-full border-t">
      {status === 'NONERESPONSE' ? (
        <Link
          href={`/partner/reqcoordi/${requestId}?status=nonresponse`}
          className="h-full flex items-center justify-center"
        >
          요청 상세보기
        </Link>
      ) : (
        <div className="h-full flex items-center justify-around">
          <Link
            href={`/partner/reqcoordi/${requestId}?status=accept`}
            className={`flex justify-center items-center border-r ${!availableStatus ? 'basis-1/3' : 'basis-1/2'} h-full`}
          >
            요청 상세보기
          </Link>
          {availableStatus.includes(status) && (
            <Link
              href={`/partner/styleguide/${requestId}?type=${isSubmit ? 'view' : 'new'}&partnerId=${partnerId}&roomNumber=${roomId}`}
              className="flex justify-center items-center border-r basis-1/3 h-full"
            >
              코디
            </Link>
          )}

          {/* 채팅 버튼 */}
          <Link
            href={`/partner/chatroom/${roomId}?userId=${userId}&requestId=${requestId}`}
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
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full h-4 w-4" />
              )}
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}
