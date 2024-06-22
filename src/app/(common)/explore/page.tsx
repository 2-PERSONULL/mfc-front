import React from 'react'
import SearchBar from '@/components/layouts/SearchBar'
import ExploreCategory from '@/components/pages/member/explore/ExploreCategory'
import { Style } from '@/types/styleCategoryListType'
import { PartnerPostsByCategoryType } from '@/types/partnerPostsByCategoryType'
import ExplorePosts from '@/components/pages/member/explore/ExplorePosts'
import {
  getPartnerPostsByCategory,
  getStyleList,
} from '@/actions/member/Explore'

export default async function Explore() {
  const styleData: Style = (await getStyleList()) as unknown as Style
  const allPartnerPostsData: PartnerPostsByCategoryType =
    (await getPartnerPostsByCategory(
      0,
      1,
      '',
    )) as unknown as PartnerPostsByCategoryType
  return (
    <main className="w-full px-5">
      <SearchBar />
      <ExploreCategory data={styleData} />
      <ExplorePosts postsData={allPartnerPostsData} />
    </main>
  )
}
