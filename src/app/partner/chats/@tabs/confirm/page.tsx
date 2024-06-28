import React from 'react'
import { getChatList } from '@/actions/partner/PartnerRequest'
import PartnerChatList from '@/components/pages/chats/list/PartnerChatList'

// 거래확정 상태의 파트너 채팅 목록을 조회
export default async function PartnerChatListConfirm() {
  const initialData = await getChatList('CONFIRMED')

  return <PartnerChatList initialData={initialData} />
}
