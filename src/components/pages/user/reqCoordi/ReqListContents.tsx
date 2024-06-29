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
    <section className="w-full min-h-full pt-[50px]">
      <section className="fixed top-[50px] w-full px-5 py-3 border border-t border-black bg-black z-[20]">
        <Link
          href="/user/mypage/reqlist/newreq"
          className="text-white font-medium text-sm text-center tracking-widest"
        >
          <p>+ 신규 요청서 작성</p>
        </Link>
      </section>
      <section>
        {requestList.length !== 0 ? (
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
        ) : (
          <p className="text-center mt-10 text-gray-500">
            조회된 데이터가 없습니다.
          </p>
        )}
      </section>
      <div ref={observerRef} />
    </section>
  )
}
