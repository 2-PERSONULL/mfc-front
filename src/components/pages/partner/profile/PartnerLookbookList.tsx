'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PartnerPostListType } from '@/types/partnerPostTypes'
import { getPartnerPost } from '@/actions/partner/PartnerPost'
import useObserver from '@/hooks/useObserver'

export default function PartnerLookbookList({
  initialData,
  isLast,
  fetchNum,
}: {
  initialData: PartnerPostListType[]
  isLast: boolean
  fetchNum: number
}) {
  const pathName = usePathname()
  const [offset, setOffset] = useState(1)
  const [postList, setPostList] = useState<PartnerPostListType[]>(initialData)
  const [isLastData, setIsLastData] = useState(isLast)

  const getPathName = () => {
    if (pathName.startsWith('/user')) {
      return `${pathName.replace('/profile', '/posts')}`
    }
    return `/partner/mypage/styles`
  }

  const loadMorePosts = async () => {
    if (isLastData) return

    const { posts, last } = await getPartnerPost('', offset, fetchNum)

    setIsLastData(last)
    setPostList((prevPosts) => [...prevPosts, ...posts])
    setOffset((prevOffset) => prevOffset + 1)
  }

  const observerRef = useObserver({
    onIntersect: loadMorePosts,
    enabled: !isLastData,
  })

  return (
    <section className="grid grid-cols-2 gap-2">
      {postList.map((post) => (
        <Link
          key={post.postId}
          href={`${getPathName()}/${post.postId}`}
          className="relative h-[190px] mb-1"
        >
          <Image
            src={post.imageUrl}
            alt={post.alt}
            fill
            sizes="(max-width: 100px) 100vw, 100px"
            className="object-cover rounded-[12px] h-full w-full"
          />
        </Link>
      ))}
      <div ref={observerRef} />
    </section>
  )
}
