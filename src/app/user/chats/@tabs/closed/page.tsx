import React from 'react'
import UserChatList from '@/components/pages/chats/list/UserChatList'
import getUserChatList from '@/actions/user/UserChatList'

export default async function UserChatListClosed() {
  const initialData = await getUserChatList('CLOSED')

  return <UserChatList initialData={initialData} />
}
