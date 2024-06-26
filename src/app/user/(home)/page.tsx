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
import { getPartnerPostsByCategory } from '@/actions/member/Explore'
import NonMemberPartnerPosts from '@/components/pages/member/home/NonMemberPartnerPosts'
import NonMemberRecommendStyle from '@/components/pages/member/home/NonMemberRecommendStyle'

export default async function UserHome() {
  const user = await getUserInfo()
  const posts = await getPostsFollwedPartners()
  const nonMemberPartnerPost = await getPartnerPostsByCategory(0, 12, 'LATEST')
  const recommendPosts = await getPartnerPostBasedOnStyle()

  return (
    <main className="relative w-full min-h-dvh mb-[8rem]">
      <HomeBanner />
      {user && posts ? (
        <HomePartnerPosts posts={posts.posts} username={user.nickname} />
      ) : (
        <NonMemberPartnerPosts posts={nonMemberPartnerPost.posts} />
      )}
      {recommendPosts ? (
        <HomeRecommendStyle
          posts={recommendPosts?.posts}
          username={user.nickname}
        />
      ) : (
        // 데이터 추가 후 로직 수정할 예정
        <NonMemberRecommendStyle posts={nonMemberPartnerPost.posts} />
      )}
      <HomeTipSection username={user ? user.nickname : '당신만'} />
      <HomeEventSection />
    </main>
  )
}
