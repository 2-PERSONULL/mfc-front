'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import GoBackHeader from '@/components/layouts/GoBackHeader'

export default function ProfileManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const search = usePathname()
  const confirmCheck =
    search.endsWith('editstyle') ||
    search.endsWith('editbodytype') ||
    search.endsWith('editsize')
  let title = '프로필 관리'
  if (search.endsWith('editstyle')) {
    title = '선호 스타일 수정'
  }
  if (search.endsWith('editbodytype')) {
    title = '체형 정보 수정'
  }
  if (search.endsWith('editsize')) {
    title = '옷 사이즈 수정'
  }
  return (
    <>
      <GoBackHeader title={title} confirmExit={confirmCheck && true} />
      {children}
    </>
  )
}
