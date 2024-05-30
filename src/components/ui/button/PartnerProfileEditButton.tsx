'use client'

import React from 'react'
import Image from 'next/image'
import useModal from '@/stores/modal'

export default function PartnerProfileEditButton({
  content,
}: {
  content: JSX.Element
}) {
  const { showModal } = useModal()
  const onClickHandler = () => {
    showModal({ title: '경력', content })
  }

  return (
    <button type="button" onClick={onClickHandler}>
      <Image
        src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/pencil-icon.svg"
        alt="edit icon"
        width={21}
        height={21}
      />
    </button>
  )
}
