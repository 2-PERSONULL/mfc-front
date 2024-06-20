import React from 'react'
import UserProfileEditButton from '@/components/ui/button/UserProfileEditButton'
import { UserStyleType } from '@/types/userInfoType'

export default function UserPreferenceStyleInfo({
  title,
  href,
  info,
}: {
  title: string
  href: string
  info: UserStyleType | null
}) {
  const favoriteStyleNames = info?.favoriteStyles
    .map((item) => item.name)
    .filter((name) => name)
    .join(', ')

  return (
    <section className="w-full bg-white border-b border-b-gray-200 py-8">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[18px] font-bold mr-2">{title}</p>
        <UserProfileEditButton href={href} />
      </div>
      <div className="flex gap-3">
        {favoriteStyleNames ? (
          <p className="text-black">{favoriteStyleNames}</p>
        ) : (
          <p className="text-black">선호 스타일 정보가 없습니다</p>
        )}
      </div>
    </section>
  )
}
