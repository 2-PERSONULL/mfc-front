import React from 'react'
import UserChatList from '@/components/pages/chats/list/UserChatList'
import getUserChatList from '@/actions/user/UserChatList'

export default async function UserChatListPending() {
  const initialData = await getUserChatList('TRADE_CREATED')

  return <UserChatList initialData={initialData} />
}
