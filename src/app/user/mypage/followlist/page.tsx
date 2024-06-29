import React from 'react'
import getFollowList from '@/actions/user/UserFollowList'
import FollowedPartnerList from '@/components/pages/user/mypage/FollowedPartnerList'

const FETCH_SIZE = 10

export default async function FollowList() {
  const followedList = await getFollowList(0, FETCH_SIZE, '')
  console.log(followedList)
  return (
    <main className="w-full px-5">
      {followedList.partners.length === 0 ? (
        <p className="text-center mt-10 text-gray-500">
          조회된 데이터가 없습니다.
        </p>
      ) : (
        <FollowedPartnerList initData={followedList} fetchNum={FETCH_SIZE} />
      )}
    </main>
  )
}
