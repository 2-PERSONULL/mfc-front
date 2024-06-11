'use client'

import React from 'react'
import Image from 'next/image'

function ModalMargin({
  children,
  closeModal,
}: {
  children: React.ReactNode
  closeModal: () => void
}) {
  return (
    <div className="bg-gray-500 z-[150] bg-opacity-50 fixed inset-0 flex items-center justify-center">
      <div className="bg-white relative z-[100] w-[80%] h-[90%] overflow-y-scroll overscroll-none mx-auto my-auto rounded-xl">
        <div
          className={`h-[50px] py-[11px] justify-center z-[300] bg-white font-Pretendard flex sticky top-0"
    }`}
        >
          <div className="w-[50px] h-[50px] flex absolute right-0 top-0 bottom-0 items-center justify-center">
            <button type="button" onClick={closeModal}>
              <Image
                src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/close.svg"
                alt="close icon"
                width={21}
                height={21}
              />
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default ModalMargin
