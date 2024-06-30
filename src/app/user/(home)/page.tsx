import React from 'react'
import HomeBanner from '@/components/pages/member/home/HomeBanner'
import HomePartnerPosts from '@/components/pages/member/home/HomePartnerPosts'
import HomeRecommendStyle from '@/components/pages/member/home/HomeRecommendStyle'
import HomeEventSection from '@/components/pages/member/home/HomeEventSection'
import { getUserInfo } from '@/actions/user/UserProfile'
import HomeTipSection from '@/components/pages/member/home/HomeTipSection'
import {
  getPartnerPostBasedOnStyle,
  getPostsFollwedPartners,
} from '@/actions/user/UserHome'
import { getPartnerPostRanking } from '@/actions/member/Ranking'
import getRandomPartnersPosts from '@/actions/user/allRandomPartnerPosts'

export default async function UserHome() {
  const user = await getUserInfo()
  const posts = await getPostsFollwedPartners()
  const popularPartnerPosts = await getPartnerPostRanking()
  const allRandomPartnerPosts = await getRandomPartnersPosts()
  const recommendPosts = await getPartnerPostBasedOnStyle()

  return (
    <main className="relative w-full min-h-dvh mb-[8rem]">
      <HomeBanner />
      <HomePartnerPosts
        posts={
          user !== null && posts !== null ? posts.posts : popularPartnerPosts
        }
        username={user !== null ? user.nickname : null}
      />
      <HomeRecommendStyle
        posts={
          user !== null && recommendPosts !== null
            ? recommendPosts?.posts
            : allRandomPartnerPosts
        }
        username={user !== null ? user.nickname : null}
      />
      <HomeTipSection username={user !== null ? user.nickname : null} />
      <HomeEventSection />
    </main>
  )
}
