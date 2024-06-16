import React from 'react'
import UserProfileEditButton from '@/components/ui/button/UserProfileEditButton'

export default function UserPreferrenceStyleInfo({ href }: { href: string }) {
  return (
    <div className="w-full bg-white pb-1">
      <div className="flex items-center justify-between">
        <p className="text-gray-500">선호 스타일</p>
        <UserProfileEditButton href={href} />
      </div>
      {/* 스타일 정보 배치 다시 생각해보기 */}
      <ul className="flex flex-row gap-3">
        <li>스타일 1</li>
        <li>스타일 2</li>
        <li>스타일 3</li>
      </ul>
      <div className="border border-gray-300 mt-1" />
    </div>
  )
}
