'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import GoBackHeader from '@/components/layouts/GoBackHeader'
import BottomNav from '@/components/layouts/BottomNav'
import FloatingButton from '@/components/common/FloatingButton'
import { TitleMapKey } from '@/types/titleMapType'
import titleMap from '@/libs/myPageTitleMap'

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const search = usePathname()
  const [title, setTitle] = useState('')
  const [confirmCheck, setConfirmCheck] = useState(false)

  useEffect(() => {
    const keys = Object.keys(titleMap) as TitleMapKey[]
    keys.forEach((key) => {
      if (search.endsWith(key)) {
        setTitle(titleMap[key])
        setConfirmCheck(
          [
            'editstyle',
            'editbodyinfo',
            'editsize',
            'newreq',
            'editrequest',
          ].includes(key),
        )
      }
    })

    if (search.includes('reqlist/') && /\/reqlist\/\d+$/.test(search)) {
      setTitle('요청서 상세')
    }
  }, [search])

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
      {search.endsWith('reqlist' || 'likelist' || 'followlist') && (
        <FloatingButton />
      )}
      {search.endsWith('mypage') && <BottomNav />}
    </>
  )
}
