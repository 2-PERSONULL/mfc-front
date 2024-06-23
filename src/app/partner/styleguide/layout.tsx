'use client'

import React from 'react'
import GoBackHeader from '@/components/layouts/GoBackHeader'

export default function PartnerStyleGuidelayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GoBackHeader title="스타일가이드" />
      <main>{children}</main>
    </>
  )
}
