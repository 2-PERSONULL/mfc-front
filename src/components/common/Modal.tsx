'use client'

import React from 'react'
import Image from 'next/image'

function Modal({
  title,
  children,
  closeModal,
}: {
  title: string
  children: React.ReactNode
  closeModal: () => void
}) {
  return (
    <div className="bg-white fixed z-[200] top-0 left-0 w-full h-full overflow-y-scroll overscroll-none">
      <div
        className={`h-[50px] py-[11px] justify-center z-[300] bg-white font-Pretendard flex sticky top-0 "
            }`}
      >
        <div className="w-[50px] h-[50px] flex absolute left-0 top-0 bottom-0 items-center justify-center">
          <button type="button" onClick={closeModal}>
            <Image
              src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/backArrow.svg"
              alt="close icon"
              width={21}
              height={21}
            />
          </button>
        </div>
        {title && (
          <h1 className="text-black text-[17px] font-bold align-middle flex items-center">
            {title}
          </h1>
        )}
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Modal
