import { create } from 'zustand'
import { ToastType } from '@/types/toastType'

type ToastState = {
  toast: ToastType
  showToast: ({ content, type }: { content: string; type: string }) => void
}

// type: 'success' | 'error' | 'warning'
const useToast = create<ToastState>((set) => ({
  toast: { isOpen: false, content: 'test', type: '' },
  showToast: ({ content, type }: { content: string; type?: string }) => {
    set(() => ({ toast: { isOpen: true, content, type } }))
    setTimeout(
      () =>
        set(() => ({
          toast: { isOpen: false, content: '', type: '' },
        })),
      1500,
    )
  },
}))

export default useToast
