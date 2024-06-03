import React from 'react'
import Link from 'next/link'
import CoordinationRequest from '../requestList/CoordinationRequest'
import SpecifyDate from './SpecifyDate'
import SeperatedButton from '@/components/ui/button/SeperatedButton'

export default function ReqCoordiInfo() {
  return (
    <div>
      <div className="w-full bg-white py-4 border border-gray-400 px-6 grid gap-2">
        <p>내 코디 요청서</p>
        <Link
          href="/user/mypage/reqlist"
          className="border border-black rounded-full py-3 bg-gray-300 border-none text-black text-center"
        >
          <p>요청서 선택</p>
        </Link>
        <CoordinationRequest />
      </div>
      <SpecifyDate />
      <SeperatedButton />
    </div>
  )
}
