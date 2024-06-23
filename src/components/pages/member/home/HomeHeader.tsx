import React from 'react'
import Image from 'next/image'

export default function HomeHeader() {
  return (
    <header className="px-5 py-[15px] bg-white">
      <Image src="/icons/mfc.svg" alt="logo" width={55} height={55} />
    </header>
  )
}
