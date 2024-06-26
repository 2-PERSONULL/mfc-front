import React from 'react'
import HomeSectionTitle from './HomeSectionTitle'
import { PartnerPostListType } from '@/types/partnerPostTypes'
import { getPartnerProfileBasic } from '@/actions/partner/PartnerProfile'
import { getPartnerPostsDetail } from '@/actions/member/Explore'
import HomePartnerPost from './HomePartnerPost'
import { HomePostsType } from '@/types/HomePostsType'

export default async function NonMemberPartnerPosts({
  posts,
}: {
  posts: PartnerPostListType[]
}) {
  const partnerInfo = await Promise.all(
    posts.map((post) => getPartnerProfileBasic(post.partnerId)),
  )
  const postDetail = await Promise.all(
    posts.map((post) => getPartnerPostsDetail(post.postId)),
  )
  const combinedInfo = partnerInfo.map((info, idx) => ({
    ...info,
    ...(postDetail[idx] as HomePostsType),
  }))
  return (
    <section className="px-5 w-full min-h-full bg-white">
      <HomeSectionTitle text="금주의 인기 파트너" />
      <section className="grid grid-cols-2 gap-5 overflow-x-scroll pb-10">
        {combinedInfo.map((info: HomePostsType, idx) => (
          <HomePartnerPost key={idx} content={info} />
        ))}
      </section>
    </section>
  )
}
