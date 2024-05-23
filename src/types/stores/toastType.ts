export interface ToastType {
  content: string
  type?: string
}

export interface ToastState {
  content: string
  type: string
  showToast: ({ content, type }: ToastType) => void
}
