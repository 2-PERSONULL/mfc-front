'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import GoBackHeader from '@/components/layouts/GoBackHeader'

export default function PartnerStyleGuidelayout({
  children,
}: {
  children: React.ReactNode
}) {
  const params = useSearchParams()
  const type = params.get('type')?.toString() || ''
  const getTitle = (key: string) => {
    switch (key) {
      case 'new':
        return '스타일 가이드 작성'
      case 'edit':
        return '스타일 가이드 편집'
      case 'view':
        return '스타일 가이드 조회'
      default:
        return '스타일 가이드'
    }
  }
  return (
    <>
      <GoBackHeader title={getTitle(type)} />
      {children}
    </>
  )
}
