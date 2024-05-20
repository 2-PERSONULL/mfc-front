'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Test() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/signup')
    }, 1000)

    return () => clearTimeout(timer) // 컴포넌트가 언마운트되면 타이머를 취소합니다.
  }, [router])
  return <div>기다리셈</div>
}
