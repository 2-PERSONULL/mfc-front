import React from 'react'
import UserProfileEditButton from '@/components/ui/button/UserProfileEditButton'

export default function UserMultiDetailInfo({
  title,
  href,
  info,
}: {
  title: string
  href: string
  info: object | object[]
}) {
  return (
    <div className="w-full bg-white pb-1">
      <div className="flex items-center justify-between">
        <p className="text-gray-500">{title}</p>
        <UserProfileEditButton href={href} />
      </div>
      <ul
        className={`flex ${Array.isArray(info) ? 'flex-row' : 'flex-col'} gap-3`}
      >
        {Array.isArray(info)
          ? info.map((item) => (
              <li key={item.id} className="flex gap-2">
                <p>{item.name}</p>
              </li>
            ))
          : Object.entries(info).map(([key, value]) => (
              <li key={key} className="flex gap-2">
                <p>{key} :</p>
                <p>{value}</p>
              </li>
            ))}
      </ul>
      <div className="border border-gray-300 mt-1" />
    </div>
  )
}
