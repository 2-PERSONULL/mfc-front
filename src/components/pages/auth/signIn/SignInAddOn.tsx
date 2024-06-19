import Link from 'next/link'
import React from 'react'

export default function SignInAddOn() {
  return (
    <section className="italic flex flex-col items-center justify-center mt-3">
      <p className="text-xs font-semibold text-rose-500 py-1">
        Forget Password
      </p>
      <div className="flex flex-row items-center gap-2">
        <p className="not-italic text-sm">Don&rsquo;t hand an account yet?</p>
        <Link href="/signup" className="text-sm font-bold text-rose-500">
          Sign UP
        </Link>
      </div>
    </section>
  )
}
