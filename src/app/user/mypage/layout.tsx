'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import BottomNav from '@/components/layouts/BottomNav'

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const search = usePathname()
  let title = '마이페이지'

  const confirmCheck =
    search.endsWith('editstyle') ||
    search.endsWith('editbodytype') ||
    search.endsWith('editsize') ||
    search.endsWith('newreq') ||
    search.endsWith('editrequest')

  if (search.endsWith('profile')) {
    title = '프로필 관리'
  } else if (search.endsWith('editstyle')) {
    title = '선호 스타일 수정'
  } else if (search.endsWith('editbodyinfo')) {
    title = '신체 정보 수정'
  } else if (search.endsWith('editsize')) {
    title = '옷 사이즈 수정'
  } else if (search.endsWith('reqlist')) {
    title = '요청서 관리'
  } else if (search.endsWith('newreq')) {
    title = '신규 요청서 작성'
  } else if (search.endsWith('editrequest')) {
    title = '요청서 수정'
  } else if (search.includes('reqlist/') && /\/reqlist\/\d+$/.test(search)) {
    title = '요청서 상세'
  }
  return (
    <>
      {!search.endsWith('mypage') ? (
        <GoBackHeader title={title} confirmExit={confirmCheck && true} />
      ) : (
        <header className="px-5 py-[15px] bg-white border border-b">
          <h1 className="text-black text-[18px] font-bold align-middle flex items-center">
            MY PAGE
          </h1>
        </header>
      )}
      {children}
      {search.endsWith('mypage') && <BottomNav />}
    </>
  )
}
