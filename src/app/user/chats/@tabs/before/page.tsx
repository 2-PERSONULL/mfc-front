import React from 'react'
import UserChatList from '@/components/pages/chats/list/UserChatList'
import getUserChatList from '@/actions/user/UserChatList'

export default async function UserChatListNonresponse() {
  const initialData = await getUserChatList('NONERESPONSE')

  return <UserChatList initialData={initialData} />
}
