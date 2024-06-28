import React from 'react'
import getLikeList from '@/actions/user/UserLikeList'
import LikedPostsList from '@/components/pages/user/mypage/LikedPostsList'

const FETCH_SIZE = 20

export default async function LikeList() {
  const likeList = await getLikeList(0, FETCH_SIZE, '')
  return (
    <main className="w-full px-5">
      {/* 탐색 페이지의 컴포넌트와 동일 하나의 컴포넌트로 수정 가능할 듯 */}
      <LikedPostsList initData={likeList} fetchNum={FETCH_SIZE} />
    </main>
  )
}
