import React from 'react'
import BottomNav from '@/components/layouts/BottomNav'

export default async function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <BottomNav />
    </>
  )
}
