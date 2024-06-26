import React from 'react'
import UserChatList from '@/components/pages/chats/list/UserChatList'
import getUserChatList from '@/actions/user/UserChatList'

export default async function page() {
  const initialData = await getUserChatList()
  return <UserChatList initialData={initialData} />
}
