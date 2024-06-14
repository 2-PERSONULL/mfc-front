import React, { useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/common/Modal'

export default function ChatImage({ imageUrl }: { imageUrl: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {isModalOpen && (
        <Modal title="" closeModal={() => setIsModalOpen(false)}>
          <Image
            src={imageUrl}
            fill
            sizes="(max-width: 100px) 100vw, 100px"
            className="object-contain"
            alt="image"
          />
        </Modal>
      )}
      <button type="button" onClick={() => setIsModalOpen(true)}>
        <Image src={imageUrl} width={200} height={200} alt="image" />
      </button>
    </>
  )
}
