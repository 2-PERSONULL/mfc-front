/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useObserver from '@/hooks/useObserver'
import {
  PartnerPostsByCategoryType,
  PartnerPostListType,
} from '@/types/partnerPostsByCategoryType'
import { getPartnerPostsByCategory } from '@/actions/member/Explore'

export default function ExplorePosts({
  initData,
  fetchNum,
}: {
  initData: PartnerPostsByCategoryType
  fetchNum: number
}) {
  const [offset, setOffset] = useState(1)
  const [postsData, setPostsData] = useState<PartnerPostListType[]>(
    initData.posts,
  )
  const [isLastData, setIsLastData] = useState(initData.last)

  const loadMorePosts = async () => {
    console.log('loadMorePosts')
    if (isLastData) return

    const { posts, last } = await getPartnerPostsByCategory(
      offset,
      fetchNum,
      '',
    )
    console.log(last)
    setIsLastData(last)
    setPostsData((prevPosts) => [...prevPosts, ...posts])
    setOffset((prevOffset) => prevOffset + 1)
  }

  const observerRef = useObserver({
    onIntersect: loadMorePosts,
    enabled: !isLastData,
  })

  return (
    <>
      <section className="w-full min-h-screen pb-[120px]">
        <div className="grid grid-cols-2 w-full text-center gap-2">
          {postsData.map((post) => (
            <Link
              href={`/user/coordinator/${post.partnerId}/posts/${post.postId}`}
              key={post.postId}
              className="w-[100%] relative min-h-[200px] "
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
        <div ref={observerRef} />
      </section>
      {/* {isModalOpen && (
        <Modal title="탐색" closeModal={() => setIsModalOpen(false)}>
          <ExplorePostDetail partnerId={partnerId} postId={postId} />
        </Modal>
      )} */}
    </>
  )
}
