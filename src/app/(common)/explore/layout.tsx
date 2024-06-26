import React from 'react'
import BottomNav from '@/components/layouts/BottomNav'
import CommonHeader from '@/components/layouts/CommonHeader'
import FloatingButton from '@/components/common/FloatingButton'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CommonHeader />
      {children}
      <FloatingButton />
      <BottomNav />
    </>
  )
}
