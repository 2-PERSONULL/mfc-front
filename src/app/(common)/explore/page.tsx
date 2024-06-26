import React from 'react'
import SearchBar from '@/components/layouts/SearchBar'
import ExploreCategory from '@/components/pages/member/explore/ExploreCategory'
import { Style } from '@/types/styleCategoryListType'
import { PartnerPostsByCategoryType } from '@/types/partnerPostsByCategoryType'
import PostsList from '@/components/pages/member/explore/PostsList'
import {
  getPartnerPostsByCategory,
  getStyleList,
} from '@/actions/member/Explore'

const FETCH_SIZE = 20

export default async function Explore() {
  const styleData: Style = (await getStyleList()) as unknown as Style
  const allPartnerPostsData: PartnerPostsByCategoryType =
    (await getPartnerPostsByCategory(
      0,
      FETCH_SIZE,
      '',
    )) as unknown as PartnerPostsByCategoryType
  return (
    <main className="w-full px-5">
      <SearchBar />
      <ExploreCategory data={styleData} />
      <PostsList initData={allPartnerPostsData} fetchNum={FETCH_SIZE} />
    </main>
  )
}
