'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { EventSourcePolyfill } from 'event-source-polyfill'
import { MessageType } from '@/types/chatTypes'
import useClientSession from '@/hooks/useClientSession'

const useChat = () => {
  const { uuid, accessToken } = useClientSession()
  const { roomId } = useParams<{ roomId: string }>()

  const [realTimeMessage, setRealTimeMessage] = useState<MessageType[]>([])
  const [inputImage, setInputImage] = useState<string>('')
  const [inputMessage, setInputMessage] = useState<string>('')

  const sendMessage = async () => {
    if (!inputMessage) return

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/chatting-service/chat`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken,
          UUID: uuid,
        },
        body: JSON.stringify({ type: 'msg', msg: inputMessage, roomId }),
      },
    )

    if (response.ok) {
      setInputMessage('')
    }
  }

  const sendImage = async () => {
    if (!inputImage) return

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/chatting-service/chat`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken,
          UUID: uuid,
        },
        body: JSON.stringify({ type: 'image', msg: inputImage, roomId }),
      },
    )

    if (response.ok) {
      setInputMessage('')
    }
  }

  useEffect(() => {
    if (!uuid || !accessToken) return

    const connectToSSE = () => {
      const eventSource = new EventSourcePolyfill(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/chatting-service/chat/stream/${roomId}`,
        {
          headers: {
            Authorization: accessToken,
            UUID: uuid,
          },
        },
      )

      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data)
        setRealTimeMessage((prev) => [...prev, data])
      }

      eventSource.onerror = () => {
        // console.error('EventSource failed:', error)
        eventSource.close()

        if (eventSource.readyState === 2) {
          connectToSSE()
        }
      }

      return eventSource
    }

    const eventSource = connectToSSE()

    return () => {
      if (eventSource) {
        eventSource.close()
      }
    }
  }, [roomId, uuid, accessToken])

  return {
    setRealTimeMessage,
    realTimeMessage,
    inputMessage,
    setInputMessage,
    sendMessage,
    setInputImage,
    sendImage,
    inputImage,
  }
}

export default useChat
