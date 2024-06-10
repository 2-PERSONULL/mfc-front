'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function SeperatedButton() {
  const router = useRouter()
  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => router.back()}
        className="bg-gray-400 w-1/2 text-white py-3 text-lg"
      >
        취소
      </button>
      <button type="submit" className="bg-black w-1/2 text-white py-3 text-lg">
        예약
      </button>
    </div>
  )
}
