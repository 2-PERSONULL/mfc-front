'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PartnerPostListType } from '@/types/partnerPostTypes'

export default function PartnerLookbookList({
  postList,
}: {
  postList: PartnerPostListType[]
}) {
  const pathName = usePathname()

  const getPathName = () => {
    if (pathName.startsWith('/user')) {
      return `${pathName.replace('/profile', '/posts')}`
    }
    return `/partner/mypage/styles`
  }

  return (
    <ul className="grid grid-cols-2 gap-2">
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
    </ul>
  )
}
