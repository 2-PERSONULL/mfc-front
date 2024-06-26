'use client'

import React from 'react'
import HomeSectionTitle from './HomeSectionTitle'
import { HomePostsType } from '@/types/HomePostsType'
import RecommendStyleSwiper from './RecommendStyleSwiper'

export default function HomeRecommendStyle({
  posts,
  username,
}: {
  posts: HomePostsType[]
  username: string
}) {
  return (
    <section className="relative px-5 w-full h-[500px] ">
      <HomeSectionTitle username={username} text="님에게 추천하는 스타일" />
      <RecommendStyleSwiper posts={posts} />
    </section>
  )
}
