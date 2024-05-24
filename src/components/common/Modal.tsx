'use client'

import React from 'react'
import useModalStore from '@/stores/modal'
import CloseModalButton from '../ui/button/CloseModalButton'

function Modal() {
  const { isOpen, title, content } = useModalStore()
  return (
    <div>
      {isOpen && (
        <div className="bg-white fixed z-[200] top-0 left-0 w-full h-full overflow-y-scroll">
          <div
            className={`h-[50px] py-[11px] justify-center z-[300] bg-white font-Pretendard flex sticky top-0 "
            }`}
          >
            <div className="w-[50px] h-[50px] flex absolute left-0 top-0 bottom-0 items-center justify-center">
              <CloseModalButton />
            </div>
            {title && (
              <h1 className="text-black text-[17px] font-bold align-middle flex items-center">
                {title}
              </h1>
            )}
          </div>
          {content}
        </div>
      )}
    </div>
  )
}

export default Modal
