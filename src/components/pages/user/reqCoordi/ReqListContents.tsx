'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getRequestList } from '@/actions/user/UserRequest'
import { BaseResponseType } from '@/types/baseResponseType'
import EachRequest from '../requestList/EachRequest'

interface RequestListType {
  requestId: string
  title: string
}

export default function ReqListContents() {
  const router = useRouter()
  const [requestList, setRequestList] = useState<RequestListType[]>([])
  useEffect(() => {
    const fetchRequestList = async () => {
      const data: BaseResponseType | null = await getRequestList()
      if (data !== null) {
        setRequestList(data.result as RequestListType[])
      } else {
        console.log('No data received')
      }
    }
    fetchRequestList()
  }, [])
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
    </div>
  )
}
