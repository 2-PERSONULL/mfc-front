import React from 'react'
import { signIn } from 'next-auth/react'

export default function KakaoSignInButton() {
  return (
    <div>
      <button
        type="button"
        onClick={() => signIn('kakao')}
        className="bg-yellow-400 text-black font-bold mx-5 py-2 px-4 rounded-xl"
      >
        카카오 로그인
      </button>
    </div>
  )
}
