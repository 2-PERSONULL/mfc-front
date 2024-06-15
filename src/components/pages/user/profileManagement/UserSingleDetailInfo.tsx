import React from 'react'
import UserProfileEditButton from '@/components/ui/button/UserProfileEditButton'

export default function UserSingleDetailInfo({
  title,
  value,
  href,
  edit,
}: {
  title: string
  value: string
  href?: string
  edit?: boolean
}) {
  return (
    <div className="w-full bg-white pt-2 pb-1">
      {edit ? (
        <div className="flex items-center justify-between">
          <p className="text-gray-500">{title}</p>
          {href && <UserProfileEditButton href={href} />}
        </div>
      ) : (
        <p className="text-gray-500">{title}</p>
      )}
      <p>{value}</p>
      <div className="border border-gray-300 mt-1" />
    </div>
  )
}
