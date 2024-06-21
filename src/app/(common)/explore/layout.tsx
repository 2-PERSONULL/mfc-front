import React from 'react'
import BottomNav from '@/components/layouts/BottomNav'
import ExploreHeader from '@/components/pages/member/explore/ExploreHeader'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ExploreHeader />
      {children}
      <BottomNav />
    </>
  )
}
