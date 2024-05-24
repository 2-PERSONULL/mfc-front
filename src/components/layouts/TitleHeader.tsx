'use client'

import React from 'react'

import { useRouter } from 'next/navigation'
import NotificationIcon from '../ui/icons/NotificationIcon'
import MenuLineIcon from '../ui/icons/MenuLineIcon'

const TitleHeader = ({ title, menu }: { title: string; menu: string }) => {
  const router = useRouter()

  return (
    <div className="sticky z-[200] top-0 h-[60px] px-5 py-[15px] flex justify-between bg-black">
      <h1 className="text-white text-[18px] font-bold align-middle flexitems-center">
        {title}
      </h1>
      <div className="flex gap-3">
        <button type="button">
          <NotificationIcon />
        </button>
        <button
          type="button"
          onClick={() => {
            router.push(menu)
          }}
        >
          <MenuLineIcon />
        </button>
      </div>
    </div>
  )
}

export default TitleHeader
