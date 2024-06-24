'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import getChatRoomId from '@/actions/chat/Chatroom'
import { getStyleGuide } from '@/actions/partner/Coordinates'

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
  const [isSubmit, setIsSubmit] = useState<boolean>(false)

  useEffect(() => {
    if (status === 'NONERESPONSE') return

    const getRoomId = async () => {
      const { roomId, unreadCount } = await getChatRoomId(requestId, partnerId)
      console.log(unreadCount)
      setRoomNumber(roomId)
    }

    const getSubmitStatus = async () => {
      const data = await getStyleGuide(requestId)
      const submitStatus = !!data
      setIsSubmit(submitStatus)
    }

    getRoomId()
    getSubmitStatus()
  }, [status])

  return (
    <div className="h-[50px] w-full border-t">
      {status === 'NONERESPONSE' ? (
        <Link
          href={`/user/mypage/reqlist/${requestId}?type=view`}
          className="h-full flex items-center justify-center"
        >
          요청 상세보기
        </Link>
      ) : (
        <div className="h-full flex items-center justify-around">
          <Link
            href={`/user/mypage/reqlist/${requestId}?type=view`}
            className="flex justify-center items-center border-r basis-1/3 h-full"
          >
            요청 상세보기
          </Link>
          {isSubmit && (
            <Link
              href={`/user/styleguide/${requestId}`}
              className="flex justify-center items-center border-r basis-1/3 h-full"
            >
              코디
            </Link>
          )}
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
  )
}
