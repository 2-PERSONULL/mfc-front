import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoBackHeader title="요청서 관리" />
      {children}
    </>
  )
}
