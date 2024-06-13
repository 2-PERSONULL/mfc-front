'use client'

import React from 'react'
import Image from 'next/image'
import useToast from '@/stores/toast'

export default function Toast() {
  const { content, type } = useToast()

  if (!content) {
    return null
  }

  return (
    <div className="w-full min-h-[40px] z-[900] fixed bottom-[20%] flex items-center justify-center animate-slide-up">
      <div className="w-auto max-w-[90%] flex items-center justify-center py-[13px] px-[30px] bg-[#242C32] bg-opacity-90 rounded-xl shadow-xl flex-shrink-0">
        {type && (
          <Image
            src={`https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/${type}.svg`}
            alt={type}
            width={23}
            height={23}
            className="mr-2 "
          />
        )}
        <p className="text-[13px] text-white">{content}</p>
      </div>
    </div>
  )
}
