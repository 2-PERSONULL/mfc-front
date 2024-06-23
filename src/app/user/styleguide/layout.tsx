'use client'

import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'

export default function StyleGuidePageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GoBackHeader title="스타일 가이드 조회" />
      <main>{children}</main>
    </>
  )
}
