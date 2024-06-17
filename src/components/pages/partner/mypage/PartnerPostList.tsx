'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PartnerPostListType } from '@/types/partnerPostTypes'

export default function PartnerPostList({
  postList,
}: {
  postList: PartnerPostListType[]
}) {
  const router = useRouter()

  return (
    <section className="pt-5 px-4">
      <div className="grid grid-cols-3 gap-2">
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
