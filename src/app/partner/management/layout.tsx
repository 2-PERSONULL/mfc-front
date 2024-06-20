'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import GoBackHeader from '@/components/layouts/GoBackHeader'

const titleMap: { [key: string]: string } = {
  menu: '마이페이지',
  profile: '프로필 관리',
  alert: '알림 목록',
  cash: '정산관리',
  account: '계정관리',
  history: '이용내역조회',
  exchange: '캐시 환전',
  bankaccount: '정산계좌관리',
  schedule: '스케줄 관리',
}

export default function PartnerManageMentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname()
  const lastPart = pathName.split('/').pop() || ''

  return (
    <>
      <GoBackHeader title={titleMap[lastPart] || '마이페이지'} />
      <main>{children}</main>
    </>
  )
}
