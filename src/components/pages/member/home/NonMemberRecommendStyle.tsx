import React from 'react'
import HomeSectionTitle from './HomeSectionTitle'
import RecommendStyleSwiper from './RecommendStyleSwiper'
import { getPartnerProfileBasic } from '@/actions/partner/PartnerProfile'
import { getPartnerPostsDetail } from '@/actions/member/Explore'
import { RandomPartnerPostsType } from '@/types/randomPartnerPostsType'

export default async function NonMemberRecommendStyle({
  posts,
}: {
  posts: RandomPartnerPostsType[]
}) {
  const partnerInfo = await Promise.all(
    posts.map((post) => getPartnerProfileBasic(post.partnerId)),
  )
  const postDetail = await Promise.all(
    posts.map((post) => getPartnerPostsDetail(post.postId)),
  )
  const combinedInfo = partnerInfo.map((info, idx) => ({
    ...info,
    ...(postDetail[idx] as RandomPartnerPostsType),
  }))
  return (
    <section className="relative px-5 w-full h-[500px] ">
      <HomeSectionTitle text="추천 스타일" />
      <RecommendStyleSwiper posts={combinedInfo} />
    </section>
  )
}
