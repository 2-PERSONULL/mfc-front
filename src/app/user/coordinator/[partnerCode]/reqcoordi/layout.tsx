import React from 'react'
import SeperatedButton from '@/components/ui/button/SeperatedButton'
// import BottomNav from '@/components/layouts/BottomNav'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SeperatedButton />
    </>
  )
}
