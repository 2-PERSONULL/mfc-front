'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { HomePostsType } from '@/types/HomePostsType'

export default function RecommendStyleSwiper({
  posts,
}: {
  posts: HomePostsType[]
}) {
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
          className="swiper-slide relative min-h-[400px] rounded-lg"
        >
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
                src={post.profileImage}
                alt={post.profileAlt}
                width={30}
                height={30}
                className="rounded-full"
              />
              <p className="text-white text-sm font-bold">{post.nickname}</p>
            </div>
            <ul className="absolute z-[2] bottom-8 left-6 flex flex-row">
              {post.tags.map((tag) => (
                <li key={tag.tagId}>
                  <span className="text-xs text-white bg-zinc-700 rounded-full  mr-[5px] px-2 py-1">
                    {tag.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
