'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards, Pagination } from 'swiper/modules'
import { HomePostsType } from '@/types/HomePostsType'

export default function RecommendStyleSwiper({
  posts,
}: {
  posts: HomePostsType[]
}) {
  const defaultImage =
    'https://personull-bucket.s3.ap-northeast-2.amazonaws.com/profile/default-profile.svg'
  return (
    <Swiper
      effect="cards"
      grabCursor
      modules={[EffectCards, Pagination]}
      pagination
      className="recommend-style absolute w-full rounded-lg"
      style={{ overflow: 'hidden' }}
    >
      {posts.map((post, idx) => (
        <SwiperSlide
          key={idx}
          className="swiper-slide relative min-h-[75dvh] rounded-lg"
        >
          <Link href={`/user/coordinator/${post.partnerId}/profile`}>
            <div className="absolute bg-black top-0 right-0 bottom-0 left-0 z-[1] opacity-20" />
            <Image
              src={post.imageUrl}
              alt={post.imageAlt}
              fill
              style={{ objectFit: 'cover' }}
              className="relative"
            />
            <div>
              <div className="absolute bottom-16 left-5 z-[2] flex items-center gap-2">
                <Image
                  src={
                    post.profileImage !== null
                      ? post.profileImage
                      : defaultImage
                  }
                  alt={post.profileAlt !== null ? post.profileAlt : 'profile'}
                  width={0}
                  height={0}
                  style={{ width: '30px', height: '30px' }}
                  className="rounded-full"
                />
                <p className="text-white text-sm font-bold">{post.nickname}</p>
              </div>
              <ul className="absolute z-[2] bottom-8 left-6 flex flex-row">
                {post.tags.slice(0, 3).map((tag) => (
                  <li key={tag.tagId}>
                    <span className="text-xs text-white bg-zinc-700 rounded-full  mr-[5px] px-2 py-1">
                      {tag.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
