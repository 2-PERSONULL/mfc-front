import React from 'react'
import BackArrowButton from '@/components/ui/button/BackArrowButton'

export default async function PartnerProfileHeader() {
  return (
    <header className="w-full h-[50px] z-[10] fixed top-0 left-0 bottom-0 flex items-center pl-4">
      <BackArrowButton />
    </header>
  )
}
