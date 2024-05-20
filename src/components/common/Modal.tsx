'use client'

import React from 'react'
import useModalStore from '@/stores/modal'
import CloseModalButton from '../ui/button/CloseModalButton'

function Modal() {
  const { isOpen, content } = useModalStore()
  return (
    <div>
      {isOpen && (
        <div className="bg-white fixed z-[200] top-0 left-0 w-full h-full">
          <div className="h-[60px] flex items-center px-3">
            <CloseModalButton />
          </div>
          {content}
        </div>
      )}
    </div>
  )
}

export default Modal
