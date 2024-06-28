import React from 'react'
import HomeSectionTitle from './HomeSectionTitle'
import { getPartnerProfileBasic } from '@/actions/partner/PartnerProfile'
import { getPartnerPostsDetail } from '@/actions/member/Explore'
import HomePartnerPost from './HomePartnerPost'
import { HomePostsType } from '@/types/HomePostsType'

export default async function NonMemberPartnerPosts({
  posts,
}: {
  posts: PopularPartnerPostsType[]
}) {
  const partnerInfo = await Promise.all(
    posts.map((post) => getPartnerProfileBasic(post.partnerId)),
  )
  const postDetail = await Promise.all(
    posts.map((post) => getPartnerPostsDetail(post.postId)),
  )
  const combinedInfo = partnerInfo.map((info, idx) => ({
    ...info,
    ...(postDetail[idx] as PopularPartnerPostsType),
  }))
  return (
    <section className="px-5 w-full min-h-full bg-white">
      <HomeSectionTitle text="금주의 인기 파트너" />
      <section className="flex flex-col gap-5 overflow-x-scroll pb-5">
        <div className="flex gap-5 whitespace-nowrap">
          {combinedInfo
            .filter((_, index) => index % 2 === 0)
            .map((info: HomePostsType) => (
              <div
                key={info.postId}
                className="min-w-[200px] shadow-lg rounded-lg"
              >
                <HomePartnerPost content={info} />
              </div>
            ))}
        </div>
        <div className="flex gap-5 whitespace-nowrap">
          {combinedInfo
            .filter((_, index) => index % 2 !== 0)
            .map((info: PopularPartnerPostsType) => (
              <div
                key={info.postId}
                className="min-w-[200px] shadow-lg rounded-lg"
              >
                <HomePartnerPost content={info} />
              </div>
            ))}
        </div>
      </section>
    </section>
  )
}
