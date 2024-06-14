'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

function Page() {
  const searchParams = useSearchParams()
  const status = Number(searchParams.get('status'))

  return (
    <div>
      {status && status === 200 ? (
        <h1> 결제가 완료되었습니다.</h1>
      ) : (
        <h1>결제에 실패했습니다.</h1>
      )}
    </div>
  )
}

export default Page
