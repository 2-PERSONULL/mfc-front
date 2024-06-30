'use client'

import React from 'react'

const TitleHeader = ({ title }: { title: string }) => {
  return (
    <header className="fixed left-0 right-0 top-0 px-5 h-[50px] py-[15px] bg-white border-b z-10">
      <h1 className="text-black text-[18px] font-bold align-middle flex items-center">
        {title}
      </h1>
    </header>
  )
}

export default TitleHeader
