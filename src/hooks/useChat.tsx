'use client'

import { useParams } from 'next/navigation'
import { useRef, useEffect, useState } from 'react'
import { EventSourcePolyfill } from 'event-source-polyfill'
import { MessageType } from '@/types/chatTypes'
import useClientSession from '@/hooks/useClientSession'

const useChat = () => {
  const { uuid, accessToken } = useClientSession()
  const { roomId } = useParams<{ roomId: string }>()

  const [realTimeMessage, setRealTimeMessage] = useState<MessageType[]>([])
  const [inputImage, setInputImage] = useState<string>('')
  const [inputMessage, setInputMessage] = useState<string>('')
  const isUnmounted = useRef(false) // 컴포넌트 언마운트 상태를 추적하는 ref

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
      setInputImage('')
    }
  }

  useEffect(() => {
    if (!uuid || !accessToken) return

    isUnmounted.current = false // 컴포넌트가 마운트되었음을 표시

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

        // data.id 중복 안되게 처리
        setRealTimeMessage((prev) => {
          if (prev.some((msg) => msg.id === data.id)) {
            return prev
          }
          return [...prev, data]
        })
        // setRealTimeMessage((prev) => [...prev, data])
      }

      eventSource.onerror = () => {
        // console.error('EventSource failed:', error)
        console.log('닫고 재연결합니당')
        eventSource.close()

        if (eventSource.readyState === 2 && !isUnmounted.current) {
          connectToSSE()
        }
      }

      return eventSource
    }

    const eventSource = connectToSSE()

    return () => {
      isUnmounted.current = true // 컴포넌트가 언마운트되었음을 표시
      if (eventSource) {
        console.log('close event source')
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
