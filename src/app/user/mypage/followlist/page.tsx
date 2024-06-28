import React from 'react'
import getFollowList from '@/actions/user/UserFollowList'
import FollowedPartnerList from '@/components/pages/user/mypage/FollowedPartnerList'

const FETCH_SIZE = 10

export default async function FollowList() {
  const followedList = await getFollowList(0, FETCH_SIZE, '')
  return (
    <main className="w-full px-5">
      <FollowedPartnerList initData={followedList} fetchNum={FETCH_SIZE} />
    </main>
  )
}
