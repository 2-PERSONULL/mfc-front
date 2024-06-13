import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoBackHeader title="코디 요청" />
      {children}
    </>
  )
}
