import React from 'react'
import {
  getPartnerPostsByCategory,
  getStyleList,
} from '@/actions/member/Explore'
import ExploreCategory from '@/components/pages/member/explore/ExploreCategory'
import PostsList from '@/components/pages/member/explore/PostsList'

const FECTH_NUM = 20

export default async function Explore({
  searchParams,
}: {
  searchParams?: {
    category: number | undefined
    sort: string
  }
}) {
  const styleId = searchParams?.category || undefined
  const sort = searchParams?.sort ?? ''
  const styleData = await getStyleList()
  const postsData = await getPartnerPostsByCategory(0, FECTH_NUM, sort, styleId)
  console.log(postsData)
  return (
    <main className="w-full px-5">
      <ExploreCategory data={styleData} />
      <PostsList
        initData={postsData}
        fetchNum={FECTH_NUM}
        styleId={styleId}
        sort={sort}
      />
    </main>
  )
}
