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
  let title = '요청서 관리'
  if (search.endsWith('newreq')) {
    title = '신규 요청서 작성'
  } else if (search.endsWith('editrequest')) {
    title = '요청서 수정'
  }
  return (
    <>
      <GoBackHeader
        title={title}
        confirmExit={
          search.endsWith('newreq') || search.endsWith('editrequest')
        }
      />
      {children}
    </>
  )
}
