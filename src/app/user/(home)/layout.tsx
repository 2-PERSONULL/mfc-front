import React from 'react'
import BottomNav, { SessionType } from '@/components/layouts/BottomNav'
import { auth } from '@/auth'

export default async function layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session: SessionType | null = (await auth()) as SessionType
  return (
    <>
      {children}
      <BottomNav session={session} />
    </>
  )
}
