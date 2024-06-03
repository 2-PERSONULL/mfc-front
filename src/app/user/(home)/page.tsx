import React from 'react'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import SignOutButton from '@/components/pages/auth/SignOutButton'
import { options } from '@/app/api/auth/[...nextauth]/options'

export default async function UserHome() {
  const session = await getServerSession(options)
  return (
    <div>
      <p>유저 홈 화면입니다.</p>
      <div className="flex justify-around">
        <Link href="/explore">
          <p className="text-black font-bold rounded-xl text-center">Explore</p>
        </Link>
        <Link href="/ranking">
          <p className="text-black font-bold rounded-xl text-center">Ranking</p>
        </Link>
        <Link href="/user/mypage">
          <p className="text-black font-bold rounded-xl text-center">MyPage</p>
        </Link>
        <Link href="/user/chats">
          <p className="text-black font-bold rounded-xl text-center">Chats</p>
        </Link>
      </div>
      {session ? (
        <>
          <pre className="text-wrap">
            {JSON.stringify(session.user, null, 2)}
          </pre>
          <SignOutButton />
        </>
      ) : (
        <>
          <Link href="/signin">
            <p className="bg-black text-white font-bold mx-5 my-5 py-2 px-4 rounded-xl text-center">
              로그인
            </p>
          </Link>
          <Link href="/signup">
            <p className="text-black font-bold mx-5 my-5 py-2 px-4 rounded-xl text-center">
              회원가입
            </p>
          </Link>
          <Link href="/user/coordinator/1/reqcoordi">코디 예약</Link>
        </>
      )}
    </div>
  )
}
