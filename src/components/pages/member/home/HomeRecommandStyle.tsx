'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import LikeButton from '@/components/ui/button/LikeButton'

import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards, Pagination } from 'swiper/modules'
import Image from 'next/image'
import HomeSectionTitle from './HomeSectionTitle'

export interface RecommendPostType {
  postId: number
  partnerId: string
  profileImage: string
  profileAlt: string
  nickname: string
  imageUrl: string
  imageAlt: string
  tags: Array<{
    tagId: number
    value: string
  }>
}

export default function HomeRecommandStyle({
  posts,
  username,
}: {
  posts: RecommendPostType[]
  username: string
}) {
  return (
    <section className="relative px-5 w-full h-[500px] ">
      <HomeSectionTitle username={username} text="님을 위한 추천 스타일" />
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
              objectFit="cover"
              fill
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
                {post.tags.map((tag, tagIdx) => (
                  <li key={tagIdx}>
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
    </section>
  )
}
