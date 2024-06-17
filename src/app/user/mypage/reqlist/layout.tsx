'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import GoBackHeader from '@/components/layouts/GoBackHeader'

export default function RequestListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const search = usePathname()
  const title = search.endsWith('newreq') ? '신규 요청서 작성' : '요청서 관리'
  return (
    <>
      <GoBackHeader title={title} confirmExit={search.endsWith('newreq')} />
      {children}
    </>
  )
}
