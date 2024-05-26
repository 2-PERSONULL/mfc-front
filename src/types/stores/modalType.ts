export interface ModalType {
  title?: string
  content: JSX.Element | string
}

export interface ModalState extends ModalType {
  showModal: ({
    title,
    content,
  }: {
    title?: string
    content: JSX.Element | string
  }) => void
  closeModal: () => void
}
