'use client'

import React from 'react'
import Link from 'next/link'
import CoordinationRequest from '../requestList/CoordinationRequest'

export default function ReqListContents() {
  return (
    <div className="w-full min-h-screen">
      <div className="px-5 py-3 border-t border-gray-400">
        <button type="button" className="text-blue-600 font-bold text-sm">
          <Link href="/user/mypage/reqlist/newreq">+ 신규 요청서</Link>
        </button>
      </div>
      <CoordinationRequest
        title="요청서 1"
        situation="상황"
        description="이런저런 내용"
      />
    </div>
  )
}
