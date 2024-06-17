'use client'

import React, { useState } from 'react'
import useObserver from '@/hooks/useObserver'
import getPost from '@/actions/partner/PartnerChats'
import PartnerChatBox from '@/components/pages/chats/box/PartnerChatBox'

interface CoordinatesRequestType {
  id: number
  requestId: number
  userId: string
  userImageUrl: string
  userNickName: string
  userGender: number
  userAge: number
  partnerId: string
  createdDate: string
  status: string
  title: string
  description: string
  deadline: string
}

const NUMBER_OF_FETCH = 10

export default function PartnerChatList({
  initialData,
}: {
  initialData: CoordinatesRequestType[]
}) {
  const [offset, setOffset] = useState(NUMBER_OF_FETCH)
  const [requests, setRequests] =
    useState<CoordinatesRequestType[]>(initialData)

  const loadMorePosts = async () => {
    const newRequests = await getPost(offset, NUMBER_OF_FETCH)
    setRequests((prevPosts) => [...prevPosts, ...newRequests])
    setOffset((prevOffset) => prevOffset + NUMBER_OF_FETCH)
  }

  const observerRef = useObserver({
    onIntersect: loadMorePosts,
    enabled: true,
  })

  return (
    <div className="flex flex-col gap-3 bg-gray-100 pb-[100px]">
      {requests.map((request) => (
        <PartnerChatBox key={request.id} requestData={request} />
      ))}

      <div ref={observerRef} />
    </div>
  )
}
