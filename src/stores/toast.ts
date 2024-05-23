import { create } from 'zustand'
import { ToastType } from '@/types/toastType'

type ToastState = {
  content: string
  type: string
  showToast: ({ content, type }: ToastType) => void
}

// type: 'success' | 'error' | 'warning'
const useToast = create<ToastState>((set) => ({
  content: '',
  type: '',
  showToast: ({ content, type }: { content: string; type?: string }) => {
    set(() => ({ content, type }))
    setTimeout(
      () =>
        set(() => ({
          content: '',
          type: '',
        })),
      1500,
    )
  },
}))

export default useToast
