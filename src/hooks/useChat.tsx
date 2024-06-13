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
  const [inputImage, setInputImage] = useState<File[]>([])
  const [inputMessage, setInputMessage] = useState<string>('')
  const [card, setCard] = useState<object | null>(null)
  const [messageType, setMessageType] = useState<'msg' | 'card' | 'image'>(
    'msg',
  )

  const sendMessage = async () => {
    const msg = messageType === 'msg' ? inputMessage : card

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/chatting-service/chat`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken,
          UUID: uuid,
        },
        body: JSON.stringify({ type: messageType, msg, roomId }),
      },
    )

    if (response.ok) {
      setInputMessage('')
    }
  }

  const sendImageHandler = async () => {
    console.log(inputImage)
  }

  useEffect(() => {
    const connectToSSE = () => {
      const EventSource = EventSourcePolyfill

      const eventSource = new EventSource(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/chatting-service/chat/room/${roomId}`,
        {
          headers: {
            Authorization: accessToken,
            UUID: uuid,
          },
          heartbeatTimeout: 1800 * 10000000,
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
          setRealTimeMessage([])
          connectToSSE()
        }
      }

      return eventSource
    }

    const eventSource = connectToSSE()

    return () => {
      eventSource.close()
    }
  }, [roomId])

  return {
    realTimeMessage,
    inputMessage,
    setInputMessage,
    sendMessage,
    messageType,
    setMessageType,
    card,
    setCard,
    setInputImage,
    sendImageHandler,
  }
}

export default useChat
