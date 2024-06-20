'use server'

import { getFetchHeader } from '@/utils/getFetchHeader'

// 수락한 요청서 채팅방 번호 얻어오기
export default async function getChatRoomId(
  historyId: string,
  partnerId: string,
) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/chatting-service/room/${historyId}`,
    {
      headers: {
        ...header,
        partnerId,
      },
    },
  )

  const data = await response.json()

  return data.result
}
