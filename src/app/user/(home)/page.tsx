import React from 'react'
import HomeBanner from '@/components/pages/member/home/HomeBanner'
import HomePartnerPosts from '@/components/pages/member/home/HomePartnerPosts'
import HomeRecommandStyle from '@/components/pages/member/home/HomeRecommandStyle'
import HomeTipSection from '@/components/pages/member/home/HomeTipSection'
import HomeEventSection from '@/components/pages/member/home/HomeEventSection'

export default async function UserHome() {
  return (
    <main className="w-full min-h-dvh mb-[8rem]">
      <HomeBanner />
      <HomePartnerPosts />
      <HomeRecommandStyle />
      <HomeTipSection
        title="(유저 명)님을 위한 꿀팁"
        imageUrl="https://personull-bucket.s3.ap-northeast-2.amazonaws.com/event-image/event-image-01.svg"
        text={'신발, \n 어떻게 \n 관리해?'}
      />
      <HomeEventSection />
    </main>
  )
}
