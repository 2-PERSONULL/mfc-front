'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import CoordinationRequest from '../requestList/CoordinationRequest'
import SpecifyDate from './SpecifyDate'
import StretchedRoundedButton from '@/components/ui/button/StretchedRoundedButton'

export default function ReqCoordiInfo() {
  const [deadline, setDeadline] = useState('')
  console.log(deadline)
  return (
    <form className="w-full min-h-full">
      <div className="w-full bg-white py-6 border border-gray-400 px-6 grid gap-2">
        <p>코디 요청서</p>
        <Link
          href="/user/mypage/reqlist"
          className="border border-black rounded-full py-3 bg-gray-300 border-none text-black text-center"
        >
          <p>요청서 선택</p>
        </Link>
        <CoordinationRequest
          title="요청서 1"
          situation="상황"
          description="이런저런 내용"
        />
      </div>
      <SpecifyDate deadline={setDeadline} />
      <div className="fixed bottom-5 w-full left-0 right-0 px-6">
        <StretchedRoundedButton
          comment="예약"
          // 파트너 정보 연결 후 수정 진행 예정
          clickHandler={() => console.log('asd')}
        />
      </div>
    </form>
  )
}
