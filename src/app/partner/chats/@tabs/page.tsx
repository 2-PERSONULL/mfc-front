import React from 'react'
import PartnerChatList from '@/components/pages/chats/list/PartnerChatList'
import { getChatList } from '@/actions/partner/PartnerRequest'

export default async function PartnerChatListAll() {
  const initialData = await getChatList()

  return <PartnerChatList initialData={initialData} />
}
