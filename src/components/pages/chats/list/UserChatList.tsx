'use client'

import React from 'react'
import UserChatBox from '@/components/pages/chats/box/UserChatBox'
import { PartnerChatListType } from '@/types/requestType'

export default function UserChatList({
  initialData,
}: {
  initialData: PartnerChatListType[]
}) {
  // const [requestList, setRequestList] =
  //   useState<PartnerChatListType[]>(initialData)

  return (
    <div className="flex flex-col gap-3 bg-gray-100 pb-[100px]">
      {initialData.map((request, idx) => (
        <UserChatBox key={idx} requestData={request} />
      ))}
    </div>
  )
}
