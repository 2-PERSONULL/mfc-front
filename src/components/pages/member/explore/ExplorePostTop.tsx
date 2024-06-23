'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import CircleProfile from '@/components/ui/avatar/CircleProfile'

export default function ExplorePostTop({
  nickname,
  profileImage,
  partnerId,
}: {
  nickname: string
  profileImage: string
  partnerId: string
}) {
  const router = useRouter()

  return (
    <section className="w-full h-[fit] border-t border-t-gray-200 flex items-center justify-between px-6 py-3">
      <div
        className="flex gap-3 h-full items-center"
        role="presentation"
        onClick={() => router.push(`/user/coordinator/${partnerId}/profile`)}
      >
        <CircleProfile imageUrl={profileImage} size={40} />
        <span className="font-semibold">{nickname}</span>
      </div>
    </section>
  )
}
