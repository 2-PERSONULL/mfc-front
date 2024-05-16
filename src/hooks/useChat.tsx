'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MessageType } from '@/types/chatTypes'

const useChat = () => {
  const params = useParams<{ roomId: string }>()
  const { roomId } = params

  const [realTimeMessage, setRealTimeMessage] = useState<MessageType[]>([])
  const [inputMessage, setInputMessage] = useState<string>('')

  const sendMessage = async () => {
    const response = await fetch(`http://localhost:8080/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ msg: inputMessage, roomId, sender: 'jinny' }),
    })

    if (response.ok) {
      setInputMessage('')
    }
  }

  useEffect(() => {
    const eventSource = new EventSource(
      `http://localhost:8080/chat/room/${roomId}`,
    )

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setRealTimeMessage((prev) => [...prev, data])
    }

    return () => {
      eventSource.close()
    }
  }, [roomId])

  return { realTimeMessage, inputMessage, setInputMessage, sendMessage }
}

export default useChat
