import React from 'react'
import SearchBar from '@/components/layouts/SearchBar'
import getStyleList from '@/actions/member/Explore'
import ExploreCategory from '@/components/pages/member/explore/ExploreCategory'
import { Style } from '@/types/styleCategoryListType'

export default async function Explore() {
  const styleData: Style = (await getStyleList()) as unknown as Style
  return (
    <main>
      <SearchBar />
      <ExploreCategory data={styleData} />
      <section className="w-full min-h-screen bg-blue-300">
        <p>content section</p>
      </section>
    </main>
  )
}
