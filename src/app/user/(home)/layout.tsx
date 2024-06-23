import React from 'react'
import BottomNav from '@/components/layouts/BottomNav'
import HomeHeader from '@/components/pages/member/home/HomeHeader'

export default async function UserHomelayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HomeHeader />
      {children}
      <BottomNav />
    </>
  )
}
