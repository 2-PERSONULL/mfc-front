'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { updateLikeStatus } from '@/actions/user/Bookmark'

export default function LikeButton({
  isLike,
  postId,
  likeCount,
}: {
  isLike?: boolean
  postId: number
  likeCount: number
}) {
  const [likeNum, setLikeNum] = useState<number>(likeCount)
  const role = usePathname().startsWith('/partner') ? 'partner' : 'user'

  const onClickHandler = async () => {
    await updateLikeStatus(postId, isLike ? 'DELETE' : 'POST')
    setLikeNum(isLike ? likeNum - 1 : likeNum + 1)
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
    <section className="w-full h-[55px] px-5 p-3 flex items-center">
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
      <span className="ml-3 font-semibold">좋아요 {likeNum}개</span>
    </section>
  )
}
