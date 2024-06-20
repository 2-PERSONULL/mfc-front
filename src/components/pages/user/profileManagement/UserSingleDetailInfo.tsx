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
    <section className="w-full bg-white border-b border-b-gray-200 py-8">
      {edit ? (
        <div className="flex items-center justify-between mb-2">
          <p className="text-gray-500">{title}</p>
          {href && <UserProfileEditButton href={href} />}
        </div>
      ) : (
        <p className="text-[18px] font-bold mr-2 mb-2">{title}</p>
      )}
      <p className="text-sm">{value}</p>
    </section>
  )
}
