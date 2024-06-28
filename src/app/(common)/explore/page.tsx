import React from 'react'
import {
  getPartnerPostsByCategory,
  getStyleList,
} from '@/actions/member/Explore'
import ExploreCategory from '@/components/pages/member/explore/ExploreCategory'
import PostsList from '@/components/pages/member/explore/PostsList'
import FloatingButton from '@/components/common/FloatingButton'
import BottomNav from '@/components/layouts/BottomNav'
import SearchHeader from '@/components/layouts/SearchHeader'
import CommonHeader from '@/components/layouts/CommonHeader'

const FECTH_NUM = 20

export default async function Explore({
  searchParams,
}: {
  searchParams?: {
    category: number | undefined
    sort: string
    search: string
  }
}) {
  const styleId = searchParams?.category || undefined
  const sort = searchParams?.sort || ''
  const search = searchParams?.search || ''
  const styleData = await getStyleList()
  const postsData = await getPartnerPostsByCategory(
    0,
    FECTH_NUM,
    sort,
    styleId,
    search,
  )

  console.log(postsData)

  return (
    <>
      {searchParams?.search ? (
        <SearchHeader searchValue={search} />
      ) : (
        <CommonHeader />
      )}
      <main className="w-full px-5">
        <ExploreCategory data={styleData} />
        <PostsList
          initData={postsData}
          fetchNum={FECTH_NUM}
          styleId={styleId}
          sort={sort}
          search={search}
        />
      </main>
      <FloatingButton />
      <BottomNav />
    </>
  )
}
