'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useObserver from '@/hooks/useObserver'
import getFollowList from '@/actions/user/UserFollowList'
import {
  FollwedListType,
  UserFollowedPartnerListType,
} from '@/types/userFollowedPartnerListType'

export default function FollowedPartnerList({
  initData,
  fetchNum,
}: {
  initData: FollwedListType
  fetchNum: number
}) {
  const [offset, setOffset] = useState(1)
  const [likedData, setLikedData] = useState<UserFollowedPartnerListType[]>(
    initData.partners,
  )
  const [isLastData, setIsLastData] = useState(initData.last)

  const loadMorePosts = async () => {
    console.log('loadMorePosts')
    if (isLastData) return

    const { partners, last } = await getFollowList(offset, fetchNum, '')
    console.log(last)
    setIsLastData(last)
    setLikedData((prevPosts) => [...prevPosts, ...partners])
    setOffset((prevOffset) => prevOffset + 1)
  }

  const observerRef = useObserver({
    onIntersect: loadMorePosts,
    enabled: !isLastData,
  })
  return (
    <section>
      <div>
        {likedData.map((like, idx) => (
          <Link
            href={`/user/coordinator/${like.partnerId}/profile`}
            key={idx}
            className="flex py-5 gap-5 items-center justify-start border-b-2 "
          >
            <Image
              src={like.profileImage}
              alt={like.imageAlt}
              width={80}
              height={80}
              className="rounded-full"
            />
            <p className="text-lg font-semibold">{like.nickname}</p>
          </Link>
        ))}
      </div>
      <div ref={observerRef} />
    </section>
  )
}
