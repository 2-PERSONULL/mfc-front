import { create } from 'zustand'
import { ToastType } from '@/types/toastType'

type ToastState = {
  toast: ToastType
  showToast: ({ content, type }: { content: string; type: string }) => void
}

const useToast = create<ToastState>((set) => ({
  toast: { isOpen: false, content: 'test', bottom: 0, type: 'success' },
  showToast: ({ content, type }) => {
    set(() => ({ toast: { isOpen: true, content, type } }))
    setTimeout(
      () =>
        set(() => ({
          toast: { isOpen: false, content: '', type: '' },
        })),
      3000,
    )
  },
}))

export default useToast
