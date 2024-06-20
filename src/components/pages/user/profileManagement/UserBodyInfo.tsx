import React from 'react'
import UserProfileEditButton from '@/components/ui/button/UserProfileEditButton'
import { UserBodyInfoType } from '@/types/userInfoType'

export default function UserBodyInfo({
  title,
  href,
  info,
}: {
  title: string
  href: string
  info: UserBodyInfoType | null
}) {
  return (
    <section className="w-full bg-white border-b border-b-gray-200 py-8">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[18px] font-bold mr-2">{title}</p>
        <UserProfileEditButton href={href} />
      </div>
      <ul
        className={`flex ${Array.isArray(info) ? 'flex-row' : 'flex-col'} gap-3 text-sm`}
      >
        {info &&
          Object.entries(info).map(([key, value]) => (
            <li key={key} className="flex gap-2">
              <p>{key}:</p>
              <p>{value !== null ? value : '정보 없음'}</p>
            </li>
          ))}
      </ul>
    </section>
  )
}
