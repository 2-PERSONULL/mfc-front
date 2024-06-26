import React from 'react'
// import { getSession } from 'next-auth/react'
import HomeBanner from '@/components/pages/member/home/HomeBanner'
import HomePartnerPosts from '@/components/pages/member/home/HomePartnerPosts'
import HomeRecommandStyle from '@/components/pages/member/home/HomeRecommandStyle'
import HomeEventSection from '@/components/pages/member/home/HomeEventSection'
import { getUserInfo } from '@/actions/user/UserProfile'
import HomeTipSection from '@/components/pages/member/home/HomeTipSection'
import {
  getPartnerPostBasedOnStyle,
  getPostsFollwedPartners,
} from '@/actions/user/UserHome'

export default async function UserHome() {
  // const session = await getSession()

  const { nickname } = await getUserInfo()
  // const userInfo = await getFetchHeader()
  const { posts } = await getPostsFollwedPartners()
  const recommendPosts = await getPartnerPostBasedOnStyle()
  // console.log(recommendPosts)

  return (
    <main className="w-full min-h-dvh mb-[8rem]">
      <HomeBanner />
      <HomePartnerPosts posts={posts} username={nickname} />
      <HomeRecommandStyle posts={recommendPosts.posts} username={nickname} />
      <HomeTipSection username={nickname} />
      <HomeEventSection />
    </main>
  )
}
