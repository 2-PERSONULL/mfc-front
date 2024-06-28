import React from 'react'
import { getChatList } from '@/actions/partner/PartnerRequest'
import PartnerChatList from '@/components/pages/chats/list/PartnerChatList'

// 거래가 종료된 파트너 채팅 목록을 조회
export default async function PartnerChatListClosed() {
  const initialData = await getChatList('CLOSED')

  return <PartnerChatList initialData={initialData} />
}
