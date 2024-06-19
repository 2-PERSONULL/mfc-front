'use client'

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { updateLikeStatus } from '@/actions/user/Bookmark'

export default function LikeButton({
  isLike,
  postId,
}: {
  isLike?: boolean
  postId: number
}) {
  const role = usePathname().startsWith('/partner') ? 'partner' : 'user'

  const onClickHandler = async () => {
    await updateLikeStatus(postId, isLike ? 'DELETE' : 'POST')
  }

  if (role === 'partner')
    return (
      <Image
        src={`${process.env.NEXT_PUBLIC_AWS_BUCKET_URL}icon/heart.svg`}
        alt="edit icon"
        width={25}
        height={25}
      />
    )

  return (
    <button
      type="button"
      onClick={onClickHandler}
      style={{
        animation: isLike ? 'smallScale 0.5s ease-in-out' : 'none',
      }}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_AWS_BUCKET_URL}icon/${isLike ? 'fillHeart' : 'heart'}.svg`}
        alt="edit icon"
        width={25}
        height={25}
      />
    </button>
  )
}
