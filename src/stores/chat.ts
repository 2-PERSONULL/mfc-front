import { create } from 'zustand'
import getChatRoomId from '@/actions/chat/Chatroom'

interface ChatState {
  roomId: string
  unreadCount: number
  fetchRoomId: (requestId: string, partnerId: string) => Promise<void>
}

const useChatStore = create<ChatState>((set) => ({
  roomId: '',
  unreadCount: 0,
  fetchRoomId: async (requestId: string, partnerId: string) => {
    const { roomId, unreadCount } = await getChatRoomId(requestId, partnerId)
    set({ roomId, unreadCount })
  },
}))

export default useChatStore
