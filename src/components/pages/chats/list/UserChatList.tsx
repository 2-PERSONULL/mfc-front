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
    <div className="flex flex-col gap-3 bg-gray-100">
      {initialData.length > 0 &&
        initialData.map((request, idx) => (
          <UserChatBox key={idx} requestData={request} />
        ))}
      {initialData.length === 0 && (
        <div className="flex justify-center pt-[100px] pb-[100px]">
          <p className="text-xl text-gray-400">조회 내역이 없습니다.</p>
        </div>
      )}
    </div>
  )
}
