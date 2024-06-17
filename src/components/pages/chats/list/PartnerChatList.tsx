'use client'

import React from 'react'
// import useObserver from '@/hooks/useObserver'
import PartnerChatBox from '@/components/pages/chats/box/PartnerChatBox'
import { PartnerChatListType } from '@/types/requestType'
// import { getChatList } from '@/actions/partner/PartnerRequest'

// const NUMBER_OF_FETCH = 10

export default function PartnerChatList({
  initialData,
}: {
  initialData: PartnerChatListType[]
}) {
  // const [offset, setOffset] = useState(NUMBER_OF_FETCH)
  // const [requests, setRequests] = useState<PartnerChatListType[]>(initialData)

  // const loadMorePosts = async () => {
  //   console.log('더불러')
  //   // const newRequests = await getChatList(offset, NUMBER_OF_FETCH)
  //   // setRequests((prevPosts) => [...prevPosts, ...newRequests])
  //   // setOffset((prevOffset) => prevOffset + NUMBER_OF_FETCH)
  // }

  // const observerRef = useObserver({
  //   onIntersect: loadMorePosts,
  //   enabled: true,
  // })

  return (
    <div className="flex flex-col h-[100dvh] gap-3 bg-gray-100">
      {initialData.map((request) => (
        <PartnerChatBox key={request.requestId} requestData={request} />
      ))}
    </div>
  )
}
