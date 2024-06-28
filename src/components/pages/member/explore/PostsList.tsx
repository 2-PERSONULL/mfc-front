/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useObserver from '@/hooks/useObserver'
import {
  PartnerPostsByCategoryType,
  PartnerPostListType,
} from '@/types/partnerPostsByCategoryType'
import { getPartnerPostsByCategory } from '@/actions/member/Explore'

export default function PostsList({
  initData,
  fetchNum,
  styleId,
  sort,
  search,
}: {
  initData: PartnerPostsByCategoryType
  fetchNum: number
  styleId: number | undefined
  sort: string
  search: string
}) {
  const [offset, setOffset] = useState(1)
  const [postsData, setPostsData] = useState<PartnerPostListType[]>(
    initData.posts,
  )
  const [isLastData, setIsLastData] = useState(initData.last)

  useEffect(() => {
    setPostsData(initData.posts)
    setIsLastData(initData.last)
    setOffset(1)
  }, [initData])

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts, last } = await getPartnerPostsByCategory(
        0,
        fetchNum,
        sort,
        styleId,
        search,
      )
      setPostsData(posts)
      setIsLastData(last)
      setOffset(1)
    }
    fetchPosts()
  }, [sort, fetchNum])

  const loadMorePosts = async () => {
    if (isLastData) return

    const { posts, last } = await getPartnerPostsByCategory(
      offset + 1,
      fetchNum,
      sort,
      styleId,
      search,
    )
    setIsLastData(last)
    setPostsData((prevPosts) => [...prevPosts, ...posts])
    setOffset((prevOffset) => prevOffset + 1)
  }

  const observerRef = useObserver({
    onIntersect: loadMorePosts,
    enabled: !isLastData,
  })

  return (
    <section className="w-full min-h-screen pb-[120px]">
      <div className="grid grid-cols-2 w-full text-center gap-2">
        {postsData.map((post) => (
          <Link
            href={`/user/coordinator/${post.partnerId}/posts/${post.postId}`}
            key={post.postId}
            className="w-[100%] relative min-h-[200px]"
          >
            <Image
              src={post.imageUrl}
              alt={post.alt}
              fill
              objectFit="cover"
              className="absolute rounded-md"
            />
          </Link>
        ))}
      </div>
      {postsData.length === 0 && (
        <p className="w-full text-center text-md mt-10">
          조건과 일치하는 게시물이 없습니다.
        </p>
      )}
      <div ref={observerRef} />
    </section>
  )
}
