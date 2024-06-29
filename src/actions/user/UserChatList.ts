'use server'

import { getFetchHeader } from '@/utils/getFetchHeader'

// 유저 채팅 목록 조회
export default async function getUserChatList(status?: string) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/coordinating-service/requests/user-requests${status ? `?status=${status}` : ''}`,
      {
        headers: {
          uuid: header.UUID,
          'Content-Type': 'application/json',
        },
        next: { tags: ['user-chatList'] },
      },
    )

    const data = await response.json()
    if (data.isSuccess) {
      return data.result
    }
    console.log(data)
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}
