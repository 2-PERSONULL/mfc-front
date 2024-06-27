import React from 'react'
import {
  getPartnerPostsByCategory,
  getStyleList,
} from '@/actions/member/Explore'
import ExploreCategory from '@/components/pages/member/explore/ExploreCategory'
import PostsList from '@/components/pages/member/explore/PostsList'

export default async function Explore({
  searchParams,
}: {
  searchParams?: {
    category: number
    sort: string
  }
}) {
  const styleId = searchParams?.category ?? 0
  const sort = searchParams?.sort ?? ''
  const styleData = await getStyleList()
  const postsData = await getPartnerPostsByCategory(styleId, 20, sort)
  console.log(postsData)
  return (
    <main className="w-full px-5">
      <ExploreCategory data={styleData} />
      <PostsList initData={postsData} fetchNum={20} styleId={styleId} />
    </main>
  )
}
