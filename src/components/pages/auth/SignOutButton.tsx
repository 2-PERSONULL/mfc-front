'use client'

import React from 'react'
import { signOut } from 'next-auth/react'

export default function SignOutButton() {
  return (
    <div>
      <button
        onClick={() => signOut()}
        type="submit"
        className="bg-blue-400 text-black font-bold mx-5 my-5 py-2 px-4 rounded-xl"
      >
        로그아웃
      </button>
    </div>
  )
}
