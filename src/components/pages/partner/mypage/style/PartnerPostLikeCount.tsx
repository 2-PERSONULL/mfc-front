import React from 'react'
import LikeButton from '@/components/ui/button/LikeButton'
import { getLikeStatus } from '@/actions/user/Bookmark'

export default async function PartnerPostLikeCount({
  likeCount,
  postId,
}: {
  likeCount: number
  postId: number
}) {
  const isLike = await getLikeStatus(postId)

  return (
    <section className="w-full h-[55px] px-5 p-3 flex">
      <LikeButton isLike={isLike} postId={postId} />
      <span className="ml-2">{likeCount}</span>
    </section>
  )
}
