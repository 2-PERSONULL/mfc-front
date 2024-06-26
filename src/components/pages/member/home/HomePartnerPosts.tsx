import React from 'react'
import HomePartnerPost from './HomePartnerPost'
import HomeSectionTitle from './HomeSectionTitle'
import { HomePostsType } from '@/types/HomePostsType'

export default function HomePartnerPosts({
  posts,
  username,
}: {
  posts: HomePostsType[]
  username: string
}) {
  return (
    <section className="px-5 w-full min-h-full bg-white">
      <HomeSectionTitle username={username} text="님이 팔로우한 파트너" />
      <section className="grid grid-cols-2 gap-5 overflow-x-scroll pb-10">
        {posts.map((post: HomePostsType) => (
          <HomePartnerPost key={post.postId} content={post} />
        ))}
      </section>
    </section>
  )
}
