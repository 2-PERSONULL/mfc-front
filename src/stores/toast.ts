import { create } from 'zustand'
import { ToastState } from '@/types/stores/toastType'

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
