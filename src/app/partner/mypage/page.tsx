import React from 'react'

import TitleHeader from '@/components/layouts/TitleHeader'
import HeaderInfo from '@/components/pages/partner/mypage/HeaderInfo'
import PartnerPostList from '@/components/pages/partner/mypage/PartnerPostList'
import BottomNav from '@/components/layouts/BottomNav'
import { getPartnerPost } from '@/actions/partner/PartnerPost'
import { getPartnerProfileBasic } from '@/actions/partner/PartnerProfile'

const NUMBER_OF_FETCH = 20

export default async function PartnerMyPage() {
  const { nickname, profileImage } = await getPartnerProfileBasic()
  const { posts, last } = await getPartnerPost('', 0, NUMBER_OF_FETCH)

  return (
    <div className="h-screen">
      <TitleHeader title="MY PAGE" menu="/partner/mypage/menu" />
      <HeaderInfo
        nickname={nickname}
        profileImage={profileImage}
        postCount={posts.length}
      />
      <PartnerPostList
        initialData={posts}
        isLast={last}
        fetchCount={NUMBER_OF_FETCH}
      />
      <BottomNav />
    </div>
  )
}
