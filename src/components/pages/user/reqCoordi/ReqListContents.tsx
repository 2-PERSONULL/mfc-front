'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getRequestList } from '@/actions/user/UserRequest'
import { BaseResponseType } from '@/types/baseResponseType'
import EachRequest from '../requestList/EachRequest'
import useObserver from '@/hooks/useObserver'

interface RequestListType {
  requestId: string
  title: string
}

export default function ReqListContents() {
  const router = useRouter()
  const [page, setPage] = useState(0)
  const [isLast, setIsLast] = useState(true)
  console.log(isLast)
  const [requestList, setRequestList] = useState<RequestListType[]>([])

  const loadMoreRequests = async () => {
    const data: BaseResponseType | null = await getRequestList(page)
    if (data !== null) {
      const newRequestData = data.result as RequestListType[]
      if (newRequestData.length === 0) {
        setIsLast(false)
      } else {
        setRequestList((prev) => [...prev, ...newRequestData])
        setPage((prev) => prev + 1)
      }
    } else {
      setIsLast(false)
      console.log('No data received')
    }
  }

  const observerRef = useObserver({
    onIntersect: loadMoreRequests,
    enabled: isLast,
  })

  return (
    <div className="w-full min-h-screen pt-[50px]">
      <div className="fixed top-[50px] w-full px-5 py-3 border border-t bg-white">
        <button type="button" className="text-blue-600 font-bold text-sm">
          <Link href="/user/mypage/reqlist/newreq">+ 신규 요청서</Link>
        </button>
      </div>
      {requestList.map((request: RequestListType) => (
        <button
          type="button"
          onClick={() =>
            router.push(`/user/mypage/reqlist/${request.requestId}`)
          }
          key={request.requestId}
          className="w-full text-start"
        >
          <EachRequest title={request.title} />
        </button>
      ))}
      <div ref={observerRef} />
    </div>
  )
}
