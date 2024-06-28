import React from 'react'
import { getChatList } from '@/actions/partner/PartnerRequest'
import PartnerChatList from '@/components/pages/chats/list/PartnerChatList'

// 거래대기 상태의 파트너 채팅 목록을 조회

export default async function PartnerChatListPending() {
  const initialData = await getChatList('TRADE_CREATED')

  return <PartnerChatList initialData={initialData} />
}
