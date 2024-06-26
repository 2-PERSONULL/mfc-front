import React from 'react'
// import SearchBar from '@/components/layouts/SearchBar'
import ExploreCategory from '@/components/pages/member/explore/ExploreCategory'
import PostsList from '@/components/pages/member/explore/PostsList'
import {
  getPartnerPostsByCategory,
  getStyleList,
} from '@/actions/member/Explore'

const FETCH_SIZE = 20

export default async function Explore() {
  const styleData = await getStyleList()
  const allPartnerPostsData = await getPartnerPostsByCategory(0, FETCH_SIZE, '')
  return (
    <main className="w-full px-5">
      {/* <SearchBar /> */}
      <ExploreCategory data={styleData} />
      <PostsList initData={allPartnerPostsData} fetchNum={FETCH_SIZE} />
    </main>
  )
}
