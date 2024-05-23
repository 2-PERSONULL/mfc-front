import { create } from 'zustand'
import { ConfirmModalType } from '@/types/confirmModalType'

type ConfirmState = {
  content: string
  yesButtonText: string
  noButtonText: string
  clickYes: (value: unknown) => void
  clickNo: (value: unknown) => void
  openConfirmModal: ({
    content,
    yesButtonText,
    noButtonText,
  }: ConfirmModalType) => Promise<boolean>
}

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
