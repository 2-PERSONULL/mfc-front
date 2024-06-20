import React from 'react'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import SignOutButton from '@/components/pages/auth/SignOutButton'
import { options } from '@/app/api/auth/[...nextauth]/options'

export default async function UserHome() {
  const session = await getServerSession(options)
  return (
    <main>
      <p>유저 홈 화면입니다.</p>
      {session ? (
        <>
          <pre className="text-wrap">
            {JSON.stringify(session.user, null, 2)}
          </pre>
          <Link
            href="/user/coordinator/1/reqcoordi"
            className="px-5 py-3 bg-green-500 text-white rounded-2xl"
          >
            코디 예약
          </Link>
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
        </>
      )}
    </main>
  )
}
