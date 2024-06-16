export interface ModalType {
  title?: string
  content: JSX.Element | string
  type?: string
}

export interface ModalState extends ModalType {
  showModal: ({
    title,
    content,
    type,
  }: {
    title?: string
    content: JSX.Element | string
    type?: string
  }) => void
  closeModal: () => void
}
