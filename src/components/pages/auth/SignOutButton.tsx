import React from 'react'
import { signOut } from '@/auth'

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server'

        await signOut()
      }}
    >
      <button
        type="submit"
        className="bg-blue-400 text-black font-bold mx-5 my-5 py-2 px-4 rounded-xl"
      >
        로그아웃
      </button>
    </form>
  )
}
