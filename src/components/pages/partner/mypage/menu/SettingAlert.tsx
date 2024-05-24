'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import CommonToggle from '@/components/ui/toggle/CommonToggle'

export default function SettingAlert() {
  const [isChecked, setIsChecked] = useState(true)

  return (
    <div className="flex border border-gray-200 rounded-[6px] mx-5 mt-3 h-[70px] items-center justify-between px-4">
      <div className="flex">
        <Image
          src="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/icon/alert.svg"
          alt="logout"
          width={24}
          height={24}
          className="mr-4"
        />
        <p>알림 설정</p>
      </div>
      <CommonToggle isChecked={isChecked} setIsChecked={setIsChecked} />
    </div>
  )
}
