export interface ConfirmModalType {
  content: string
  yesButtonText?: string
  noButtonText?: string
}

export interface ConfirmState {
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
