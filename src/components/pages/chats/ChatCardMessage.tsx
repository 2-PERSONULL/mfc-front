import React from 'react'

import { CardMessageType } from '@/types/chatTypes'
import ConfirmCard from '@/components/pages/chats/card/ConfirmCard'
import InformationCard from '@/components/pages/chats/card/InformationCard'

export default function ChatCardMessage({
  card,
  roomId,
}: {
  card: CardMessageType
  roomId: string
}) {
  if (card.type === 'confirm') {
    return <ConfirmCard card={card} roomId={roomId} />
  }

  return <InformationCard card={card} roomId={roomId} />
}
