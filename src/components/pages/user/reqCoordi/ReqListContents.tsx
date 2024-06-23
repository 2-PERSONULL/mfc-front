'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getRequestList } from '@/actions/user/UserRequest'
import { BaseResponseType } from '@/types/baseResponseType'
import EachRequest from '../requestList/EachRequest'
import useObserver from '@/hooks/useObserver'
import { Table, TableBody, TableRow } from '@/components/ui/table'

export interface RequestListType {
  requestId: string
  title: string
}

export default function ReqListContents() {
  const router = useRouter()
  const [page, setPage] = useState(0)
  const [isLast, setIsLast] = useState(false)
  const [requestList, setRequestList] = useState<RequestListType[]>([])

  const loadMoreRequests = async () => {
    const data: BaseResponseType | null = await getRequestList(page)
    if (data !== null) {
      const newRequestData = data.result as RequestListType[]
      if (newRequestData.length === 0) {
        setIsLast(true)
      } else {
        setRequestList((prev) => [...prev, ...newRequestData])
        setPage((prev) => prev + 1)
      }
    } else {
      setIsLast(true)
      console.log('No data received')
    }
  }

  const observerRef = useObserver({
    onIntersect: loadMoreRequests,
    enabled: !isLast,
  })

  return (
    <section className="w-full min-h-screen pt-[50px]">
      <section className="fixed top-[50px] w-full px-5 py-3 border border-t bg-white z-[20]">
        <div className="text-blue-600 font-bold text-sm">
          <Link href="/user/mypage/reqlist/newreq">+ 신규 요청서</Link>
        </div>
      </section>
      <section>
        <Table>
          <TableBody>
            {requestList.map((request: RequestListType) => (
              <TableRow
                key={request.requestId}
                className="w-full flex cursor-pointer"
                onClick={() =>
                  router.push(`/user/mypage/reqlist/${request.requestId}`)
                }
              >
                <EachRequest title={request.title} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <div ref={observerRef} />
    </section>
  )
}
