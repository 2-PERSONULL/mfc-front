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

  return <LikeButton isLike={isLike} postId={postId} likeCount={likeCount} />
}
