import React from 'react'
import CommonHeader from '@/components/layouts/CommonHeader'
import BottomNav from '@/components/layouts/BottomNav'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CommonHeader />
      {children}
      <BottomNav />
    </>
  )
}
