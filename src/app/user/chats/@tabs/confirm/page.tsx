import React from 'react'
import UserChatList from '@/components/pages/chats/list/UserChatList'
import getUserChatList from '@/actions/user/UserChatList'

export default async function UserChatListConfirm() {
  const initialData = await getUserChatList('CONFIRMED')

  return <UserChatList initialData={initialData} />
}
