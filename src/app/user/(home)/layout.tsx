import React from 'react'
import BottomNav from '@/components/layouts/BottomNav'
import CommonHeader from '@/components/layouts/CommonHeader'

export default async function UserHomelayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CommonHeader />
      {children}
      <BottomNav />
    </>
  )
}
