'use client'

import React, { useEffect } from 'react'

interface SliderModalProps {
  children: React.ReactNode
  isModalOpen: boolean
  onChangeModal: () => void
  backgroundClose: boolean
}

function SliderModal({
  children,
  isModalOpen,
  onChangeModal,
  backgroundClose,
}: SliderModalProps) {
  // 모달 오픈시 body 스크롤 막기
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  return (
    <div>
      <div
        role="presentation"
        onClick={backgroundClose ? onChangeModal : () => {}}
        className={`
                    fixed top-0  z-[200]
                    w-screen h-full 
                    bg-[#747474] bg-opacity-50 
                    transition-all
                    ${isModalOpen ? '' : 'hidden'}`}
      />
      <div
        style={{
          transform: isModalOpen ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.3s ease-out',
        }}
        className="fixed bottom-0 right-0 left-0 z-[300] rounded-t-2xl w-screen"
      >
        {children}
      </div>
    </div>
  )
}

export default SliderModal
