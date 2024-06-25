'use server'

import { getFetchHeader } from '@/utils/getFetchHeader'

// 메시지 전송
export async function sendMessage(roomId: string, msg: string) {
  if (!msg) return

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
      body: JSON.stringify({ type: 'msg', msg, roomId }),
    },
  )

  return response
}

// 이미지 전송
export async function sendImage(roomId: string, msg: string) {
  if (!msg) return

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
      body: JSON.stringify({ type: 'image', msg, roomId }),
    },
  )

  return response
}

// 채팅방 입장
export async function enterChatRoom(roomId: string) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/chatting-service/room/enter/${roomId}`,
    {
      method: 'PUT',
      headers: header,
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    console.log('enter chat room success')
    return
  }
  console.log('error: ', data.message)
}

// 채팅방 나가기
export async function leaveChatRoom(roomId: string) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/chatting-service/room/exit/${roomId}`,
    {
      method: 'PUT',
      headers: header,
    },
  )

  const data = await response.json()
  if (data.isSuccess) {
    console.log('leave chat room success')
    return
  }
  console.log('error: ', data.message)
}

// 이전 채팅 메시지 조회
export async function getChatMessages(
  roomId: string,
  page: number,
  size: number,
) {
  const header = await getFetchHeader()

  if (!header) {
    console.log('session not found')
    return null
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/chatting-service/chat/page/${roomId}?page=${page}&size=${size}`,
    {
      method: 'GET',
      headers: header,
      cache: 'no-store',
    },
  )

  const data = await response.json()

  if (data.isSuccess) {
    // 시간순으로 정렬
    const reversedChats = [...data.result.chats].reverse()

    return {
      ...data.result,
      chats: reversedChats,
    }
  }
  console.log('get chat error: ', data.message)
  return data.result
}
