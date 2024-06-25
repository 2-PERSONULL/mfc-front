import React from 'react'
import BottomNav from '@/components/layouts/BottomNav'
import HomeHeader from '@/components/pages/member/home/HomeHeader'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HomeHeader />
      {children}
      <BottomNav />
    </>
  )
}
