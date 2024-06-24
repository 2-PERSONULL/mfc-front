import React from 'react'
import HomeBanner from '@/components/pages/member/home/HomeBanner'
import HomePartnerPosts from '@/components/pages/member/home/HomePartnerPosts'
import HomeRecommandStyle from '@/components/pages/member/home/HomeRecommandStyle'
import HomeEventSection from '@/components/pages/member/home/HomeEventSection'

export default async function UserHome() {
  return (
    <main className="w-full min-h-full">
      <HomeBanner />
      <HomePartnerPosts />
      <HomeRecommandStyle />
      <HomeEventSection />
    </main>
  )
}
