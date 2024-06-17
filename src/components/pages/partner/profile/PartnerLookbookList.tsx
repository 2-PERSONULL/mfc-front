'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PartnerPostListType } from '@/types/partnerPostTypes'
import { getPartnerPost } from '@/actions/partner/PartnerPost'
import useObserver from '@/hooks/useObserver'

const NUMBER_OF_FETCH = 10

export default function PartnerLookbookList({
  initialData,
  isLast,
}: {
  initialData: PartnerPostListType[]
  isLast: boolean
}) {
  const pathName = usePathname()
  const [offset, setOffset] = useState(1)
  const [postList, setPostList] = useState<PartnerPostListType[]>(initialData)
  const [isLastData, setIsLastData] = useState(isLast)
  const [observerEnabled, setObserverEnabled] = useState(false)
  const topRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // 초기 데이터 로드가 완료된 후에 Observer를 활성화합니다.
    setObserverEnabled(true)
  }, [])

  const getPathName = () => {
    if (pathName.startsWith('/user')) {
      return `${pathName.replace('/profile', '/posts')}`
    }
    return `/partner/mypage/styles`
  }

  const loadMorePosts = async () => {
    if (isLastData) return
    console.log('loadMorePosts')

    const { posts, last } = await getPartnerPost('', offset, NUMBER_OF_FETCH)

    setIsLastData(last)
    setPostList((prevPosts) => [...prevPosts, ...posts])
    setOffset((prevOffset) => prevOffset + 1)
  }

  const observerRef = useObserver({
    root: topRef.current,
    onIntersect: loadMorePosts,
    enabled: observerEnabled && !isLastData,
  })

  return (
    <section className="grid grid-cols-2 gap-2" ref={observerRef}>
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
    </section>
  )
}
