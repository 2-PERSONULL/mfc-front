'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { updateLikeStatus } from '@/actions/user/Bookmark'
import useClientSession from '@/hooks/useClientSession'
import useConfirmStore from '@/stores/confirm'
import useRole from '@/hooks/useRole'

export default function LikeButton({
  isLike,
  postId,
  initialCount,
}: {
  isLike?: boolean
  postId: number
  initialCount: number
}) {
  const role = useRole()
  const { uuid } = useClientSession()
  const path = usePathname()
  const router = useRouter()
  const [likeStatus, setLikeStatus] = useState<boolean | undefined>(isLike)
  const [likeNum, setLikeNum] = useState<number>(initialCount)
  const { openConfirmModal } = useConfirmStore()

  const onClickHandler = async () => {
    if (uuid) {
      updateLikeStatus(postId, likeStatus ? 'DELETE' : 'POST')
      // 개수 1분에 한번씩 갱신되어 임의로 화면을 바꿔줌

      let newCount = likeNum
      if (likeStatus) {
        newCount = Math.max(0, likeNum - 1)
      } else {
        newCount += 1
      }
      setLikeNum(newCount)
      setLikeStatus(!likeStatus)
      return
    }

    const confirm = await openConfirmModal({
      content: `로그인이 필요한 서비스입니다.\n 로그인 페이지로 이동하시겠습니까?`,
    })

    if (confirm) {
      router.push(`/signin?callbackUrl=${path}`)
    }
  }

  if (role === 'PARTNER')
    return <span className="font-semibold">좋아요 {likeNum}개</span>

  return (
    <>
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
    </>
  )
}
