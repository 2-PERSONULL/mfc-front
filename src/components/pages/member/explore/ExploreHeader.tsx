import React from 'react'
import Image from 'next/image'

export default function ExploreHeader() {
  return (
    <header className="h-[50px] px-5 py-[15px] bg-white">
      <Image src="/icons/mfc-2.svg" alt="logo" width={55} height={55} />
    </header>
  )
}
