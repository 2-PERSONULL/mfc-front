import React from 'react'
import { getChatList } from '@/actions/partner/PartnerRequest'
import PartnerChatList from '@/components/pages/chats/list/PartnerChatList'

// 미응답 상태의 파트너 채팅 목록을 조회
export default async function PartnerChatListNonresponse() {
  const initialData = await getChatList('NONERESPONSE')

  return <PartnerChatList initialData={initialData} />
}
