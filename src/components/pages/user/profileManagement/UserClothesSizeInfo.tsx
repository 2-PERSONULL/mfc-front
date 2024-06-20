import React from 'react'
import UserProfileEditButton from '@/components/ui/button/UserProfileEditButton'
import { UserClothesSizeInfoType } from '@/types/userInfoType'

export default function UserClothesSizeInfo({
  title,
  href,
  info,
}: {
  title: string
  href: string
  info: UserClothesSizeInfoType | null
}) {
  const translateKey = (key: string) => {
    switch (key) {
      case 'topSize':
        return '상의'
      case 'bottomSize':
        return '하의'
      case 'shoeSize':
        return '신발'
      default:
        return key
    }
  }
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
              <p>{translateKey(key)}:</p>
              <p>{value !== null ? value : '정보 없음'}</p>
            </li>
          ))}
      </ul>
    </section>
  )
}
