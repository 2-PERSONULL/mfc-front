import { create } from 'zustand'
import { ModalState } from '@/types/stores/modalType'

const useModal = create<ModalState>((set) => ({
  title: '',
  content: '',
  showModal: ({ title, content }) => {
    set(() => ({ title, content }))
  },
  closeModal: () => {
    set(() => ({ title: '', content: '' }))
  },
}))

export default useModal
