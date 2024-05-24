import { create } from 'zustand'

type ModalState = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  title?: string
  setTitle: (title: string) => void
  content: JSX.Element | string
  setContent: (content: JSX.Element | string) => void
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  title: '',
  content: '',
  setIsOpen(isOpen: boolean) {
    set((prev) => ({ ...prev, isOpen }))
  },
  setTitle(title: string) {
    set((prev) => ({ ...prev, title }))
  },
  setContent(content: JSX.Element | string) {
    set((prev) => ({ ...prev, content }))
  },
}))

export default useModalStore
