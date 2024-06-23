'use client'

import React from 'react'

const TitleHeader = ({ title }: { title: string }) => {
  return (
    <header className="px-5 py-[15px] bg-white border border-b">
      <h1 className="text-black text-[18px] font-bold align-middle flex items-center">
        {title}
      </h1>
    </header>
  )
}

export default TitleHeader
