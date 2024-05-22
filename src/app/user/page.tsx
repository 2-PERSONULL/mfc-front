import React from 'react'
import Link from 'next/link'
import { auth } from '@/auth'
import SignOutButton from '@/components/pages/auth/SignOutButton'

export default async function UserHome() {
  const session = await auth()
  // console.log(session)
  return (
    <div>
      <p>유저 홈 화면입니다.</p>
      <div className="flex justify-center">
        <Link href="/explore">
          <p className="text-black font-bold mx-5 my-5 py-2 px-4 rounded-xl text-center">
            탐색 페이지
          </p>
        </Link>
        <Link href="/ranking">
          <p className="text-black font-bold mx-5 my-5 py-2 px-4 rounded-xl text-center">
            랭킹 페이지
          </p>
        </Link>
        <Link href="/user/mypage">
          <p className="text-black font-bold mx-5 my-5 py-2 px-4 rounded-xl text-center">
            유저 마이페이지
          </p>
        </Link>
        <Link href="/user/chats">
          <p className="text-black font-bold mx-5 my-5 py-2 px-4 rounded-xl text-center">
            유저 채팅페이지
          </p>
        </Link>
      </div>
      {session ? (
        <>
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <SignOutButton />
        </>
      ) : (
        <Link href="/signin">
          <p className="bg-blue-400 text-black font-bold mx-5 my-5 py-2 px-4 rounded-xl text-center">
            로그인 ㄱㄱ
          </p>
        </Link>
      )}
    </div>
  )
}
