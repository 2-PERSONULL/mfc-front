import React from 'react'
import LikeButton from '@/components/ui/button/LikeButton'

export default function PartnerPostLikeCount({
  likeCount,
}: {
  likeCount: number
}) {
  return (
    <div className="w-full p-3 flex">
      <LikeButton />
      <span className="ml-2">{likeCount}</span>
    </div>
  )
}
