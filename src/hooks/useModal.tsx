import useModalStore from '@/stores/modal'

type OpenModalType = {
  title?: string
  content: JSX.Element | string
}

const useModal = () => {
  const { setIsOpen, setTitle, setContent } = useModalStore()

  const openModal = ({ title, content }: OpenModalType) => {
    setIsOpen(true)
    setTitle(title || '')
    setContent(content)
  }

  const closeModal = () => {
    setIsOpen(false)
    setTitle('')
    setContent('')
  }

  return { openModal, closeModal }
}

export default useModal
