'use client'

import React from 'react'
import HomeSectionTitle from './HomeSectionTitle'
import { HomePostsType } from '@/types/HomePostsType'
import RecommendStyleSwiper from './RecommendStyleSwiper'
import { RandomPartnerPostsType } from '@/types/randomPartnerPostsType'

export default function HomeRecommendStyle({
  posts,
  username,
}: {
  posts: HomePostsType[] | RandomPartnerPostsType[]
  username: string | null
}) {
  console.log(username)
  return (
    <section className="relative px-5 w-full h-[500px] ">
      <HomeSectionTitle
        username={username || null}
        text={username !== null ? '님에게 추천하는 스타일' : '추천 스타일'}
      />
      <RecommendStyleSwiper posts={posts} />
    </section>
  )
}
