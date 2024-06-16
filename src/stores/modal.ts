import { create } from 'zustand'
import { ModalState } from '@/types/stores/modalType'

const useModal = create<ModalState>((set) => ({
  title: '',
  content: '',
  type: '',
  showModal: ({ title, content, type }) => {
    set(() => ({ title, content, type }))
  },
  closeModal: () => {
    set(() => ({ title: '', content: '', type: '' }))
  },
}))

export default useModal
