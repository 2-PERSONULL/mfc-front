'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { fetchEventSource } from '@microsoft/fetch-event-source'
// import { EventSourcePolyfill } from 'event-source-polyfill'
import { MessageType } from '@/types/chatTypes'
import useClientSession from '@/hooks/useClientSession'

const useChat = () => {
  const { uuid, accessToken } = useClientSession()
  const { roomId } = useParams<{ roomId: string }>()

  const [inputMessage, setInputMessage] = useState<string>('')
  const [inputImage, setInputImage] = useState<string>('')
  const [realTimeMessage, setRealTimeMessage] = useState<MessageType[]>([])

  const eventSourceRef = useRef<AbortController | null>(null)

  const sendMessage = async () => {
    if (!inputMessage) return

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/chatting-service/chat`,
      {
        method: 'POST',
        headers: {
          Authorization: accessToken,
          UUID: uuid,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'msg', msg: inputMessage, roomId }),
      },
    )

    if (response.ok) setInputMessage('')
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
      setInputImage('')
    }
  }

  const connectToSSE = async () => {
    if (eventSourceRef.current) {
      console.log('Abort')
      eventSourceRef.current.abort()
    }

    const ctrl = new AbortController()
    eventSourceRef.current = ctrl

    try {
      await fetchEventSource(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/chatting-service/chat/stream/${roomId}`,
        {
          headers: { Authorization: accessToken, UUID: uuid },
          signal: ctrl.signal,
          onerror: (e) => {
            console.error('Fetch onerror', e)
            setTimeout(connectToSSE, 1000)
            throw e
          },
          onmessage: async (event) => {
            const { data } = event
            console.log(data, 'data')
            const parsedData = JSON.parse(data)

            setRealTimeMessage((prev) => [...prev, parsedData])
          },
        },
      )
    } catch (e) {
      console.error('Error', e)
    }
  }

  useEffect(() => {
    if (!uuid || !accessToken) return

    connectToSSE()

    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.abort()
      }
    }
  }, [roomId, uuid, accessToken])

  return {
    realTimeMessage,
    setRealTimeMessage,
    sendMessage,
    inputMessage,
    setInputMessage,
    sendImage,
    setInputImage,
    inputImage,
  }
}

export default useChat
