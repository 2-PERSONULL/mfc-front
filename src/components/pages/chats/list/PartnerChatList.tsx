import React from 'react'
import PartnerChatBox from '@/components/pages/chats/box/PartnerChatBox'
import { PartnerChatListType } from '@/types/requestType'

export default function PartnerChatList({
  initialData,
}: {
  initialData: PartnerChatListType[]
}) {
  return (
    <div className="flex flex-col gap-3 bg-gray-100">
      {initialData &&
        initialData.map((request) => (
          <PartnerChatBox key={request.requestId} requestData={request} />
        ))}

      {initialData.length === 0 && (
        <div className="flex justify-center pt-[100px] pb-[100px]">
          <p className="text-xl text-gray-400">조회 내역이 없습니다.</p>
        </div>
      )}
    </div>
  )
}
