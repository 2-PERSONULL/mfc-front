import Link from 'next/link'
import React from 'react'

export default function UserMyPage() {
  return (
    <main>
      <p>유저 마이페이지입니다.</p>
      <section className="flex flex-col gap-5 items-center justify-around">
        <Link
          href="/user/mypage/profile"
          className="bg-blue-500 px-3 py-3 rounded-xl w-full"
        >
          프로필 관리
        </Link>
        <Link
          href="/user/mypage/reqlist"
          className="bg-yellow-500 px-3 py-3 rounded-xl w-full"
        >
          요청서 관리
        </Link>
      </section>
    </main>
  )
}
