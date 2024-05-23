import { create } from 'zustand'
import { ConfirmModalType, ConfirmState } from '@/types/stores/confirmType'

const useConfirmStore = create<ConfirmState>((set) => ({
  content: '',
  yesButtonText: '',
  noButtonText: '',
  clickYes: () => {},
  clickNo: () => {},
  openConfirmModal: async ({
    content,
    yesButtonText = '확인',
    noButtonText = '취소',
  }: ConfirmModalType) => {
    set({ content, yesButtonText, noButtonText })

    const promise = new Promise((resolve, reject) => {
      set({
        clickYes: resolve,
        clickNo: reject,
      })
    })

    return promise.then(
      () => {
        set({ content: '', yesButtonText: '', noButtonText: '' })
        return true
      },
      () => {
        set({ content: '', yesButtonText: '', noButtonText: '' })
        return false
      },
    )
  },
}))

export default useConfirmStore
