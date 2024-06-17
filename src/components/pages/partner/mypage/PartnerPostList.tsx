'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import useObserver from '@/hooks/useObserver'
import { PartnerPostListType } from '@/types/partnerPostTypes'
import { getPartnerPost } from '@/actions/partner/PartnerPost'

const NUMBER_OF_FETCH = 20

export default function PartnerPostList({
  initialData,
  isLast,
}: {
  initialData: PartnerPostListType[]
  isLast: boolean
}) {
  const router = useRouter()
  const [offset, setOffset] = useState(1)
  const [postList, setPostList] = useState<PartnerPostListType[]>(initialData)
  const [isLastData, setIsLastData] = useState(isLast)

  const loadMorePosts = async () => {
    if (isLastData) return

    const { posts, last } = await getPartnerPost('', offset, NUMBER_OF_FETCH)

    setIsLastData(last)
    setPostList((prevPosts) => [...prevPosts, ...posts])
    setOffset((prevOffset) => prevOffset + 1)
  }

  const observerRef = useObserver({
    onIntersect: loadMorePosts,
    enabled: true,
  })

  return (
    <section className="pt-5 px-4 pb-[100px]">
      <div className="grid grid-cols-3 gap-2" ref={observerRef}>
        <button
          type="button"
          onClick={() => router.push('/partner/mypage/styles/edit')}
          className="w-full h-[110px] border-dashed border-[3px] object-cover rounded-[10px] flex items-center justify-center"
        >
          <p className="text-[#dbdcdf]">+ Add</p>
        </button>

        {postList &&
          postList.map((post) => (
            <Link
              key={post.postId}
              href={`/partner/mypage/styles/${post.postId}`}
              className="w-full h-[110px] relative"
            >
              <Image
                src={post.imageUrl}
                alt={post.alt}
                fill
                priority
                sizes="(max-width: 100px) 100vw, 100px"
                className="object-cover mr-1 rounded-[10px]"
              />
            </Link>
          ))}
      </div>
    </section>
  )
}
