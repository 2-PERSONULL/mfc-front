import React from 'react'
import BottomNav from '@/components/layouts/BottomNav'
import CommonHeader from '@/components/layouts/CommonHeader'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CommonHeader />
      {children}
      <BottomNav />
    </>
  )
}
