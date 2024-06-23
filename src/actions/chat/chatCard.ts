'use server'

import { getFetchHeader } from '@/utils/getFetchHeader'
import { CardMessageType } from '@/types/chatTypes'

export default async function sendCard(card: CardMessageType, roomId: string) {
  if (!card) return

  const header = await getFetchHeader()
  if (!header) {
    console.log('session not found')
    return null
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/chatting-service/chat`,
    {
      method: 'POST',
      headers: header,
      body: JSON.stringify({ type: 'card', msg: card, roomId }),
    },
  )

  const data = await response.json()

  if (data.isSuccess) {
    console.log('send card success')
  }
}
