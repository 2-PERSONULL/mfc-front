'use client'

import React from 'react'
import useToast from '@/stores/toast'

export default function Toast() {
  const { toast } = useToast()

  return (
    <div className="font-Pretendard w-[80%] min-h-auto py-2 mx-auto z-[9999] fixed top-[30%] left-[50%] translate-x-[-50%] border border-slate-200 bg-white rounded-xl shadow-xl">
      <div className="">
        <p className="px-[20px] py-[30px] text-[14px] text-center whitespace-pre-wrap">
          {toast.content}
        </p>
      </div>
    </div>
  )
}
