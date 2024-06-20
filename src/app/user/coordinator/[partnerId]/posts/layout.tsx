import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoBackHeader title="스타일 상세보기" />
      <main>{children}</main>
    </>
  )
}
