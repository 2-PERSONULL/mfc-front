import Link from 'next/link'
import React from 'react'

export default function UserMyPage() {
  return (
    <div>
      <h1>유저 마이페이지입니다.</h1>
      <div className="flex flex-col gap-5 items-center justify-around">
        <button
          type="button"
          className="bg-blue-500 px-3 py-3 rounded-xl w-full"
        >
          <Link href="/user/mypage/profile">프로필 관리</Link>
        </button>
        <button
          type="button"
          className="bg-yellow-500 px-3 py-3 rounded-xl w-full"
        >
          <Link href="/user/mypage/reqlist">요청서 관리</Link>
        </button>
      </div>
    </div>
  )
}
