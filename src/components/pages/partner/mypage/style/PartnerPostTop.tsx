import React from 'react'
import MoreButton from '@/components/ui/button/MoreButton'

export default function PartnerPostTop() {
  return (
    <div className="w-full h-[50px] border-t border-t-gray-200 flex items-center justify-between px-3">
      <h1>파트너 이미지 / 닉네임</h1>
      <MoreButton />
    </div>
  )
}
