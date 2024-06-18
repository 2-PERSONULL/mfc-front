'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import useConfirmStore from '@/stores/confirm'

const BackArrowButton = ({ confirmExit }: { confirmExit?: boolean }) => {
  const router = useRouter()
  const { openConfirmModal } = useConfirmStore()

  const confirmOpen = async () => {
    const confirm = await openConfirmModal({
      content: `해당 페이지를 나가시겠습니까? \n 변경사항이 저장되지 않습니다.`,
    })

    if (confirm) router.back()
  }

  const handleBackClick = () => {
    if (confirmExit) {
      confirmOpen()
    } else {
      router.back()
    }
  }
  return (
    <button type="button" onClick={handleBackClick}>
      <Image
        src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/backArrow.svg"
        alt="backArrow"
        width={24}
        height={24}
      />
    </button>
  )
}

export default BackArrowButton
