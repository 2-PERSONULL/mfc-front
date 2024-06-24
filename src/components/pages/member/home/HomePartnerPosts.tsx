import React from 'react'
import HomePartnerPost from './HomePartnerPost'

export default function HomePartnerPosts() {
  return (
    <section className="px-5 w-full h-full pb-5 bg-white">
      <p className="text-2xl text-start font-semibold pt-8 pb-2">
        (유저명)님이 팔로우한 파트너
      </p>
      <section className="grid grid-cols-2 gap-5">
        <HomePartnerPost />
        <HomePartnerPost />
        <HomePartnerPost />
        <HomePartnerPost />
      </section>
    </section>
  )
}
