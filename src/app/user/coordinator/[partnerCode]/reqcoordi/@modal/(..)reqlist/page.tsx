'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Modal from '@/components/common/Modal'

export default function InterceptedReqList({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  return (
    <Modal title="요청서 관리" closeModal={() => router.back()}>
      {children}
    </Modal>
  )
}
