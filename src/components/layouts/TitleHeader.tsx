'use client'

import React from 'react'

const TitleHeader = ({ title }: { title: string }) => {
  return (
    <header className="sticky z-[200] top-0 h-[60px] px-5 py-[15px] flex justify-between bg-black">
      <h1 className="text-white text-[18px] font-bold align-middle flexitems-center">
        {title}
      </h1>
      {/* <div className="flex gap-3">
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
      </div> */}
    </header>
  )
}

export default TitleHeader
