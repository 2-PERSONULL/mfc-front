'use client'

import React from 'react'
import PartnerChatBox from '@/components/pages/chats/box/PartnerChatBox'
import { PartnerChatListType } from '@/types/requestType'

export default function PartnerChatList({
  initialData,
}: {
  initialData: PartnerChatListType[]
}) {
  // const [requestList, setRequestList] =
  //   useState<PartnerChatListType[]>(initialData)

  return (
    <div className="flex flex-col h-[100dvh] gap-3 bg-gray-100">
      {initialData &&
        initialData.map((request) => (
          <PartnerChatBox key={request.requestId} requestData={request} />
        ))}
      {!initialData && (
        <div className="flex justify-center pt-[100px]">
          <p className="text-xl text-gray-400">조회 내역이 없습니다.</p>
        </div>
      )}
    </div>
  )
}
