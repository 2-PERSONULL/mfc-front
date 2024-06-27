import React from 'react'
import Link from 'next/link'

export default function SignUpButton() {
  return (
    <Link
      href="/signup"
      className="text-center bg-white text-black border-2 border-black font-bold w-full rounded-full py-3 mt-3"
    >
      이메일로 회원가입하기
    </Link>
  )
}
